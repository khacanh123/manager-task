const createTeam = () => {
    return(
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
        // noValidate="novalidate"
      >
        <input
          name="__RequestVerificationToken"
          type="hidden"
          defaultValue="7pOGWSiRpFUxjIAxBb6mxSXMZIwZ3wVWlHoHGs1fKJDVacqlfrBAEF_lNMjLwG7m-ywp-2R2kAAubCjLVQ-3qdLK_TDpAk16RAZaCSg8QK3m3lAJZ8V5L9kPHkeeIA0K0gxuKnZ20tXjVkcZZS45zQ2"
        />
        <input
          data-val="true"
          data-val-required="The TeamId field is required."
          id="TeamMembersModel_TeamId"
          name="TeamMembersModel.TeamId"
          type="hidden"
          defaultValue="45089592-345d-11ef-a296-0022484542a0"
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
          defaultValue="True"
        />
        <input
          data-val="true"
          data-val-required="The Id field is required."
          id="RecordModel_Record_Id"
          name="RecordModel.Record.Id"
          type="hidden"
          defaultValue="45089592-345d-11ef-a296-0022484542a0"
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
            //   autofocus={1}
              className="form-control"
              data-val="true"
              data-val-maxlength="The field Name must be a string or array type with a maximum length of '450'."
              data-val-maxlength-max={450}
              id="RecordModel_Record_Name"
              name="RecordModel.Record.Name"
            //   required={1}
              type="text"
              defaultValue=""
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
              defaultValue=""
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
              data-autocomplete-url="/app/Teams/AutocompleteTeam/173dac8d-2c4a-11ef-8ee7-002248475315/45089592-345d-11ef-a296-0022484542a0"
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
            //   actionurl="/app/Teams/Details/173dac8d-2c4a-11ef-8ee7-002248475315/00000000-0000-0000-0000-000000000000"
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
              id="input_ManagerId"
              className="form-control ui-autocomplete-input"
              placeholder="Type a user name (optional)..."
              autoComplete="off"
            />{" "}
            <input
              id="RecordModel_Record_ManagerId"
              name="RecordModel.Record.ManagerId"
              type="hidden"
              defaultValue=""
              style={{ display: "inline-block" }}
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
                display: "none"
              }}
            //   actionurl="/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/00000000-0000-0000-0000-000000000000"
            >
              <span
                className="tagElementText"
                style={{ textOverflow: "ellipsis" }}
              />
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
              defaultValue=""
              tabIndex={-1}
              className="selectized"
              style={{ display: "none" }}
            />
            <div className="selectize-control multi">
              <div className="selectize-input items not-full">
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
                  <div className="option" data-selectable="" data-value="HQ">
                    HQ
                  </div>
                  <div className="option" data-selectable="" data-value="West">
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
          <div id="div_ManagerId" className="infoBox hide m-l-30 p-t-10 p-r-10">
            <div className="card-info">
              <div className="card-info-label">
                <div className="card-info-label-text">Info</div>
              </div>
              <div className="card-info-content">
                <table>
                  <tbody>
                    <tr>
                      <td valign="top">
                        <div
                          className="lottie m-r-20"
                        //   lottieurl="/app/Content/assets2/animated/info.json"
                          style={{ width: 110 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 126 136"
                            width={126}
                            height={136}
                            preserveAspectRatio="xMidYMid meet"
                            style={{
                              width: "100%",
                              height: "100%",
                              transform: "translate3d(0px, 0px, 0px)",
                              contentVisibility: "visible"
                            }}
                          >
                            <defs>
                              <clipPath id="__lottie_element_36">
                                <rect width={126} height={136} x={0} y={0} />
                              </clipPath>
                              <filter
                                id="__lottie_element_39"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="1.2246467991473532e-16"
                                  dy={2}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_40"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="2.2249999046325684"
                                y1="-25.378999710083008"
                                x2="-3.1080000400543213"
                                y2="116.54499816894531"
                              >
                                <stop offset="0%" stopColor="rgb(242,195,20)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(247,125,35)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(252,56,50)"
                                />
                              </linearGradient>
                              <clipPath id="__lottie_element_42">
                                <path d="M0,0 L126,0 L126,136 L0,136z" />
                              </clipPath>
                              <g id="__lottie_element_90">
                                <g
                                  transform="matrix(1,0,0,1,79.78299713134766,128.73199462890625)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  />
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M2.055999994277954,-2.8369998931884766 C1.5759999752044678,-1.8869999647140503 0.8859999775886536,-1.4670000076293945 0.29600000381469727,-1.2869999408721924 C0.29600000381469727,-1.2869999408721924 -0.6039999723434448,0.953000009059906 -0.6039999723434448,0.953000009059906 C-0.6039999723434448,0.953000009059906 -1.9639999866485596,1.8630000352859497 -2.874000072479248,2.312999963760376 C-3.7839999198913574,2.763000011444092 -0.6039999723434448,3.2230000495910645 0.3059999942779541,2.312999963760376 C1.215999960899353,1.4129999876022339 3.0360000133514404,-1.3070000410079956 3.0360000133514404,-1.3070000410079956 C3.0360000133514404,-1.3070000410079956 2.635999917984009,-1.847000002861023 2.055999994277954,-2.8369998931884766"
                                    />
                                  </g>
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M-10.407999992370605,3.0179998874664307"
                                    />
                                    <path
                                      strokeLinecap="butt"
                                      strokeLinejoin="miter"
                                      fillOpacity={0}
                                      strokeMiterlimit={4}
                                      stroke="rgb(255,255,255)"
                                      strokeOpacity="0.3"
                                      strokeWidth={2}
                                      d=" M-10.407999992370605,3.0179998874664307"
                                    />
                                  </g>
                                </g>
                              </g>
                              <mask
                                id="__lottie_element_90_1"
                                mask-type="alpha"
                              >
                                <use xlinkHref="#__lottie_element_90" />
                              </mask>
                              <filter
                                id="__lottie_element_119"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="6.123233995736766e-17"
                                  dy={1}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_120"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="43.784000396728516"
                                y1="43.784000396728516"
                                x2="-41.91699981689453"
                                y2="-43.784000396728516"
                              >
                                <stop offset="0%" stopColor="rgb(47,78,251)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(70,124,253)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(94,169,255)"
                                />
                              </linearGradient>
                              <filter
                                id="__lottie_element_123"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="6.123233995736766e-17"
                                  dy={1}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_124"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="42.83100128173828"
                                y1="37.24300003051758"
                                x2="-42.83100128173828"
                                y2="-44.2869987487793"
                              >
                                <stop offset="0%" stopColor="rgb(47,78,251)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(70,124,253)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(94,169,255)"
                                />
                              </linearGradient>
                            </defs>
                            <g clipPath="url(#__lottie_element_36)">
                              <g
                                filter="url(#__lottie_element_123)"
                                transform="matrix(1,0,0,1,63.21500015258789,63.93600082397461)"
                                opacity="0.13"
                                style={{ display: "block" }}
                              >
                                <g
                                  opacity={1}
                                  transform="matrix(0.4226182699203491,0.9063078165054321,-0.9063078165054321,0.4226182699203491,0,0)"
                                >
                                  <path
                                    fill="url(#__lottie_element_124)"
                                    fillOpacity={1}
                                    d=" M42.83100128173828,-38.20399856567383 C42.83100128173828,-38.20399856567383 42.83100128173828,38.20399856567383 42.83100128173828,38.20399856567383 C42.83100128173828,41.56120681762695 40.10520935058594,44.2869987487793 36.74800109863281,44.2869987487793 C36.74800109863281,44.2869987487793 -36.74800109863281,44.2869987487793 -36.74800109863281,44.2869987487793 C-40.10520935058594,44.2869987487793 -42.83100128173828,41.56120681762695 -42.83100128173828,38.20399856567383 C-42.83100128173828,38.20399856567383 -42.83100128173828,-38.20399856567383 -42.83100128173828,-38.20399856567383 C-42.83100128173828,-41.56120681762695 -40.10520935058594,-44.2869987487793 -36.74800109863281,-44.2869987487793 C-36.74800109863281,-44.2869987487793 36.74800109863281,-44.2869987487793 36.74800109863281,-44.2869987487793 C40.10520935058594,-44.2869987487793 42.83100128173828,-41.56120681762695 42.83100128173828,-38.20399856567383z"
                                  />
                                </g>
                              </g>
                              <g
                                filter="url(#__lottie_element_119)"
                                transform="matrix(1,0,0,1,63.007999420166016,63.87799835205078)"
                                opacity="0.68"
                                style={{ display: "block" }}
                              >
                                <g
                                  opacity={1}
                                  transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,0,0)"
                                >
                                  <path
                                    fill="url(#__lottie_element_120)"
                                    fillOpacity={1}
                                    d=" M43.784000396728516,-37.70100021362305 C43.784000396728516,-37.70100021362305 43.784000396728516,37.70100021362305 43.784000396728516,37.70100021362305 C43.784000396728516,41.05820846557617 41.05820846557617,43.784000396728516 37.70100021362305,43.784000396728516 C37.70100021362305,43.784000396728516 -37.70100021362305,43.784000396728516 -37.70100021362305,43.784000396728516 C-41.05820846557617,43.784000396728516 -43.784000396728516,41.05820846557617 -43.784000396728516,37.70100021362305 C-43.784000396728516,37.70100021362305 -43.784000396728516,-37.70100021362305 -43.784000396728516,-37.70100021362305 C-43.784000396728516,-41.05820846557617 -41.05820846557617,-43.784000396728516 -37.70100021362305,-43.784000396728516 C-37.70100021362305,-43.784000396728516 37.70100021362305,-43.784000396728516 37.70100021362305,-43.784000396728516 C41.05820846557617,-43.784000396728516 43.784000396728516,-41.05820846557617 43.784000396728516,-37.70100021362305z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(0.8067024350166321,0,0,0.8067024350166321,42.3289909362793,76.40792083740234)"
                                opacity="0.3"
                                style={{ display: "none" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M1.5140000581741333,4.420000076293945 C1.5140000581741333,4.420000076293945 -1.496000051498413,4.420000076293945 -1.496000051498413,4.420000076293945 C-1.496000051498413,-0.3700000047683716 3.0239999294281006,-0.09000000357627869 3.0239999294281006,-3.119999885559082 C3.0239999294281006,-3.9200000762939453 2.7039999961853027,-4.690000057220459 2.134000062942505,-5.260000228881836 C1.5740000009536743,-5.820000171661377 0.8040000200271606,-6.130000114440918 0.004000000189989805,-6.130000114440918 C-1.656000018119812,-6.099999904632568 -2.996000051498413,-4.75 -3.0160000324249268,-3.069999933242798 C-3.0160000324249268,-3.069999933242798 -6.035999774932861,-3.069999933242798 -6.035999774932861,-3.069999933242798 C-5.995999813079834,-6.389999866485596 -3.315999984741211,-9.0600004196167 -0.026000000536441803,-9.069999694824219 C3.2739999294281006,-9.079999923706055 5.964000225067139,-6.440000057220459 6.033999919891357,-3.119999885559082 C6.044000148773193,0.6700000166893005 1.5140000581741333,1.100000023841858 1.5140000581741333,4.420000076293945z M1.559999942779541,9.067000389099121 C1.559999942779541,9.067000389099121 -1.5499999523162842,9.067000389099121 -1.5499999523162842,9.067000389099121 C-1.5499999523162842,9.067000389099121 -1.5499999523162842,5.986999988555908 -1.5499999523162842,5.986999988555908 C-1.5499999523162842,5.986999988555908 1.559999942779541,5.986999988555908 1.559999942779541,5.986999988555908 C1.559999942779541,5.986999988555908 1.559999942779541,9.067000389099121 1.559999942779541,9.067000389099121z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(0.9346575140953064,0,0,0.9346575140953064,34.041412353515625,71.64488983154297)"
                                opacity="0.3"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M1.5140000581741333,4.420000076293945 C1.5140000581741333,4.420000076293945 -1.496000051498413,4.420000076293945 -1.496000051498413,4.420000076293945 C-1.496000051498413,-0.3700000047683716 3.0239999294281006,-0.09000000357627869 3.0239999294281006,-3.119999885559082 C3.0239999294281006,-3.9200000762939453 2.7039999961853027,-4.690000057220459 2.134000062942505,-5.260000228881836 C1.5740000009536743,-5.820000171661377 0.8040000200271606,-6.130000114440918 0.004000000189989805,-6.130000114440918 C-1.656000018119812,-6.099999904632568 -2.996000051498413,-4.75 -3.0160000324249268,-3.069999933242798 C-3.0160000324249268,-3.069999933242798 -6.035999774932861,-3.069999933242798 -6.035999774932861,-3.069999933242798 C-5.995999813079834,-6.389999866485596 -3.315999984741211,-9.0600004196167 -0.026000000536441803,-9.069999694824219 C3.2739999294281006,-9.079999923706055 5.964000225067139,-6.440000057220459 6.033999919891357,-3.119999885559082 C6.044000148773193,0.6700000166893005 1.5140000581741333,1.100000023841858 1.5140000581741333,4.420000076293945z M1.559999942779541,9.067000389099121 C1.559999942779541,9.067000389099121 -1.5499999523162842,9.067000389099121 -1.5499999523162842,9.067000389099121 C-1.5499999523162842,9.067000389099121 -1.5499999523162842,5.986999988555908 -1.5499999523162842,5.986999988555908 C-1.5499999523162842,5.986999988555908 1.559999942779541,5.986999988555908 1.559999942779541,5.986999988555908 C1.559999942779541,5.986999988555908 1.559999942779541,9.067000389099121 1.559999942779541,9.067000389099121z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(1.3767913579940796,0,0,1.3767913579940796,89.19833374023438,86.83219909667969)"
                                opacity="0.3"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M0.6169999837875366,1.7979999780654907 C0.6169999837875366,1.7979999780654907 -0.6230000257492065,1.7979999780654907 -0.6230000257492065,1.7979999780654907 C-0.6230000257492065,-0.16200000047683716 1.2369999885559082,-0.052000001072883606 1.2369999885559082,-1.2920000553131104 C1.2369999885559082,-1.972000002861023 0.6769999861717224,-2.5220000743865967 -0.003000000026077032,-2.5220000743865967 C-0.6830000281333923,-2.51200008392334 -1.2230000495910645,-1.9520000219345093 -1.2330000400543213,-1.2719999551773071 C-1.2330000400543213,-1.2719999551773071 -2.4730000495910645,-1.2719999551773071 -2.4730000495910645,-1.2719999551773071 C-2.443000078201294,-2.621999979019165 -1.3530000448226929,-3.691999912261963 -0.013000000268220901,-3.7019999027252197 C1.3270000219345093,-3.7119998931884766 2.427000045776367,-2.631999969482422 2.4769999980926514,-1.2920000553131104 C2.4769999980926514,0.257999986410141 0.6269999742507935,0.43799999356269836 0.6269999742507935,1.7979999780654907 C0.6269999742507935,1.7979999780654907 0.6169999837875366,1.7979999780654907 0.6169999837875366,1.7979999780654907z M0.6420000195503235,3.697999954223633 C0.6420000195503235,3.697999954223633 -0.6380000114440918,3.697999954223633 -0.6380000114440918,3.697999954223633 C-0.6380000114440918,3.697999954223633 -0.6380000114440918,2.437999963760376 -0.6380000114440918,2.437999963760376 C-0.6380000114440918,2.437999963760376 0.6420000195503235,2.437999963760376 0.6420000195503235,2.437999963760376 C0.6420000195503235,2.437999963760376 0.6420000195503235,3.697999954223633 0.6420000195503235,3.697999954223633z"
                                  />
                                </g>
                              </g>
                              <g
                                clipPath="url(#__lottie_element_42)"
                                transform="matrix(1,0,0,1,0,0)"
                                opacity={1}
                                style={{ display: "block" }}
                              >
                                <g
                                  transform="matrix(1,0,0,1,63.70000076293945,131.52499389648438)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(223,218,224)"
                                      fillOpacity={1}
                                      d=" M0,2.7100000381469727 C-14.75,2.7100000381469727 -26.700000762939453,1.5 -26.700000762939453,0 C-26.700000762939453,-1.5 -14.75,-2.7100000381469727 0,-2.7100000381469727 C14.75,-2.7100000381469727 26.700000762939453,-1.5 26.700000762939453,0 C26.700000762939453,1.5 14.75,2.7100000381469727 0,2.7100000381469727"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,79.63999938964844,28.82699966430664)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(250,236,233)"
                                      fillOpacity={1}
                                      d=" M0.039000000804662704,-0.019999999552965164 C0.039000000804662704,-0.019999999552965164 -0.020999999716877937,-0.03999999910593033 -0.020999999716877937,-0.03999999910593033 C-0.020999999716877937,-0.03999999910593033 -0.061000000685453415,-0.019999999552965164 -0.061000000685453415,-0.019999999552965164 C-0.061000000685453415,-0.019999999552965164 -0.04100000113248825,0.019999999552965164 -0.04100000113248825,0.019999999552965164 C-0.04100000113248825,0.019999999552965164 0.01899999938905239,0.03999999910593033 0.01899999938905239,0.03999999910593033 C0.01899999938905239,0.03999999910593033 0.0689999982714653,0.019999999552965164 0.0689999982714653,0.019999999552965164 C0.0689999982714653,0.019999999552965164 0.039000000804662704,-0.019999999552965164 0.039000000804662704,-0.019999999552965164"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,71.7979965209961,72.63200378417969)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(248,223,158)"
                                      fillOpacity={1}
                                      d=" M-0.9150000214576721,1.0010000467300415 C-0.6650000214576721,0.5609999895095825 -0.38499999046325684,0.12099999934434891 -0.04500000178813934,-0.3089999854564667 C0.26499998569488525,-0.5389999747276306 0.5849999785423279,-0.7689999938011169 0.9150000214576721,-0.9990000128746033 C0.32499998807907104,-0.3089999854564667 -0.2849999964237213,0.35100001096725464 -0.9150000214576721,1.0010000467300415"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,71.37300109863281,104.23400115966797)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M10.472000122070312,21.656999588012695 C9.552000045776367,20.066999435424805 8.192000389099121,17.30699920654297 7.3520002365112305,13.687000274658203 C5.992000102996826,7.796999931335449 0.5419999957084656,1.9170000553131104 0.5419999957084656,1.9170000553131104 C0.0820000022649765,-3.5230000019073486 -3.0980000495910645,-19.822999954223633 -3.0980000495910645,-20.273000717163086 C-3.0980000495910645,-20.273000717163086 -7.188000202178955,-27.972999572753906 -9.907999992370605,-18.46299934387207 C-12.637999534606934,-8.95300006866455 -4.458000183105469,-0.3529999852180481 -4.458000183105469,2.367000102996826 C-4.458000183105469,5.077000141143799 8.722000122070312,23.187000274658203 8.722000122070312,23.187000274658203 C8.722000122070312,23.187000274658203 8.711999893188477,23.216999053955078 8.711999893188477,23.216999053955078 C9.291999816894531,23.027000427246094 9.982000350952148,22.60700035095215 10.472000122070312,21.656999588012695"
                                    />
                                  </g>
                                </g>
                                <g
                                  mask="url(#__lottie_element_90_1)"
                                  style={{ display: "block" }}
                                >
                                  <g
                                    transform="matrix(1,0,0,1,65.04900360107422,90.08699798583984)"
                                    opacity={1}
                                  >
                                    <g
                                      opacity={1}
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        fill="rgb(33,33,33)"
                                        fillOpacity={1}
                                        d=" M-1.684000015258789,9.064000129699707 C-2.9839999675750732,6.343999862670898 -4.144000053405762,3.134000062942505 -4.144000053405762,-0.3059999942779541 C-4.144000053405762,-1.6160000562667847 -3.9739999771118164,-2.9560000896453857 -3.5840001106262207,-4.315999984741211 C-2.5439999103546143,-7.946000099182129 -1.3040000200271606,-9.065999984741211 -0.17399999499320984,-9.065999984741211 C1.6660000085830688,-9.065999984741211 3.2260000705718994,-6.125999927520752 3.2260000705718994,-6.125999927520752 C3.2260000705718994,-5.966000080108643 3.615999937057495,-3.865999937057495 4.145999908447266,-0.9660000205039978 C3.8959999084472656,-0.7459999918937683 3.625999927520752,-0.5360000133514404 3.305999994277954,-0.335999995470047 C1.5360000133514404,0.7639999985694885 -0.23399999737739563,4.874000072479248 -1.684000015258789,9.064000129699707"
                                      />
                                    </g>
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,60.21099853515625,101.96600341796875)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M7.730000019073486,-24.113000869750977 C3.8499999046325684,-24.113000869750977 -0.27000001072883606,-28.933000564575195 -0.27000001072883606,-28.933000564575195 C-0.27000001072883606,-28.933000564575195 -2.140000104904175,-27.632999420166016 -3.049999952316284,-21.232999801635742 C-3.4800000190734863,-18.222999572753906 -4.860000133514404,-1.312999963760376 -5.769999980926514,2.756999969482422 C-6.670000076293945,6.767000198364258 -9.760000228881836,27.836999893188477 -9.859999656677246,28.547000885009766 C-9.270000457763672,28.927000045776367 -8.40999984741211,29.136999130249023 -7.269999980926514,28.64699935913086 C-6.71999979019165,25.94700050354004 -5.460000038146973,20.756999969482422 -3.5,18.156999588012695 C-0.7799999713897705,14.536999702453613 -1.6799999475479126,7.2870001792907715 -0.7799999713897705,5.0269999504089355 C0.12999999523162842,2.756999969482422 3.7699999809265137,-12.17300033569336 7.400000095367432,-14.442999839782715 C12.199999809265137,-17.433000564575195 8.65999984741211,-24.113000869750977 7.730000019073486,-24.113000869750977"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,49.68899917602539,131.46499633789062)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M0.6570000052452087,-0.9509999752044678 C0.6570000052452087,-0.9509999752044678 0.6570000052452087,-0.9309999942779541 0.6570000052452087,-0.9309999942779541 C0.6570000052452087,-0.9309999942779541 -2.9730000495910645,-0.03099999949336052 -2.9730000495910645,-0.03099999949336052 C-4.793000221252441,1.3289999961853027 2.927000045776367,0.8790000081062317 2.927000045776367,0.8790000081062317 C2.927000045776367,0.8790000081062317 3.0369999408721924,0.19900000095367432 3.256999969482422,-0.8510000109672546 C2.1070001125335693,-0.3610000014305115 1.2569999694824219,-0.5709999799728394 0.6570000052452087,-0.9509999752044678"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,55.334999084472656,61.696998596191406)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(0.5,0.8660253882408142,-0.8660253882408142,0.5,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M4.52400016784668,-2.7690000534057617 C4.52400016784668,-2.7690000534057617 8.175000190734863,-7.059000015258789 11.895000457763672,-6.658999919891357 C14.295000076293945,-6.39900016784668 18.173999786376953,-4.39900016784668 13.604000091552734,-2.4489998817443848 C9.034000396728516,-0.49900001287460327 5.553999900817871,1.0410000085830688 5.553999900817871,1.0410000085830688 C5.553999900817871,1.0410000085830688 -10.456000328063965,1.8309999704360962 -10.456000328063965,1.8309999704360962 C-10.456000328063965,1.8309999704360962 -15.246000289916992,8.640999794006348 -15.696000099182129,6.13100004196167 C-16.1560001373291,3.63100004196167 -10.935999870300293,0.20100000500679016 -10.935999870300293,0.20100000500679016 C-10.935999870300293,0.20100000500679016 -0.9760000109672546,-1.5490000247955322 4.52400016784668,-2.7690000534057617z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,64.5479965209961,62)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(217,78,100)"
                                      fillOpacity={1}
                                      d=" M-6.840000152587891,6.359000205993652 C-6.300000190734863,6.839000225067139 -2.9600000381469727,5.379000186920166 2.380000114440918,2.319000005722046 C7.730000019073486,-0.7409999966621399 8.720000267028809,-2.4609999656677246 7.960000038146973,-3.7709999084472656 C7.210000038146973,-5.080999851226807 6.949999809265137,-7.080999851226807 3.0999999046325684,-6.261000156402588 C-0.75,-5.431000232696533 -4.840000152587891,-1.9210000038146973 -5.880000114440918,-1.38100004196167 C-6.920000076293945,-0.8309999704360962 -7.860000133514404,3.509000062942505 -8.1899995803833,4.189000129699707 C-8.1899995803833,4.189000129699707 -7.389999866485596,5.879000186920166 -6.840000152587891,6.359000205993652z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.69400024414062,51.17100143432617)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M-7.375,8.470999717712402 C-7.375,8.470999717712402 -5.255000114440918,7.370999813079834 -4.635000228881836,6.690999984741211 C-4.005000114440918,6.020999908447266 -1.8350000381469727,3.3310000896453857 -2.2249999046325684,1.7309999465942383 C-2.2249999046325684,1.7309999465942383 -5.014999866485596,2.7809998989105225 -5.855000019073486,0.5709999799728394 C-6.954999923706055,-2.309000015258789 -1.6749999523162842,-9.019000053405762 -0.38499999046325684,-9.388999938964844 C0.9049999713897705,-9.769000053405762 3.765000104904175,-11.508999824523926 6.465000152587891,-9.33899974822998 C9.164999961853027,-7.169000148773193 5.284999847412109,2.0810000896453857 2.375,2.5209999084472656 C2.375,2.5209999084472656 -0.7549999952316284,7.671000003814697 0.32499998807907104,9.340999603271484 C0.32499998807907104,9.340999603271484 -4.125,11.220999717712402 -5.804999828338623,9.991000175476074 C-7.485000133514404,8.76099967956543 -7.375,8.470999717712402 -7.375,8.470999717712402"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.37200164794922,53.05699920654297)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(181,114,86)"
                                      fillOpacity={1}
                                      d=" M-1.2899999618530273,1.0080000162124634 C-1.25,0.828000009059906 -1.2300000190734863,0.6480000019073486 -1.2300000190734863,0.4779999852180481 C-1.2300000190734863,0.33799999952316284 -1.2400000095367432,0.1979999989271164 -1.2799999713897705,0.06800000369548798 C-1.2799999713897705,0.06800000369548798 0.6600000262260437,-0.34200000762939453 1.2899999618530273,-1.0119999647140503 C1.2899999618530273,-1.0119999647140503 -0.05000000074505806,0.7279999852180481 -1.2899999618530273,1.0080000162124634"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,72.40399932861328,44.599998474121094)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M-5.390999794006348,-1.534000039100647 C-5.390999794006348,-1.534000039100647 -7.491000175476074,-2.8540000915527344 -6.750999927520752,-4.144000053405762 C-6.011000156402588,-5.443999767303467 -3.9609999656677246,-4.144000053405762 -3.9609999656677246,-4.144000053405762 C-3.9609999656677246,-4.144000053405762 -6.750999927520752,-6.74399995803833 -5.080999851226807,-7.673999786376953 C-3.4010000228881836,-8.604000091552734 -0.050999999046325684,-6.004000186920166 -0.050999999046325684,-6.004000186920166 C-0.050999999046325684,-6.004000186920166 -0.6110000014305115,-7.854000091552734 0.6990000009536743,-8.413999557495117 C1.9989999532699585,-8.973999977111816 5.908999919891357,-4.703999996185303 4.979000091552734,-2.1040000915527344 C4.979000091552734,-2.1040000915527344 9.069000244140625,-0.6240000128746033 5.348999977111816,3.8259999752044678 C1.628999948501587,8.276000022888184 -0.6110000014305115,8.465999603271484 -0.6110000014305115,8.465999603271484 C-0.6110000014305115,8.465999603271484 -1.13100004196167,6.906000137329102 -0.2409999966621399,5.125999927520752 C-0.2409999966621399,5.125999927520752 0.13899999856948853,5.866000175476074 0.8790000081062317,5.495999813079834 C1.628999948501587,5.125999927520752 2.559000015258789,4.015999794006348 2.36899995803833,3.4560000896453857 C2.178999900817871,2.8959999084472656 -0.050999999046325684,3.6459999084472656 -0.050999999046325684,3.6459999084472656 C-0.050999999046325684,3.6459999084472656 -0.9810000061988831,1.5959999561309814 -0.050999999046325684,0.6759999990463257 C0.8790000081062317,-0.2540000081062317 -0.050999999046325684,-0.6240000128746033 -0.050999999046325684,-0.6240000128746033 C-0.050999999046325684,-0.6240000128746033 -3.571000099182129,-0.5040000081062317 -4.421000003814697,-2.4140000343322754 C-4.421000003814697,-2.4140000343322754 -4.770999908447266,-2.24399995803833 -5.390999794006348,-1.534000039100647"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,69.71199798583984,51.250999450683594)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M4.485000133514404,-2.6470000743865967 C4.485000133514404,-2.6470000743865967 2.7049999237060547,-0.5770000219345093 1.034999966621399,-0.7570000290870667 C-0.6449999809265137,-0.9470000267028809 -1.534999966621399,-2.687000036239624 -3.505000114440918,-2.187000036239624 C-3.505000114440918,-2.187000036239624 -5.114999771118164,-0.3869999945163727 -4.735000133514404,1.093000054359436 C-4.364999771118164,2.572999954223633 1.4049999713897705,4.802999973297119 4.755000114440918,-1.8769999742507935 C4.755000114440918,-1.8769999742507935 4.954999923706055,-2.867000102996826 4.485000133514404,-2.6470000743865967"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,68.80799865722656,51.823001861572266)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(225,235,230)"
                                      fillOpacity={1}
                                      d=" M-1.1519999504089355,-0.6359999775886536 C-1.1519999504089355,-0.6359999775886536 1.1480000019073486,-0.07599999755620956 1.1480000019073486,-0.07599999755620956 C1.1480000019073486,-0.07599999755620956 0.1979999989271164,0.6140000224113464 -0.4519999921321869,0.6340000033378601 C-1.1019999980926514,0.6639999747276306 -1.1519999504089355,-0.6359999775886536 -1.1519999504089355,-0.6359999775886536"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.69400024414062,51.17100143432617)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  />
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,67.1259994506836,68.36100006103516)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(222,75,103)"
                                      fillOpacity={1}
                                      d=" M-4.769999980926514,12.279999732971191 C-1.2300000190734863,12.829999923706055 1.2300000190734863,13.130000114440918 1.9299999475479126,10.979999542236328 C2.380000114440918,9.600000381469727 2.5299999713897705,5.960000038146973 5.46999979019165,3 C7.579999923706055,0.8799999952316284 11.600000381469727,-4.909999847412109 9.5,-8.399999618530273 C7.409999847412109,-11.890000343322754 2.9100000858306885,-10.079999923706055 1.940000057220459,-10.050000190734863 C0.9599999785423279,-10.010000228881836 2.809999942779541,-12.680000305175781 2.809999942779541,-12.680000305175781 C-2.0399999618530273,-11.510000228881836 -4.619999885559082,-9.3100004196167 -6.699999809265137,-5.809999942779541 C-9.680000305175781,-0.7699999809265137 -10.640000343322754,10.369999885559082 -9.800000190734863,11.720000267028809 C-9.800000190734863,11.720000267028809 -4.769999980926514,12.279999732971191 -4.769999980926514,12.279999732971191"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,67.43199920654297,64.21800231933594)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(222,75,103)"
                                      fillOpacity={1}
                                      d=" M-9.729000091552734,1.0199999809265137 C-9.729000091552734,1.0199999809265137 -8.49899959564209,3.7799999713897705 -9.569000244140625,4.929999828338623 C-9.569000244140625,4.929999828338623 -9.019000053405762,4.889999866485596 -8.439000129699707,5.429999828338623 C-7.859000205993652,5.960000038146973 -7.298999786376953,5.940000057220459 -7.11899995803833,5.75 C-6.939000129699707,5.550000190734863 -6.578999996185303,5.349999904632568 -6.578999996185303,5.349999904632568 C-6.578999996185303,5.349999904632568 -2.0290000438690186,7.210000038146973 3.6110000610351562,3.8399999141693115 C9.25100040435791,0.46000000834465027 10.291000366210938,-1.440000057220459 9.491000175476074,-2.890000104904175 C8.690999984741211,-4.349999904632568 8.41100025177002,-6.559999942779541 4.35099983215332,-5.659999847412109 C0.29100000858306885,-4.760000228881836 -4.0289998054504395,-0.8700000047683716 -5.11899995803833,-0.27000001072883606 C-6.218999862670898,0.33000001311302185 -7.459000110626221,0.7400000095367432 -7.459000110626221,0.7400000095367432 C-7.459000110626221,0.7400000095367432 -7.839000225067139,0.2199999988079071 -8.329000473022461,0.41999998688697815 C-8.809000015258789,0.6200000047683716 -9.388999938964844,0.27000001072883606 -9.729000091552734,1.0199999809265137"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,0.3420201539993286,-0.3420201539993286,0.9396926164627075,68.65499877929688,80.63099670410156)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M3.2739999294281006,-11.991000175476074 C3.2739999294281006,-11.991000175476074 2.7639999389648438,-7.500999927520752 2.7639999389648438,-7.500999927520752 C2.7639999389648438,-7.500999927520752 3.4040000438690186,-1.6009999513626099 1.2239999771118164,3.009000062942505 C1.2239999771118164,3.009000062942505 0.45399999618530273,5.318999767303467 0.45399999618530273,5.318999767303467 C0.45399999618530273,5.318999767303467 -0.3160000145435333,11.98900032043457 -2.365999937057495,11.98900032043457 C-4.415999889373779,11.98900032043457 -2.365999937057495,4.419000148773193 -2.365999937057495,4.419000148773193 C-2.365999937057495,4.419000148773193 -1.3359999656677246,-3.1410000324249268 -1.3359999656677246,-3.1410000324249268 C-1.3359999656677246,-3.1410000324249268 -0.5659999847412109,-6.091000080108643 -1.0859999656677246,-7.370999813079834 C-1.5959999561309814,-8.66100025177002 -1.7259999513626099,-11.35099983215332 -1.7259999513626099,-11.35099983215332 C-1.7259999513626099,-11.35099983215332 3.2739999294281006,-11.991000175476074 3.2739999294281006,-11.991000175476074z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,0.3420201539993286,-0.3420201539993286,0.9396926164627075,74.90599822998047,66.18800354003906)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(221,75,103)"
                                      fillOpacity={1}
                                      d=" M-0.9890000224113464,-5.257999897003174 C-0.9890000224113464,-5.257999897003174 0.8009999990463257,-5.257999897003174 0.8009999990463257,-5.257999897003174 C0.8009999990463257,-5.257999897003174 3.750999927520752,4.611999988555908 3.240999937057495,4.742000102996826 C2.7309999465942383,4.872000217437744 -3.2990000247955322,5.26200008392334 -3.2990000247955322,5.26200008392334 C-3.2990000247955322,5.26200008392334 -0.9890000224113464,-5.257999897003174 -0.9890000224113464,-5.257999897003174z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,63,68)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M16.565000534057617,58.49399948120117 C16.735000610351562,60.40599822998047 13.77299976348877,62.617000579833984 14.045999526977539,63.237998962402344 C14.491999626159668,63.632999420166016 15.140999794006348,63.59400177001953 15.687999725341797,63.5 C16.5,63.5 19.781999588012695,60.98400115966797 19.8439998626709,59.922000885009766 C19.888999938964844,59.1609992980957 19.038999557495117,58.104000091552734 18.44700050354004,57.76100158691406 C18.32699966430664,57.691001892089844 16.489999771118164,57.645999908447266 16.565000534057617,58.49399948120117z"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g
                                filter="url(#__lottie_element_39)"
                                transform="matrix(0.9999539256095886,0.009601956233382225,-0.009601956233382225,0.9999539256095886,45.91557312011719,26.378999710083008)"
                                opacity="0.9"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="url(#__lottie_element_40)"
                                    fillOpacity={1}
                                    d=" M4.138999938964844,12.140999794006348 C4.138999938964844,12.140999794006348 -4.13100004196167,12.140999794006348 -4.13100004196167,12.140999794006348 C-4.13100004196167,-1.1089999675750732 8.269000053405762,-0.33899998664855957 8.269000053405762,-8.718999862670898 C8.269000053405762,-13.33899974822998 4.548999786376953,-17.038999557495117 -0.0010000000474974513,-17.038999557495117 C-4.540999889373779,-17.038999557495117 -8.26099967956543,-13.048999786376953 -8.26099967956543,-8.58899974822998 C-8.26099967956543,-8.58899974822998 -16.5310001373291,-8.58899974822998 -16.5310001373291,-8.58899974822998 C-16.541000366210938,-13.038999557495117 -14.800999641418457,-17.319000244140625 -11.701000213623047,-20.4689998626709 C-8.590999603271484,-23.618999481201172 -4.390999794006348,-25.388999938964844 -0.0010000000474974513,-25.378999710083008 C9.128999710083008,-25.378999710083008 16.52899932861328,-17.979000091552734 16.52899932861328,-8.718999862670898 C16.52899932861328,1.7610000371932983 4.129000186920166,2.9509999752044678 4.129000186920166,12.140999794006348 C4.129000186920166,12.140999794006348 4.138999938964844,12.140999794006348 4.138999938964844,12.140999794006348z M4.4019999504089355,25.381999969482422 C4.4019999504089355,25.381999969482422 -4.4079999923706055,25.381999969482422 -4.4079999923706055,25.381999969482422 C-4.4079999923706055,25.381999969482422 -4.4079999923706055,16.552000045776367 -4.4079999923706055,16.552000045776367 C-4.4079999923706055,16.552000045776367 4.4120001792907715,16.552000045776367 4.4120001792907715,16.552000045776367 C4.4120001792907715,16.552000045776367 4.4019999504089355,25.381999969482422 4.4019999504089355,25.381999969482422z"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </td>
                      <td>
                        <h3 className="m-t-10">About Team Managers</h3>
                        <p className="m-b-20">
                          Use team managers to assign them rewards based on
                          their team's performance - or visibility on
                          participant rewards. Can't find the user you are
                          looking for?
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
                        <div
                          className="lottie m-r-20"
                        //   lottieurl="/app/Content/assets2/animated/info.json"
                          style={{ width: 110 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 126 136"
                            width={126}
                            height={136}
                            preserveAspectRatio="xMidYMid meet"
                            style={{
                              width: "100%",
                              height: "100%",
                              transform: "translate3d(0px, 0px, 0px)",
                              contentVisibility: "visible"
                            }}
                          >
                            <defs>
                              <clipPath id="__lottie_element_125">
                                <rect width={126} height={136} x={0} y={0} />
                              </clipPath>
                              <filter
                                id="__lottie_element_128"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="1.2246467991473532e-16"
                                  dy={2}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_129"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="2.2249999046325684"
                                y1="-25.378999710083008"
                                x2="-3.1080000400543213"
                                y2="116.54499816894531"
                              >
                                <stop offset="0%" stopColor="rgb(242,195,20)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(247,125,35)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(252,56,50)"
                                />
                              </linearGradient>
                              <clipPath id="__lottie_element_131">
                                <path d="M0,0 L126,0 L126,136 L0,136z" />
                              </clipPath>
                              <g id="__lottie_element_179">
                                <g
                                  transform="matrix(1,0,0,1,79.78299713134766,128.73199462890625)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  />
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M2.055999994277954,-2.8369998931884766 C1.5759999752044678,-1.8869999647140503 0.8859999775886536,-1.4670000076293945 0.29600000381469727,-1.2869999408721924 C0.29600000381469727,-1.2869999408721924 -0.6039999723434448,0.953000009059906 -0.6039999723434448,0.953000009059906 C-0.6039999723434448,0.953000009059906 -1.9639999866485596,1.8630000352859497 -2.874000072479248,2.312999963760376 C-3.7839999198913574,2.763000011444092 -0.6039999723434448,3.2230000495910645 0.3059999942779541,2.312999963760376 C1.215999960899353,1.4129999876022339 3.0360000133514404,-1.3070000410079956 3.0360000133514404,-1.3070000410079956 C3.0360000133514404,-1.3070000410079956 2.635999917984009,-1.847000002861023 2.055999994277954,-2.8369998931884766"
                                    />
                                  </g>
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M-10.407999992370605,3.0179998874664307"
                                    />
                                    <path
                                      strokeLinecap="butt"
                                      strokeLinejoin="miter"
                                      fillOpacity={0}
                                      strokeMiterlimit={4}
                                      stroke="rgb(255,255,255)"
                                      strokeOpacity="0.3"
                                      strokeWidth={2}
                                      d=" M-10.407999992370605,3.0179998874664307"
                                    />
                                  </g>
                                </g>
                              </g>
                              <mask
                                id="__lottie_element_179_1"
                                mask-type="alpha"
                              >
                                <use xlinkHref="#__lottie_element_179" />
                              </mask>
                              <filter
                                id="__lottie_element_208"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="6.123233995736766e-17"
                                  dy={1}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_209"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="43.784000396728516"
                                y1="43.784000396728516"
                                x2="-41.91699981689453"
                                y2="-43.784000396728516"
                              >
                                <stop offset="0%" stopColor="rgb(47,78,251)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(70,124,253)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(94,169,255)"
                                />
                              </linearGradient>
                              <filter
                                id="__lottie_element_212"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="6.123233995736766e-17"
                                  dy={1}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_213"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="42.83100128173828"
                                y1="37.24300003051758"
                                x2="-42.83100128173828"
                                y2="-44.2869987487793"
                              >
                                <stop offset="0%" stopColor="rgb(47,78,251)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(70,124,253)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(94,169,255)"
                                />
                              </linearGradient>
                            </defs>
                            <g clipPath="url(#__lottie_element_125)">
                              <g
                                filter="url(#__lottie_element_212)"
                                transform="matrix(1,0,0,1,63.21500015258789,63.93600082397461)"
                                opacity="0.13"
                                style={{ display: "block" }}
                              >
                                <g
                                  opacity={1}
                                  transform="matrix(0.4226182699203491,0.9063078165054321,-0.9063078165054321,0.4226182699203491,0,0)"
                                >
                                  <path
                                    fill="url(#__lottie_element_213)"
                                    fillOpacity={1}
                                    d=" M42.83100128173828,-38.20399856567383 C42.83100128173828,-38.20399856567383 42.83100128173828,38.20399856567383 42.83100128173828,38.20399856567383 C42.83100128173828,41.56120681762695 40.10520935058594,44.2869987487793 36.74800109863281,44.2869987487793 C36.74800109863281,44.2869987487793 -36.74800109863281,44.2869987487793 -36.74800109863281,44.2869987487793 C-40.10520935058594,44.2869987487793 -42.83100128173828,41.56120681762695 -42.83100128173828,38.20399856567383 C-42.83100128173828,38.20399856567383 -42.83100128173828,-38.20399856567383 -42.83100128173828,-38.20399856567383 C-42.83100128173828,-41.56120681762695 -40.10520935058594,-44.2869987487793 -36.74800109863281,-44.2869987487793 C-36.74800109863281,-44.2869987487793 36.74800109863281,-44.2869987487793 36.74800109863281,-44.2869987487793 C40.10520935058594,-44.2869987487793 42.83100128173828,-41.56120681762695 42.83100128173828,-38.20399856567383z"
                                  />
                                </g>
                              </g>
                              <g
                                filter="url(#__lottie_element_208)"
                                transform="matrix(1,0,0,1,63.007999420166016,63.87799835205078)"
                                opacity="0.68"
                                style={{ display: "block" }}
                              >
                                <g
                                  opacity={1}
                                  transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,0,0)"
                                >
                                  <path
                                    fill="url(#__lottie_element_209)"
                                    fillOpacity={1}
                                    d=" M43.784000396728516,-37.70100021362305 C43.784000396728516,-37.70100021362305 43.784000396728516,37.70100021362305 43.784000396728516,37.70100021362305 C43.784000396728516,41.05820846557617 41.05820846557617,43.784000396728516 37.70100021362305,43.784000396728516 C37.70100021362305,43.784000396728516 -37.70100021362305,43.784000396728516 -37.70100021362305,43.784000396728516 C-41.05820846557617,43.784000396728516 -43.784000396728516,41.05820846557617 -43.784000396728516,37.70100021362305 C-43.784000396728516,37.70100021362305 -43.784000396728516,-37.70100021362305 -43.784000396728516,-37.70100021362305 C-43.784000396728516,-41.05820846557617 -41.05820846557617,-43.784000396728516 -37.70100021362305,-43.784000396728516 C-37.70100021362305,-43.784000396728516 37.70100021362305,-43.784000396728516 37.70100021362305,-43.784000396728516 C41.05820846557617,-43.784000396728516 43.784000396728516,-41.05820846557617 43.784000396728516,-37.70100021362305z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(0.8066285848617554,0,0,0.8066285848617554,42.33244323730469,76.41242218017578)"
                                opacity="0.3"
                                style={{ display: "none" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M1.5140000581741333,4.420000076293945 C1.5140000581741333,4.420000076293945 -1.496000051498413,4.420000076293945 -1.496000051498413,4.420000076293945 C-1.496000051498413,-0.3700000047683716 3.0239999294281006,-0.09000000357627869 3.0239999294281006,-3.119999885559082 C3.0239999294281006,-3.9200000762939453 2.7039999961853027,-4.690000057220459 2.134000062942505,-5.260000228881836 C1.5740000009536743,-5.820000171661377 0.8040000200271606,-6.130000114440918 0.004000000189989805,-6.130000114440918 C-1.656000018119812,-6.099999904632568 -2.996000051498413,-4.75 -3.0160000324249268,-3.069999933242798 C-3.0160000324249268,-3.069999933242798 -6.035999774932861,-3.069999933242798 -6.035999774932861,-3.069999933242798 C-5.995999813079834,-6.389999866485596 -3.315999984741211,-9.0600004196167 -0.026000000536441803,-9.069999694824219 C3.2739999294281006,-9.079999923706055 5.964000225067139,-6.440000057220459 6.033999919891357,-3.119999885559082 C6.044000148773193,0.6700000166893005 1.5140000581741333,1.100000023841858 1.5140000581741333,4.420000076293945z M1.559999942779541,9.067000389099121 C1.559999942779541,9.067000389099121 -1.5499999523162842,9.067000389099121 -1.5499999523162842,9.067000389099121 C-1.5499999523162842,9.067000389099121 -1.5499999523162842,5.986999988555908 -1.5499999523162842,5.986999988555908 C-1.5499999523162842,5.986999988555908 1.559999942779541,5.986999988555908 1.559999942779541,5.986999988555908 C1.559999942779541,5.986999988555908 1.559999942779541,9.067000389099121 1.559999942779541,9.067000389099121z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(0.9345836639404297,0,0,0.9345836639404297,34.04702377319336,71.64570617675781)"
                                opacity="0.3"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M1.5140000581741333,4.420000076293945 C1.5140000581741333,4.420000076293945 -1.496000051498413,4.420000076293945 -1.496000051498413,4.420000076293945 C-1.496000051498413,-0.3700000047683716 3.0239999294281006,-0.09000000357627869 3.0239999294281006,-3.119999885559082 C3.0239999294281006,-3.9200000762939453 2.7039999961853027,-4.690000057220459 2.134000062942505,-5.260000228881836 C1.5740000009536743,-5.820000171661377 0.8040000200271606,-6.130000114440918 0.004000000189989805,-6.130000114440918 C-1.656000018119812,-6.099999904632568 -2.996000051498413,-4.75 -3.0160000324249268,-3.069999933242798 C-3.0160000324249268,-3.069999933242798 -6.035999774932861,-3.069999933242798 -6.035999774932861,-3.069999933242798 C-5.995999813079834,-6.389999866485596 -3.315999984741211,-9.0600004196167 -0.026000000536441803,-9.069999694824219 C3.2739999294281006,-9.079999923706055 5.964000225067139,-6.440000057220459 6.033999919891357,-3.119999885559082 C6.044000148773193,0.6700000166893005 1.5140000581741333,1.100000023841858 1.5140000581741333,4.420000076293945z M1.559999942779541,9.067000389099121 C1.559999942779541,9.067000389099121 -1.5499999523162842,9.067000389099121 -1.5499999523162842,9.067000389099121 C-1.5499999523162842,9.067000389099121 -1.5499999523162842,5.986999988555908 -1.5499999523162842,5.986999988555908 C-1.5499999523162842,5.986999988555908 1.559999942779541,5.986999988555908 1.559999942779541,5.986999988555908 C1.559999942779541,5.986999988555908 1.559999942779541,9.067000389099121 1.559999942779541,9.067000389099121z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(1.376571536064148,0,0,1.376571536064148,89.19706726074219,86.84052276611328)"
                                opacity="0.3"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M0.6169999837875366,1.7979999780654907 C0.6169999837875366,1.7979999780654907 -0.6230000257492065,1.7979999780654907 -0.6230000257492065,1.7979999780654907 C-0.6230000257492065,-0.16200000047683716 1.2369999885559082,-0.052000001072883606 1.2369999885559082,-1.2920000553131104 C1.2369999885559082,-1.972000002861023 0.6769999861717224,-2.5220000743865967 -0.003000000026077032,-2.5220000743865967 C-0.6830000281333923,-2.51200008392334 -1.2230000495910645,-1.9520000219345093 -1.2330000400543213,-1.2719999551773071 C-1.2330000400543213,-1.2719999551773071 -2.4730000495910645,-1.2719999551773071 -2.4730000495910645,-1.2719999551773071 C-2.443000078201294,-2.621999979019165 -1.3530000448226929,-3.691999912261963 -0.013000000268220901,-3.7019999027252197 C1.3270000219345093,-3.7119998931884766 2.427000045776367,-2.631999969482422 2.4769999980926514,-1.2920000553131104 C2.4769999980926514,0.257999986410141 0.6269999742507935,0.43799999356269836 0.6269999742507935,1.7979999780654907 C0.6269999742507935,1.7979999780654907 0.6169999837875366,1.7979999780654907 0.6169999837875366,1.7979999780654907z M0.6420000195503235,3.697999954223633 C0.6420000195503235,3.697999954223633 -0.6380000114440918,3.697999954223633 -0.6380000114440918,3.697999954223633 C-0.6380000114440918,3.697999954223633 -0.6380000114440918,2.437999963760376 -0.6380000114440918,2.437999963760376 C-0.6380000114440918,2.437999963760376 0.6420000195503235,2.437999963760376 0.6420000195503235,2.437999963760376 C0.6420000195503235,2.437999963760376 0.6420000195503235,3.697999954223633 0.6420000195503235,3.697999954223633z"
                                  />
                                </g>
                              </g>
                              <g
                                clipPath="url(#__lottie_element_131)"
                                transform="matrix(1,0,0,1,0,0)"
                                opacity={1}
                                style={{ display: "block" }}
                              >
                                <g
                                  transform="matrix(1,0,0,1,63.70000076293945,131.52499389648438)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(223,218,224)"
                                      fillOpacity={1}
                                      d=" M0,2.7100000381469727 C-14.75,2.7100000381469727 -26.700000762939453,1.5 -26.700000762939453,0 C-26.700000762939453,-1.5 -14.75,-2.7100000381469727 0,-2.7100000381469727 C14.75,-2.7100000381469727 26.700000762939453,-1.5 26.700000762939453,0 C26.700000762939453,1.5 14.75,2.7100000381469727 0,2.7100000381469727"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,79.63999938964844,28.82699966430664)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(250,236,233)"
                                      fillOpacity={1}
                                      d=" M0.039000000804662704,-0.019999999552965164 C0.039000000804662704,-0.019999999552965164 -0.020999999716877937,-0.03999999910593033 -0.020999999716877937,-0.03999999910593033 C-0.020999999716877937,-0.03999999910593033 -0.061000000685453415,-0.019999999552965164 -0.061000000685453415,-0.019999999552965164 C-0.061000000685453415,-0.019999999552965164 -0.04100000113248825,0.019999999552965164 -0.04100000113248825,0.019999999552965164 C-0.04100000113248825,0.019999999552965164 0.01899999938905239,0.03999999910593033 0.01899999938905239,0.03999999910593033 C0.01899999938905239,0.03999999910593033 0.0689999982714653,0.019999999552965164 0.0689999982714653,0.019999999552965164 C0.0689999982714653,0.019999999552965164 0.039000000804662704,-0.019999999552965164 0.039000000804662704,-0.019999999552965164"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,71.7979965209961,72.63200378417969)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(248,223,158)"
                                      fillOpacity={1}
                                      d=" M-0.9150000214576721,1.0010000467300415 C-0.6650000214576721,0.5609999895095825 -0.38499999046325684,0.12099999934434891 -0.04500000178813934,-0.3089999854564667 C0.26499998569488525,-0.5389999747276306 0.5849999785423279,-0.7689999938011169 0.9150000214576721,-0.9990000128746033 C0.32499998807907104,-0.3089999854564667 -0.2849999964237213,0.35100001096725464 -0.9150000214576721,1.0010000467300415"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,71.37300109863281,104.23400115966797)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M10.472000122070312,21.656999588012695 C9.552000045776367,20.066999435424805 8.192000389099121,17.30699920654297 7.3520002365112305,13.687000274658203 C5.992000102996826,7.796999931335449 0.5419999957084656,1.9170000553131104 0.5419999957084656,1.9170000553131104 C0.0820000022649765,-3.5230000019073486 -3.0980000495910645,-19.822999954223633 -3.0980000495910645,-20.273000717163086 C-3.0980000495910645,-20.273000717163086 -7.188000202178955,-27.972999572753906 -9.907999992370605,-18.46299934387207 C-12.637999534606934,-8.95300006866455 -4.458000183105469,-0.3529999852180481 -4.458000183105469,2.367000102996826 C-4.458000183105469,5.077000141143799 8.722000122070312,23.187000274658203 8.722000122070312,23.187000274658203 C8.722000122070312,23.187000274658203 8.711999893188477,23.216999053955078 8.711999893188477,23.216999053955078 C9.291999816894531,23.027000427246094 9.982000350952148,22.60700035095215 10.472000122070312,21.656999588012695"
                                    />
                                  </g>
                                </g>
                                <g
                                  mask="url(#__lottie_element_179_1)"
                                  style={{ display: "block" }}
                                >
                                  <g
                                    transform="matrix(1,0,0,1,65.04900360107422,90.08699798583984)"
                                    opacity={1}
                                  >
                                    <g
                                      opacity={1}
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        fill="rgb(33,33,33)"
                                        fillOpacity={1}
                                        d=" M-1.684000015258789,9.064000129699707 C-2.9839999675750732,6.343999862670898 -4.144000053405762,3.134000062942505 -4.144000053405762,-0.3059999942779541 C-4.144000053405762,-1.6160000562667847 -3.9739999771118164,-2.9560000896453857 -3.5840001106262207,-4.315999984741211 C-2.5439999103546143,-7.946000099182129 -1.3040000200271606,-9.065999984741211 -0.17399999499320984,-9.065999984741211 C1.6660000085830688,-9.065999984741211 3.2260000705718994,-6.125999927520752 3.2260000705718994,-6.125999927520752 C3.2260000705718994,-5.966000080108643 3.615999937057495,-3.865999937057495 4.145999908447266,-0.9660000205039978 C3.8959999084472656,-0.7459999918937683 3.625999927520752,-0.5360000133514404 3.305999994277954,-0.335999995470047 C1.5360000133514404,0.7639999985694885 -0.23399999737739563,4.874000072479248 -1.684000015258789,9.064000129699707"
                                      />
                                    </g>
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,60.21099853515625,101.96600341796875)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M7.730000019073486,-24.113000869750977 C3.8499999046325684,-24.113000869750977 -0.27000001072883606,-28.933000564575195 -0.27000001072883606,-28.933000564575195 C-0.27000001072883606,-28.933000564575195 -2.140000104904175,-27.632999420166016 -3.049999952316284,-21.232999801635742 C-3.4800000190734863,-18.222999572753906 -4.860000133514404,-1.312999963760376 -5.769999980926514,2.756999969482422 C-6.670000076293945,6.767000198364258 -9.760000228881836,27.836999893188477 -9.859999656677246,28.547000885009766 C-9.270000457763672,28.927000045776367 -8.40999984741211,29.136999130249023 -7.269999980926514,28.64699935913086 C-6.71999979019165,25.94700050354004 -5.460000038146973,20.756999969482422 -3.5,18.156999588012695 C-0.7799999713897705,14.536999702453613 -1.6799999475479126,7.2870001792907715 -0.7799999713897705,5.0269999504089355 C0.12999999523162842,2.756999969482422 3.7699999809265137,-12.17300033569336 7.400000095367432,-14.442999839782715 C12.199999809265137,-17.433000564575195 8.65999984741211,-24.113000869750977 7.730000019073486,-24.113000869750977"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,49.68899917602539,131.46499633789062)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M0.6570000052452087,-0.9509999752044678 C0.6570000052452087,-0.9509999752044678 0.6570000052452087,-0.9309999942779541 0.6570000052452087,-0.9309999942779541 C0.6570000052452087,-0.9309999942779541 -2.9730000495910645,-0.03099999949336052 -2.9730000495910645,-0.03099999949336052 C-4.793000221252441,1.3289999961853027 2.927000045776367,0.8790000081062317 2.927000045776367,0.8790000081062317 C2.927000045776367,0.8790000081062317 3.0369999408721924,0.19900000095367432 3.256999969482422,-0.8510000109672546 C2.1070001125335693,-0.3610000014305115 1.2569999694824219,-0.5709999799728394 0.6570000052452087,-0.9509999752044678"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,55.334999084472656,61.696998596191406)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(0.5,0.8660253882408142,-0.8660253882408142,0.5,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M4.52400016784668,-2.7690000534057617 C4.52400016784668,-2.7690000534057617 8.175000190734863,-7.059000015258789 11.895000457763672,-6.658999919891357 C14.295000076293945,-6.39900016784668 18.173999786376953,-4.39900016784668 13.604000091552734,-2.4489998817443848 C9.034000396728516,-0.49900001287460327 5.553999900817871,1.0410000085830688 5.553999900817871,1.0410000085830688 C5.553999900817871,1.0410000085830688 -10.456000328063965,1.8309999704360962 -10.456000328063965,1.8309999704360962 C-10.456000328063965,1.8309999704360962 -15.246000289916992,8.640999794006348 -15.696000099182129,6.13100004196167 C-16.1560001373291,3.63100004196167 -10.935999870300293,0.20100000500679016 -10.935999870300293,0.20100000500679016 C-10.935999870300293,0.20100000500679016 -0.9760000109672546,-1.5490000247955322 4.52400016784668,-2.7690000534057617z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,64.5479965209961,62)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(217,78,100)"
                                      fillOpacity={1}
                                      d=" M-6.840000152587891,6.359000205993652 C-6.300000190734863,6.839000225067139 -2.9600000381469727,5.379000186920166 2.380000114440918,2.319000005722046 C7.730000019073486,-0.7409999966621399 8.720000267028809,-2.4609999656677246 7.960000038146973,-3.7709999084472656 C7.210000038146973,-5.080999851226807 6.949999809265137,-7.080999851226807 3.0999999046325684,-6.261000156402588 C-0.75,-5.431000232696533 -4.840000152587891,-1.9210000038146973 -5.880000114440918,-1.38100004196167 C-6.920000076293945,-0.8309999704360962 -7.860000133514404,3.509000062942505 -8.1899995803833,4.189000129699707 C-8.1899995803833,4.189000129699707 -7.389999866485596,5.879000186920166 -6.840000152587891,6.359000205993652z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.69400024414062,51.17100143432617)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M-7.375,8.470999717712402 C-7.375,8.470999717712402 -5.255000114440918,7.370999813079834 -4.635000228881836,6.690999984741211 C-4.005000114440918,6.020999908447266 -1.8350000381469727,3.3310000896453857 -2.2249999046325684,1.7309999465942383 C-2.2249999046325684,1.7309999465942383 -5.014999866485596,2.7809998989105225 -5.855000019073486,0.5709999799728394 C-6.954999923706055,-2.309000015258789 -1.6749999523162842,-9.019000053405762 -0.38499999046325684,-9.388999938964844 C0.9049999713897705,-9.769000053405762 3.765000104904175,-11.508999824523926 6.465000152587891,-9.33899974822998 C9.164999961853027,-7.169000148773193 5.284999847412109,2.0810000896453857 2.375,2.5209999084472656 C2.375,2.5209999084472656 -0.7549999952316284,7.671000003814697 0.32499998807907104,9.340999603271484 C0.32499998807907104,9.340999603271484 -4.125,11.220999717712402 -5.804999828338623,9.991000175476074 C-7.485000133514404,8.76099967956543 -7.375,8.470999717712402 -7.375,8.470999717712402"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.37200164794922,53.05699920654297)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(181,114,86)"
                                      fillOpacity={1}
                                      d=" M-1.2899999618530273,1.0080000162124634 C-1.25,0.828000009059906 -1.2300000190734863,0.6480000019073486 -1.2300000190734863,0.4779999852180481 C-1.2300000190734863,0.33799999952316284 -1.2400000095367432,0.1979999989271164 -1.2799999713897705,0.06800000369548798 C-1.2799999713897705,0.06800000369548798 0.6600000262260437,-0.34200000762939453 1.2899999618530273,-1.0119999647140503 C1.2899999618530273,-1.0119999647140503 -0.05000000074505806,0.7279999852180481 -1.2899999618530273,1.0080000162124634"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,72.40399932861328,44.599998474121094)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M-5.390999794006348,-1.534000039100647 C-5.390999794006348,-1.534000039100647 -7.491000175476074,-2.8540000915527344 -6.750999927520752,-4.144000053405762 C-6.011000156402588,-5.443999767303467 -3.9609999656677246,-4.144000053405762 -3.9609999656677246,-4.144000053405762 C-3.9609999656677246,-4.144000053405762 -6.750999927520752,-6.74399995803833 -5.080999851226807,-7.673999786376953 C-3.4010000228881836,-8.604000091552734 -0.050999999046325684,-6.004000186920166 -0.050999999046325684,-6.004000186920166 C-0.050999999046325684,-6.004000186920166 -0.6110000014305115,-7.854000091552734 0.6990000009536743,-8.413999557495117 C1.9989999532699585,-8.973999977111816 5.908999919891357,-4.703999996185303 4.979000091552734,-2.1040000915527344 C4.979000091552734,-2.1040000915527344 9.069000244140625,-0.6240000128746033 5.348999977111816,3.8259999752044678 C1.628999948501587,8.276000022888184 -0.6110000014305115,8.465999603271484 -0.6110000014305115,8.465999603271484 C-0.6110000014305115,8.465999603271484 -1.13100004196167,6.906000137329102 -0.2409999966621399,5.125999927520752 C-0.2409999966621399,5.125999927520752 0.13899999856948853,5.866000175476074 0.8790000081062317,5.495999813079834 C1.628999948501587,5.125999927520752 2.559000015258789,4.015999794006348 2.36899995803833,3.4560000896453857 C2.178999900817871,2.8959999084472656 -0.050999999046325684,3.6459999084472656 -0.050999999046325684,3.6459999084472656 C-0.050999999046325684,3.6459999084472656 -0.9810000061988831,1.5959999561309814 -0.050999999046325684,0.6759999990463257 C0.8790000081062317,-0.2540000081062317 -0.050999999046325684,-0.6240000128746033 -0.050999999046325684,-0.6240000128746033 C-0.050999999046325684,-0.6240000128746033 -3.571000099182129,-0.5040000081062317 -4.421000003814697,-2.4140000343322754 C-4.421000003814697,-2.4140000343322754 -4.770999908447266,-2.24399995803833 -5.390999794006348,-1.534000039100647"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,69.71199798583984,51.250999450683594)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M4.485000133514404,-2.6470000743865967 C4.485000133514404,-2.6470000743865967 2.7049999237060547,-0.5770000219345093 1.034999966621399,-0.7570000290870667 C-0.6449999809265137,-0.9470000267028809 -1.534999966621399,-2.687000036239624 -3.505000114440918,-2.187000036239624 C-3.505000114440918,-2.187000036239624 -5.114999771118164,-0.3869999945163727 -4.735000133514404,1.093000054359436 C-4.364999771118164,2.572999954223633 1.4049999713897705,4.802999973297119 4.755000114440918,-1.8769999742507935 C4.755000114440918,-1.8769999742507935 4.954999923706055,-2.867000102996826 4.485000133514404,-2.6470000743865967"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,68.80799865722656,51.823001861572266)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(225,235,230)"
                                      fillOpacity={1}
                                      d=" M-1.1519999504089355,-0.6359999775886536 C-1.1519999504089355,-0.6359999775886536 1.1480000019073486,-0.07599999755620956 1.1480000019073486,-0.07599999755620956 C1.1480000019073486,-0.07599999755620956 0.1979999989271164,0.6140000224113464 -0.4519999921321869,0.6340000033378601 C-1.1019999980926514,0.6639999747276306 -1.1519999504089355,-0.6359999775886536 -1.1519999504089355,-0.6359999775886536"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.69400024414062,51.17100143432617)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  />
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,67.1259994506836,68.36100006103516)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(222,75,103)"
                                      fillOpacity={1}
                                      d=" M-4.769999980926514,12.279999732971191 C-1.2300000190734863,12.829999923706055 1.2300000190734863,13.130000114440918 1.9299999475479126,10.979999542236328 C2.380000114440918,9.600000381469727 2.5299999713897705,5.960000038146973 5.46999979019165,3 C7.579999923706055,0.8799999952316284 11.600000381469727,-4.909999847412109 9.5,-8.399999618530273 C7.409999847412109,-11.890000343322754 2.9100000858306885,-10.079999923706055 1.940000057220459,-10.050000190734863 C0.9599999785423279,-10.010000228881836 2.809999942779541,-12.680000305175781 2.809999942779541,-12.680000305175781 C-2.0399999618530273,-11.510000228881836 -4.619999885559082,-9.3100004196167 -6.699999809265137,-5.809999942779541 C-9.680000305175781,-0.7699999809265137 -10.640000343322754,10.369999885559082 -9.800000190734863,11.720000267028809 C-9.800000190734863,11.720000267028809 -4.769999980926514,12.279999732971191 -4.769999980926514,12.279999732971191"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,67.43199920654297,64.21800231933594)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(222,75,103)"
                                      fillOpacity={1}
                                      d=" M-9.729000091552734,1.0199999809265137 C-9.729000091552734,1.0199999809265137 -8.49899959564209,3.7799999713897705 -9.569000244140625,4.929999828338623 C-9.569000244140625,4.929999828338623 -9.019000053405762,4.889999866485596 -8.439000129699707,5.429999828338623 C-7.859000205993652,5.960000038146973 -7.298999786376953,5.940000057220459 -7.11899995803833,5.75 C-6.939000129699707,5.550000190734863 -6.578999996185303,5.349999904632568 -6.578999996185303,5.349999904632568 C-6.578999996185303,5.349999904632568 -2.0290000438690186,7.210000038146973 3.6110000610351562,3.8399999141693115 C9.25100040435791,0.46000000834465027 10.291000366210938,-1.440000057220459 9.491000175476074,-2.890000104904175 C8.690999984741211,-4.349999904632568 8.41100025177002,-6.559999942779541 4.35099983215332,-5.659999847412109 C0.29100000858306885,-4.760000228881836 -4.0289998054504395,-0.8700000047683716 -5.11899995803833,-0.27000001072883606 C-6.218999862670898,0.33000001311302185 -7.459000110626221,0.7400000095367432 -7.459000110626221,0.7400000095367432 C-7.459000110626221,0.7400000095367432 -7.839000225067139,0.2199999988079071 -8.329000473022461,0.41999998688697815 C-8.809000015258789,0.6200000047683716 -9.388999938964844,0.27000001072883606 -9.729000091552734,1.0199999809265137"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,0.3420201539993286,-0.3420201539993286,0.9396926164627075,68.65499877929688,80.63099670410156)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M3.2739999294281006,-11.991000175476074 C3.2739999294281006,-11.991000175476074 2.7639999389648438,-7.500999927520752 2.7639999389648438,-7.500999927520752 C2.7639999389648438,-7.500999927520752 3.4040000438690186,-1.6009999513626099 1.2239999771118164,3.009000062942505 C1.2239999771118164,3.009000062942505 0.45399999618530273,5.318999767303467 0.45399999618530273,5.318999767303467 C0.45399999618530273,5.318999767303467 -0.3160000145435333,11.98900032043457 -2.365999937057495,11.98900032043457 C-4.415999889373779,11.98900032043457 -2.365999937057495,4.419000148773193 -2.365999937057495,4.419000148773193 C-2.365999937057495,4.419000148773193 -1.3359999656677246,-3.1410000324249268 -1.3359999656677246,-3.1410000324249268 C-1.3359999656677246,-3.1410000324249268 -0.5659999847412109,-6.091000080108643 -1.0859999656677246,-7.370999813079834 C-1.5959999561309814,-8.66100025177002 -1.7259999513626099,-11.35099983215332 -1.7259999513626099,-11.35099983215332 C-1.7259999513626099,-11.35099983215332 3.2739999294281006,-11.991000175476074 3.2739999294281006,-11.991000175476074z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,0.3420201539993286,-0.3420201539993286,0.9396926164627075,74.90599822998047,66.18800354003906)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(221,75,103)"
                                      fillOpacity={1}
                                      d=" M-0.9890000224113464,-5.257999897003174 C-0.9890000224113464,-5.257999897003174 0.8009999990463257,-5.257999897003174 0.8009999990463257,-5.257999897003174 C0.8009999990463257,-5.257999897003174 3.750999927520752,4.611999988555908 3.240999937057495,4.742000102996826 C2.7309999465942383,4.872000217437744 -3.2990000247955322,5.26200008392334 -3.2990000247955322,5.26200008392334 C-3.2990000247955322,5.26200008392334 -0.9890000224113464,-5.257999897003174 -0.9890000224113464,-5.257999897003174z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,63,68)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M16.565000534057617,58.49399948120117 C16.735000610351562,60.40599822998047 13.77299976348877,62.617000579833984 14.045999526977539,63.237998962402344 C14.491999626159668,63.632999420166016 15.140999794006348,63.59400177001953 15.687999725341797,63.5 C16.5,63.5 19.781999588012695,60.98400115966797 19.8439998626709,59.922000885009766 C19.888999938964844,59.1609992980957 19.038999557495117,58.104000091552734 18.44700050354004,57.76100158691406 C18.32699966430664,57.691001892089844 16.489999771118164,57.645999908447266 16.565000534057617,58.49399948120117z"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g
                                filter="url(#__lottie_element_128)"
                                transform="matrix(0.9999549388885498,0.009494448080658913,-0.009494448080658913,0.9999549388885498,45.91279983520508,26.378999710083008)"
                                opacity="0.9"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="url(#__lottie_element_129)"
                                    fillOpacity={1}
                                    d=" M4.138999938964844,12.140999794006348 C4.138999938964844,12.140999794006348 -4.13100004196167,12.140999794006348 -4.13100004196167,12.140999794006348 C-4.13100004196167,-1.1089999675750732 8.269000053405762,-0.33899998664855957 8.269000053405762,-8.718999862670898 C8.269000053405762,-13.33899974822998 4.548999786376953,-17.038999557495117 -0.0010000000474974513,-17.038999557495117 C-4.540999889373779,-17.038999557495117 -8.26099967956543,-13.048999786376953 -8.26099967956543,-8.58899974822998 C-8.26099967956543,-8.58899974822998 -16.5310001373291,-8.58899974822998 -16.5310001373291,-8.58899974822998 C-16.541000366210938,-13.038999557495117 -14.800999641418457,-17.319000244140625 -11.701000213623047,-20.4689998626709 C-8.590999603271484,-23.618999481201172 -4.390999794006348,-25.388999938964844 -0.0010000000474974513,-25.378999710083008 C9.128999710083008,-25.378999710083008 16.52899932861328,-17.979000091552734 16.52899932861328,-8.718999862670898 C16.52899932861328,1.7610000371932983 4.129000186920166,2.9509999752044678 4.129000186920166,12.140999794006348 C4.129000186920166,12.140999794006348 4.138999938964844,12.140999794006348 4.138999938964844,12.140999794006348z M4.4019999504089355,25.381999969482422 C4.4019999504089355,25.381999969482422 -4.4079999923706055,25.381999969482422 -4.4079999923706055,25.381999969482422 C-4.4079999923706055,25.381999969482422 -4.4079999923706055,16.552000045776367 -4.4079999923706055,16.552000045776367 C-4.4079999923706055,16.552000045776367 4.4120001792907715,16.552000045776367 4.4120001792907715,16.552000045776367 C4.4120001792907715,16.552000045776367 4.4019999504089355,25.381999969482422 4.4019999504089355,25.381999969482422z"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </td>
                      <td>
                        <h3 className="m-t-10">About Parent Teams</h3>
                        <p className="m-b-20">
                          Use a parent team to build up your hierarchy - you
                          need at least another team to set a parent. Can't find
                          the team you're looking for?
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
          <div id="div_Tags" className="infoBox hide m-l-30 p-t-10 p-r-10">
            <div className="card-info">
              <div className="card-info-label">
                <div className="card-info-label-text">Info</div>
              </div>
              <div className="card-info-content">
                <table>
                  <tbody>
                    <tr>
                      <td valign="top">
                        <div
                          className="lottie m-r-20"
                        //   lottieurl="/app/Content/assets2/animated/info.json"
                          style={{ width: 110 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 126 136"
                            width={126}
                            height={136}
                            preserveAspectRatio="xMidYMid meet"
                            style={{
                              width: "100%",
                              height: "100%",
                              transform: "translate3d(0px, 0px, 0px)",
                              contentVisibility: "visible"
                            }}
                          >
                            <defs>
                              <clipPath id="__lottie_element_214">
                                <rect width={126} height={136} x={0} y={0} />
                              </clipPath>
                              <filter
                                id="__lottie_element_217"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="1.2246467991473532e-16"
                                  dy={2}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_218"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="2.2249999046325684"
                                y1="-25.378999710083008"
                                x2="-3.1080000400543213"
                                y2="116.54499816894531"
                              >
                                <stop offset="0%" stopColor="rgb(242,195,20)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(247,125,35)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(252,56,50)"
                                />
                              </linearGradient>
                              <clipPath id="__lottie_element_220">
                                <path d="M0,0 L126,0 L126,136 L0,136z" />
                              </clipPath>
                              <g id="__lottie_element_268">
                                <g
                                  transform="matrix(1,0,0,1,79.78299713134766,128.73199462890625)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  />
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M2.055999994277954,-2.8369998931884766 C1.5759999752044678,-1.8869999647140503 0.8859999775886536,-1.4670000076293945 0.29600000381469727,-1.2869999408721924 C0.29600000381469727,-1.2869999408721924 -0.6039999723434448,0.953000009059906 -0.6039999723434448,0.953000009059906 C-0.6039999723434448,0.953000009059906 -1.9639999866485596,1.8630000352859497 -2.874000072479248,2.312999963760376 C-3.7839999198913574,2.763000011444092 -0.6039999723434448,3.2230000495910645 0.3059999942779541,2.312999963760376 C1.215999960899353,1.4129999876022339 3.0360000133514404,-1.3070000410079956 3.0360000133514404,-1.3070000410079956 C3.0360000133514404,-1.3070000410079956 2.635999917984009,-1.847000002861023 2.055999994277954,-2.8369998931884766"
                                    />
                                  </g>
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M-10.407999992370605,3.0179998874664307"
                                    />
                                    <path
                                      strokeLinecap="butt"
                                      strokeLinejoin="miter"
                                      fillOpacity={0}
                                      strokeMiterlimit={4}
                                      stroke="rgb(255,255,255)"
                                      strokeOpacity="0.3"
                                      strokeWidth={2}
                                      d=" M-10.407999992370605,3.0179998874664307"
                                    />
                                  </g>
                                </g>
                              </g>
                              <mask
                                id="__lottie_element_268_1"
                                mask-type="alpha"
                              >
                                <use xlinkHref="#__lottie_element_268" />
                              </mask>
                              <filter
                                id="__lottie_element_297"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="6.123233995736766e-17"
                                  dy={1}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_298"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="43.784000396728516"
                                y1="43.784000396728516"
                                x2="-41.91699981689453"
                                y2="-43.784000396728516"
                              >
                                <stop offset="0%" stopColor="rgb(47,78,251)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(70,124,253)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(94,169,255)"
                                />
                              </linearGradient>
                              <filter
                                id="__lottie_element_301"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                              >
                                <feGaussianBlur
                                  in="SourceAlpha"
                                  result="filter_result_0_drop_shadow_1"
                                  stdDeviation="0.5"
                                />
                                <feOffset
                                  dx="6.123233995736766e-17"
                                  dy={1}
                                  in="filter_result_0_drop_shadow_1"
                                  result="filter_result_0_drop_shadow_2"
                                />
                                <feFlood
                                  floodColor="#000000"
                                  floodOpacity="0.15"
                                  result="filter_result_0_drop_shadow_3"
                                />
                                <feComposite
                                  in="filter_result_0_drop_shadow_3"
                                  in2="filter_result_0_drop_shadow_2"
                                  operator="in"
                                  result="filter_result_0_drop_shadow_4"
                                />
                                <feMerge result="filter_result_0">
                                  <feMergeNode in="filter_result_0_drop_shadow_4" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                              <linearGradient
                                id="__lottie_element_302"
                                spreadMethod="pad"
                                gradientUnits="userSpaceOnUse"
                                x1="42.83100128173828"
                                y1="37.24300003051758"
                                x2="-42.83100128173828"
                                y2="-44.2869987487793"
                              >
                                <stop offset="0%" stopColor="rgb(47,78,251)" />
                                <stop
                                  offset="50%"
                                  stopColor="rgb(70,124,253)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgb(94,169,255)"
                                />
                              </linearGradient>
                            </defs>
                            <g clipPath="url(#__lottie_element_214)">
                              <g
                                filter="url(#__lottie_element_301)"
                                transform="matrix(1,0,0,1,63.21500015258789,63.93600082397461)"
                                opacity="0.13"
                                style={{ display: "block" }}
                              >
                                <g
                                  opacity={1}
                                  transform="matrix(0.4226182699203491,0.9063078165054321,-0.9063078165054321,0.4226182699203491,0,0)"
                                >
                                  <path
                                    fill="url(#__lottie_element_302)"
                                    fillOpacity={1}
                                    d=" M42.83100128173828,-38.20399856567383 C42.83100128173828,-38.20399856567383 42.83100128173828,38.20399856567383 42.83100128173828,38.20399856567383 C42.83100128173828,41.56120681762695 40.10520935058594,44.2869987487793 36.74800109863281,44.2869987487793 C36.74800109863281,44.2869987487793 -36.74800109863281,44.2869987487793 -36.74800109863281,44.2869987487793 C-40.10520935058594,44.2869987487793 -42.83100128173828,41.56120681762695 -42.83100128173828,38.20399856567383 C-42.83100128173828,38.20399856567383 -42.83100128173828,-38.20399856567383 -42.83100128173828,-38.20399856567383 C-42.83100128173828,-41.56120681762695 -40.10520935058594,-44.2869987487793 -36.74800109863281,-44.2869987487793 C-36.74800109863281,-44.2869987487793 36.74800109863281,-44.2869987487793 36.74800109863281,-44.2869987487793 C40.10520935058594,-44.2869987487793 42.83100128173828,-41.56120681762695 42.83100128173828,-38.20399856567383z"
                                  />
                                </g>
                              </g>
                              <g
                                filter="url(#__lottie_element_297)"
                                transform="matrix(1,0,0,1,63.007999420166016,63.87799835205078)"
                                opacity="0.68"
                                style={{ display: "block" }}
                              >
                                <g
                                  opacity={1}
                                  transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,0,0)"
                                >
                                  <path
                                    fill="url(#__lottie_element_298)"
                                    fillOpacity={1}
                                    d=" M43.784000396728516,-37.70100021362305 C43.784000396728516,-37.70100021362305 43.784000396728516,37.70100021362305 43.784000396728516,37.70100021362305 C43.784000396728516,41.05820846557617 41.05820846557617,43.784000396728516 37.70100021362305,43.784000396728516 C37.70100021362305,43.784000396728516 -37.70100021362305,43.784000396728516 -37.70100021362305,43.784000396728516 C-41.05820846557617,43.784000396728516 -43.784000396728516,41.05820846557617 -43.784000396728516,37.70100021362305 C-43.784000396728516,37.70100021362305 -43.784000396728516,-37.70100021362305 -43.784000396728516,-37.70100021362305 C-43.784000396728516,-41.05820846557617 -41.05820846557617,-43.784000396728516 -37.70100021362305,-43.784000396728516 C-37.70100021362305,-43.784000396728516 37.70100021362305,-43.784000396728516 37.70100021362305,-43.784000396728516 C41.05820846557617,-43.784000396728516 43.784000396728516,-41.05820846557617 43.784000396728516,-37.70100021362305z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(0.8066285848617554,0,0,0.8066285848617554,42.33244323730469,76.41242218017578)"
                                opacity="0.3"
                                style={{ display: "none" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M1.5140000581741333,4.420000076293945 C1.5140000581741333,4.420000076293945 -1.496000051498413,4.420000076293945 -1.496000051498413,4.420000076293945 C-1.496000051498413,-0.3700000047683716 3.0239999294281006,-0.09000000357627869 3.0239999294281006,-3.119999885559082 C3.0239999294281006,-3.9200000762939453 2.7039999961853027,-4.690000057220459 2.134000062942505,-5.260000228881836 C1.5740000009536743,-5.820000171661377 0.8040000200271606,-6.130000114440918 0.004000000189989805,-6.130000114440918 C-1.656000018119812,-6.099999904632568 -2.996000051498413,-4.75 -3.0160000324249268,-3.069999933242798 C-3.0160000324249268,-3.069999933242798 -6.035999774932861,-3.069999933242798 -6.035999774932861,-3.069999933242798 C-5.995999813079834,-6.389999866485596 -3.315999984741211,-9.0600004196167 -0.026000000536441803,-9.069999694824219 C3.2739999294281006,-9.079999923706055 5.964000225067139,-6.440000057220459 6.033999919891357,-3.119999885559082 C6.044000148773193,0.6700000166893005 1.5140000581741333,1.100000023841858 1.5140000581741333,4.420000076293945z M1.559999942779541,9.067000389099121 C1.559999942779541,9.067000389099121 -1.5499999523162842,9.067000389099121 -1.5499999523162842,9.067000389099121 C-1.5499999523162842,9.067000389099121 -1.5499999523162842,5.986999988555908 -1.5499999523162842,5.986999988555908 C-1.5499999523162842,5.986999988555908 1.559999942779541,5.986999988555908 1.559999942779541,5.986999988555908 C1.559999942779541,5.986999988555908 1.559999942779541,9.067000389099121 1.559999942779541,9.067000389099121z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(0.9345836639404297,0,0,0.9345836639404297,34.04702377319336,71.64570617675781)"
                                opacity="0.3"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M1.5140000581741333,4.420000076293945 C1.5140000581741333,4.420000076293945 -1.496000051498413,4.420000076293945 -1.496000051498413,4.420000076293945 C-1.496000051498413,-0.3700000047683716 3.0239999294281006,-0.09000000357627869 3.0239999294281006,-3.119999885559082 C3.0239999294281006,-3.9200000762939453 2.7039999961853027,-4.690000057220459 2.134000062942505,-5.260000228881836 C1.5740000009536743,-5.820000171661377 0.8040000200271606,-6.130000114440918 0.004000000189989805,-6.130000114440918 C-1.656000018119812,-6.099999904632568 -2.996000051498413,-4.75 -3.0160000324249268,-3.069999933242798 C-3.0160000324249268,-3.069999933242798 -6.035999774932861,-3.069999933242798 -6.035999774932861,-3.069999933242798 C-5.995999813079834,-6.389999866485596 -3.315999984741211,-9.0600004196167 -0.026000000536441803,-9.069999694824219 C3.2739999294281006,-9.079999923706055 5.964000225067139,-6.440000057220459 6.033999919891357,-3.119999885559082 C6.044000148773193,0.6700000166893005 1.5140000581741333,1.100000023841858 1.5140000581741333,4.420000076293945z M1.559999942779541,9.067000389099121 C1.559999942779541,9.067000389099121 -1.5499999523162842,9.067000389099121 -1.5499999523162842,9.067000389099121 C-1.5499999523162842,9.067000389099121 -1.5499999523162842,5.986999988555908 -1.5499999523162842,5.986999988555908 C-1.5499999523162842,5.986999988555908 1.559999942779541,5.986999988555908 1.559999942779541,5.986999988555908 C1.559999942779541,5.986999988555908 1.559999942779541,9.067000389099121 1.559999942779541,9.067000389099121z"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(1.376571536064148,0,0,1.376571536064148,89.19706726074219,86.84052276611328)"
                                opacity="0.3"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(255,255,255)"
                                    fillOpacity={1}
                                    d=" M0.6169999837875366,1.7979999780654907 C0.6169999837875366,1.7979999780654907 -0.6230000257492065,1.7979999780654907 -0.6230000257492065,1.7979999780654907 C-0.6230000257492065,-0.16200000047683716 1.2369999885559082,-0.052000001072883606 1.2369999885559082,-1.2920000553131104 C1.2369999885559082,-1.972000002861023 0.6769999861717224,-2.5220000743865967 -0.003000000026077032,-2.5220000743865967 C-0.6830000281333923,-2.51200008392334 -1.2230000495910645,-1.9520000219345093 -1.2330000400543213,-1.2719999551773071 C-1.2330000400543213,-1.2719999551773071 -2.4730000495910645,-1.2719999551773071 -2.4730000495910645,-1.2719999551773071 C-2.443000078201294,-2.621999979019165 -1.3530000448226929,-3.691999912261963 -0.013000000268220901,-3.7019999027252197 C1.3270000219345093,-3.7119998931884766 2.427000045776367,-2.631999969482422 2.4769999980926514,-1.2920000553131104 C2.4769999980926514,0.257999986410141 0.6269999742507935,0.43799999356269836 0.6269999742507935,1.7979999780654907 C0.6269999742507935,1.7979999780654907 0.6169999837875366,1.7979999780654907 0.6169999837875366,1.7979999780654907z M0.6420000195503235,3.697999954223633 C0.6420000195503235,3.697999954223633 -0.6380000114440918,3.697999954223633 -0.6380000114440918,3.697999954223633 C-0.6380000114440918,3.697999954223633 -0.6380000114440918,2.437999963760376 -0.6380000114440918,2.437999963760376 C-0.6380000114440918,2.437999963760376 0.6420000195503235,2.437999963760376 0.6420000195503235,2.437999963760376 C0.6420000195503235,2.437999963760376 0.6420000195503235,3.697999954223633 0.6420000195503235,3.697999954223633z"
                                  />
                                </g>
                              </g>
                              <g
                                clipPath="url(#__lottie_element_220)"
                                transform="matrix(1,0,0,1,0,0)"
                                opacity={1}
                                style={{ display: "block" }}
                              >
                                <g
                                  transform="matrix(1,0,0,1,63.70000076293945,131.52499389648438)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(223,218,224)"
                                      fillOpacity={1}
                                      d=" M0,2.7100000381469727 C-14.75,2.7100000381469727 -26.700000762939453,1.5 -26.700000762939453,0 C-26.700000762939453,-1.5 -14.75,-2.7100000381469727 0,-2.7100000381469727 C14.75,-2.7100000381469727 26.700000762939453,-1.5 26.700000762939453,0 C26.700000762939453,1.5 14.75,2.7100000381469727 0,2.7100000381469727"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,79.63999938964844,28.82699966430664)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(250,236,233)"
                                      fillOpacity={1}
                                      d=" M0.039000000804662704,-0.019999999552965164 C0.039000000804662704,-0.019999999552965164 -0.020999999716877937,-0.03999999910593033 -0.020999999716877937,-0.03999999910593033 C-0.020999999716877937,-0.03999999910593033 -0.061000000685453415,-0.019999999552965164 -0.061000000685453415,-0.019999999552965164 C-0.061000000685453415,-0.019999999552965164 -0.04100000113248825,0.019999999552965164 -0.04100000113248825,0.019999999552965164 C-0.04100000113248825,0.019999999552965164 0.01899999938905239,0.03999999910593033 0.01899999938905239,0.03999999910593033 C0.01899999938905239,0.03999999910593033 0.0689999982714653,0.019999999552965164 0.0689999982714653,0.019999999552965164 C0.0689999982714653,0.019999999552965164 0.039000000804662704,-0.019999999552965164 0.039000000804662704,-0.019999999552965164"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,71.7979965209961,72.63200378417969)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(248,223,158)"
                                      fillOpacity={1}
                                      d=" M-0.9150000214576721,1.0010000467300415 C-0.6650000214576721,0.5609999895095825 -0.38499999046325684,0.12099999934434891 -0.04500000178813934,-0.3089999854564667 C0.26499998569488525,-0.5389999747276306 0.5849999785423279,-0.7689999938011169 0.9150000214576721,-0.9990000128746033 C0.32499998807907104,-0.3089999854564667 -0.2849999964237213,0.35100001096725464 -0.9150000214576721,1.0010000467300415"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,71.37300109863281,104.23400115966797)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M10.472000122070312,21.656999588012695 C9.552000045776367,20.066999435424805 8.192000389099121,17.30699920654297 7.3520002365112305,13.687000274658203 C5.992000102996826,7.796999931335449 0.5419999957084656,1.9170000553131104 0.5419999957084656,1.9170000553131104 C0.0820000022649765,-3.5230000019073486 -3.0980000495910645,-19.822999954223633 -3.0980000495910645,-20.273000717163086 C-3.0980000495910645,-20.273000717163086 -7.188000202178955,-27.972999572753906 -9.907999992370605,-18.46299934387207 C-12.637999534606934,-8.95300006866455 -4.458000183105469,-0.3529999852180481 -4.458000183105469,2.367000102996826 C-4.458000183105469,5.077000141143799 8.722000122070312,23.187000274658203 8.722000122070312,23.187000274658203 C8.722000122070312,23.187000274658203 8.711999893188477,23.216999053955078 8.711999893188477,23.216999053955078 C9.291999816894531,23.027000427246094 9.982000350952148,22.60700035095215 10.472000122070312,21.656999588012695"
                                    />
                                  </g>
                                </g>
                                <g
                                  mask="url(#__lottie_element_268_1)"
                                  style={{ display: "block" }}
                                >
                                  <g
                                    transform="matrix(1,0,0,1,65.04900360107422,90.08699798583984)"
                                    opacity={1}
                                  >
                                    <g
                                      opacity={1}
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        fill="rgb(33,33,33)"
                                        fillOpacity={1}
                                        d=" M-1.684000015258789,9.064000129699707 C-2.9839999675750732,6.343999862670898 -4.144000053405762,3.134000062942505 -4.144000053405762,-0.3059999942779541 C-4.144000053405762,-1.6160000562667847 -3.9739999771118164,-2.9560000896453857 -3.5840001106262207,-4.315999984741211 C-2.5439999103546143,-7.946000099182129 -1.3040000200271606,-9.065999984741211 -0.17399999499320984,-9.065999984741211 C1.6660000085830688,-9.065999984741211 3.2260000705718994,-6.125999927520752 3.2260000705718994,-6.125999927520752 C3.2260000705718994,-5.966000080108643 3.615999937057495,-3.865999937057495 4.145999908447266,-0.9660000205039978 C3.8959999084472656,-0.7459999918937683 3.625999927520752,-0.5360000133514404 3.305999994277954,-0.335999995470047 C1.5360000133514404,0.7639999985694885 -0.23399999737739563,4.874000072479248 -1.684000015258789,9.064000129699707"
                                      />
                                    </g>
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,60.21099853515625,101.96600341796875)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M7.730000019073486,-24.113000869750977 C3.8499999046325684,-24.113000869750977 -0.27000001072883606,-28.933000564575195 -0.27000001072883606,-28.933000564575195 C-0.27000001072883606,-28.933000564575195 -2.140000104904175,-27.632999420166016 -3.049999952316284,-21.232999801635742 C-3.4800000190734863,-18.222999572753906 -4.860000133514404,-1.312999963760376 -5.769999980926514,2.756999969482422 C-6.670000076293945,6.767000198364258 -9.760000228881836,27.836999893188477 -9.859999656677246,28.547000885009766 C-9.270000457763672,28.927000045776367 -8.40999984741211,29.136999130249023 -7.269999980926514,28.64699935913086 C-6.71999979019165,25.94700050354004 -5.460000038146973,20.756999969482422 -3.5,18.156999588012695 C-0.7799999713897705,14.536999702453613 -1.6799999475479126,7.2870001792907715 -0.7799999713897705,5.0269999504089355 C0.12999999523162842,2.756999969482422 3.7699999809265137,-12.17300033569336 7.400000095367432,-14.442999839782715 C12.199999809265137,-17.433000564575195 8.65999984741211,-24.113000869750977 7.730000019073486,-24.113000869750977"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,49.68899917602539,131.46499633789062)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M0.6570000052452087,-0.9509999752044678 C0.6570000052452087,-0.9509999752044678 0.6570000052452087,-0.9309999942779541 0.6570000052452087,-0.9309999942779541 C0.6570000052452087,-0.9309999942779541 -2.9730000495910645,-0.03099999949336052 -2.9730000495910645,-0.03099999949336052 C-4.793000221252441,1.3289999961853027 2.927000045776367,0.8790000081062317 2.927000045776367,0.8790000081062317 C2.927000045776367,0.8790000081062317 3.0369999408721924,0.19900000095367432 3.256999969482422,-0.8510000109672546 C2.1070001125335693,-0.3610000014305115 1.2569999694824219,-0.5709999799728394 0.6570000052452087,-0.9509999752044678"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,55.334999084472656,61.696998596191406)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(0.5,0.8660253882408142,-0.8660253882408142,0.5,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M4.52400016784668,-2.7690000534057617 C4.52400016784668,-2.7690000534057617 8.175000190734863,-7.059000015258789 11.895000457763672,-6.658999919891357 C14.295000076293945,-6.39900016784668 18.173999786376953,-4.39900016784668 13.604000091552734,-2.4489998817443848 C9.034000396728516,-0.49900001287460327 5.553999900817871,1.0410000085830688 5.553999900817871,1.0410000085830688 C5.553999900817871,1.0410000085830688 -10.456000328063965,1.8309999704360962 -10.456000328063965,1.8309999704360962 C-10.456000328063965,1.8309999704360962 -15.246000289916992,8.640999794006348 -15.696000099182129,6.13100004196167 C-16.1560001373291,3.63100004196167 -10.935999870300293,0.20100000500679016 -10.935999870300293,0.20100000500679016 C-10.935999870300293,0.20100000500679016 -0.9760000109672546,-1.5490000247955322 4.52400016784668,-2.7690000534057617z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,64.5479965209961,62)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(217,78,100)"
                                      fillOpacity={1}
                                      d=" M-6.840000152587891,6.359000205993652 C-6.300000190734863,6.839000225067139 -2.9600000381469727,5.379000186920166 2.380000114440918,2.319000005722046 C7.730000019073486,-0.7409999966621399 8.720000267028809,-2.4609999656677246 7.960000038146973,-3.7709999084472656 C7.210000038146973,-5.080999851226807 6.949999809265137,-7.080999851226807 3.0999999046325684,-6.261000156402588 C-0.75,-5.431000232696533 -4.840000152587891,-1.9210000038146973 -5.880000114440918,-1.38100004196167 C-6.920000076293945,-0.8309999704360962 -7.860000133514404,3.509000062942505 -8.1899995803833,4.189000129699707 C-8.1899995803833,4.189000129699707 -7.389999866485596,5.879000186920166 -6.840000152587891,6.359000205993652z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.69400024414062,51.17100143432617)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M-7.375,8.470999717712402 C-7.375,8.470999717712402 -5.255000114440918,7.370999813079834 -4.635000228881836,6.690999984741211 C-4.005000114440918,6.020999908447266 -1.8350000381469727,3.3310000896453857 -2.2249999046325684,1.7309999465942383 C-2.2249999046325684,1.7309999465942383 -5.014999866485596,2.7809998989105225 -5.855000019073486,0.5709999799728394 C-6.954999923706055,-2.309000015258789 -1.6749999523162842,-9.019000053405762 -0.38499999046325684,-9.388999938964844 C0.9049999713897705,-9.769000053405762 3.765000104904175,-11.508999824523926 6.465000152587891,-9.33899974822998 C9.164999961853027,-7.169000148773193 5.284999847412109,2.0810000896453857 2.375,2.5209999084472656 C2.375,2.5209999084472656 -0.7549999952316284,7.671000003814697 0.32499998807907104,9.340999603271484 C0.32499998807907104,9.340999603271484 -4.125,11.220999717712402 -5.804999828338623,9.991000175476074 C-7.485000133514404,8.76099967956543 -7.375,8.470999717712402 -7.375,8.470999717712402"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.37200164794922,53.05699920654297)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(181,114,86)"
                                      fillOpacity={1}
                                      d=" M-1.2899999618530273,1.0080000162124634 C-1.25,0.828000009059906 -1.2300000190734863,0.6480000019073486 -1.2300000190734863,0.4779999852180481 C-1.2300000190734863,0.33799999952316284 -1.2400000095367432,0.1979999989271164 -1.2799999713897705,0.06800000369548798 C-1.2799999713897705,0.06800000369548798 0.6600000262260437,-0.34200000762939453 1.2899999618530273,-1.0119999647140503 C1.2899999618530273,-1.0119999647140503 -0.05000000074505806,0.7279999852180481 -1.2899999618530273,1.0080000162124634"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,72.40399932861328,44.599998474121094)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M-5.390999794006348,-1.534000039100647 C-5.390999794006348,-1.534000039100647 -7.491000175476074,-2.8540000915527344 -6.750999927520752,-4.144000053405762 C-6.011000156402588,-5.443999767303467 -3.9609999656677246,-4.144000053405762 -3.9609999656677246,-4.144000053405762 C-3.9609999656677246,-4.144000053405762 -6.750999927520752,-6.74399995803833 -5.080999851226807,-7.673999786376953 C-3.4010000228881836,-8.604000091552734 -0.050999999046325684,-6.004000186920166 -0.050999999046325684,-6.004000186920166 C-0.050999999046325684,-6.004000186920166 -0.6110000014305115,-7.854000091552734 0.6990000009536743,-8.413999557495117 C1.9989999532699585,-8.973999977111816 5.908999919891357,-4.703999996185303 4.979000091552734,-2.1040000915527344 C4.979000091552734,-2.1040000915527344 9.069000244140625,-0.6240000128746033 5.348999977111816,3.8259999752044678 C1.628999948501587,8.276000022888184 -0.6110000014305115,8.465999603271484 -0.6110000014305115,8.465999603271484 C-0.6110000014305115,8.465999603271484 -1.13100004196167,6.906000137329102 -0.2409999966621399,5.125999927520752 C-0.2409999966621399,5.125999927520752 0.13899999856948853,5.866000175476074 0.8790000081062317,5.495999813079834 C1.628999948501587,5.125999927520752 2.559000015258789,4.015999794006348 2.36899995803833,3.4560000896453857 C2.178999900817871,2.8959999084472656 -0.050999999046325684,3.6459999084472656 -0.050999999046325684,3.6459999084472656 C-0.050999999046325684,3.6459999084472656 -0.9810000061988831,1.5959999561309814 -0.050999999046325684,0.6759999990463257 C0.8790000081062317,-0.2540000081062317 -0.050999999046325684,-0.6240000128746033 -0.050999999046325684,-0.6240000128746033 C-0.050999999046325684,-0.6240000128746033 -3.571000099182129,-0.5040000081062317 -4.421000003814697,-2.4140000343322754 C-4.421000003814697,-2.4140000343322754 -4.770999908447266,-2.24399995803833 -5.390999794006348,-1.534000039100647"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,69.71199798583984,51.250999450683594)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(33,33,33)"
                                      fillOpacity={1}
                                      d=" M4.485000133514404,-2.6470000743865967 C4.485000133514404,-2.6470000743865967 2.7049999237060547,-0.5770000219345093 1.034999966621399,-0.7570000290870667 C-0.6449999809265137,-0.9470000267028809 -1.534999966621399,-2.687000036239624 -3.505000114440918,-2.187000036239624 C-3.505000114440918,-2.187000036239624 -5.114999771118164,-0.3869999945163727 -4.735000133514404,1.093000054359436 C-4.364999771118164,2.572999954223633 1.4049999713897705,4.802999973297119 4.755000114440918,-1.8769999742507935 C4.755000114440918,-1.8769999742507935 4.954999923706055,-2.867000102996826 4.485000133514404,-2.6470000743865967"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,68.80799865722656,51.823001861572266)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(225,235,230)"
                                      fillOpacity={1}
                                      d=" M-1.1519999504089355,-0.6359999775886536 C-1.1519999504089355,-0.6359999775886536 1.1480000019073486,-0.07599999755620956 1.1480000019073486,-0.07599999755620956 C1.1480000019073486,-0.07599999755620956 0.1979999989271164,0.6140000224113464 -0.4519999921321869,0.6340000033378601 C-1.1019999980926514,0.6639999747276306 -1.1519999504089355,-0.6359999775886536 -1.1519999504089355,-0.6359999775886536"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,-0.3420201539993286,0.3420201539993286,0.9396926164627075,71.69400024414062,51.17100143432617)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  />
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,67.1259994506836,68.36100006103516)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(222,75,103)"
                                      fillOpacity={1}
                                      d=" M-4.769999980926514,12.279999732971191 C-1.2300000190734863,12.829999923706055 1.2300000190734863,13.130000114440918 1.9299999475479126,10.979999542236328 C2.380000114440918,9.600000381469727 2.5299999713897705,5.960000038146973 5.46999979019165,3 C7.579999923706055,0.8799999952316284 11.600000381469727,-4.909999847412109 9.5,-8.399999618530273 C7.409999847412109,-11.890000343322754 2.9100000858306885,-10.079999923706055 1.940000057220459,-10.050000190734863 C0.9599999785423279,-10.010000228881836 2.809999942779541,-12.680000305175781 2.809999942779541,-12.680000305175781 C-2.0399999618530273,-11.510000228881836 -4.619999885559082,-9.3100004196167 -6.699999809265137,-5.809999942779541 C-9.680000305175781,-0.7699999809265137 -10.640000343322754,10.369999885559082 -9.800000190734863,11.720000267028809 C-9.800000190734863,11.720000267028809 -4.769999980926514,12.279999732971191 -4.769999980926514,12.279999732971191"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,67.43199920654297,64.21800231933594)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(222,75,103)"
                                      fillOpacity={1}
                                      d=" M-9.729000091552734,1.0199999809265137 C-9.729000091552734,1.0199999809265137 -8.49899959564209,3.7799999713897705 -9.569000244140625,4.929999828338623 C-9.569000244140625,4.929999828338623 -9.019000053405762,4.889999866485596 -8.439000129699707,5.429999828338623 C-7.859000205993652,5.960000038146973 -7.298999786376953,5.940000057220459 -7.11899995803833,5.75 C-6.939000129699707,5.550000190734863 -6.578999996185303,5.349999904632568 -6.578999996185303,5.349999904632568 C-6.578999996185303,5.349999904632568 -2.0290000438690186,7.210000038146973 3.6110000610351562,3.8399999141693115 C9.25100040435791,0.46000000834465027 10.291000366210938,-1.440000057220459 9.491000175476074,-2.890000104904175 C8.690999984741211,-4.349999904632568 8.41100025177002,-6.559999942779541 4.35099983215332,-5.659999847412109 C0.29100000858306885,-4.760000228881836 -4.0289998054504395,-0.8700000047683716 -5.11899995803833,-0.27000001072883606 C-6.218999862670898,0.33000001311302185 -7.459000110626221,0.7400000095367432 -7.459000110626221,0.7400000095367432 C-7.459000110626221,0.7400000095367432 -7.839000225067139,0.2199999988079071 -8.329000473022461,0.41999998688697815 C-8.809000015258789,0.6200000047683716 -9.388999938964844,0.27000001072883606 -9.729000091552734,1.0199999809265137"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,0.3420201539993286,-0.3420201539993286,0.9396926164627075,68.65499877929688,80.63099670410156)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(255,205,161)"
                                      fillOpacity={1}
                                      d=" M3.2739999294281006,-11.991000175476074 C3.2739999294281006,-11.991000175476074 2.7639999389648438,-7.500999927520752 2.7639999389648438,-7.500999927520752 C2.7639999389648438,-7.500999927520752 3.4040000438690186,-1.6009999513626099 1.2239999771118164,3.009000062942505 C1.2239999771118164,3.009000062942505 0.45399999618530273,5.318999767303467 0.45399999618530273,5.318999767303467 C0.45399999618530273,5.318999767303467 -0.3160000145435333,11.98900032043457 -2.365999937057495,11.98900032043457 C-4.415999889373779,11.98900032043457 -2.365999937057495,4.419000148773193 -2.365999937057495,4.419000148773193 C-2.365999937057495,4.419000148773193 -1.3359999656677246,-3.1410000324249268 -1.3359999656677246,-3.1410000324249268 C-1.3359999656677246,-3.1410000324249268 -0.5659999847412109,-6.091000080108643 -1.0859999656677246,-7.370999813079834 C-1.5959999561309814,-8.66100025177002 -1.7259999513626099,-11.35099983215332 -1.7259999513626099,-11.35099983215332 C-1.7259999513626099,-11.35099983215332 3.2739999294281006,-11.991000175476074 3.2739999294281006,-11.991000175476074z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(0.9396926164627075,0.3420201539993286,-0.3420201539993286,0.9396926164627075,74.90599822998047,66.18800354003906)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(221,75,103)"
                                      fillOpacity={1}
                                      d=" M-0.9890000224113464,-5.257999897003174 C-0.9890000224113464,-5.257999897003174 0.8009999990463257,-5.257999897003174 0.8009999990463257,-5.257999897003174 C0.8009999990463257,-5.257999897003174 3.750999927520752,4.611999988555908 3.240999937057495,4.742000102996826 C2.7309999465942383,4.872000217437744 -3.2990000247955322,5.26200008392334 -3.2990000247955322,5.26200008392334 C-3.2990000247955322,5.26200008392334 -0.9890000224113464,-5.257999897003174 -0.9890000224113464,-5.257999897003174z"
                                    />
                                  </g>
                                </g>
                                <g
                                  transform="matrix(1,0,0,1,63,68)"
                                  opacity={1}
                                  style={{ display: "block" }}
                                >
                                  <g
                                    opacity={1}
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(14,29,44)"
                                      fillOpacity={1}
                                      d=" M16.565000534057617,58.49399948120117 C16.735000610351562,60.40599822998047 13.77299976348877,62.617000579833984 14.045999526977539,63.237998962402344 C14.491999626159668,63.632999420166016 15.140999794006348,63.59400177001953 15.687999725341797,63.5 C16.5,63.5 19.781999588012695,60.98400115966797 19.8439998626709,59.922000885009766 C19.888999938964844,59.1609992980957 19.038999557495117,58.104000091552734 18.44700050354004,57.76100158691406 C18.32699966430664,57.691001892089844 16.489999771118164,57.645999908447266 16.565000534057617,58.49399948120117z"
                                    />
                                  </g>
                                </g>
                              </g>
                              <g
                                filter="url(#__lottie_element_217)"
                                transform="matrix(0.9999549388885498,0.009494448080658913,-0.009494448080658913,0.9999549388885498,45.91279983520508,26.378999710083008)"
                                opacity="0.9"
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="url(#__lottie_element_218)"
                                    fillOpacity={1}
                                    d=" M4.138999938964844,12.140999794006348 C4.138999938964844,12.140999794006348 -4.13100004196167,12.140999794006348 -4.13100004196167,12.140999794006348 C-4.13100004196167,-1.1089999675750732 8.269000053405762,-0.33899998664855957 8.269000053405762,-8.718999862670898 C8.269000053405762,-13.33899974822998 4.548999786376953,-17.038999557495117 -0.0010000000474974513,-17.038999557495117 C-4.540999889373779,-17.038999557495117 -8.26099967956543,-13.048999786376953 -8.26099967956543,-8.58899974822998 C-8.26099967956543,-8.58899974822998 -16.5310001373291,-8.58899974822998 -16.5310001373291,-8.58899974822998 C-16.541000366210938,-13.038999557495117 -14.800999641418457,-17.319000244140625 -11.701000213623047,-20.4689998626709 C-8.590999603271484,-23.618999481201172 -4.390999794006348,-25.388999938964844 -0.0010000000474974513,-25.378999710083008 C9.128999710083008,-25.378999710083008 16.52899932861328,-17.979000091552734 16.52899932861328,-8.718999862670898 C16.52899932861328,1.7610000371932983 4.129000186920166,2.9509999752044678 4.129000186920166,12.140999794006348 C4.129000186920166,12.140999794006348 4.138999938964844,12.140999794006348 4.138999938964844,12.140999794006348z M4.4019999504089355,25.381999969482422 C4.4019999504089355,25.381999969482422 -4.4079999923706055,25.381999969482422 -4.4079999923706055,25.381999969482422 C-4.4079999923706055,25.381999969482422 -4.4079999923706055,16.552000045776367 -4.4079999923706055,16.552000045776367 C-4.4079999923706055,16.552000045776367 4.4120001792907715,16.552000045776367 4.4120001792907715,16.552000045776367 C4.4120001792907715,16.552000045776367 4.4019999504089355,25.381999969482422 4.4019999504089355,25.381999969482422z"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </td>
                      <td>
                        <h3 className="m-t-10">About Tags</h3>
                        <p>
                          Use tags to remember team structure or other
                          groupings. You can also use tagging to specify which
                          team is eligible for a given incentive plan.
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
        <div className="form-group row pull-right" style={{ height: 40 }}>
          <button
            type="button"
            id="btn_deleteRecord"
            className="btn btn-danger m-r-20"
            style={{ width: 100, display: "none" }}
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

    )
}
export default createTeam;