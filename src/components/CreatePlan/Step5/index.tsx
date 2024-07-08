const Step5Component = () => {
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
          <h3 className="card-title">Revenue</h3>
          <img
            src="/img/revenue.png?v=43"
            width={60}
            className="pull-left m-l-10 m-r-20 m-b-20 align-bottom"
            style={{ position: "relative", top: "-5px" }}
          />
          <p className="card-text align-bottom">
            Measure sales performance based on total revenue.
          </p>
        </div>
        <br className="clear" />
        <button
          type="button"
          className="byRevenue btn btn-info pull-right m-t-20"
          style={{ width: 170 }}
        >
          <i className="icon-credit-card" />
          &nbsp;&nbsp;Select
        </button>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          Best for promoting sales volume growth.
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
          <h3 className="card-title">Profit / Margin</h3>
          <img
            src="/img/profit.png?v=43"
            width={60}
            className="pull-left m-l-10 m-r-20 m-b-20 align-bottom"
            style={{ position: "relative", top: "-5px" }}
          />
          <p className="card-text align-bottom">
            Measure sales performance based on profitability.
          </p>
        </div>
        <br className="clear" />
        <button
          type="button"
          className="byProfit btn btn-info pull-right m-t-20"
          style={{ width: 170 }}
        >
          <i className="icon-wallet" />
          &nbsp;&nbsp;Select
        </button>
      </div>
      <div className="card-footer">
        <small className="text-muted">Best for promoting profitability.</small>
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
          <h3 className="card-title">Score</h3>
          <img
            src="/img/scoring.png"
            width={60}
            className="pull-left m-l-10 m-r-20 m-b-20 align-bottom"
            style={{ position: "relative", top: "-5px" }}
          />
          <p className="card-text align-bottom">
            Measure sales performance based on custom scoring.
          </p>
        </div>
        <br className="clear" />
        <button
          type="button"
          className="byScore btn btn-info pull-right m-t-20"
          style={{ width: 170 }}
        >
          <i className="icon-calculator" />
          &nbsp;&nbsp;Select
        </button>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          Best for encouraging specific sales behaviors.
        </small>
      </div>
    </div>
  </div>
</div>

      </div>
      

    )
}
export default Step5Component;