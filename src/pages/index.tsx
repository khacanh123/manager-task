import Head from "next/head";
import { useEffect, useState } from "react";
import { Input, LoadingOverlay } from "@mantine/core";
import axios from "axios";
import * as XLSX from 'xlsx';
import App from "@/components/Calender";
export default function Home() {
  const [token, setToken] = useState('');
  const [searchText, setSearchText] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
    totalPage: 0
  })
  const [isSearch, setIsSearch] = useState(false);
  const [listMenber, setListMember] = useState([]);
  const [visible, setVisible] = useState(false);
  const handleSearch = () => {
    //https://apiv2.vieclam24h.vn/seeker/fe/search/resume?per_page=10&province_ids[0]=73&q=nh%C3%A2n%20vi%C3%AAn%20kinh%20doanh&updated_at=7&action=search&includes=is_seen

    axios.get('/api/reseach', {
      params: {
        per_page:10,
        q: encodeURIComponent(searchText),
        'province_ids[0]': 73,
        token: token,
        updated_at: 7,
        action: 'search',
        includes: 'is_seen'
      },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      const data = res.data.data;
      setPagination({
        page: 1,
        total: data.total_items,
        totalPage: data.total_pages
      })
      axios.get('/api/reseach', {
        params: {
          per_page: data.total_items+10,
          q: encodeURIComponent(searchText),
          'province_ids[0]': 73,
          token: token,
          updated_at: 7,
          action: 'search',
          includes: 'is_seen'
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
      setListMember(res.data.data.items)
      })
      setIsSearch(true);
      
    })
  }
  const exportToExcel = (data: any, filename: string, data2: any) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const ws2 = XLSX.utils.json_to_sheet(data2);
  
    // Xử lý các liên kết
    data.forEach((row: any, rowIndex: any) => {
      const cellRef = XLSX.utils.encode_cell({ r: rowIndex + 1, c: 6 }); // Cột thứ 4 (Link CV)
      if (row['Link CV']) {
        ws[cellRef].l = { Target: row['Link CV'], Tooltip: 'Tại đây' };
      }
    });
    data2.forEach((row: any, rowIndex: any) => {
      const cellRef = XLSX.utils.encode_cell({ r: rowIndex + 1, c: 6 }); // Cột thứ 4 (Link CV)
      if (row['Link CV']) {
        ws2[cellRef].l = { Target: row['Link CV'], Tooltip: 'Tại đây' };
      }
    });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws2, 'Tất cả ứng viên');
    XLSX.utils.book_append_sheet(wb, ws, 'Ứng viên có CV');
    XLSX.writeFile(wb, `${filename}.xlsx`);
  };
  function convertDate(dateString: any) {
    // Tách chuỗi thành các phần tử: [1997, 07, 20]
    const parts = dateString.split('-');
    
    // Đảo ngược thứ tự và ghép lại bằng dấu '/'
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    
    return formattedDate;
}
function processUrl(url: string) {
  // Thay thế pdf_hidden bằng default
  let modifiedUrl = url.replace('pdf_hidden', 'default');
  
  // Tìm và loại bỏ chuỗi có định dạng số và dấu gạch dưới
  const removePattern = /\d+_/;
  modifiedUrl = modifiedUrl.replace(removePattern, '');

  // Tìm và giữ lại phần chuỗi có định dạng _số
  const keepPattern = /_\d+/;
  const match = modifiedUrl.match(keepPattern);
  if (match) {
      const keepPart = match[0];
      // Loại bỏ tất cả các chuỗi _số khác, chỉ giữ lại phần đầu tiên
      modifiedUrl = modifiedUrl.replace(/(_\d+)+/, keepPart);
  }

  // Kiểm tra URL mới có truy cập được không
  return modifiedUrl;
}

  const fetchData =() => {
    // console.log('tesst');
    
   // Tạo một mảng promises để lưu trữ các promise của các request API
const promises = listMenber.map((member: any, index:number) => {
  return axios.get('/api/detail', {
    params: {
      id: member.id,
      token: token,
    },
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    // Trả về dữ liệu từ response để có thể sử dụng sau này
    return {...res.data.data, name: member.seeker_info.name, birthday: member.seeker_info.birthday != null ? convertDate(member.seeker_info.birthday): '', id: member.id, experience: member.experience};
  });
});

// Sử dụng Promise.all để chờ tất cả các promise hoàn thành
setVisible(true)
Promise.all(promises)
  .then((results) => {
    const data = results.filter((value: any) => value.cv_file_url != null).map(async(item: any) => {
      try {
        const response = await fetch(processUrl(item.cv_file_url), { method: 'HEAD' });
        if (response.ok) {
            return {
              'ID ứng viên': item.id,
              'Tên ứng viên': item.name,
              'Ngày sinh': item.birthday,
              'Kinh nghiệm': item.experience + ' năm',
              'Vị trí': item.title,
              'Lương': item.min_expected_salary,
              'Link CV': processUrl(item.cv_file_url),
              'is_public': true
            }
        } else {
            return {
              'ID ứng viên': item.id,
              'Tên ứng viên': item.name,
              'Ngày sinh': item.birthday,
              'Kinh nghiệm': item.experience + ' năm',
              'Vị trí': item.title,
              'Lương': item.min_expected_salary,
              'Link CV': item.cv_file_url,
              is_public: false
            };
        }
    } catch (error) {
        // Nếu có lỗi khi truy cập URL mới, trả về URL ban đầu
        return {
          'ID ứng viên': item.id,
          'Tên ứng viên': item.name,
          'Ngày sinh': item.birthday,
          'Kinh nghiệm': item.experience + ' năm',
          'Vị trí': item.title,
          'Lương': item.min_expected_salary,
          'Link CV': item.cv_file_url,
          is_public: false
        };
    }
      // return {
      //   'ID ứng viên': item.id,
      //   'Tên ứng viên': item.name,
      //   'Ngày sinh': item.birthday,
      //   'Kinh nghiệm': item.experience + ' năm',
      //   'Vị trí': item.title,
      //   'Lương': item.min_expected_salary,
      //   'Link CV': modifiedUrl
      // }
    })
    Promise.all(data).then((list) => {

      // console.log(list);
      
    exportToExcel(list.sort((a:any, b:any) => b.is_public - a.is_public), 'exported_CV', results.map((item:any) => {
      return {
        'ID ứng viên': item.id,
          'Tên ứng viên': item.name,
          'Ngày sinh': item.birthday,
          'Kinh nghiệm': item.experience + ' năm',
          'Vị trí': item.title,
          'Lương': item.min_expected_salary,
          'Link CV': item.cv_file_url,
      }
    }));
    // console.log(data);
    
    setVisible(false)
    })
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    // Xử lý lỗi nếu có
  });

  }
  return (
    <>
      {/* <div className="card">
  <div className="card-body">
    <div className="d-flex col-xl-9 col-lg-12">
      <div>
        <h4 className="card-title">
          <span className="lstick" />
          All Users
        </h4>
        <h6 className="card-subtitle">
          Use this page to search for or add users.
        </h6>
      </div>
      <div className="ml-auto">
        <a
          className="btn btn-info m-t-20"
          href="/app/SystemUsers/AddUsers/173dac8d-2c4a-11ef-8ee7-002248475315"
        >
          <i className="fa fa-plus" />
          &nbsp;&nbsp;Add Users
        </a>
      </div>
    </div>
    <div className="form-group row m-t-10 m-l-20">
      <div
        className="autoComplete_wrapper"
        role="combobox"
        aria-owns="autoComplete_list_1"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <input
          className="searchInput form-control m-l-5"
          id="SystemUsersModel_SearchCriteria"
          name="SystemUsersModel.SearchCriteria"
          placeholder="Search users..."
          style={{ width: 250 }}
          type="text"
          defaultValue=""
          aria-controls="autoComplete_list_1"
          aria-autocomplete="both"
        />
        <ul id="autoComplete_list_1" role="listbox"/>
      </div>
      <div id="clearSearch" className="hide m-l-5">
        <i
          className="fa fa-close text-muted"
          style={{ fontSize: 20, cursor: "pointer", marginTop: 8 }}
        />
      </div>
      <button
        type="submit"
        id="btn_search"
        className="btn btn-info m-l-5 m-r-10"
        style={{ width: 120 }}
      >
        <i className="fa fa-search" />
        &nbsp;&nbsp;Search
      </button>
      <div className="m-l-10">
        <button
          type="submit"
          id="btn_prev"
          className="btn btn-primary hide"
          style={{ width: 120, display: "none" }}
        >
          <i className="fa fa-chevron-left" />
          &nbsp;&nbsp;Prev
        </button>
        <button
          type="submit"
          id="btn_next"
          className="btn btn-primary hide"
          style={{ width: 120, display: "none" }}
        >
          Next&nbsp;&nbsp;
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
    <div id="div_SystemUsersModel">
      <div className="table-responsive table-hover no-wrap m-t-5 col-xl-9 col-lg-12">
        <table className="table vm no-th-brd">
          <thead>
            <tr>
              <th colSpan={3}>
                Name
                <i className="ascending fa fa-sort-down m-l-10 align-top" />
              </th>
              <th>
                Added
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                Access Level
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                Logged In
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableRow" id="552978c2-2c4c-11ef-8ee8-6045bd2d959e">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="anh nguyen"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/552978c2-2c4c-11ef-8ee8-6045bd2d959e'"
                  >
                    <span
                      className="userInitialsCircle round round-danger"
                      // width={50}
                    >
                      AN
                    </span>
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white", display: "none" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=552978c2-2c4c-11ef-8ee8-6045bd2d959e&v=3202045587"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span data-toggle="tooltip" data-original-title="anh nguyen">
                    anh nguyen
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="anhnguyen123@gmail.com"
                >
                  <small className="text-muted">anhnguyen123@gmail.com</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="aaaa">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    aaaa
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-17T08:53:09"
                  >
                    <text>7 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user has full administrative access over this management workspace. This user has unlimited permissions."
                  >
                    <span
                      className="label label-rounded"
                      style={{ backgroundColor: "red" }}
                    >
                      <i
                        className="fa fa-unlock m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Full Admin
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="This user hasn't logged in yet."
                    >
                      <text>Not yet</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="ab7ad9f0-6ca1-6c20-30d2-72816826ebd9">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="Daniel Martinez"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/ab7ad9f0-6ca1-6c20-30d2-72816826ebd9'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=ab7ad9f0-6ca1-6c20-30d2-72816826ebd9&v=1181781889"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Daniel Martinez"
                  >
                    Daniel Martinez
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="DanielMartinez@example.com"
                >
                  <small className="text-muted">DanielMartinez@example.…</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="Sales Mgr">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    Sales Mgr
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-07T19:54:02"
                  >
                    <text>16 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user has full administrative access over this management workspace. This user has unlimited permissions."
                  >
                    <span
                      className="label label-rounded"
                      style={{ backgroundColor: "red" }}
                    >
                      <i
                        className="fa fa-unlock m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Full Admin
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="2024-06-17T07:37:02"
                    >
                      <text>7 days ago</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="9443bef0-cfca-a77b-7ae8-f34d6b594d56">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="Eric Smith"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/9443bef0-cfca-a77b-7ae8-f34d6b594d56'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=9443bef0-cfca-a77b-7ae8-f34d6b594d56&v=3512218789"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span data-toggle="tooltip" data-original-title="Eric Smith">
                    Eric Smith
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="EricSmith@example.com"
                >
                  <small className="text-muted">EricSmith@example.com</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="Sales Rep">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    Sales Rep
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-09T13:34:02"
                  >
                    <text>14 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user has read-only access to this management workspace. This user can view all public plans, but not hidden plans."
                  >
                    <span
                      className="label label-rounded"
                      style={{
                        backgroundColor: "orange",
                        paddingTop: 3,
                        paddingBottom: 3
                      }}
                    >
                      <i
                        className="fa fa-lock m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Limited Admin
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="This user hasn't logged in yet."
                    >
                      <text>Not yet</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="5e5ca6a2-2586-ff15-4e7c-9760da62f9c3">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="James Cookie"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/5e5ca6a2-2586-ff15-4e7c-9760da62f9c3'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=5e5ca6a2-2586-ff15-4e7c-9760da62f9c3&v=3915754939"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="James Cookie"
                  >
                    James Cookie
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="JamesCookie@example.com"
                >
                  <small className="text-muted">JamesCookie@example.com</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="Sales Mgr">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    Sales Mgr
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-07T11:19:02"
                  >
                    <text>16 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user has full administrative access over this management workspace. This user has unlimited permissions."
                  >
                    <span
                      className="label label-rounded"
                      style={{ backgroundColor: "red" }}
                    >
                      <i
                        className="fa fa-unlock m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Full Admin
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="2024-06-17T07:37:02"
                    >
                      <text>7 days ago</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="38952944-eff6-574e-83aa-a0c36e48bbb6">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="John Bartlett"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/38952944-eff6-574e-83aa-a0c36e48bbb6'"
                  >
                    <span
                      className="userInitialsCircle round round-danger"
                      // width={50}
                    >
                      JB
                    </span>
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white", display: "none" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=38952944-eff6-574e-83aa-a0c36e48bbb6&v=1734499451"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="John Bartlett"
                  >
                    John Bartlett
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="JohnBartlett@example.com"
                >
                  <small className="text-muted">JohnBartlett@example.com</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="Sales Rep">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    Sales Rep
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-09T13:39:02"
                  >
                    <text>14 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user has read-only access to this management workspace. This user can view all public plans, but not hidden plans."
                  >
                    <span
                      className="label label-rounded"
                      style={{
                        backgroundColor: "orange",
                        paddingTop: 3,
                        paddingBottom: 3
                      }}
                    >
                      <i
                        className="fa fa-lock m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Limited Admin
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="2024-06-17T07:37:02"
                    >
                      <text>7 days ago</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="750fdcb2-7411-f0e5-8162-c0d0ab646bae">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="Kate OConnor"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/750fdcb2-7411-f0e5-8162-c0d0ab646bae'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=750fdcb2-7411-f0e5-8162-c0d0ab646bae&v=3820471869"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Kate OConnor"
                  >
                    Kate OConnor
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="KateOConnor@example.com"
                >
                  <small className="text-muted">KateOConnor@example.com</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="Territory Mgr">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    Territory Mgr
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-08T12:28:02"
                  >
                    <text>15 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user has read-only access to this management workspace. This user was also granted permission to manage specific plans."
                  >
                    <span
                      className="label label-rounded"
                      style={{ backgroundColor: "darkorange" }}
                    >
                      <i
                        className="fa fa-unlock-alt m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Plan Admin
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="2024-06-17T07:37:02"
                    >
                      <text>7 days ago</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="52a398c6-95f9-4fc7-bbc6-bee09a16cc23">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="Nguyễn Khắc Anh"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/52a398c6-95f9-4fc7-bbc6-bee09a16cc23'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=52a398c6-95f9-4fc7-bbc6-bee09a16cc23&v=3980383293"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Nguyễn Khắc Anh"
                  >
                    Nguyễn Khắc Anh
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="anhhuha4@gmail.com"
                >
                  <small className="text-muted">anhhuha4@gmail.com</small>
                </span>
                <br />
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-04-10T06:14:01"
                  >
                    <text>2 months ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user has full administrative access over this management workspace. This user has unlimited permissions."
                  >
                    <span
                      className="label label-rounded"
                      style={{ backgroundColor: "red" }}
                    >
                      <i
                        className="fa fa-unlock m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Full Admin
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="2024-06-24T09:14:25"
                    >
                      <text>now</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="2f3e8ffd-4a91-03c7-ed04-7c8b12d477f9">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="Sam Norton"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/2f3e8ffd-4a91-03c7-ed04-7c8b12d477f9'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=2f3e8ffd-4a91-03c7-ed04-7c8b12d477f9&v=3367300585"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span data-toggle="tooltip" data-original-title="Sam Norton">
                    Sam Norton
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="SamNorton@example.com"
                >
                  <small className="text-muted">SamNorton@example.com</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="Sales Rep">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    Sales Rep
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-10T03:34:02"
                  >
                    <text>14 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user cannot access this workspace's management capabilities. This user can only access his/her personal incentive dashboard."
                  >
                    <span
                      className="label label-rounded"
                      style={{ backgroundColor: "black" }}
                    >
                      <i
                        className="fa fa-eye-slash m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Participant
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="2024-06-17T07:37:02"
                    >
                      <text>7 days ago</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="f0cb2a3a-f926-1a46-4347-89fb5921d0f1">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="Terry Nash"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/f0cb2a3a-f926-1a46-4347-89fb5921d0f1'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=f0cb2a3a-f926-1a46-4347-89fb5921d0f1&v=795452910"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span data-toggle="tooltip" data-original-title="Terry Nash">
                    Terry Nash
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="TerryNash@example.com"
                >
                  <small className="text-muted">TerryNash@example.com</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="Sales Rep">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    Sales Rep
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-11T07:54:02"
                  >
                    <text>13 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user cannot access this workspace's management capabilities. This user can only access his/her personal incentive dashboard."
                  >
                    <span
                      className="label label-rounded"
                      style={{ backgroundColor: "black" }}
                    >
                      <i
                        className="fa fa-eye-slash m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Participant
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="2024-06-17T07:37:02"
                    >
                      <text>7 days ago</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
            <tr className="tableRow" id="e80bd310-ec34-6501-5563-4b95b6eadeb6">
              <td>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="Veronica Haley"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/e80bd310-ec34-6501-5563-4b95b6eadeb6'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=e80bd310-ec34-6501-5563-4b95b6eadeb6&v=632545722"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
              </td>
              <td width={1}>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Veronica Haley"
                  >
                    Veronica Haley
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="VeronicaHaley@example.com"
                >
                  <small className="text-muted">VeronicaHaley@example.c…</small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="Sales Mgr">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    Sales Mgr
                  </button>
                </span>
              </td>
              <td className="nohighlight" width={1}>
                <div className="kebab edit-delete invisible">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-secondary kebab-menu"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item edit">
                        <i className="fa fa-edit" />
                        &nbsp;&nbsp;&nbsp;Edit
                      </a>
                      <a className="dropdown-item delete">
                        <i className="fa fa-close text-danger" />
                        &nbsp;&nbsp;&nbsp;Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="nohighlight">
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-08T06:33:02"
                  >
                    <text>16 days ago</text>
                  </span>
                </h6>
              </td>
              <td>
                <div style={{ marginBottom: 6 }}>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="This user has full administrative access over this management workspace. This user has unlimited permissions."
                  >
                    <span
                      className="label label-rounded"
                      style={{ backgroundColor: "red" }}
                    >
                      <i
                        className="fa fa-unlock m-r-5"
                        style={{ marginTop: 2, marginBottom: 2 }}
                      />
                      Full Admin
                    </span>
                  </span>
                </div>
              </td>
              <td className="nohighlight">
                <div style={{ marginBottom: 8 }}>
                  <h6>
                    <span
                      data-toggle="tooltip"
                      data-original-title="2024-06-17T07:37:02"
                    >
                      <text>7 days ago</text>
                    </span>
                  </h6>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div> */}
<App/>
 
    </>
  );
}
