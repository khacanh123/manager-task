const listCalculation = () => {
    return(
        <>
        <div className="card">
  <div className="card-body">
    <div className="d-flex col-12">
      <div>
        <h4 className="card-title">
          <span className="lstick" />
          All Calculations
        </h4>
        <h6 className="card-subtitle">
          Use this page to search for calculations.
        </h6>
      </div>
      <div className="ml-auto">
        <a
          className="startCalculation btn btn-info m-t-20"
          href="/app/Calculations/Calculate/561f6492-374b-11ef-a296-0022484a197b"
        >
          <i className="icon-calculator" />
          &nbsp;&nbsp;Calculate
        </a>
      </div>
    </div>
    <div className="form-group row m-t-10 m-l-20 m-b-10">
      <div
        className="autoComplete_wrapper"
        role="combobox"
        aria-owns="autoComplete_list_1"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <input
          className="searchInput form-control m-l-5"
          id="CalculationsModel_SearchCriteria"
          name="CalculationsModel.SearchCriteria"
          placeholder="Search calculations..."
        //   searchid="calculationsModel"
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
        className="calculationTimePeriod form-control m-r-5 m-b-0 valid"
        data-val="true"
        data-val-required="The CalculationTimePeriod field is required."
        id="CalculationsModel_CalculationTimePeriod"
        name="CalculationsModel.CalculationTimePeriod"
        style={{ width: 150 }}
        aria-describedby="CalculationsModel_CalculationTimePeriod-error"
      >
        <option value={0}>
          All Dates
        </option>
        <option value={1}>This Month</option>
        <option value={2}>Last Month</option>
        <option value={3}>This Quarter</option>
        <option value={4}>Last Quarter</option>
        <option value={5}>This Year</option>
        <option value={6}>Last Year</option>
      </select>
      <select
        className="calculationPlanId form-control m-r-5 m-b-0 valid"
        data-val="true"
        data-val-required="The Plan field is required."
        id="CalculationsModel_PlanId"
        name="CalculationsModel.PlanId"
        style={{ width: 150 }}
        aria-describedby="CalculationsModel_PlanId-error"
      >
        <option
          selected
          value="00000000-0000-0000-0000-000000000000"
        >
          All Plans
        </option>
        <option value="561f651e-374b-11ef-a296-0022484a197b">
          One-Off Sales Contest
        </option>
        <option value="561f6522-374b-11ef-a296-0022484a197b">
          Sales Manager Compensation
        </option>
        <option value="561f6520-374b-11ef-a296-0022484a197b">
          West Coast Team Quotas
        </option>
        <option value="561f6524-374b-11ef-a296-0022484a197b">
          Year-End Cash Bonus
        </option>
      </select>
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
      <button
        type="button"
        id="btn_deleteAll"
        className="btn btn-danger hide m-l-10"
        style={{ display: "none" }}
      >
        <i className="fa fa-close" />
        &nbsp;&nbsp;Delete&nbsp;&nbsp;
      </button>
      <button
        type="button"
        id="btn_reRunAll"
        className="btn btn-primary hide m-l-10"
        style={{ display: "none" }}
      >
        <i className="fa fa-play" />
        &nbsp;&nbsp;Re-Run&nbsp;&nbsp;
      </button>
      <button
        type="button"
        id="btn_releaseCreditsAll"
        className="btn btn-info hide m-l-10"
        style={{ display: "none" }}
      >
        <i className="ti-shopping-cart" />
        &nbsp;&nbsp;Credits&nbsp;&nbsp;
      </button>
      <button
        type="button"
        id="btn_releaseResultsAll"
        className="btn btn-info hide m-l-10"
        style={{ display: "none" }}
      >
        <i className="ti-control-eject" />
        &nbsp;&nbsp;Rewards&nbsp;&nbsp;
      </button>
    </div>
    <div
      className="nohighlight calculationIssues hide m-b-5 col-xl-11 col-lg-12 m-t-20"
      style={{ display: "none" }}
    >
      <div
        className="pulsate"
        style={{
          backgroundColor: "#745af2",
          color: "white",
          padding: 2,
          borderRadius: 10
        }}
      >
        <small className="m-l-10">
          <i className="ti-alert m-r-10" />
          We've found potential issues - click{" "}
          <a
            href="/app/Calculations/CalculationIssuesDetails/561f6492-374b-11ef-a296-0022484a197b"
            style={{ color: "lime" }}
          >
            here
          </a>{" "}
          for details
        </small>
      </div>
    </div>
    <div id="div_CalculationsModel">
      <div className="allCalculationsTable table-responsive no-wrap col-12 m-t-10">
        <div
          className="nohighlight m-b-20 m-t-10"
          style={{ backgroundColor: "#e9edf2", padding: 2 }}
        >
          <i
            className="fa fa-spinner fa-spin loadingForm hide m-l-10"
            style={{ display: "none" }}
          />
          <small className="m-l-10">
            <i
              className="fa fa-arrow-right m-r-5"
              style={{ position: "relative", top: "-1px" }}
            />
            To view by time period, click{" "}
            <a className="sortCalculationsTime" href="javascript:void(0)">
              here
            </a>
          </small>
          <small className="m-l-10">
            <i
              className="fa fa-arrow-right m-r-5"
              style={{ position: "relative", top: "-1px" }}
            />
            To view by most recent, click{" "}
            <a className="sortCalculationsRecent" href="javascript:void(0)">
              here
            </a>
          </small>
          <small className="m-l-10">
            <i
              className="fa fa-arrow-right m-r-5"
              style={{ position: "relative", top: "-1px" }}
            />
            To view by timeline, click{" "}
            <a
              className="sortCalculationsTimeline"
              href="javascript:void(0)"
            //   onclick="$('#timelineNav').click();"
            >
              here
            </a>
          </small>
        </div>
        <table
          className="table vm no-th-brd no-border"
          cellPadding={0}
          cellSpacing={0}
        >
          <thead>
            <tr>
              <th colSpan={2}>
                <input
                  type="checkbox"
                  className="selectionCheckboxAll m-r-5"
                  style={{ display: "none" }}
                />
                <i
                  className="icon-star m-r-10"
                  style={{ position: "relative", top: 1 }}
                />
                Name
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                <i
                  className="icon-rocket m-r-10"
                  style={{ position: "relative", top: 1 }}
                />
                Plan
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                <i
                  className="ti-arrow-right m-r-10"
                  style={{ position: "relative", top: 1 }}
                />
                From
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                <i
                  className="ti-arrow-left m-r-10"
                  style={{ position: "relative", top: 1 }}
                />
                To
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                <i
                  className="icon-shuffle m-r-10"
                  style={{ position: "relative", top: 1 }}
                />
                Status
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th>
                <i
                  className="icon-graph m-r-10"
                  style={{ position: "relative", top: 1 }}
                />
                Payout
                <i className="ascending fa fa-sort-down m-l-10 invisible" />
              </th>
              <th colSpan={2}>
                <i
                  className="icon-clock m-r-10"
                  style={{ position: "relative", top: 1 }}
                />
                Updated
                <i className="ascending fa fa-sort-down m-l-10 align-top" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="separatorRow">
              <td colSpan={9}>
                <hr style={{ margin: "10px 0 0 0", padding: 0 }} />
                <div
                  className="nohighlight label label-inverse"
                  style={{
                    position: "relative",
                    top: "-13px",
                    left: 5,
                    margin: 0
                  }}
                >
                  Updated 4 hours ago
                </div>
              </td>
            </tr>
            <tr
              className="tableRow"
              id="5f08fd86-374b-11ef-a296-0022484a197b"
            //   canedit="True"
            //   autoreplaceprevious="False"
            //   shortcutcalculationid="5f08fd86-374b-11ef-a296-0022484a197b"
            //   islocked="False"
              style={{}}
              data-original-title=""
              title=""
            >
              <td width={1}>
                <h6 className="m-t-5">
                  <input type="checkbox" className="selectionCheckbox m-r-5" />
                  <i className="selectionIcon icon-calculator m-r-5" />
                  <span
                    data-toggle="tooltip"
                    data-original-title="Sample Calculation"
                  >
                    Sample Calculation
                  </span>
                  <span className="duplicate hide">
                    <br />
                    <span
                      data-toggle="tooltip"
                      data-placement="left"
                      data-original-title="Another calculation has the exact same period and plan."
                    >
                      <span
                        className="badge badge-pill badge-danger m-l-30 m-t-5"
                        style={{ backgroundColor: "orangered" }}
                      >
                        Duplicate
                      </span>
                    </span>
                  </span>
                  <span className="overlapping hide">
                    <br />
                    <span
                      data-toggle="tooltip"
                      data-placement="left"
                      data-original-title="Another calculation for the same plan has an overlapping period."
                    >
                      <span
                        className="badge badge-pill badge-danger m-l-30 m-t-5"
                        style={{ backgroundColor: "rgb(116, 90, 242)" }}
                      >
                        Overlap
                      </span>
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
                      <a
                        className="dropdown-item rerun"
                        // onclick="handleReRun(event);"
                      >
                        <i className="fa fa-play" />
                        &nbsp;&nbsp;&nbsp;Re-Run
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="m-t-5">
                  <i className="fa fa-bullseye text-danger m-r-5" />
                  <span
                    data-toggle="tooltip"
                    data-original-title="One-Off Sales Contest"
                  >
                    One-Off Sales Contest
                  </span>
                  <br />
                  <span
                    data-toggle="tooltip"
                    data-original-title="A one-time sales contest to promote new products."
                  >
                    <small className="text-muted">
                      A one-time sales contest to promote n…
                    </small>
                  </span>
                </h6>
              </td>
              <td className="nohighlight">
                <h6>2024-04-01</h6>
              </td>
              <td className="nohighlight">
                <h6>2024-06-30</h6>
              </td>
              <td className="nohighlight" width={1}>
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  data-original-title="Rewards released - credits & rewards have been released."
                >
                  <img
                    src="/app/Content/assets2/images/form/paid.png"
                    className="m-b-5"
                    width={50}
                  />
                </span>
              </td>
              <td>
                3,319.98 (USD)
                <div className="progress" style={{ maxWidth: 180 }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="small m-t-5"></div>
              </td>
              <td width={1}>
                <span
                  className="profileImage"
                  data-toggle="tooltip"
                  data-original-title="Anh Hin"
                >
                  <span
                    style={{ cursor: "pointer" }}
                    // onclick="top.window.location.href='/app/SystemUsers/Details/561f6492-374b-11ef-a296-0022484a197b/ec801ba8-a5ae-4f61-9417-140e9985d59d'"
                  >
                    <span
                      className="userUploadedImage image round"
                      style={{ backgroundColor: "white" }}
                    >
                      <img
                        src="/app/Account/UserProfileImage?systemUserId=ec801ba8-a5ae-4f61-9417-140e9985d59d&v=3291949473"
                        width={50}
                        height={50}
                      />
                    </span>
                  </span>
                </span>
                <div className="megaTooltipContent hide">
                  <table cellPadding={5}>
                    <tbody>
                      <tr>
                        <td align="center" colSpan={2}>
                          <div className="font-14">Top Payouts</div>
                          <hr className="m-b-5" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="profileImage"
                            data-toggle="tooltip"
                            data-original-title="Anh Hin"
                          >
                            <span
                              style={{ cursor: "pointer" }}
                            //   onclick="top.window.location.href='/app/SystemUsers/Details/561f6492-374b-11ef-a296-0022484a197b/ec801ba8-a5ae-4f61-9417-140e9985d59d'"
                            >
                              <span
                                className="userUploadedImage image round"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  src="/app/Account/UserProfileImage?systemUserId=ec801ba8-a5ae-4f61-9417-140e9985d59d&v=3291949473"
                                  width={50}
                                  height={50}
                                />
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          1,768.15 (USD)
                          <br />
                          <small className="text-muted">Anh Hin</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="profileImage"
                            data-toggle="tooltip"
                            data-original-title="Veronica Haley"
                          >
                            <span
                              style={{ cursor: "pointer" }}
                            //   onclick="top.window.location.href='/app/SystemUsers/Details/561f6492-374b-11ef-a296-0022484a197b/e80bd310-ec34-6501-5563-4b95b6eadeb6'"
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
                        <td>
                          446.74 (USD)
                          <br />
                          <small className="text-muted">Veronica Haley</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="profileImage"
                            data-toggle="tooltip"
                            data-original-title="Kate OConnor"
                          >
                            <span
                              style={{ cursor: "pointer" }}
                            //   onclick="top.window.location.href='/app/SystemUsers/Details/561f6492-374b-11ef-a296-0022484a197b/750fdcb2-7411-f0e5-8162-c0d0ab646bae'"
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
                        <td>
                          358.96 (USD)
                          <br />
                          <small className="text-muted">Kate OConnor</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td width={1}>
                <h6>
                  <span data-toggle="tooltip" data-original-title="Anh Hin">
                    Anh Hin
                  </span>
                </h6>
                <small className="text-muted nohighlight">
                  <span
                    data-toggle="tooltip"
                    data-original-title="2024-07-01T08:43:57"
                  >
                    4 hours ago
                  </span>
                </small>
              </td>
            </tr>{" "}
          </tbody>
        </table>
      </div>
    </div>
    <div className="table-responsive table-hover no-wrap m-t-5 col-xl-11 col-lg-12">
      <a
        className="exportResults pull-right btn btn-secondary m-t-10 m-b-10"
        href="/app/Calculations/ExportCalculations/561f6492-374b-11ef-a296-0022484a197b"
      >
        <i className="fa fa-download" />
        &nbsp;&nbsp;Payout Totals
      </a>
    </div>
  </div>
</div>

        </>
    )
}
export default listCalculation;