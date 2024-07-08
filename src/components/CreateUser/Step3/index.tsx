const Step3Component = () => {
    return (
        <section
        id="tab-wizard-p-2"
        role="tabpanel"
        aria-labelledby="tab-wizard-h-2"
        className="body current"
        aria-hidden="false"
        style={{}}
      >
        <div style={{ marginLeft: 100 }}>
          <table className="m-t-10" cellPadding={10}>
            <tbody>
              <tr>
                <td>
                  <dotlottie-player
                    src="https://lottie.host/41924fee-6dd3-4c6f-be67-58989faddc9e/In43lhRyUd.json"
                    background="transparent"
                    speed={1}
                    style={{ width: 70, height: 70 }}
                    loop=""
                    autoPlay=""
                  />
                </td>
                <td>
                  <h2 className="m-b-0">Role</h2>
                  <strong>Select a role to assign</strong>
                  <br /> The same role will be applied to all users
                </td>
              </tr>
            </tbody>
          </table>
          <div className="container-fluid content-row m-t-20">
            <div className="row">
              <div
                className="card m-t-20 m-b-20 m-r-30"
                style={{
                  border: "1px solid silver",
                  minWidth: 350,
                  maxWidth: 350,
                  height: 300
                }}
              >
                <div className="card-body">
                  <div>
                    <h3 className="card-title">Full Admin</h3>
                    <i className="icon-lock display-5 pull-left m-l-10 m-r-20 m-b-20 align-bottom" />
                    <p className="card-text align-bottom">
                      Users with unlimited administrative permissions.
                    </p>
                  </div>
                  <br className="clear" />
                  <button
                    type="button"
                    className="wsRole btn btn-info pull-right m-t-20"
                    style={{ width: 180 }}
                  >
                    <i className="icon-lock-open" />
                    &nbsp;&nbsp;Full Admin{" "}
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Best for users you fully trust to view and manage all
                    workspace data.
                  </small>
                </div>
              </div>
              <div
                className="card m-t-20 m-b-20 m-r-30"
                style={{
                  border: "1px solid silver",
                  minWidth: 350,
                  maxWidth: 350,
                  height: 300
                }}
              >
                <div className="card-body">
                  <div>
                    <h3 className="card-title">Limited Admin</h3>
                    <i className="icon-lock-open display-5 pull-left m-l-10 m-r-20 m-b-20 align-bottom" />
                    <p className="card-text align-bottom">
                      Read-only admins (can be promoted to plan admins).
                    </p>
                  </div>
                  <br className="clear" />
                  <button
                    type="button"
                    className="wsRole btn btn-info pull-right m-t-20"
                    style={{ width: 180 }}
                  >
                    <i className="icon-lock" />
                    &nbsp;&nbsp;Limited Admin{" "}
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Best for users you want to delegate management of specific
                    plans to.
                  </small>
                </div>
              </div>
              <div
                className="card m-t-20 m-b-30"
                style={{
                  border: "1px solid silver",
                  minWidth: 350,
                  maxWidth: 350,
                  height: 300
                }}
              >
                <div className="card-body">
                  <div>
                    <h3 className="card-title">Participant</h3>
                    <i className="fa fa-eye-slash display-5 pull-left m-l-10 m-r-20 m-b-20 align-bottom" />
                    <p className="card-text align-bottom">
                      Users with access to incentive dashboards only.
                    </p>
                  </div>
                  <br className="clear" />
                  <button
                    type="button"
                    className="wsRole btn btn-info pull-right m-t-20"
                    style={{ width: 180 }}
                  >
                    <i className="fa fa-eye-slash" />
                    &nbsp;&nbsp;Participant{" "}
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Best for regular participants or managers who do not need
                    to view or manage plans.
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

export default Step3Component;