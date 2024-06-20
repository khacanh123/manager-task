import Head from "next/head";
import { useEffect, useState } from "react";
import { Input, LoadingOverlay } from "@mantine/core";
import axios from "axios";
import * as XLSX from 'xlsx';
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
          per_page: data.total_items,
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
  const exportToExcel = (data: any, filename: string) => {
    const ws = XLSX.utils.json_to_sheet(data);
  
    // Xử lý các liên kết
    data.forEach((row: any, rowIndex: any) => {
      const cellRef = XLSX.utils.encode_cell({ r: rowIndex + 1, c: 6 }); // Cột thứ 4 (Link CV)
      if (row['Link CV']) {
        ws[cellRef].l = { Target: row['Link CV'], Tooltip: 'Tại đây' };
      }
    });
  
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
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
      
    exportToExcel(list.sort((a:any, b:any) => b.is_public - a.is_public), 'exported_CV');
    // console.log(data);
    
    setVisible(false)
    })
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    // Xử lý lỗi nếu có
  });

  }
  useEffect(() => {
    axios.post('/api/login', {
      email: "hr@optisix.com",
      password: "s6RRHf&SKSc&mo$z"
    }).then((res) => {
      setToken(res.data.data.token_auth);
    });
  },[]);
  return (
    <>
      <Head>
        <title>Tool lấy danh sách ứng viên</title>
        <meta name="description" content="Anhnk resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className="w-[60%] mx-auto px-3 py-4">

     <LoadingOverlay visible={visible} zIndex={1000} />
      <h3 className="text-lg font-bold mb-3">Lấy danh sách ứng viên</h3>
        <Input className="w-full" placeholder="Vị trí tuyển dụng" onChange={(e) => setSearchText(e.target.value)}/>

        <button className='my-2 rounded-md py-3 px-4 text-white' style={{background: 'rgb(82 29 160)'}} onClick={() => {
          if(searchText.trim().length == 0) return {}
          else handleSearch()
        }}>Tìm kiếm ứng viên</button>
        {
          isSearch && (
            <div>
              <h2 className="text-xl font-bold">Kết quả tìm thấy: <span className="text-[red]">{pagination.total} hồ sơ ứng viên</span> </h2>
              <button className='my-2 rounded-md py-3 px-4 text-white bg-green-800' onClick={() => {
          fetchData()
        }}>Xuất file Excel</button>
            </div>
          )
        }
     </main>
 
    </>
  );
}
