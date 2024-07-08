const Step6Component = () => {
    return(
        <div className="body" style={{marginLeft: 100}}>
      <div className="container-fluid content-row">
  <div className="row">
    <div
      className="card m-b-20 m-r-30"
      style={{
        border: "1px solid silver",
        minWidth: 360,
        maxWidth: 360,
        height: 270
      }}
    >
      <div className="card-body">
        <div>
          <h3 className="card-title">Raw Value</h3>
          <img
            src="https://salescookie.com/app/Content/assets2/images/form/raw.png"
            width={60}
            className="pull-left m-l-10 m-r-20 m-b-20 align-bottom"
          />
          <p className="card-text align-bottom">
            Compare <span className="scopeName">team</span>{" "}
            <span className="metricName">revenue</span> with fixed values.
          </p>
        </div>
        <br className="clear" />
        <button
          type="button"
          className="byRaw btn btn-info pull-right m-t-20"
          style={{ width: 170 }}
        >
          <i className="icon-size-fullscreen" />
          &nbsp;&nbsp;Select
        </button>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          The traditional way to measure performance.
        </small>
      </div>
    </div>
    <div
      className="card m-b-20 m-r-30"
      style={{
        border: "1px solid silver",
        minWidth: 360,
        maxWidth: 360,
        height: 270
      }}
    >
      <div className="card-body">
        <div>
          <h3 className="card-title">Competitive Rank</h3>
          <img
            src="https://salescookie.com/app/Content/assets2/images/form/competitive.png"
            width={60}
            className="pull-left m-l-10 m-r-20 m-b-20 align-bottom"
          />
          <p className="card-text align-bottom">
            Rank <span className="scopeNamePlural">teams</span> by{" "}
            <span className="metricName">revenue</span> attainment.
          </p>
        </div>
        <br className="clear" />
        <button
          type="button"
          className="byCompetitive btn btn-info pull-right m-t-20"
          style={{ width: 170 }}
        >
          <i className="icon-trophy" />
          &nbsp;&nbsp;Select
        </button>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          Best for promoting competitive behaviors.
        </small>
      </div>
    </div>
    <div
      className="card m-b-20 m-r-30"
      style={{
        border: "1px solid silver",
        minWidth: 360,
        maxWidth: 360,
        height: 270
      }}
    >
      <div className="card-body">
        <div>
          <h3 className="card-title">% Increase</h3>
          <img
            src="https://salescookie.com/app/Content/assets2/images/form/increase.png"
            width={60}
            className="pull-left m-l-10 m-r-20 m-b-20 align-bottom"
          />
          <p className="card-text align-bottom">
            Compare <span className="scopeName">team</span>{" "}
            <span className="metricName">revenue</span> w/ previous period.
          </p>
        </div>
        <br className="clear" />
        <button
          type="button"
          className="byIncrease btn btn-info pull-right m-t-20"
          style={{ width: 170 }}
        >
          <i className="icon-rocket" />
          &nbsp;&nbsp;Select
        </button>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          Best for promoting relative growth.
        </small>
      </div>
    </div>
  </div>
</div>

      </div>
      

    )
}
export default Step6Component;