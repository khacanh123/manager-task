const DetailTeam = () => {
    return(
<>
  <ul className="nav nav-tabs customtab" role="tablist">
    <li className="nav-item">
      <a
        className="nav-link active"
        id="introNav"
        data-toggle="tab"
        href="#intro"
        role="tab"
        aria-selected="true"
      >
        <span className="hidden-sm-up">
          <i className="ti-home" />
        </span>
        <span className="hidden-xs-down">Overview</span>
      </a>{" "}
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        id="membersNav"
        data-toggle="tab"
        href="#members"
        role="tab"
        aria-selected="false"
      >
        <span className="hidden-sm-up">
          <i className="icon-people" />
        </span>
        <span className="hidden-xs-down">Members</span>
      </a>{" "}
    </li>
  </ul>
  <div className="tab-content">
    <div className="tab-pane active" id="intro" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex col-xl-6 col-lg-9 col-md-12">
                <div>
                  <h4 className="card-title">
                    <span className="lstick" />
                    Team
                  </h4>
                  <h6 className="card-subtitle">
                    Use this page to configure general team information.
                  </h6>
                </div>
              </div>
              <small className="hintAddMembers hide col-xl-6 col-lg-9 col-md-12">
                <i
                  className="fa fa-arrow-right m-r-5"
                  style={{ position: "relative", top: "-1px" }}
                />
                You can now{" "}
                <a href="javascript:void(0)">
                  add team members
                </a>
                .
              </small>
              <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
                <form
                  action="/app/Teams/Save/173dac8d-2c4a-11ef-8ee7-002248475315"
                  data-ajax="true"
                  data-ajax-failure="onUpdateRecordFailure"
                  data-ajax-method="POST"
                  data-ajax-success="onUpdateRecordSuccess"
                  id="form_updateRecord"
                  method="post"
                >
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    defaultValue="Pttt9As0FlRKArlpBKOdHyo1DibWfMxCCHPgGYxjAlkv-vd0qc-yFJQO-phgIdDPDvRB6oQIG8qeDM1qlvtgco8cZbqHWL6OnenB_uvDtZzAbzMeuySxO5GWvWnQ_MU5QT-rYynND6q1QxkivsO-Ng2"
                  />
                  <input
                    data-val="true"
                    data-val-required="The TeamId field is required."
                    id="TeamMembersModel_TeamId"
                    name="TeamMembersModel.TeamId"
                    type="hidden"
                    defaultValue="0bac3a2e-aeec-3abe-3ad2-7edae4d70f72"
                  />
                  <input
                    id="CustomPropertiesJson"
                    name="CustomPropertiesJson"
                    type="hidden"
                    defaultValue=""
                  />
                  <input
                    data-val="true"
                    data-val-required="The IsNew field is required."
                    id="IsNew"
                    name="IsNew"
                    type="hidden"
                    defaultValue="False"
                  />
                  <input
                    data-val="true"
                    data-val-required="The Id field is required."
                    id="RecordModel_Record_Id"
                    name="RecordModel.Record.Id"
                    type="hidden"
                    defaultValue="0bac3a2e-aeec-3abe-3ad2-7edae4d70f72"
                  />{" "}
                  <div className="form-group row">
                    <label
                      className="col-sm-3 text-right control-label col-form-label"
                      htmlFor="RecordModel_Record_Name"
                    >
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        className="form-control"
                        data-val="true"
                        data-val-maxlength="The field Name must be a string or array type with a maximum length of '450'."
                        data-val-maxlength-max={450}
                        id="RecordModel_Record_Name"
                        name="RecordModel.Record.Name"
                        type="text"
                        defaultValue="HQ Team"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-sm-3 text-right control-label col-form-label"
                      htmlFor="RecordModel_Record_Description"
                    >
                      Description
                    </label>
                    <div className="col-sm-9">
                      <input
                        className="form-control"
                        id="RecordModel_Record_Description"
                        name="RecordModel.Record.Description"
                        placeholder="Type a description (optional)..."
                        type="text"
                        defaultValue="Headquarter sales managers."
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-sm-3 text-right control-label col-form-label"
                      htmlFor="RecordModel_Record_ParentTeamId"
                    >
                      Parent Team
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        data-autocomplete-url="/app/Teams/AutocompleteTeam/173dac8d-2c4a-11ef-8ee7-002248475315/0bac3a2e-aeec-3abe-3ad2-7edae4d70f72"
                        id="input_ParentTeamId"
                        className="form-control m-r-20 ui-autocomplete-input"
                        placeholder="Type a team name (optional)..."
                        autoComplete="off"
                      />{" "}
                      <input
                        id="RecordModel_Record_ParentTeamId"
                        name="RecordModel.Record.ParentTeamId"
                        type="hidden"
                        defaultValue=""
                        style={{ display: "inline-block" }}
                      />{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="RecordModel.Record.ParentTeamId"
                        data-valmsg-replace="true"
                      />
                      <button
                        type="button"
                        className="tagElement hide btn btn-inverse"
                        style={{
                          position: "absolute",
                          left: 16,
                          top: "-1px",
                          display: "none"
                        }}
                        // actionurl="/app/Teams/Details/173dac8d-2c4a-11ef-8ee7-002248475315/00000000-0000-0000-0000-000000000000"
                      >
                        <span className="tagElementText" />
                        &nbsp;&nbsp;
                        <i className="clearTag fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-sm-3 text-right control-label col-form-label"
                      htmlFor="RecordModel_Record_ManagerId"
                    >
                      Manager
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        data-autocomplete-url="/app/SystemUsers/AutocompleteSystemUser/173dac8d-2c4a-11ef-8ee7-002248475315/00000000-0000-0000-0000-000000000000"
                        defaultValue="Nguyễn Khắc Anh"
                        id="input_ManagerId"
                        className="form-control ui-autocomplete-input"
                        placeholder="Type a user name (optional)..."
                        autoComplete="off"
                        style={{ display: "none" }}
                      />{" "}
                      <input
                        id="RecordModel_Record_ManagerId"
                        name="RecordModel.Record.ManagerId"
                        type="hidden"
                        defaultValue="52a398c6-95f9-4fc7-bbc6-bee09a16cc23"
                        style={{ display: "none" }}
                      />{" "}
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="RecordModel.Record.ManagerId"
                        data-valmsg-replace="true"
                      />
                      <button
                        type="button"
                        className="tagElement hide btn btn-inverse"
                        style={{
                          position: "absolute",
                          left: 16,
                          top: "-1px",
                          display: "inline-block"
                        }}
                        // actionurl="/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/00000000-0000-0000-0000-000000000000"
                      >
                        <span
                          className="tagElementText"
                          style={{ textOverflow: "ellipsis" }}
                        >
                          Nguyễn Khắc Anh
                        </span>
                        &nbsp;&nbsp;
                        <i className="clearTag fa fa-close" />
                      </button>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-sm-3 text-right control-label col-form-label"
                      htmlFor="RecordModel_Record_Tags"
                    >
                      Tags
                    </label>
                    <div className="col-sm-9">
                      <input
                        id="input_tags"
                        name="RecordModel.Record.Tags"
                        type="text"
                        defaultValue="HQ"
                        tabIndex={-1}
                        className="selectized"
                        style={{ display: "none" }}
                      />
                      <div className="selectize-control multi">
                        <div className="selectize-input items not-full has-options has-items">
                          <div className="item" data-value="HQ">
                            HQ
                          </div>
                          <input
                            type="text"
                            autoComplete="off"
                            id="input_tags-selectized"
                            style={{ width: 4 }}
                          />
                        </div>
                        <div
                          className="selectize-dropdown multi"
                          style={{ display: "none" }}
                        >
                          <div className="selectize-dropdown-content">
                            <div
                              className="option active"
                              data-selectable=""
                              data-value="East"
                            >
                              East
                            </div>
                            <div
                              className="option"
                              data-selectable=""
                              data-value="West"
                            >
                              West
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ marginTop: 40 }} />
                  <div
                    className="label label-inverse"
                    style={{ position: "relative", top: "-30px", left: 15 }}
                  >
                    Advanced Options
                  </div>
                  <div className="form-group row p-b-0 m-b-0">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      <input
                        className="form-control chk-col-light-blue"
                        data-val="true"
                        data-val-required="The Manager Can View Team Members' Rewards field is required."
                        id="RecordModel_Record_ManagerCanViewResults"
                        name="RecordModel.Record.ManagerCanViewResults"
                        type="checkbox"
                        defaultValue="true"
                      />
                      <label
                        className="text-right"
                        htmlFor="RecordModel_Record_ManagerCanViewResults"
                      >
                        Manager Can View Team Members' Rewards
                      </label>
                    </div>
                  </div>
                  <div className="form-group row p-b-0 m-b-0">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      <input
                        className="form-control chk-col-light-blue"
                        data-val="true"
                        data-val-required="The Manager Can View Team Credits field is required."
                        id="RecordModel_Record_ManagerCanViewCredits"
                        name="RecordModel.Record.ManagerCanViewCredits"
                        type="checkbox"
                        defaultValue="true"
                      />
                      <label
                        className="text-right"
                        htmlFor="RecordModel_Record_ManagerCanViewCredits"
                      >
                        Manager Can View Team Credits
                      </label>
                    </div>
                  </div>
                  <div className="form-group row p-b-0 m-b-0">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      <input
                        className="form-control chk-col-light-blue"
                        data-val="true"
                        data-val-required="The Members Can View Team Credits field is required."
                        id="RecordModel_Record_MembersCanViewCredits"
                        name="RecordModel.Record.MembersCanViewCredits"
                        type="checkbox"
                        defaultValue="true"
                      />
                      <label
                        className="text-right"
                        htmlFor="RecordModel_Record_MembersCanViewCredits"
                      >
                        Members Can View Team Credits
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div
                      id="div_ManagerId"
                      className="infoBox hide m-l-30 p-t-10 p-r-10"
                    >
                      <div className="card-info">
                        <div className="card-info-label">
                          <div className="card-info-label-text">Info</div>
                        </div>
                        <div className="card-info-content">
                          <table>
                            <tbody>
                              <tr>
                                <td valign="top">
                            
                                </td>
                                <td>
                                  <h3 className="m-t-10">
                                    About Team Managers
                                  </h3>
                                  <p className="m-b-20">
                                    Use team managers to assign them rewards
                                    based on their team's performance - or
                                    visibility on participant rewards. Can't
                                    find the user you are looking for?
                                  </p>
                                  <a
                                    className="btn btn-info"
                                    href="/app/SystemUsers/Overview/173dac8d-2c4a-11ef-8ee7-002248475315?nav=allSystemUsers"
                                    style={{
                                      marginLeft: 65,
                                      marginBottom: 10,
                                      width: 175
                                    }}
                                  >
                                    <i className="icon-list" />
                                    &nbsp;&nbsp;View Users
                                  </a>
                                  <a
                                    className="btn btn-info"
                                    href="/app/SystemUsers/AddUsers/173dac8d-2c4a-11ef-8ee7-002248475315"
                                    style={{
                                      marginLeft: 65,
                                      marginBottom: 10,
                                      width: 175
                                    }}
                                  >
                                    <i className="icon-list" />
                                    &nbsp;&nbsp;Add Users
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      id="div_ParentTeamId"
                      className="infoBox hide m-l-30 p-t-10 p-r-10"
                    >
                      <div className="card-info">
                        <div className="card-info-label">
                          <div className="card-info-label-text">Info</div>
                        </div>
                        <div className="card-info-content">
                          <table>
                            <tbody>
                              <tr>
                                <td valign="top">
                                  
                                </td>
                                <td>
                                  <h3 className="m-t-10">About Parent Teams</h3>
                                  <p className="m-b-20">
                                    Use a parent team to build up your hierarchy
                                    - you need at least another team to set a
                                    parent. Can't find the team you're looking
                                    for?
                                  </p>
                                  <a
                                    className="btn btn-info"
                                    href="/app/Teams/Overview/173dac8d-2c4a-11ef-8ee7-002248475315?nav=hierarchy"
                                    style={{
                                      marginLeft: 65,
                                      marginBottom: 10,
                                      width: 175
                                    }}
                                  >
                                    <i className="icon-share" />
                                    &nbsp;&nbsp;View Hierarchy
                                  </a>
                                  <a
                                    className="btn btn-info"
                                    href="/app/Teams/Overview/173dac8d-2c4a-11ef-8ee7-002248475315?nav=allTeams"
                                    style={{
                                      marginLeft: 65,
                                      marginBottom: 10,
                                      width: 175
                                    }}
                                  >
                                    <i className="icon-list" />
                                    &nbsp;&nbsp;View Teams
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      id="div_Tags"
                      className="infoBox hide m-l-30 p-t-10 p-r-10"
                    >
                      <div className="card-info">
                        <div className="card-info-label">
                          <div className="card-info-label-text">Info</div>
                        </div>
                        <div className="card-info-content">
                          <table>
                            <tbody>
                              <tr>
                                <td valign="top">
                                
                                </td>
                                <td>
                                  <h3 className="m-t-10">About Tags</h3>
                                  <p>
                                    Use tags to remember team structure or other
                                    groupings. You can also use tagging to
                                    specify which team is eligible for a given
                                    incentive plan.
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="goBack btn btn-secondary m-r-20 m-l-20 pull-left"
                    style={{ width: 100 }}
                  >
                    <i className="fa fa-arrow-left" />
                    &nbsp;&nbsp;Back
                  </button>
                  <div
                    className="form-group row pull-right"
                    style={{ height: 40 }}
                  >
                    <button
                      type="button"
                      id="btn_deleteRecord"
                      className="btn btn-danger m-r-20"
                      style={{ width: 100 }}
                    >
                      <i className="fa fa-close" />
                      &nbsp;&nbsp;Delete
                    </button>
                    <div className="onUpdateRecordSuccess hide">
                      <img
                        src="/app/Content/assets2/images/form/saved2.gif"
                        width={40}
                        className="m-l-20"
                      />
                    </div>
                    <button
                      type="submit"
                      className="updateRecord btn btn-info m-r-20"
                      style={{ width: 100 }}
                    >
                      <i className="fa fa-arrow-down" />
                      &nbsp;&nbsp;Save
                    </button>
                  </div>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tab-pane" id="members" role="tabpanel">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex col-xl-9 col-lg-12">
                <div>
                  <h4 className="card-title">
                    <span className="lstick" />
                    Team Members
                  </h4>
                  <h6 className="card-subtitle">
                    Use this page to view, add, or remove team members.
                  </h6>
                </div>
                <div className="ml-auto">
                  <div
                    className="pulsate"
                    style={{
                      outline: "rgba(116, 90, 242, 0) solid 2px",
                      boxShadow: "rgba(116, 90, 242, 0) 0px 0px 13px",
                      outlineOffset: 20
                    }}
                  >
                    <button
                      type="button"
                      id="btn_enterAddMode"
                      className="btn btn-primary"
                    >
                      <i className="fa fa-plus" />
                      &nbsp;&nbsp;Add Members
                    </button>
                    <button
                      type="button"
                      id="btn_enterSearchMode"
                      className="btn btn-info"
                      style={{ display: "none" }}
                    >
                      <i className="fa fa-chevron-left" />
                      &nbsp;&nbsp;Back to Search
                    </button>
                  </div>
                </div>
              </div>
              <form
                action="/app/Teams/MemberTable/173dac8d-2c4a-11ef-8ee7-002248475315"
                autoComplete="off"
                data-ajax="true"
                data-ajax-method="POST"
                data-ajax-success="onTableTeamMembersModelSuccess"
                id="form_TeamMembersModel"
                method="post"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="_Gh3Db1KTyrIY8rLVYv2mso023sMrZJ3aLtX4LOwpqiGEb1ceTj1NmYGyWYkd1-7HEhFS9eJR359-aTAQbJ5XXkriF_SGACEsCYv-qDYmHO_PCHTCPPTxONDaUFEQH6_-GvBs3oo5129Z1xItVQvMA2"
                />
                <input
                  data-val="true"
                  data-val-required="The AddMember field is required."
                  id="AddMember"
                  name="AddMember"
                  type="hidden"
                  defaultValue="False"
                />
                <input
                  data-val="true"
                  data-val-required="The TeamId field is required."
                  id="TeamMembersModel_TeamId"
                  name="TeamMembersModel.TeamId"
                  type="hidden"
                  defaultValue="0bac3a2e-aeec-3abe-3ad2-7edae4d70f72"
                />
                <input
                  data-val="true"
                  data-val-required="The Id field is required."
                  id="RecordModel_Record_Id"
                  name="RecordModel.Record.Id"
                  type="hidden"
                  defaultValue="0bac3a2e-aeec-3abe-3ad2-7edae4d70f72"
                />
                <input
                  data-val="true"
                  data-val-number="The field Checksum must be a number."
                  data-val-required="The Checksum field is required."
                  id="TeamMembersModel_Checksum"
                  name="TeamMembersModel.Checksum"
                  type="hidden"
                  defaultValue={3624047925}
                />
                <input
                  data-val="true"
                  data-val-number="The field RecordCount must be a number."
                  data-val-required="The RecordCount field is required."
                  id="TeamMembersModel_RecordCount"
                  name="TeamMembersModel.RecordCount"
                  type="hidden"
                  defaultValue={10}
                />
                <input
                  data-val="true"
                  data-val-number="The field CurrentPage must be a number."
                  data-val-required="The CurrentPage field is required."
                  id="TeamMembersModel_CurrentPage"
                  name="TeamMembersModel.CurrentPage"
                  type="hidden"
                  defaultValue={0}
                />
                <input
                  id="TeamMembersModel_SortField"
                  name="TeamMembersModel.SortField"
                  type="hidden"
                  defaultValue="GetDisplayName"
                />
                <input
                  data-val="true"
                  data-val-required="The SortDescending field is required."
                  id="TeamMembersModel_SortDescending"
                  name="TeamMembersModel.SortDescending"
                  type="hidden"
                  defaultValue="False"
                />
                <input
                  data-val="true"
                  data-val-required="The MoreRecords field is required."
                  id="TeamMembersModel_MoreRecords"
                  name="TeamMembersModel.MoreRecords"
                  type="hidden"
                  defaultValue="False"
                />{" "}
                <div
                  id="div_searchMode"
                  className="form-group row m-t-10 m-l-20"
                >
                  <div
                    className="autoComplete_wrapper"
                    role="combobox"
                    aria-owns="autoComplete_list_1"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <input
                      className="searchInput form-control m-l-5"
                      id="TeamMembersModel_SearchCriteria"
                      name="TeamMembersModel.SearchCriteria"
                      placeholder="Search current members..."
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
                    className="btn btn-info m-l-5 m-r-10"
                    style={{ width: 120 }}
                  >
                    <i className="fa fa-search" />
                    &nbsp;&nbsp;Search
                  </button>
                  <div id="div_navigation" className="m-l-10">
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
                <div
                  id="div_addMode"
                  className="form-group row m-t-10 m-l-20"
                  style={{ display: "none" }}
                >
                  <div>
                    <button
                      type="button"
                      className="tagElement hide btn btn-primary"
                      style={{
                        position: "relative",
                        left: 0,
                        top: 0,
                        display: "none"
                      }}
                    //   actionurl="/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/00000000-0000-0000-0000-000000000000"
                    >
                      <span className="tagElementText" />
                      &nbsp;&nbsp;
                      <i className="clearTag fa fa-close" />
                    </button>
                    <input
                      type="text"
                      data-autocomplete-url="/app/SystemUsers/AutocompleteSystemUser/173dac8d-2c4a-11ef-8ee7-002248475315/00000000-0000-0000-0000-000000000000"
                      id="input_AddCriteria"
                      className="form-control ui-autocomplete-input"
                      style={{ width: 270 }}
                      placeholder="Type a user to add..."
                      autoComplete="off"
                    />{" "}
                    <input
                      id="AddMemberId"
                      name="AddMemberId"
                      type="hidden"
                      defaultValue=""
                      style={{ display: "inline-block" }}
                    />{" "}
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="AddMemberId"
                      data-valmsg-replace="true"
                    />
                  </div>
                  <button
                    type="submit"
                    id="btn_add"
                    className="btn btn-primary m-l-5 m-r-10"
                  >
                    <i className="fa fa-plus" />
                    &nbsp;&nbsp;Add Member
                  </button>
                </div>
                <div
                  id="div_addMode2"
                  className="col-xl-9 col-lg-12 row"
                  style={{ marginTop: "-20px", marginLeft: 0, display: "none" }}
                >
                  <small className="enterBulkMode m-l-5">
                    Click{" "}
                    <a href="javascript:void(0)">
                      here
                    </a>{" "}
                    to use bulk add mode instead.
                  </small>
                </div>
                <div
                  id="div_bulkMode"
                  className="col-xl-9 col-lg-12 form-group row m-t-10"
                  style={{ display: "none" }}
                >
                  <div className="m-l-5 p-l-0 p-r-0 col-xl-9 col-lg-12 p-r-20">
                    <textarea
                      className="form-control"
                      cols={20}
                      id="AddMemberBulk"
                      name="AddMemberBulk"
                      placeholder="Enter email addresses separated by spaces, newline, commas, or semi-columns (make sure they have first been added as users)"
                      rows={3}
                      defaultValue={""}
                    />
                    <button
                      type="submit"
                      id="btn_bulk"
                      className="btn btn-primary pull-right m-t-10"
                    >
                      <i className="fa fa-plus" />
                      &nbsp;&nbsp;Add Members
                    </button>
                  </div>
                </div>
                <div id="div_TeamMembersModel">
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
                            Effective From
                            <i className="ascending fa fa-sort-down m-l-10 invisible" />
                          </th>
                          <th>
                            Effective Until
                            <i className="ascending fa fa-sort-down m-l-10 invisible" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="tableRow"
                          id="ab7ad9f0-6ca1-6c20-30d2-72816826ebd9"
                        >
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
                              <small className="text-muted">
                                DanielMartinez@ex…
                              </small>
                            </span>
                            <br />
                            <span
                              data-toggle="tooltip"
                              data-original-title="Sales Mgr"
                            >
                              <button
                                type="button"
                                className="btn btn-sm btn-info m-t-5"
                              >
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
                                    &nbsp;&nbsp;&nbsp;Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="nohighlight">
                            <h6>
                              <span
                                data-toggle="tooltip"
                                data-original-title="2024-06-14T01:59:02"
                              >
                                <text>13 days ago</text>
                              </span>
                            </h6>
                          </td>
                          <td className="nohighlight">
                            <div style={{ marginBottom: 6 }}>
                              <span
                                data-toggle="tooltip"
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
                            <h6>N/A</h6>
                          </td>
                          <td className="nohighlight">
                            <h6>N/A</h6>
                          </td>
                        </tr>
                        <tr
                          className="tableRow"
                          id="5e5ca6a2-2586-ff15-4e7c-9760da62f9c3"
                        >
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
                              <small className="text-muted">
                                JamesCookie@examp…
                              </small>
                            </span>
                            <br />
                            <span
                              data-toggle="tooltip"
                              data-original-title="Sales Mgr"
                            >
                              <button
                                type="button"
                                className="btn btn-sm btn-info m-t-5"
                              >
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
                                    &nbsp;&nbsp;&nbsp;Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="nohighlight">
                            <h6>
                              <span
                                data-toggle="tooltip"
                                data-original-title="2024-06-14T01:59:02"
                              >
                                <text>13 days ago</text>
                              </span>
                            </h6>
                          </td>
                          <td className="nohighlight">
                            <div style={{ marginBottom: 6 }}>
                              <span
                                data-toggle="tooltip"
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
                            <h6>N/A</h6>
                          </td>
                          <td className="nohighlight">
                            <h6>N/A</h6>
                          </td>
                        </tr>
                        <tr
                          className="tableRow"
                          id="e80bd310-ec34-6501-5563-4b95b6eadeb6"
                        >
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
                              <small className="text-muted">
                                VeronicaHaley@exa…
                              </small>
                            </span>
                            <br />
                            <span
                              data-toggle="tooltip"
                              data-original-title="Sales Mgr"
                            >
                              <button
                                type="button"
                                className="btn btn-sm btn-info m-t-5"
                              >
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
                                    &nbsp;&nbsp;&nbsp;Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="nohighlight">
                            <h6>
                              <span
                                data-toggle="tooltip"
                                data-original-title="2024-06-13T23:59:02"
                              >
                                <text>13 days ago</text>
                              </span>
                            </h6>
                          </td>
                          <td className="nohighlight">
                            <div style={{ marginBottom: 6 }}>
                              <span
                                data-toggle="tooltip"
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
                            <h6>N/A</h6>
                          </td>
                          <td className="nohighlight">
                            <h6>N/A</h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


    )
}
export default DetailTeam;