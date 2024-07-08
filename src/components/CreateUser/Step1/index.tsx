const Step1Component = () => {
    return (
        <section
  id="tab-wizard-p-0"
  role="tabpanel"
  aria-labelledby="tab-wizard-h-0"
  className="body current"
  aria-hidden="false"
>
  <div style={{ marginLeft: 100 }}>
    <table className="m-t-10" cellPadding={10}>
      <tbody>
        <tr>
          <td>
          <dotlottie-player
  src="https://lottie.host/48b876e6-25ed-4bc8-a557-5f07efaf5d02/7wjlSw8Aml.json"
  background="transparent"
  speed={1}
  style={{ width: 60, height: 60 }}
  loop=""
  autoPlay=""
/>

          </td>
          <td>
            <h2 className="m-b-0">Source</h2>
            Select how you want to add users to your workspace
          </td>
        </tr>
      </tbody>
    </table>
    <div className="container-fluid content-row">
      <div className="row">
        <div
          className="card m-t-20 m-b-20 m-r-30"
          style={{
            border: "1px solid silver",
            minWidth: 350,
            maxWidth: 350,
            height: 270
          }}
        >
          <div className="card-body">
            <div>
              <h3 className="card-title">Quick Add</h3>
              <i className="ti-user display-5 pull-left m-l-10 m-r-20 m-b-20 align-bottom" />
              <p className="card-text align-bottom">
                Quickly enter a single user's information.
              </p>
            </div>
            <br className="clear" />
            <button
              type="button"
            //   susource="Single"
              className="suSource btn btn-info pull-right m-t-20"
              style={{ width: 180 }}
            >
              <i className="ti-user" />
              &nbsp;&nbsp;Quick Add
            </button>
          </div>
          <div className="card-footer">
            <small className="text-muted">Best for adding a single user.</small>
          </div>
        </div>
        <div
          className="card m-t-20 m-b-20 m-r-30"
          style={{
            border: "1px solid silver",
            minWidth: 350,
            maxWidth: 350,
            height: 270
          }}
        >
          <div className="card-body">
            <div>
              <h3 className="card-title">Bulk Add</h3>
              <i className="ti-layout-grid2 display-5 pull-left m-l-10 m-r-20 m-b-20 align-bottom" />
              <p className="card-text align-bottom">
                Enter users interactively in a spreadsheet.
              </p>
            </div>
            <br className="clear" />
            <button
              type="button"
            //   susource="Bulk"
              className="suSource btn btn-info pull-right m-t-20"
              style={{ width: 180 }}
            >
              <i className="icon-people" />
              &nbsp;&nbsp;Bulk Add
            </button>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Best for adding multiple users.
            </small>
          </div>
        </div>
        <div
          className="card m-t-20 m-b-20 m-r-30"
          style={{
            border: "1px dashed silver",
            minWidth: 350,
            maxWidth: 350,
            height: 270
          }}
        >
          <div className="card-body">
            <div>
              <h3 className="card-title">Connection</h3>
              <table cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td width={55} height={55}>
                      <div
                        className="lottie"
                        // lottieurl="/app/Content/assets2/animated/connectNow.json"
                        // speed="0.5"/
                        style={{
                          width: 70,
                          position: "absolute",
                          top: 50,
                          left: 15
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 300 300"
                          width={300}
                          height={300}
                          preserveAspectRatio="xMidYMid meet"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                            contentVisibility: "visible"
                          }}
                        >
                          <defs>
                            <clipPath id="__lottie_element_42">
                              <rect width={300} height={300} x={0} y={0} />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#__lottie_element_42)">
                            <g
                              transform="matrix(1,0,0,1,150,150)"
                              opacity={1}
                              style={{ display: "none" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fillOpacity={0}
                                  stroke="rgb(0,0,0)"
                                  strokeOpacity={1}
                                  strokeWidth={12}
                                  d=" M54,41 C54,41 72.4209976196289,41 72.4209976196289,41 C91.97799682617188,41 107.83300018310547,25.735000610351562 107.83300018310547,7.118000030517578 C107.83300018310547,-8.520000457763672 96.64399719238281,-21.822999954223633 81.4729995727539,-25.642000198364258 C81.48400115966797,-25.999000549316406 81.5,-26.354999542236328 81.5,-26.71500015258789 C81.5,-45.215999603271484 66.5009994506836,-60.21500015258789 48,-60.21500015258789 C44.87099838256836,-60.21500015258789 41.84700012207031,-59.777000427246094 38.9739990234375,-58.974998474121094 C34.92399978637695,-82.68299865722656 13.324000358581543,-100.78500366210938 -12.72700023651123,-100.78500366210938 C-41.6619987487793,-100.78500366210938 -65.11900329589844,-78.45600128173828 -65.11900329589844,-50.91299819946289 C-65.11900329589844,-50.91299819946289 -65.11900329589844,-50.9119987487793 -65.11900329589844,-50.9119987487793 C-65.11900329589844,-46.14699935913086 -64.40299987792969,-41.54499816894531 -63.09199905395508,-37.180999755859375 C-64.33300018310547,-37.28900146484375 -65.58799743652344,-37.35200119018555 -66.85900115966797,-37.35200119018555 C-89.48799896240234,-37.35200119018555 -107.83300018310547,-19.716999053955078 -107.83300018310547,1.8240000009536743 C-107.83300018310547,23.365999221801758 -89.48799896240234,41 -66.85900115966797,41 C-66.85900115966797,41 -52,41 -52,41"
                                />
                              </g>
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fillOpacity={0}
                                  stroke="rgb(0,0,0)"
                                  strokeOpacity={1}
                                  strokeWidth={12}
                                  d=" M-44.59299850463867,-47 C-44.59299850463867,-65.5530014038086 -29.55299949645996,-80.59300231933594 -11,-80.59300231933594"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,150,150)"
                              opacity={1}
                              style={{ display: "block" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fillOpacity={0}
                                  stroke="rgb(0,0,0)"
                                  strokeOpacity={1}
                                  strokeWidth={12}
                                  d=" M81.4729995727539,-25.642000198364258 C81.48400115966797,-25.999000549316406 81.5,-26.354999542236328 81.5,-26.71500015258789 C81.5,-45.215999603271484 66.5009994506836,-60.21500015258789 48,-60.21500015258789 C44.87099838256836,-60.21500015258789 41.84700012207031,-59.777000427246094 38.9739990234375,-58.974998474121094 C34.92399978637695,-82.68299865722656 13.324000358581543,-100.78500366210938 -12.72700023651123,-100.78500366210938 C-41.6619987487793,-100.78500366210938 -65.11900329589844,-78.45600128173828 -65.11900329589844,-50.91299819946289 C-65.11900329589844,-50.91299819946289 -65.11900329589844,-50.9119987487793 -65.11900329589844,-50.9119987487793 C-65.11900329589844,-46.14699935913086 -64.40299987792969,-41.54499816894531 -63.09199905395508,-37.180999755859375 C-64.33300018310547,-37.28900146484375 -65.58799743652344,-37.35200119018555 -66.85900115966797,-37.35200119018555 C-89.48799896240234,-37.35200119018555 -107.83300018310547,-19.716999053955078 -107.83300018310547,1.8240000009536743 C-107.83300018310547,23.365999221801758 -89.48799896240234,41 -66.85900115966797,41 C-66.85900115966797,41 72.4209976196289,41 72.4209976196289,41 C91.97799682617188,41 107.83300018310547,25.735000610351562 107.83300018310547,7.118000030517578 C107.83300018310547,-8.520000457763672 96.64399719238281,-21.822999954223633 81.4729995727539,-25.642000198364258z"
                                />
                              </g>
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fillOpacity={0}
                                  stroke="rgb(0,0,0)"
                                  strokeOpacity={1}
                                  strokeWidth={12}
                                  d=" M-44.59299850463867,-47 C-44.59299850463867,-65.5530014038086 -29.55299949645996,-80.59300231933594 -11,-80.59300231933594"
                                />
                              </g>
                            </g>
                            <g
                              transform="matrix(1,0,0,1,150,180)"
                              opacity={1}
                              style={{ display: "none" }}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fillOpacity={0}
                                  stroke="rgb(0,0,0)"
                                  strokeOpacity={1}
                                  strokeWidth={12}
                                  d=" M-44.07600021362305,47.16699981689453 C-44.07600021362305,47.16699981689453 0,3.0899999141693115 0,3.0899999141693115 C0,3.0899999141693115 44.07600021362305,47.16699981689453 44.07600021362305,47.16699981689453"
                                />
                              </g>
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fillOpacity={0}
                                  stroke="rgb(0,0,0)"
                                  strokeOpacity={1}
                                  strokeWidth={12}
                                  d=" M0,3 C0,3 0,89 0,89"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </td>
                    <td>
                      <p className="card-text align-bottom m-l-20">
                        No connections to retrieve users from.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br className="clear" />
            <a
              className="btn btn-info pull-right m-t-20"
              style={{ width: 180 }}
              href="/app/ConnectedSystems/Overview/173dac8d-2c4a-11ef-8ee7-002248475315"
            >
              <i className="fa fa-plus" />
              &nbsp;&nbsp;Add Connection
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Best for avoiding input errors.
            </small>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</section>

    )
}
export default Step1Component;