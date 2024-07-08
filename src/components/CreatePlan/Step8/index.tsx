const Step8Component = () => {
    return(
        <section
        id="tab-wizard-p-6"
        role="tabpanel"
        aria-labelledby="tab-wizard-h-6"
        className="body current"
        aria-hidden="false"
        style={{}}
      >
        <div id="div_analysisDetails" className="overlayDetails hide">
          <div
            id="div_analysisDetailsContent"
            className="overlayDetailsContent"
          ></div>
        </div>
        <br />
        <div className="col-12">
          <div className="row">
            <div className="col-xl-5">
            <dotlottie-player
  src="https://lottie.host/5c468944-756a-448e-af4a-264561258b71/yNPnLDSwup.json"
  background="transparent"
  speed={1}
  style={{ width: 600, height: 600, marginTop: -15 }}
  loop=""
  autoPlay=""
/>

            </div>
            <div className="col-xl-7">
              <div className="m-l-20">
                <h2 className="m-b-0">Your incentive plan is ready for creation</h2>
                &nbsp;Additional options will be available after creating your plan
                <div>
                  <div className="form-group row m-l-20 m-t-30">
                    <div className="col-4">
                      <h5 style={{ fontWeight: 600 }}>
                        <i className="icon-calender m-r-10" />
                        Schedule
                      </h5>
                    </div>
                    <div className="col-8">
                      <h5>
                        <span className="periodType">Monthly</span>
                      </h5>
                    </div>
                  </div>
                  <div className="form-group row m-l-20">
                    <div className="col-4">
                      <h5 style={{ fontWeight: 600 }}>
                        <i className="icon-chart m-r-10" />
                        Performance
                      </h5>
                    </div>
                    <div className="col-8">
                      <h5>
                        By <span className="scopeNameUpper">Team</span>&nbsp;
                        <span className="metricNameUpper">Revenue</span>&nbsp;
                        <span className="measureNameUpper">Total</span>
                      </h5>
                    </div>
                  </div>
                  <div className="form-group row m-l-20">
                    <div className="col-4">
                      <h5 style={{ fontWeight: 600 }}>
                        <i className="icon-menu m-r-10" />
                        Attainment
                      </h5>
                    </div>
                    <div className="col-8">
                      <h5>
                        <span className="levelCount">1</span> Level(s)
                      </h5>
                    </div>
                  </div>
                  <div className="form-group row m-l-20">
                    <div className="col-4">
                      <h5 style={{ fontWeight: 600 }}>
                        <i className="icon-eye m-r-10" />
                        Visibility
                      </h5>
                    </div>
                    <div className="col-8">
                      <h5>
                        <span className="planAccess">
                          Public - Full &amp; Limited Admins
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="form-group row m-l-20">
                    <div className="col-4">
                      <button
                        type="button"
                        id="btn_analyze"
                        className="btn btn-warning"
                      >
                        <i className="icon-magnifier-add" />
                        &nbsp;&nbsp;Check My Plan
                      </button>
                    </div>
                    <div className="col-8">
                      <a
                        className="btn btn-danger"
                        href="https://salescookie.com/Home/RequestDemo"
                        target="_blank"
                      >
                        <i className="icon-bubble" />
                        &nbsp;&nbsp;Get Some Help
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
      
      

    )
}
export default Step8Component;