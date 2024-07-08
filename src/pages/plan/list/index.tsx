const listPlan = () => {
    return (
        <div className="card">
  <div className="card-body">
    <div className="d-flex col-12">
      <div>
        <h4 className="card-title">
          <span className="lstick" />
          All Plans
        </h4>
        <h6 className="card-subtitle">
          Use this page to search for or add plans.
        </h6>
      </div>
      <div className="ml-auto">
        <a
          className="btn btn-info pull-right m-t-20"
          href="/app/Plans/AddPlan/173dac8d-2c4a-11ef-8ee7-002248475315"
        >
          <i className="fa fa-plus" />
          &nbsp;&nbsp;Add Plan
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
          id="PlansModel_SearchCriteria"
          name="PlansModel.SearchCriteria"
          placeholder="Search plans..."
          style={{ width: 250 }}
          type="text"
          defaultValue=""
          aria-controls="autoComplete_list_1"
          aria-autocomplete="both"
        />
        <ul id="autoComplete_list_1" role="listbox" />
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
        className="btn m-l-5 m-r-10 btn-info"
        style={{ width: 120 }}
      >
        <i className="fa fa-search" />
        &nbsp;&nbsp;Search
      </button>
      <select
        className="planStatus2 form-control m-r-5 m-b-0 valid"
        data-val="true"
        data-val-required="The PlanStatus2 field is required."
        id="PlansModel_PlanStatus2"
        name="PlansModel.PlanStatus2"
        style={{ width: 150 }}
        aria-describedby="PlansModel_PlanStatus2-error"
        aria-invalid="false"
      >
        <option selected value={0}>
          Any Status
        </option>
        <option value={1}>Active</option>
        <option value={2}>Draft</option>
        <option value={3}>Completed</option>
        <option value={4}>Paused</option>
        <option value={5}>Archived</option>
      </select>
      <select
        className="planScopeType2 form-control m-r-5 m-b-0 valid"
        data-val="true"
        data-val-required="The PlanScopeType2 field is required."
        id="PlansModel_PlanScopeType2"
        name="PlansModel.PlanScopeType2"
        style={{ width: 150 }}
        aria-describedby="PlansModel_PlanScopeType2-error"
        aria-invalid="false"
      >
        <option selected value={0}>
          Any Type
        </option>
        <option value={1}>User-Based</option>
        <option value={2}>Team-Based</option>
      </select>
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
    <div id="div_PlansModel">
      <div className="table-responsive table-hover no-wrap m-t-5 col-xl-11 col-lg-12">
        <table className="table vm no-th-brd">
          <thead>
            <tr>
              <th colSpan={3}>
                Name
                <i className="ascending fa fa-sort-down m-l-10 align-top" />
              </th>
              <th>
                Type
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                Status
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th colSpan={2}>
                Last Updated
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                Access
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="tableRow"
              id="173db3bf-2c4a-11ef-8ee7-002248475315"
            //   canedit="True"
            >
              <td style={{ fontSize: 48 }} width={1}>
                <span
                  data-toggle="tooltip"
                  data-original-title="A one-time, non-recurring incentive plan."
                >
                  <i className="fa fa-bullseye text-danger" />
                </span>
              </td>
              <td>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="One-Off Sales Contest"
                  >
                    One-Off Sales Contest
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="A one-time sales contest to promote new products."
                >
                  <small className="text-muted">
                    A one-time sales contest to promote n…
                  </small>
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
                      <a className="dropdown-item calculate">
                        <i className="fa fa-play" />
                        &nbsp;&nbsp;&nbsp;Calculate
                      </a>
                      <a className="dropdown-item duplicate">
                        <i className="fa fa-copy" />
                        &nbsp;&nbsp;&nbsp;Duplicate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="A one-time, non-recurring incentive plan."
                  >
                    One-Time
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Rewards: Badge, Cash Reward, Per-Transaction Reward"
                  >
                    Badge, Cash Reward, Per-…
                  </span>
                </small>
              </td>
              <td>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="Active. This plan is visible on personal incentive dashboards. This plan has been marked as active."
                >
                  <span style={{ fontSize: 30 }}>
                    <i className="icon-control-play m-r-5" />
                  </span>
                </span>
              </td>
              <td width={1}>
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
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="Nguyễn Khắc Anh"
                  >
                    Nguyễn Khắc Anh
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-25T16:58:29"
                  >
                    15 hours ago
                  </span>
                </small>
              </td>
              <td style={{ minHeight: 100 }}>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="This plan is visible to all full and limited admins."
                >
                  <span
                    className="label label-rounded"
                    style={{ backgroundColor: "black" }}
                  >
                    <i
                      className="fa fa-unlock m-r-5"
                      style={{ marginTop: 2, marginBottom: 2 }}
                    />
                    Public
                  </span>
                </span>
              </td>
            </tr>
            <tr
              className="tableRow"
              id="f296039e-32d6-11ef-a296-6045bd2d9d1c"
            //   canedit="True"
            >
              <td style={{ fontSize: 48 }} width={1}>
                <span
                  data-toggle="tooltip"
                  data-original-title="An incentive plan with a monthly recurrence."
                >
                  <i className="fa fa-calendar-o" />
                </span>
              </td>
              <td>
                <h6 className="m-t-5">
                  <span data-toggle="tooltip" data-original-title="sale sapo">
                    sale sapo
                  </span>
                </h6>
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
                      <a className="dropdown-item calculate">
                        <i className="fa fa-play" />
                        &nbsp;&nbsp;&nbsp;Calculate
                      </a>
                      <a className="dropdown-item duplicate">
                        <i className="fa fa-copy" />
                        &nbsp;&nbsp;&nbsp;Duplicate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="An incentive plan with a monthly recurrence."
                  >
                    Monthly
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Rewards: Cash Reward"
                  >
                    Cash Reward
                  </span>
                </small>
              </td>
              <td>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="Active. This plan is visible on personal incentive dashboards. This plan has been marked as active."
                >
                  <span style={{ fontSize: 30 }}>
                    <i className="icon-control-play m-r-5" />
                  </span>
                </span>
              </td>
              <td width={1}>
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
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="Nguyễn Khắc Anh"
                  >
                    Nguyễn Khắc Anh
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-25T17:20:34"
                  >
                    14 hours ago
                  </span>
                </small>
              </td>
              <td style={{ minHeight: 100 }}>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="This plan is visible to all full and limited admins."
                >
                  <span
                    className="label label-rounded"
                    style={{ backgroundColor: "black" }}
                  >
                    <i
                      className="fa fa-unlock m-r-5"
                      style={{ marginTop: 2, marginBottom: 2 }}
                    />
                    Public
                  </span>
                </span>
              </td>
            </tr>
            <tr
              className="tableRow"
              id="173db3c3-2c4a-11ef-8ee7-002248475315"
            //   canedit="True"
            >
              <td style={{ fontSize: 48 }} width={1}>
                <span
                  data-toggle="tooltip"
                  data-original-title="An incentive plan with a monthly recurrence."
                >
                  <i className="fa fa-calendar-o" />
                </span>
              </td>
              <td>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Sales Manager Compensation"
                  >
                    Sales Manager Compensation
                  </span>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="Paused. This plan is NOT visible on personal incentive dashboards. This plan has been marked as paused."
                  >
                    <span
                      className="label label-light-inverse m-l-5"
                      style={{
                        border: "solid 1px silver",
                        position: "relative",
                        top: "-2px"
                      }}
                    >
                      paused
                    </span>
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="A team-based plan for team managers."
                >
                  <small className="text-muted">
                    A team-based plan for team managers.
                  </small>
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
                      <a className="dropdown-item calculate">
                        <i className="fa fa-play" />
                        &nbsp;&nbsp;&nbsp;Calculate
                      </a>
                      <a className="dropdown-item duplicate">
                        <i className="fa fa-copy" />
                        &nbsp;&nbsp;&nbsp;Duplicate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="An incentive plan with a monthly recurrence."
                  >
                    Monthly
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Rewards: % of Revenue"
                  >
                    % of Revenue
                  </span>
                </small>
              </td>
              <td>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="Paused. This plan is NOT visible on personal incentive dashboards. This plan has been marked as paused."
                >
                  <span style={{ fontSize: 30 }}>
                    <i className="icon-control-pause m-r-5" />
                  </span>
                </span>
              </td>
              <td width={1}>
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
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="Daniel Martinez"
                  >
                    Daniel Martinez
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-13T05:04:04"
                  >
                    13 days ago
                  </span>
                </small>
              </td>
              <td style={{ minHeight: 100 }}>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="This plan is hidden. Only authorized admins can view and manage it."
                >
                  <span
                    className="label label-rounded"
                    style={{ backgroundColor: "red" }}
                  >
                    <i
                      className="fa fa-lock m-r-5"
                      style={{ marginTop: 2, marginBottom: 2 }}
                    />
                    Hidden
                  </span>
                </span>
              </td>
            </tr>
            <tr
              className="tableRow"
              id="173db3c1-2c4a-11ef-8ee7-002248475315"
            //   canedit="True"
            >
              <td style={{ fontSize: 48 }} width={1}>
                <span
                  data-toggle="tooltip"
                  data-original-title="An incentive plan with a quarterly recurrence."
                >
                  <i className="fa fa-calendar-times-o" />
                </span>
              </td>
              <td>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="West Coast Team Quotas"
                  >
                    West Coast Team Quotas
                  </span>
                </h6>
                <span
                  data-toggle="tooltip"
                  data-original-title="A quota-based plan for West Coast sales employees."
                >
                  <small className="text-muted">
                    A quota-based plan for West Coast sal…
                  </small>
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
                      <a className="dropdown-item calculate">
                        <i className="fa fa-play" />
                        &nbsp;&nbsp;&nbsp;Calculate
                      </a>
                      <a className="dropdown-item duplicate">
                        <i className="fa fa-copy" />
                        &nbsp;&nbsp;&nbsp;Duplicate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="An incentive plan with a quarterly recurrence."
                  >
                    Quarterly
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Rewards: Prize"
                  >
                    Prize
                  </span>
                </small>
              </td>
              <td>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="Active. This plan is visible on personal incentive dashboards. This plan has been marked as active."
                >
                  <span style={{ fontSize: 30 }}>
                    <i className="icon-control-play m-r-5" />
                  </span>
                </span>
              </td>
              <td width={1}>
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
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="James Cookie"
                  >
                    James Cookie
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-13T20:15:04"
                  >
                    12 days ago
                  </span>
                </small>
              </td>
              <td style={{ minHeight: 100 }}>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="This plan is visible to all full and limited admins."
                >
                  <span
                    className="label label-rounded"
                    style={{ backgroundColor: "black" }}
                  >
                    <i
                      className="fa fa-unlock m-r-5"
                      style={{ marginTop: 2, marginBottom: 2 }}
                    />
                    Public
                  </span>
                </span>
              </td>
            </tr>
            <tr
              className="tableRow"
              id="173db3c5-2c4a-11ef-8ee7-002248475315"
            //   canedit="True"
            >
              <td style={{ fontSize: 48 }} width={1}>
                <span
                  data-toggle="tooltip"
                  data-original-title="An incentive plan with a yearly recurrence."
                >
                  <i className="fa fa-hacker-news text-info" />
                </span>
              </td>
              <td>
                <h6 className="m-t-5">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Year-End Cash Bonus"
                  >
                    Year-End Cash Bonus
                  </span>
                  <span
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="Draft. This plan is NOT visible on personal incentive dashboards. This plan has been marked as draft."
                  >
                    <span
                      className="label label-light-warning m-l-5"
                      style={{
                        border: "solid 1px silver",
                        position: "relative",
                        top: "-2px"
                      }}
                    >
                      draft
                    </span>
                  </span>
                </h6>
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
                      <a className="dropdown-item calculate">
                        <i className="fa fa-play" />
                        &nbsp;&nbsp;&nbsp;Calculate
                      </a>
                      <a className="dropdown-item duplicate">
                        <i className="fa fa-copy" />
                        &nbsp;&nbsp;&nbsp;Duplicate
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="An incentive plan with a yearly recurrence."
                  >
                    Annually
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="Rewards: Cash Reward"
                  >
                    Cash Reward
                  </span>
                </small>
              </td>
              <td>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="Draft. This plan is NOT visible on personal incentive dashboards. This plan has been marked as draft."
                >
                  <span style={{ fontSize: 30 }}>
                    <i className="icon-note m-r-5" />
                  </span>
                </span>
              </td>
              <td width={1}>
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
                <h6>
                  <span
                    data-toggle="tooltip"
                    data-original-title="Veronica Haley"
                  >
                    Veronica Haley
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-06-15T00:04:04"
                  >
                    11 days ago
                  </span>
                </small>
              </td>
              <td style={{ minHeight: 100 }}>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="This plan is visible to all full and limited admins."
                >
                  <span
                    className="label label-rounded"
                    style={{ backgroundColor: "black" }}
                  >
                    <i
                      className="fa fa-unlock m-r-5"
                      style={{ marginTop: 2, marginBottom: 2 }}
                    />
                    Public
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}
export default listPlan;