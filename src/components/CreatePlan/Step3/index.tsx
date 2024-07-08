const Step3Component = () => {
    return(
        <div className="container-fluid content-row" style={{marginLeft: 50}}>
  <div className="row">
    <div
      className="scopeCard card col-lg-6 col-xl-12 m-b-20 m-r-20"
      style={{ maxWidth: 500 }}
    >
      <div className="card-body">
        <div style={{ height: 460 }}>
          <h3 className="card-title">By Individual</h3>
          <p className="card-text align-bottom">
            Measure the sales performance of individuals. Works best for
            individual contributor plans such as AEs, SDRs, etc.
          </p>
          <center>
          <dotlottie-player
  src="https://lottie.host/388af30a-76cd-465e-b949-706bab9a98cc/b4mO4tWJfA.json"
  background="transparent"
  speed={1}
  style={{ height: 300 }}
  loop=""
  autoPlay=""
/>

            <button
              type="button"
              className="byIndividual btn btn-info"
              style={{ width: 170 }}
            >
              <i className="ti-user" />
              &nbsp;&nbsp;Select
            </button>
            <br />
          </center>
        </div>
      </div>
    </div>
    <div
      className="scopeCard card col-lg-6 col-xl-12 m-b-20 m-r-20"
      style={{ maxWidth: 500 }}
    >
      <div className="card-body">
        <div style={{ height: 460 }}>
          <h3 className="card-title">By Team / Territory</h3>
          <p className="card-text align-bottom">
            Measure the collective sales performance of teams. Works best for
            territory managers, override commissions, etc.
          </p>
          <center>
          <dotlottie-player
  src="https://lottie.host/a2ae43d7-7e1e-4748-90e2-770d806dcc98/uYW2dDzr9a.json"
  background="transparent"
  speed={1}
  style={{ top: -10, height: 300 }}
  loop=""
  autoPlay=""
/>

            <button
              type="button"
              className="byTeam btn btn-info"
              style={{ width: 170 }}
            >
              <i className="icon-globe" />
              &nbsp;&nbsp;Select
            </button>
            <br />
          </center>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default Step3Component;