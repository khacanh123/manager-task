const listTeam = () => {
    return(
<div className="card">
  <div className="card-body">
    <div className="d-flex col-xl-9 col-lg-12">
      <div>
        <h4 className="card-title">
          <span className="lstick" />
          All Teams
        </h4>
        <h6 className="card-subtitle">
          Use this page to search for or edit teams.
        </h6>
      </div>
      <div className="ml-auto">
        <a
          className="btn btn-info m-t-20"
          href="/app/Teams/AddTeam/173dac8d-2c4a-11ef-8ee7-002248475315"
        >
          <i className="fa fa-plus" />
          &nbsp;&nbsp;Add Team
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
          id="TeamsModel_SearchCriteria"
          name="TeamsModel.SearchCriteria"
          placeholder="Search teams..."
        //   searchid="teamsModel"
          style={{ width: 250 }}
          type="text"
          defaultValue=""
          aria-controls="autoComplete_list_1"
          aria-autocomplete="both"
        />
        <ul id="autoComplete_list_1" role="listbox"  />
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
    <div id="div_TeamsModel">
      <div className="table-responsive table-hover no-wrap m-t-5 col-xl-9 col-lg-12">
        <table className="table vm no-th-brd">
          <thead>
            <tr>
              <th colSpan={3}>
                Name
                <i className="ascending fa fa-sort-down m-l-10 align-top" />
              </th>
              <th colSpan={2}>
                Manager
                <i className="ascending fa fa-sort-down m-l-10 align-top invisible" />
              </th>
              <th>
                Details
                <i className="ascending fa fa-sort-down m-l-10 align-top invisible" />
              </th>
            </tr>
          </thead>
          <tbody>
           
            <tr className="tableRow" id="5e1552ee-18c4-5b08-ff9c-7014d2798511">
              <td style={{ fontSize: 48 }} width={1}>
                <span
                  data-toggle="tooltip"
                  data-original-title="This team has child teams."
                >
                  <i className="icon-globe" />
                </span>
              </td>
              <td>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="West Coast Team"
                  >
                    West Coast Team
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="Sales employees on the West coast."
                >
                  <small className="text-muted">
                    Sales employees on the West coast.
                  </small>
                </span>
                <br />
                <span data-toggle="tooltip" data-original-title="West">
                  <button type="button" className="btn btn-sm btn-info m-t-5">
                    West
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
                        &nbsp;&nbsp;&nbsp;Delete
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td width={1}>
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
                </span>{" "}
              </td>
              <td>
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="Kate OConnor"
                  >
                    Kate OConnor
                  </span>
                  <br />
                  <span
                    data-toggle="tooltip"
                    data-original-title="KateOConnor@example.com"
                  >
                    <small className="text-muted">KateOConnor@examp…</small>
                  </span>
                </h6>
              </td>
              <td className="align-bottom nohighlight">
                <ul>
                  <li className="small">3 member(s)</li>
                  <li className="small">1 sub-team(s)</li>
                  <li className="small">3rd depth</li>
                </ul>
              </td>
            </tr>{" "}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}
export default listTeam;