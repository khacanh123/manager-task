const Step4Component = () => {
    return(
        <div className="body" style={{margin: '20px 0px', padding: '20px 0px'}}>
        <div className="byIndividualControl m-b-0 p-b-0" style={{ display: "none", padding: '20px 0px', border: 'none' }}>
          <div className="form-group row m-b-5 p-b-0">
            <label
              htmlFor="select_individualTargetType"
              className="col-4 text-right control-label col-form-label"
            >
              Measure The Performance Of
            </label>
            <div className="col-8">
              <div style={{ whiteSpace: "nowrap" }}>
                <select
                  className="form-control"
                  data-val="true"
                  data-val-required="The IndividualTargetType field is required."
                  id="select_individualTargetType"
                  name="PlanTemplate.PlanDescriptor.Targets.IndividualTargetType"
                  style={{ maxWidth: 465 }}
                >
                  <option selected value={0}>
                    All Workspace Users
                  </option>
                  <option value={1}>Users With Role Participant</option>
                  <option value={2}>Users Having Any Of The Tags Below</option>
                  <option value={3}>Specific Users Listed Below</option>
                  <option value={4}>Members Of Teams Listed Below</option>
                  <option value={5}>Managers Of Teams Listed Below</option>
                  <option value={6}>
                    Managers &amp; Members Of Teams Listed Below
                  </option>
                </select>
                <br />
                <small id="hint_individualTarget" className="text-muted">
                  Set performance goals for all workspace users
                </small>
              </div>
            </div>
          </div>
          <div
            id="select_individualTags"
            className="hide"
            style={{ display: "none" }}
          >
            <div className="form-group row m-b-5 p-b-0">
              <div className="col-4" />
              <div
                className="col-8"
                style={{
                  maxWidth: 480,
                  borderLeft: "4px solid #03A9F4",
                  marginLeft: 10
                }}
              >
                <input
                  type="text"
                  id="input_individualUserTags"
                  className="m-t-5 selectized"
                  placeholder="Type tags..."
                  tabIndex={-1}
                  defaultValue=""
                  style={{ display: "none" }}
                />
                <div className="selectize-control m-t-5 multi">
                  <div className="selectize-input items not-full">
                    <input
                      type="text"
                      autoComplete="off"
                      id="input_individualUserTags-selectized"
                      placeholder="Type tags..."
                      style={{ width: "76.2852px" }}
                    />
                  </div>
                  <div
                    className="selectize-dropdown multi m-t-5"
                    style={{ display: "none", width: 0, top: 0, left: 0 }}
                  >
                    <div className="selectize-dropdown-content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="select_individualTargetUserIds"
            className="hide"
            style={{ display: "none" }}
          >
            <div className="form-group row m-b-5 p-b-0">
              <div className="col-4" />
              <div
                className="col-8"
                style={{
                  maxWidth: 480,
                  borderLeft: "4px solid #03A9F4",
                  marginLeft: 10
                }}
              >
                <input
                  type="text"
                  id="input_individualTargetUserIds"
                  className="m-t-5 selectized"
                  placeholder="Search users..."
                  tabIndex={-1}
                  defaultValue=""
                  style={{ display: "none" }}
                />
                <div className="selectize-control m-t-5 multi">
                  <div className="selectize-input items not-full">
                    <input
                      type="text"
                      autoComplete="off"
                      id="input_individualTargetUserIds-selectized"
                      placeholder="Search users..."
                      style={{ width: "96.4316px" }}
                    />
                  </div>
                  <div
                    className="selectize-dropdown multi m-t-5"
                    style={{ display: "none", width: 0, top: 0, left: 0 }}
                  >
                    <div className="selectize-dropdown-content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="select_individualTargetTeamIds"
            className="hide"
            style={{ display: "none" }}
          >
            <div className="form-group row m-b-5 p-b-0">
              <div className="col-4" />
              <div
                className="col-8"
                style={{
                  maxWidth: 480,
                  borderLeft: "4px solid #03A9F4",
                  marginLeft: 10
                }}
              >
                <input
                  type="text"
                  id="input_individualTargetTeamIds"
                  className="m-t-5 selectized"
                  placeholder="Search teams..."
                  tabIndex={-1}
                  defaultValue=""
                  style={{ display: "none" }}
                />
                <div className="selectize-control m-t-5 multi">
                  <div className="selectize-input items not-full">
                    <input
                      type="text"
                      autoComplete="off"
                      id="input_individualTargetTeamIds-selectized"
                      placeholder="Search teams..."
                      style={{ width: "102.262px" }}
                    />
                  </div>
                  <div
                    className="selectize-dropdown multi m-t-5"
                    style={{ display: "none", width: 0, top: 0, left: 0 }}
                  >
                    <div className="selectize-dropdown-content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="byTeamControl card m-b-0 p-b-0" style={{ padding: '20px 0px', border: 'none' }}>
          <div className="form-group row m-b-5 p-b-0">
            <label
              htmlFor="select_teamTargetType"
              className="col-4 text-right control-label col-form-label"
            >
              Measure The Performance Of
            </label>
            <div className="col-8">
              <div style={{ whiteSpace: "nowrap" }}>
                <select
                  className="form-control valid"
                  data-val="true"
                  data-val-required="The TeamTargetType field is required."
                  id="select_teamTargetType"
                  name="PlanTemplate.PlanDescriptor.Targets.TeamTargetType"
                  style={{ maxWidth: 465 }}
                  aria-describedby="select_teamTargetType-error"
                  aria-invalid="false"
                >
                  <option selected value={0}>
                    All Teams
                  </option>
                  <option value={1}>Teams Having Any Of The Tags Below</option>
                  <option value={2}>Specific Teams Listed Below</option>
                </select>
                <br />
                <small id="hint_teamTarget" className="text-muted">
                  Set performance goals for specific teams below
                </small>
              </div>
            </div>
          </div>
          <div id="select_teamTags" className="hide" style={{ display: "none" }}>
            <div className="form-group row m-b-5 p-b-0">
              <div className="col-4" />
              <div
                className="col-8"
                style={{
                  maxWidth: 480,
                  borderLeft: "4px solid #03A9F4",
                  marginLeft: 10
                }}
              >
                <input
                  type="text"
                  id="input_teamTeamTags"
                  className="m-t-5 selectized"
                  placeholder="Type tags..."
                  tabIndex={-1}
                  defaultValue=""
                  style={{ display: "none" }}
                />
                <div className="selectize-control m-t-5 multi">
                  <div className="selectize-input items not-full">
                    <input
                      type="text"
                      autoComplete="off"
                      id="input_teamTeamTags-selectized"
                      placeholder="Type tags..."
                      style={{ width: "76.2852px" }}
                    />
                  </div>
                  <div
                    className="selectize-dropdown multi m-t-5"
                    style={{ display: "none", width: 0, top: 0, left: 0 }}
                  >
                    <div className="selectize-dropdown-content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="select_teamTargetTeamIds"
            className="hide"
            style={{ display: "block" }}
          >
            <div className="form-group row m-b-5 p-b-0">
              <div className="col-4" />
              <div
                className="col-8"
                style={{
                  maxWidth: 480,
                  borderLeft: "4px solid #03A9F4",
                  marginLeft: 10
                }}
              >
                <input
                  type="text"
                  id="input_teamTargetTeamIds"
                  className="m-t-5 selectized"
                  placeholder="Search teams..."
                  tabIndex={-1}
                  defaultValue=""
                  style={{ display: "none" }}
                />
                <div className="selectize-control m-t-5 multi">
                  <div className="selectize-input items not-full">
                    <input
                      type="text"
                      autoComplete="off"
                      id="input_teamTargetTeamIds-selectized"
                      placeholder="Search teams..."
                      style={{ width: "102.262px" }}
                    />
                  </div>
                  <div
                    className="selectize-dropdown multi m-t-5"
                    style={{ display: "none", width: 0, top: 0, left: 0 }}
                  >
                    <div className="selectize-dropdown-content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      

    )
}
export default Step4Component;