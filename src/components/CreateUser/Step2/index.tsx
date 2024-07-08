const Step2Component = () => {
    return (
        <>
  <section
    id="tab-wizard-p-1"
    role="tabpanel"
    aria-labelledby="tab-wizard-h-1"
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
  src="https://lottie.host/1421a49f-be7f-4b71-992e-b712d8ce1a01/MY1jJ2e4ob.json"
  background="transparent"
  speed={1}
  style={{ width: 70, height: 70 }}
  loop=""
  autoPlay=""
/>

            </td>
            <td>
              <h2 className="m-b-0">Users</h2>
              <strong>Enter users to add to your workspace</strong>
              <br />
              You'll be able to choose whether to notify users
            </td>
          </tr>
        </tbody>
      </table>
      <div className="container-fluid content-row m-t-0">
        <div id="div_single" style={{ display: "block" }}>
          <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-20">
            <div className="form-group row">
              <label
                className="col-sm-3 text-right control-label col-form-label"
                htmlFor="FirstName"
              >
                First Name
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  data-val="true"
                  data-val-maxlength="The field First Name must be a string or array type with a maximum length of '450'."
                  data-val-maxlength-max={450}
                  id="FirstName"
                  name="FirstName"
                  type="text"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-sm-3 text-right control-label col-form-label"
                htmlFor="LastName"
              >
                Last Name
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  data-val="true"
                  data-val-maxlength="The field Last Name must be a string or array type with a maximum length of '450'."
                  data-val-maxlength-max={450}
                  id="LastName"
                  name="LastName"
                  type="text"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-sm-3 text-right control-label col-form-label"
                htmlFor="EmailAddress"
              >
                Email Address
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  data-val="true"
                  data-val-maxlength="The field Email Address must be a string or array type with a maximum length of '450'."
                  data-val-maxlength-max={450}
                  data-val-required="The Email Address field is required."
                  id="EmailAddress"
                  name="EmailAddress"
                  placeholder="example@gmail.com"
                  type="text"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-sm-3 text-right control-label col-form-label"
                htmlFor="Tags"
              >
                Tags
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  data-val="true"
                  data-val-maxlength="The field Tags must be a string or array type with a maximum length of '450'."
                  data-val-maxlength-max={450}
                  id="Tags"
                  name="Tags"
                  type="text"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-sm-3 text-right control-label col-form-label"
                htmlFor="Aliases"
              >
                Aliases
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  data-val="true"
                  data-val-maxlength="The field Aliases must be a string or array type with a maximum length of '450'."
                  data-val-maxlength-max={450}
                  id="Aliases"
                  name="Aliases"
                  type="text"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
    )
}
export default Step2Component;