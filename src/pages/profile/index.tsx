const profileUser = () => {
    return (
        <div style={{paddingTop:  25}}>
            <ul className="nav nav-tabs customtab" role="tablist">
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        id="infoNav"
                        data-toggle="tab"
                        href="#info"
                        role="tab"
                        aria-selected="false"
                    >
                        <span className="hidden-sm-up">
                            <i className="ti-home" />
                        </span>
                        <span className="hidden-xs-down">Profile</span>
                    </a>{" "}
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="securityNav"
                        data-toggle="tab"
                        href="#security"
                        role="tab"
                        aria-selected="false"
                    >
                        <span className="hidden-sm-up">
                            <i className="ti-lock" />
                        </span>
                        <span className="hidden-xs-down">Security</span>
                    </a>{" "}
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="communicationsNav"
                        data-toggle="tab"
                        href="#communications"
                        role="tab"
                        aria-selected="false"
                    >
                        <span className="hidden-sm-up">
                            <i className="ti-email" />
                        </span>
                        <span className="hidden-xs-down">Emails</span>
                    </a>{" "}
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="accountNav"
                        data-toggle="tab"
                        href="#account"
                        role="tab"
                        aria-selected="true"
                    >
                        <span className="hidden-sm-up">
                            <i className="ti-user" />
                        </span>
                        <span className="hidden-xs-down">Account</span>
                    </a>{" "}
                </li>
            </ul>
            <div className="tab-content">
  <div className="tab-pane active" id="info" role="tabpanel">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Profile Picture
                </h4>
                <h6 className="card-subtitle">
                  Choose how other users view you in the application.
                </h6>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30"
              style={{ marginLeft: 80 }}
            >
              <div className="form-group row">
                <div id="div_profileImage">
                  <span
                    className="profileImage"
                    data-toggle="tooltip"
                    data-original-title="Nguyễn Khắc Anh"
                  >
                    <span
                      style={{ cursor: "pointer" }}
                    //   onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/52a398c6-95f9-4fc7-bbc6-bee09a16cc23'"
                    >
                      <span
                        className="userUploadedImage image round"
                        style={{ backgroundColor: "white" }}
                      >
                        <img
                          src="/app/Account/UserProfileImage?systemUserId=52a398c6-95f9-4fc7-bbc6-bee09a16cc23&v=3980383293"
                          width={50}
                          height={50}
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <div>
                  <button
                    type="button"
                    id="btn_changePictureImage"
                    className="btn btn-info m-l-30 m-t-5"
                  >
                    <i className="icon-shuffle" />
                    &nbsp;&nbsp;Change
                  </button>
                </div>
              </div>
              <div className="form-group row">
                <form
                  id="dropzoneForm"
                  className="dropzone dz-clickable hide"
                  action="/app/Account/UploadUserProfileImage"
                  method="post"
                  encType="multipart/form-data"
                  style={{ border: "black dashed 3px" }}
                >
                  <div className="dz-default dz-message">
                    <span>Click here to upload a new image (up to 10 MB)</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Account Details
                </h4>
                <h6 className="card-subtitle">
                  Choose display settings and preferences.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
              <form
                action="/app/Me/Me_UpdateAccount/173dac8d-2c4a-11ef-8ee7-002248475315"
                data-ajax="true"
                data-ajax-failure="onUpdateRecordFailure"
                data-ajax-method="POST"
                data-ajax-success="onUpdateAccountSuccess"
                id="form_updateAccount"
                method="post"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="0KuHsVJKKjGpXh2wIFil_aYA1Y5pxCeleJdXFZjs0Qv-RPYR5Tz8eTxR1V_LcPqyE4q0jTZiuOTlFWYIfLyMs--PL-ZpsQ13wKY48IpZmeL9TDg330SmVbdx2LOLFdd8SqaiNFp5qTXuRPxs0eycTQ2"
                />
                <input
                  id="PhoneNumberCountryName"
                  name="PhoneNumberCountryName"
                  type="hidden"
                  defaultValue="us"
                />
                <input
                  id="PhoneNumberCountryCode"
                  name="PhoneNumberCountryCode"
                  type="hidden"
                  defaultValue={1}
                />{" "}
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_EmailAddress"
                  >
                    Email Address
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field Email Address must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_EmailAddress"
                      name="SystemUser.EmailAddress"
                      type="text"
                      defaultValue="anhhuha4@gmail.com"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_FirstName"
                  >
                    First Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field First Name must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_FirstName"
                      name="SystemUser.FirstName"
                      type="text"
                      defaultValue="Nguyễn"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_LastName"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field Last Name must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_LastName"
                      name="SystemUser.LastName"
                      type="text"
                      defaultValue="Khắc Anh"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="PhoneNumber"
                  >
                    Phone Number
                  </label>
                  <div className="col-sm-9">
                    <div className="intl-tel-input allow-dropdown form-control">
                      <div className="flag-container">
                        <div
                          className="selected-flag"
                          tabIndex={0}
                          title="United States: +1"
                        >
                          <div className="iti-flag us" />
                          <div className="iti-arrow" />
                        </div>
                        <ul className="country-list hide">
                          <li
                            className="country preferred active"
                            data-dial-code={1}
                            data-country-code="us"
                          >
                            <div className="flag-box">
                              <div className="iti-flag us" />
                            </div>
                            <span className="country-name">United States</span>
                            <span className="dial-code">+1</span>
                          </li>
                          <li
                            className="country preferred"
                            data-dial-code={44}
                            data-country-code="gb"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gb" />
                            </div>
                            <span className="country-name">United Kingdom</span>
                            <span className="dial-code">+44</span>
                          </li>
                          <li className="divider" />
                          <li
                            className="country"
                            data-dial-code={93}
                            data-country-code="af"
                          >
                            <div className="flag-box">
                              <div className="iti-flag af" />
                            </div>
                            <span className="country-name">
                              Afghanistan (‫افغانستان‬‎)
                            </span>
                            <span className="dial-code">+93</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={355}
                            data-country-code="al"
                          >
                            <div className="flag-box">
                              <div className="iti-flag al" />
                            </div>
                            <span className="country-name">
                              Albania (Shqipëri)
                            </span>
                            <span className="dial-code">+355</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={213}
                            data-country-code="dz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag dz" />
                            </div>
                            <span className="country-name">
                              Algeria (‫الجزائر‬‎)
                            </span>
                            <span className="dial-code">+213</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1684}
                            data-country-code="as"
                          >
                            <div className="flag-box">
                              <div className="iti-flag as" />
                            </div>
                            <span className="country-name">American Samoa</span>
                            <span className="dial-code">+1684</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={376}
                            data-country-code="ad"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ad" />
                            </div>
                            <span className="country-name">Andorra</span>
                            <span className="dial-code">+376</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={244}
                            data-country-code="ao"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ao" />
                            </div>
                            <span className="country-name">Angola</span>
                            <span className="dial-code">+244</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1264}
                            data-country-code="ai"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ai" />
                            </div>
                            <span className="country-name">Anguilla</span>
                            <span className="dial-code">+1264</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1268}
                            data-country-code="ag"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ag" />
                            </div>
                            <span className="country-name">
                              Antigua and Barbuda
                            </span>
                            <span className="dial-code">+1268</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={54}
                            data-country-code="ar"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ar" />
                            </div>
                            <span className="country-name">Argentina</span>
                            <span className="dial-code">+54</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={374}
                            data-country-code="am"
                          >
                            <div className="flag-box">
                              <div className="iti-flag am" />
                            </div>
                            <span className="country-name">
                              Armenia (Հայաստան)
                            </span>
                            <span className="dial-code">+374</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={297}
                            data-country-code="aw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag aw" />
                            </div>
                            <span className="country-name">Aruba</span>
                            <span className="dial-code">+297</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={61}
                            data-country-code="au"
                          >
                            <div className="flag-box">
                              <div className="iti-flag au" />
                            </div>
                            <span className="country-name">Australia</span>
                            <span className="dial-code">+61</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={43}
                            data-country-code="at"
                          >
                            <div className="flag-box">
                              <div className="iti-flag at" />
                            </div>
                            <span className="country-name">
                              Austria (Österreich)
                            </span>
                            <span className="dial-code">+43</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={994}
                            data-country-code="az"
                          >
                            <div className="flag-box">
                              <div className="iti-flag az" />
                            </div>
                            <span className="country-name">
                              Azerbaijan (Azərbaycan)
                            </span>
                            <span className="dial-code">+994</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1242}
                            data-country-code="bs"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bs" />
                            </div>
                            <span className="country-name">Bahamas</span>
                            <span className="dial-code">+1242</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={973}
                            data-country-code="bh"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bh" />
                            </div>
                            <span className="country-name">
                              Bahrain (‫البحرين‬‎)
                            </span>
                            <span className="dial-code">+973</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={880}
                            data-country-code="bd"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bd" />
                            </div>
                            <span className="country-name">
                              Bangladesh (বাংলাদেশ)
                            </span>
                            <span className="dial-code">+880</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1246}
                            data-country-code="bb"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bb" />
                            </div>
                            <span className="country-name">Barbados</span>
                            <span className="dial-code">+1246</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={375}
                            data-country-code="by"
                          >
                            <div className="flag-box">
                              <div className="iti-flag by" />
                            </div>
                            <span className="country-name">
                              Belarus (Беларусь)
                            </span>
                            <span className="dial-code">+375</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={32}
                            data-country-code="be"
                          >
                            <div className="flag-box">
                              <div className="iti-flag be" />
                            </div>
                            <span className="country-name">
                              Belgium (België)
                            </span>
                            <span className="dial-code">+32</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={501}
                            data-country-code="bz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bz" />
                            </div>
                            <span className="country-name">Belize</span>
                            <span className="dial-code">+501</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={229}
                            data-country-code="bj"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bj" />
                            </div>
                            <span className="country-name">Benin (Bénin)</span>
                            <span className="dial-code">+229</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1441}
                            data-country-code="bm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bm" />
                            </div>
                            <span className="country-name">Bermuda</span>
                            <span className="dial-code">+1441</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={975}
                            data-country-code="bt"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bt" />
                            </div>
                            <span className="country-name">Bhutan (འབྲུག)</span>
                            <span className="dial-code">+975</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={591}
                            data-country-code="bo"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bo" />
                            </div>
                            <span className="country-name">Bolivia</span>
                            <span className="dial-code">+591</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={387}
                            data-country-code="ba"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ba" />
                            </div>
                            <span className="country-name">
                              Bosnia and Herzegovina (Босна и Херцеговина)
                            </span>
                            <span className="dial-code">+387</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={267}
                            data-country-code="bw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bw" />
                            </div>
                            <span className="country-name">Botswana</span>
                            <span className="dial-code">+267</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={55}
                            data-country-code="br"
                          >
                            <div className="flag-box">
                              <div className="iti-flag br" />
                            </div>
                            <span className="country-name">
                              Brazil (Brasil)
                            </span>
                            <span className="dial-code">+55</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={246}
                            data-country-code="io"
                          >
                            <div className="flag-box">
                              <div className="iti-flag io" />
                            </div>
                            <span className="country-name">
                              British Indian Ocean Territory
                            </span>
                            <span className="dial-code">+246</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1284}
                            data-country-code="vg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag vg" />
                            </div>
                            <span className="country-name">
                              British Virgin Islands
                            </span>
                            <span className="dial-code">+1284</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={673}
                            data-country-code="bn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bn" />
                            </div>
                            <span className="country-name">Brunei</span>
                            <span className="dial-code">+673</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={359}
                            data-country-code="bg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bg" />
                            </div>
                            <span className="country-name">
                              Bulgaria (България)
                            </span>
                            <span className="dial-code">+359</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={226}
                            data-country-code="bf"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bf" />
                            </div>
                            <span className="country-name">Burkina Faso</span>
                            <span className="dial-code">+226</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={257}
                            data-country-code="bi"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bi" />
                            </div>
                            <span className="country-name">
                              Burundi (Uburundi)
                            </span>
                            <span className="dial-code">+257</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={855}
                            data-country-code="kh"
                          >
                            <div className="flag-box">
                              <div className="iti-flag kh" />
                            </div>
                            <span className="country-name">
                              Cambodia (កម្ពុជា)
                            </span>
                            <span className="dial-code">+855</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={237}
                            data-country-code="cm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cm" />
                            </div>
                            <span className="country-name">
                              Cameroon (Cameroun)
                            </span>
                            <span className="dial-code">+237</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1}
                            data-country-code="ca"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ca" />
                            </div>
                            <span className="country-name">Canada</span>
                            <span className="dial-code">+1</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={238}
                            data-country-code="cv"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cv" />
                            </div>
                            <span className="country-name">
                              Cape Verde (Kabu Verdi)
                            </span>
                            <span className="dial-code">+238</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={599}
                            data-country-code="bq"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bq" />
                            </div>
                            <span className="country-name">
                              Caribbean Netherlands
                            </span>
                            <span className="dial-code">+599</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1345}
                            data-country-code="ky"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ky" />
                            </div>
                            <span className="country-name">Cayman Islands</span>
                            <span className="dial-code">+1345</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={236}
                            data-country-code="cf"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cf" />
                            </div>
                            <span className="country-name">
                              Central African Republic (République
                              centrafricaine)
                            </span>
                            <span className="dial-code">+236</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={235}
                            data-country-code="td"
                          >
                            <div className="flag-box">
                              <div className="iti-flag td" />
                            </div>
                            <span className="country-name">Chad (Tchad)</span>
                            <span className="dial-code">+235</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={56}
                            data-country-code="cl"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cl" />
                            </div>
                            <span className="country-name">Chile</span>
                            <span className="dial-code">+56</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={86}
                            data-country-code="cn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cn" />
                            </div>
                            <span className="country-name">China (中国)</span>
                            <span className="dial-code">+86</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={61}
                            data-country-code="cx"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cx" />
                            </div>
                            <span className="country-name">
                              Christmas Island
                            </span>
                            <span className="dial-code">+61</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={61}
                            data-country-code="cc"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cc" />
                            </div>
                            <span className="country-name">
                              Cocos (Keeling) Islands
                            </span>
                            <span className="dial-code">+61</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={57}
                            data-country-code="co"
                          >
                            <div className="flag-box">
                              <div className="iti-flag co" />
                            </div>
                            <span className="country-name">Colombia</span>
                            <span className="dial-code">+57</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={269}
                            data-country-code="km"
                          >
                            <div className="flag-box">
                              <div className="iti-flag km" />
                            </div>
                            <span className="country-name">
                              Comoros (‫جزر القمر‬‎)
                            </span>
                            <span className="dial-code">+269</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={243}
                            data-country-code="cd"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cd" />
                            </div>
                            <span className="country-name">
                              Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)
                            </span>
                            <span className="dial-code">+243</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={242}
                            data-country-code="cg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cg" />
                            </div>
                            <span className="country-name">
                              Congo (Republic) (Congo-Brazzaville)
                            </span>
                            <span className="dial-code">+242</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={682}
                            data-country-code="ck"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ck" />
                            </div>
                            <span className="country-name">Cook Islands</span>
                            <span className="dial-code">+682</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={506}
                            data-country-code="cr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cr" />
                            </div>
                            <span className="country-name">Costa Rica</span>
                            <span className="dial-code">+506</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={225}
                            data-country-code="ci"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ci" />
                            </div>
                            <span className="country-name">Côte d’Ivoire</span>
                            <span className="dial-code">+225</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={385}
                            data-country-code="hr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag hr" />
                            </div>
                            <span className="country-name">
                              Croatia (Hrvatska)
                            </span>
                            <span className="dial-code">+385</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={53}
                            data-country-code="cu"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cu" />
                            </div>
                            <span className="country-name">Cuba</span>
                            <span className="dial-code">+53</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={599}
                            data-country-code="cw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cw" />
                            </div>
                            <span className="country-name">Curaçao</span>
                            <span className="dial-code">+599</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={357}
                            data-country-code="cy"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cy" />
                            </div>
                            <span className="country-name">
                              Cyprus (Κύπρος)
                            </span>
                            <span className="dial-code">+357</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={420}
                            data-country-code="cz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag cz" />
                            </div>
                            <span className="country-name">
                              Czech Republic (Česká republika)
                            </span>
                            <span className="dial-code">+420</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={45}
                            data-country-code="dk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag dk" />
                            </div>
                            <span className="country-name">
                              Denmark (Danmark)
                            </span>
                            <span className="dial-code">+45</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={253}
                            data-country-code="dj"
                          >
                            <div className="flag-box">
                              <div className="iti-flag dj" />
                            </div>
                            <span className="country-name">Djibouti</span>
                            <span className="dial-code">+253</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1767}
                            data-country-code="dm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag dm" />
                            </div>
                            <span className="country-name">Dominica</span>
                            <span className="dial-code">+1767</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1}
                            data-country-code="do"
                          >
                            <div className="flag-box">
                              <div className="iti-flag do" />
                            </div>
                            <span className="country-name">
                              Dominican Republic (República Dominicana)
                            </span>
                            <span className="dial-code">+1</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={593}
                            data-country-code="ec"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ec" />
                            </div>
                            <span className="country-name">Ecuador</span>
                            <span className="dial-code">+593</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={20}
                            data-country-code="eg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag eg" />
                            </div>
                            <span className="country-name">Egypt (‫مصر‬‎)</span>
                            <span className="dial-code">+20</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={503}
                            data-country-code="sv"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sv" />
                            </div>
                            <span className="country-name">El Salvador</span>
                            <span className="dial-code">+503</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={240}
                            data-country-code="gq"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gq" />
                            </div>
                            <span className="country-name">
                              Equatorial Guinea (Guinea Ecuatorial)
                            </span>
                            <span className="dial-code">+240</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={291}
                            data-country-code="er"
                          >
                            <div className="flag-box">
                              <div className="iti-flag er" />
                            </div>
                            <span className="country-name">Eritrea</span>
                            <span className="dial-code">+291</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={372}
                            data-country-code="ee"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ee" />
                            </div>
                            <span className="country-name">
                              Estonia (Eesti)
                            </span>
                            <span className="dial-code">+372</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={251}
                            data-country-code="et"
                          >
                            <div className="flag-box">
                              <div className="iti-flag et" />
                            </div>
                            <span className="country-name">Ethiopia</span>
                            <span className="dial-code">+251</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={500}
                            data-country-code="fk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag fk" />
                            </div>
                            <span className="country-name">
                              Falkland Islands (Islas Malvinas)
                            </span>
                            <span className="dial-code">+500</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={298}
                            data-country-code="fo"
                          >
                            <div className="flag-box">
                              <div className="iti-flag fo" />
                            </div>
                            <span className="country-name">
                              Faroe Islands (Føroyar)
                            </span>
                            <span className="dial-code">+298</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={679}
                            data-country-code="fj"
                          >
                            <div className="flag-box">
                              <div className="iti-flag fj" />
                            </div>
                            <span className="country-name">Fiji</span>
                            <span className="dial-code">+679</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={358}
                            data-country-code="fi"
                          >
                            <div className="flag-box">
                              <div className="iti-flag fi" />
                            </div>
                            <span className="country-name">
                              Finland (Suomi)
                            </span>
                            <span className="dial-code">+358</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={33}
                            data-country-code="fr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag fr" />
                            </div>
                            <span className="country-name">France</span>
                            <span className="dial-code">+33</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={594}
                            data-country-code="gf"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gf" />
                            </div>
                            <span className="country-name">
                              French Guiana (Guyane française)
                            </span>
                            <span className="dial-code">+594</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={689}
                            data-country-code="pf"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pf" />
                            </div>
                            <span className="country-name">
                              French Polynesia (Polynésie française)
                            </span>
                            <span className="dial-code">+689</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={241}
                            data-country-code="ga"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ga" />
                            </div>
                            <span className="country-name">Gabon</span>
                            <span className="dial-code">+241</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={220}
                            data-country-code="gm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gm" />
                            </div>
                            <span className="country-name">Gambia</span>
                            <span className="dial-code">+220</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={995}
                            data-country-code="ge"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ge" />
                            </div>
                            <span className="country-name">
                              Georgia (საქართველო)
                            </span>
                            <span className="dial-code">+995</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={49}
                            data-country-code="de"
                          >
                            <div className="flag-box">
                              <div className="iti-flag de" />
                            </div>
                            <span className="country-name">
                              Germany (Deutschland)
                            </span>
                            <span className="dial-code">+49</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={233}
                            data-country-code="gh"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gh" />
                            </div>
                            <span className="country-name">Ghana (Gaana)</span>
                            <span className="dial-code">+233</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={350}
                            data-country-code="gi"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gi" />
                            </div>
                            <span className="country-name">Gibraltar</span>
                            <span className="dial-code">+350</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={30}
                            data-country-code="gr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gr" />
                            </div>
                            <span className="country-name">
                              Greece (Ελλάδα)
                            </span>
                            <span className="dial-code">+30</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={299}
                            data-country-code="gl"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gl" />
                            </div>
                            <span className="country-name">
                              Greenland (Kalaallit Nunaat)
                            </span>
                            <span className="dial-code">+299</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1473}
                            data-country-code="gd"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gd" />
                            </div>
                            <span className="country-name">Grenada</span>
                            <span className="dial-code">+1473</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={590}
                            data-country-code="gp"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gp" />
                            </div>
                            <span className="country-name">Guadeloupe</span>
                            <span className="dial-code">+590</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1671}
                            data-country-code="gu"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gu" />
                            </div>
                            <span className="country-name">Guam</span>
                            <span className="dial-code">+1671</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={502}
                            data-country-code="gt"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gt" />
                            </div>
                            <span className="country-name">Guatemala</span>
                            <span className="dial-code">+502</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={44}
                            data-country-code="gg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gg" />
                            </div>
                            <span className="country-name">Guernsey</span>
                            <span className="dial-code">+44</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={224}
                            data-country-code="gn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gn" />
                            </div>
                            <span className="country-name">
                              Guinea (Guinée)
                            </span>
                            <span className="dial-code">+224</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={245}
                            data-country-code="gw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gw" />
                            </div>
                            <span className="country-name">
                              Guinea-Bissau (Guiné Bissau)
                            </span>
                            <span className="dial-code">+245</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={592}
                            data-country-code="gy"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gy" />
                            </div>
                            <span className="country-name">Guyana</span>
                            <span className="dial-code">+592</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={509}
                            data-country-code="ht"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ht" />
                            </div>
                            <span className="country-name">Haiti</span>
                            <span className="dial-code">+509</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={504}
                            data-country-code="hn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag hn" />
                            </div>
                            <span className="country-name">Honduras</span>
                            <span className="dial-code">+504</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={852}
                            data-country-code="hk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag hk" />
                            </div>
                            <span className="country-name">
                              Hong Kong (香港)
                            </span>
                            <span className="dial-code">+852</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={36}
                            data-country-code="hu"
                          >
                            <div className="flag-box">
                              <div className="iti-flag hu" />
                            </div>
                            <span className="country-name">
                              Hungary (Magyarország)
                            </span>
                            <span className="dial-code">+36</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={354}
                            data-country-code="is"
                          >
                            <div className="flag-box">
                              <div className="iti-flag is" />
                            </div>
                            <span className="country-name">
                              Iceland (Ísland)
                            </span>
                            <span className="dial-code">+354</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={91}
                            data-country-code="in"
                          >
                            <div className="flag-box">
                              <div className="iti-flag in" />
                            </div>
                            <span className="country-name">India (भारत)</span>
                            <span className="dial-code">+91</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={62}
                            data-country-code="id"
                          >
                            <div className="flag-box">
                              <div className="iti-flag id" />
                            </div>
                            <span className="country-name">Indonesia</span>
                            <span className="dial-code">+62</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={98}
                            data-country-code="ir"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ir" />
                            </div>
                            <span className="country-name">
                              Iran (‫ایران‬‎)
                            </span>
                            <span className="dial-code">+98</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={964}
                            data-country-code="iq"
                          >
                            <div className="flag-box">
                              <div className="iti-flag iq" />
                            </div>
                            <span className="country-name">
                              Iraq (‫العراق‬‎)
                            </span>
                            <span className="dial-code">+964</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={353}
                            data-country-code="ie"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ie" />
                            </div>
                            <span className="country-name">Ireland</span>
                            <span className="dial-code">+353</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={44}
                            data-country-code="im"
                          >
                            <div className="flag-box">
                              <div className="iti-flag im" />
                            </div>
                            <span className="country-name">Isle of Man</span>
                            <span className="dial-code">+44</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={972}
                            data-country-code="il"
                          >
                            <div className="flag-box">
                              <div className="iti-flag il" />
                            </div>
                            <span className="country-name">
                              Israel (‫ישראל‬‎)
                            </span>
                            <span className="dial-code">+972</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={39}
                            data-country-code="it"
                          >
                            <div className="flag-box">
                              <div className="iti-flag it" />
                            </div>
                            <span className="country-name">Italy (Italia)</span>
                            <span className="dial-code">+39</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1}
                            data-country-code="jm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag jm" />
                            </div>
                            <span className="country-name">Jamaica</span>
                            <span className="dial-code">+1</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={81}
                            data-country-code="jp"
                          >
                            <div className="flag-box">
                              <div className="iti-flag jp" />
                            </div>
                            <span className="country-name">Japan (日本)</span>
                            <span className="dial-code">+81</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={44}
                            data-country-code="je"
                          >
                            <div className="flag-box">
                              <div className="iti-flag je" />
                            </div>
                            <span className="country-name">Jersey</span>
                            <span className="dial-code">+44</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={962}
                            data-country-code="jo"
                          >
                            <div className="flag-box">
                              <div className="iti-flag jo" />
                            </div>
                            <span className="country-name">
                              Jordan (‫الأردن‬‎)
                            </span>
                            <span className="dial-code">+962</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={7}
                            data-country-code="kz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag kz" />
                            </div>
                            <span className="country-name">
                              Kazakhstan (Казахстан)
                            </span>
                            <span className="dial-code">+7</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={254}
                            data-country-code="ke"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ke" />
                            </div>
                            <span className="country-name">Kenya</span>
                            <span className="dial-code">+254</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={686}
                            data-country-code="ki"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ki" />
                            </div>
                            <span className="country-name">Kiribati</span>
                            <span className="dial-code">+686</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={383}
                            data-country-code="xk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag xk" />
                            </div>
                            <span className="country-name">Kosovo</span>
                            <span className="dial-code">+383</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={965}
                            data-country-code="kw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag kw" />
                            </div>
                            <span className="country-name">
                              Kuwait (‫الكويت‬‎)
                            </span>
                            <span className="dial-code">+965</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={996}
                            data-country-code="kg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag kg" />
                            </div>
                            <span className="country-name">
                              Kyrgyzstan (Кыргызстан)
                            </span>
                            <span className="dial-code">+996</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={856}
                            data-country-code="la"
                          >
                            <div className="flag-box">
                              <div className="iti-flag la" />
                            </div>
                            <span className="country-name">Laos (ລາວ)</span>
                            <span className="dial-code">+856</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={371}
                            data-country-code="lv"
                          >
                            <div className="flag-box">
                              <div className="iti-flag lv" />
                            </div>
                            <span className="country-name">
                              Latvia (Latvija)
                            </span>
                            <span className="dial-code">+371</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={961}
                            data-country-code="lb"
                          >
                            <div className="flag-box">
                              <div className="iti-flag lb" />
                            </div>
                            <span className="country-name">
                              Lebanon (‫لبنان‬‎)
                            </span>
                            <span className="dial-code">+961</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={266}
                            data-country-code="ls"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ls" />
                            </div>
                            <span className="country-name">Lesotho</span>
                            <span className="dial-code">+266</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={231}
                            data-country-code="lr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag lr" />
                            </div>
                            <span className="country-name">Liberia</span>
                            <span className="dial-code">+231</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={218}
                            data-country-code="ly"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ly" />
                            </div>
                            <span className="country-name">
                              Libya (‫ليبيا‬‎)
                            </span>
                            <span className="dial-code">+218</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={423}
                            data-country-code="li"
                          >
                            <div className="flag-box">
                              <div className="iti-flag li" />
                            </div>
                            <span className="country-name">Liechtenstein</span>
                            <span className="dial-code">+423</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={370}
                            data-country-code="lt"
                          >
                            <div className="flag-box">
                              <div className="iti-flag lt" />
                            </div>
                            <span className="country-name">
                              Lithuania (Lietuva)
                            </span>
                            <span className="dial-code">+370</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={352}
                            data-country-code="lu"
                          >
                            <div className="flag-box">
                              <div className="iti-flag lu" />
                            </div>
                            <span className="country-name">Luxembourg</span>
                            <span className="dial-code">+352</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={853}
                            data-country-code="mo"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mo" />
                            </div>
                            <span className="country-name">Macau (澳門)</span>
                            <span className="dial-code">+853</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={389}
                            data-country-code="mk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mk" />
                            </div>
                            <span className="country-name">
                              Macedonia (FYROM) (Македонија)
                            </span>
                            <span className="dial-code">+389</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={261}
                            data-country-code="mg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mg" />
                            </div>
                            <span className="country-name">
                              Madagascar (Madagasikara)
                            </span>
                            <span className="dial-code">+261</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={265}
                            data-country-code="mw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mw" />
                            </div>
                            <span className="country-name">Malawi</span>
                            <span className="dial-code">+265</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={60}
                            data-country-code="my"
                          >
                            <div className="flag-box">
                              <div className="iti-flag my" />
                            </div>
                            <span className="country-name">Malaysia</span>
                            <span className="dial-code">+60</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={960}
                            data-country-code="mv"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mv" />
                            </div>
                            <span className="country-name">Maldives</span>
                            <span className="dial-code">+960</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={223}
                            data-country-code="ml"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ml" />
                            </div>
                            <span className="country-name">Mali</span>
                            <span className="dial-code">+223</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={356}
                            data-country-code="mt"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mt" />
                            </div>
                            <span className="country-name">Malta</span>
                            <span className="dial-code">+356</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={692}
                            data-country-code="mh"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mh" />
                            </div>
                            <span className="country-name">
                              Marshall Islands
                            </span>
                            <span className="dial-code">+692</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={596}
                            data-country-code="mq"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mq" />
                            </div>
                            <span className="country-name">Martinique</span>
                            <span className="dial-code">+596</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={222}
                            data-country-code="mr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mr" />
                            </div>
                            <span className="country-name">
                              Mauritania (‫موريتانيا‬‎)
                            </span>
                            <span className="dial-code">+222</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={230}
                            data-country-code="mu"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mu" />
                            </div>
                            <span className="country-name">
                              Mauritius (Moris)
                            </span>
                            <span className="dial-code">+230</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={262}
                            data-country-code="yt"
                          >
                            <div className="flag-box">
                              <div className="iti-flag yt" />
                            </div>
                            <span className="country-name">Mayotte</span>
                            <span className="dial-code">+262</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={52}
                            data-country-code="mx"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mx" />
                            </div>
                            <span className="country-name">
                              Mexico (México)
                            </span>
                            <span className="dial-code">+52</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={691}
                            data-country-code="fm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag fm" />
                            </div>
                            <span className="country-name">Micronesia</span>
                            <span className="dial-code">+691</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={373}
                            data-country-code="md"
                          >
                            <div className="flag-box">
                              <div className="iti-flag md" />
                            </div>
                            <span className="country-name">
                              Moldova (Republica Moldova)
                            </span>
                            <span className="dial-code">+373</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={377}
                            data-country-code="mc"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mc" />
                            </div>
                            <span className="country-name">Monaco</span>
                            <span className="dial-code">+377</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={976}
                            data-country-code="mn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mn" />
                            </div>
                            <span className="country-name">
                              Mongolia (Монгол)
                            </span>
                            <span className="dial-code">+976</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={382}
                            data-country-code="me"
                          >
                            <div className="flag-box">
                              <div className="iti-flag me" />
                            </div>
                            <span className="country-name">
                              Montenegro (Crna Gora)
                            </span>
                            <span className="dial-code">+382</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1664}
                            data-country-code="ms"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ms" />
                            </div>
                            <span className="country-name">Montserrat</span>
                            <span className="dial-code">+1664</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={212}
                            data-country-code="ma"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ma" />
                            </div>
                            <span className="country-name">
                              Morocco (‫المغرب‬‎)
                            </span>
                            <span className="dial-code">+212</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={258}
                            data-country-code="mz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mz" />
                            </div>
                            <span className="country-name">
                              Mozambique (Moçambique)
                            </span>
                            <span className="dial-code">+258</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={95}
                            data-country-code="mm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mm" />
                            </div>
                            <span className="country-name">
                              Myanmar (Burma) (မြန်မာ)
                            </span>
                            <span className="dial-code">+95</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={264}
                            data-country-code="na"
                          >
                            <div className="flag-box">
                              <div className="iti-flag na" />
                            </div>
                            <span className="country-name">
                              Namibia (Namibië)
                            </span>
                            <span className="dial-code">+264</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={674}
                            data-country-code="nr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag nr" />
                            </div>
                            <span className="country-name">Nauru</span>
                            <span className="dial-code">+674</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={977}
                            data-country-code="np"
                          >
                            <div className="flag-box">
                              <div className="iti-flag np" />
                            </div>
                            <span className="country-name">Nepal (नेपाल)</span>
                            <span className="dial-code">+977</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={31}
                            data-country-code="nl"
                          >
                            <div className="flag-box">
                              <div className="iti-flag nl" />
                            </div>
                            <span className="country-name">
                              Netherlands (Nederland)
                            </span>
                            <span className="dial-code">+31</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={687}
                            data-country-code="nc"
                          >
                            <div className="flag-box">
                              <div className="iti-flag nc" />
                            </div>
                            <span className="country-name">
                              New Caledonia (Nouvelle-Calédonie)
                            </span>
                            <span className="dial-code">+687</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={64}
                            data-country-code="nz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag nz" />
                            </div>
                            <span className="country-name">New Zealand</span>
                            <span className="dial-code">+64</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={505}
                            data-country-code="ni"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ni" />
                            </div>
                            <span className="country-name">Nicaragua</span>
                            <span className="dial-code">+505</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={227}
                            data-country-code="ne"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ne" />
                            </div>
                            <span className="country-name">Niger (Nijar)</span>
                            <span className="dial-code">+227</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={234}
                            data-country-code="ng"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ng" />
                            </div>
                            <span className="country-name">Nigeria</span>
                            <span className="dial-code">+234</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={683}
                            data-country-code="nu"
                          >
                            <div className="flag-box">
                              <div className="iti-flag nu" />
                            </div>
                            <span className="country-name">Niue</span>
                            <span className="dial-code">+683</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={672}
                            data-country-code="nf"
                          >
                            <div className="flag-box">
                              <div className="iti-flag nf" />
                            </div>
                            <span className="country-name">Norfolk Island</span>
                            <span className="dial-code">+672</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={850}
                            data-country-code="kp"
                          >
                            <div className="flag-box">
                              <div className="iti-flag kp" />
                            </div>
                            <span className="country-name">
                              North Korea (조선 민주주의 인민 공화국)
                            </span>
                            <span className="dial-code">+850</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1670}
                            data-country-code="mp"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mp" />
                            </div>
                            <span className="country-name">
                              Northern Mariana Islands
                            </span>
                            <span className="dial-code">+1670</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={47}
                            data-country-code="no"
                          >
                            <div className="flag-box">
                              <div className="iti-flag no" />
                            </div>
                            <span className="country-name">Norway (Norge)</span>
                            <span className="dial-code">+47</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={968}
                            data-country-code="om"
                          >
                            <div className="flag-box">
                              <div className="iti-flag om" />
                            </div>
                            <span className="country-name">
                              Oman (‫عُمان‬‎)
                            </span>
                            <span className="dial-code">+968</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={92}
                            data-country-code="pk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pk" />
                            </div>
                            <span className="country-name">
                              Pakistan (‫پاکستان‬‎)
                            </span>
                            <span className="dial-code">+92</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={680}
                            data-country-code="pw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pw" />
                            </div>
                            <span className="country-name">Palau</span>
                            <span className="dial-code">+680</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={970}
                            data-country-code="ps"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ps" />
                            </div>
                            <span className="country-name">
                              Palestine (‫فلسطين‬‎)
                            </span>
                            <span className="dial-code">+970</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={507}
                            data-country-code="pa"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pa" />
                            </div>
                            <span className="country-name">
                              Panama (Panamá)
                            </span>
                            <span className="dial-code">+507</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={675}
                            data-country-code="pg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pg" />
                            </div>
                            <span className="country-name">
                              Papua New Guinea
                            </span>
                            <span className="dial-code">+675</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={595}
                            data-country-code="py"
                          >
                            <div className="flag-box">
                              <div className="iti-flag py" />
                            </div>
                            <span className="country-name">Paraguay</span>
                            <span className="dial-code">+595</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={51}
                            data-country-code="pe"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pe" />
                            </div>
                            <span className="country-name">Peru (Perú)</span>
                            <span className="dial-code">+51</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={63}
                            data-country-code="ph"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ph" />
                            </div>
                            <span className="country-name">Philippines</span>
                            <span className="dial-code">+63</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={48}
                            data-country-code="pl"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pl" />
                            </div>
                            <span className="country-name">
                              Poland (Polska)
                            </span>
                            <span className="dial-code">+48</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={351}
                            data-country-code="pt"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pt" />
                            </div>
                            <span className="country-name">Portugal</span>
                            <span className="dial-code">+351</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1}
                            data-country-code="pr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pr" />
                            </div>
                            <span className="country-name">Puerto Rico</span>
                            <span className="dial-code">+1</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={974}
                            data-country-code="qa"
                          >
                            <div className="flag-box">
                              <div className="iti-flag qa" />
                            </div>
                            <span className="country-name">Qatar (‫قطر‬‎)</span>
                            <span className="dial-code">+974</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={262}
                            data-country-code="re"
                          >
                            <div className="flag-box">
                              <div className="iti-flag re" />
                            </div>
                            <span className="country-name">
                              Réunion (La Réunion)
                            </span>
                            <span className="dial-code">+262</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={40}
                            data-country-code="ro"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ro" />
                            </div>
                            <span className="country-name">
                              Romania (România)
                            </span>
                            <span className="dial-code">+40</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={7}
                            data-country-code="ru"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ru" />
                            </div>
                            <span className="country-name">
                              Russia (Россия)
                            </span>
                            <span className="dial-code">+7</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={250}
                            data-country-code="rw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag rw" />
                            </div>
                            <span className="country-name">Rwanda</span>
                            <span className="dial-code">+250</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={590}
                            data-country-code="bl"
                          >
                            <div className="flag-box">
                              <div className="iti-flag bl" />
                            </div>
                            <span className="country-name">
                              Saint Barthélemy
                            </span>
                            <span className="dial-code">+590</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={290}
                            data-country-code="sh"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sh" />
                            </div>
                            <span className="country-name">Saint Helena</span>
                            <span className="dial-code">+290</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1869}
                            data-country-code="kn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag kn" />
                            </div>
                            <span className="country-name">
                              Saint Kitts and Nevis
                            </span>
                            <span className="dial-code">+1869</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1758}
                            data-country-code="lc"
                          >
                            <div className="flag-box">
                              <div className="iti-flag lc" />
                            </div>
                            <span className="country-name">Saint Lucia</span>
                            <span className="dial-code">+1758</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={590}
                            data-country-code="mf"
                          >
                            <div className="flag-box">
                              <div className="iti-flag mf" />
                            </div>
                            <span className="country-name">
                              Saint Martin (Saint-Martin (partie française))
                            </span>
                            <span className="dial-code">+590</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={508}
                            data-country-code="pm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag pm" />
                            </div>
                            <span className="country-name">
                              Saint Pierre and Miquelon
                              (Saint-Pierre-et-Miquelon)
                            </span>
                            <span className="dial-code">+508</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1784}
                            data-country-code="vc"
                          >
                            <div className="flag-box">
                              <div className="iti-flag vc" />
                            </div>
                            <span className="country-name">
                              Saint Vincent and the Grenadines
                            </span>
                            <span className="dial-code">+1784</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={685}
                            data-country-code="ws"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ws" />
                            </div>
                            <span className="country-name">Samoa</span>
                            <span className="dial-code">+685</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={378}
                            data-country-code="sm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sm" />
                            </div>
                            <span className="country-name">San Marino</span>
                            <span className="dial-code">+378</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={239}
                            data-country-code="st"
                          >
                            <div className="flag-box">
                              <div className="iti-flag st" />
                            </div>
                            <span className="country-name">
                              São Tomé and Príncipe (São Tomé e Príncipe)
                            </span>
                            <span className="dial-code">+239</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={966}
                            data-country-code="sa"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sa" />
                            </div>
                            <span className="country-name">
                              Saudi Arabia (‫المملكة العربية السعودية‬‎)
                            </span>
                            <span className="dial-code">+966</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={221}
                            data-country-code="sn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sn" />
                            </div>
                            <span className="country-name">
                              Senegal (Sénégal)
                            </span>
                            <span className="dial-code">+221</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={381}
                            data-country-code="rs"
                          >
                            <div className="flag-box">
                              <div className="iti-flag rs" />
                            </div>
                            <span className="country-name">
                              Serbia (Србија)
                            </span>
                            <span className="dial-code">+381</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={248}
                            data-country-code="sc"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sc" />
                            </div>
                            <span className="country-name">Seychelles</span>
                            <span className="dial-code">+248</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={232}
                            data-country-code="sl"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sl" />
                            </div>
                            <span className="country-name">Sierra Leone</span>
                            <span className="dial-code">+232</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={65}
                            data-country-code="sg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sg" />
                            </div>
                            <span className="country-name">Singapore</span>
                            <span className="dial-code">+65</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1721}
                            data-country-code="sx"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sx" />
                            </div>
                            <span className="country-name">Sint Maarten</span>
                            <span className="dial-code">+1721</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={421}
                            data-country-code="sk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sk" />
                            </div>
                            <span className="country-name">
                              Slovakia (Slovensko)
                            </span>
                            <span className="dial-code">+421</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={386}
                            data-country-code="si"
                          >
                            <div className="flag-box">
                              <div className="iti-flag si" />
                            </div>
                            <span className="country-name">
                              Slovenia (Slovenija)
                            </span>
                            <span className="dial-code">+386</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={677}
                            data-country-code="sb"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sb" />
                            </div>
                            <span className="country-name">
                              Solomon Islands
                            </span>
                            <span className="dial-code">+677</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={252}
                            data-country-code="so"
                          >
                            <div className="flag-box">
                              <div className="iti-flag so" />
                            </div>
                            <span className="country-name">
                              Somalia (Soomaaliya)
                            </span>
                            <span className="dial-code">+252</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={27}
                            data-country-code="za"
                          >
                            <div className="flag-box">
                              <div className="iti-flag za" />
                            </div>
                            <span className="country-name">South Africa</span>
                            <span className="dial-code">+27</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={82}
                            data-country-code="kr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag kr" />
                            </div>
                            <span className="country-name">
                              South Korea (대한민국)
                            </span>
                            <span className="dial-code">+82</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={211}
                            data-country-code="ss"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ss" />
                            </div>
                            <span className="country-name">
                              South Sudan (‫جنوب السودان‬‎)
                            </span>
                            <span className="dial-code">+211</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={34}
                            data-country-code="es"
                          >
                            <div className="flag-box">
                              <div className="iti-flag es" />
                            </div>
                            <span className="country-name">Spain (España)</span>
                            <span className="dial-code">+34</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={94}
                            data-country-code="lk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag lk" />
                            </div>
                            <span className="country-name">
                              Sri Lanka (ශ්‍රී ලංකාව)
                            </span>
                            <span className="dial-code">+94</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={249}
                            data-country-code="sd"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sd" />
                            </div>
                            <span className="country-name">
                              Sudan (‫السودان‬‎)
                            </span>
                            <span className="dial-code">+249</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={597}
                            data-country-code="sr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sr" />
                            </div>
                            <span className="country-name">Suriname</span>
                            <span className="dial-code">+597</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={47}
                            data-country-code="sj"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sj" />
                            </div>
                            <span className="country-name">
                              Svalbard and Jan Mayen
                            </span>
                            <span className="dial-code">+47</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={268}
                            data-country-code="sz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sz" />
                            </div>
                            <span className="country-name">Swaziland</span>
                            <span className="dial-code">+268</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={46}
                            data-country-code="se"
                          >
                            <div className="flag-box">
                              <div className="iti-flag se" />
                            </div>
                            <span className="country-name">
                              Sweden (Sverige)
                            </span>
                            <span className="dial-code">+46</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={41}
                            data-country-code="ch"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ch" />
                            </div>
                            <span className="country-name">
                              Switzerland (Schweiz)
                            </span>
                            <span className="dial-code">+41</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={963}
                            data-country-code="sy"
                          >
                            <div className="flag-box">
                              <div className="iti-flag sy" />
                            </div>
                            <span className="country-name">
                              Syria (‫سوريا‬‎)
                            </span>
                            <span className="dial-code">+963</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={886}
                            data-country-code="tw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tw" />
                            </div>
                            <span className="country-name">Taiwan (台灣)</span>
                            <span className="dial-code">+886</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={992}
                            data-country-code="tj"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tj" />
                            </div>
                            <span className="country-name">Tajikistan</span>
                            <span className="dial-code">+992</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={255}
                            data-country-code="tz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tz" />
                            </div>
                            <span className="country-name">Tanzania</span>
                            <span className="dial-code">+255</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={66}
                            data-country-code="th"
                          >
                            <div className="flag-box">
                              <div className="iti-flag th" />
                            </div>
                            <span className="country-name">Thailand (ไทย)</span>
                            <span className="dial-code">+66</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={670}
                            data-country-code="tl"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tl" />
                            </div>
                            <span className="country-name">Timor-Leste</span>
                            <span className="dial-code">+670</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={228}
                            data-country-code="tg"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tg" />
                            </div>
                            <span className="country-name">Togo</span>
                            <span className="dial-code">+228</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={690}
                            data-country-code="tk"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tk" />
                            </div>
                            <span className="country-name">Tokelau</span>
                            <span className="dial-code">+690</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={676}
                            data-country-code="to"
                          >
                            <div className="flag-box">
                              <div className="iti-flag to" />
                            </div>
                            <span className="country-name">Tonga</span>
                            <span className="dial-code">+676</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1868}
                            data-country-code="tt"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tt" />
                            </div>
                            <span className="country-name">
                              Trinidad and Tobago
                            </span>
                            <span className="dial-code">+1868</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={216}
                            data-country-code="tn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tn" />
                            </div>
                            <span className="country-name">
                              Tunisia (‫تونس‬‎)
                            </span>
                            <span className="dial-code">+216</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={90}
                            data-country-code="tr"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tr" />
                            </div>
                            <span className="country-name">
                              Turkey (Türkiye)
                            </span>
                            <span className="dial-code">+90</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={993}
                            data-country-code="tm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tm" />
                            </div>
                            <span className="country-name">Turkmenistan</span>
                            <span className="dial-code">+993</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1649}
                            data-country-code="tc"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tc" />
                            </div>
                            <span className="country-name">
                              Turks and Caicos Islands
                            </span>
                            <span className="dial-code">+1649</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={688}
                            data-country-code="tv"
                          >
                            <div className="flag-box">
                              <div className="iti-flag tv" />
                            </div>
                            <span className="country-name">Tuvalu</span>
                            <span className="dial-code">+688</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1340}
                            data-country-code="vi"
                          >
                            <div className="flag-box">
                              <div className="iti-flag vi" />
                            </div>
                            <span className="country-name">
                              U.S. Virgin Islands
                            </span>
                            <span className="dial-code">+1340</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={256}
                            data-country-code="ug"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ug" />
                            </div>
                            <span className="country-name">Uganda</span>
                            <span className="dial-code">+256</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={380}
                            data-country-code="ua"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ua" />
                            </div>
                            <span className="country-name">
                              Ukraine (Україна)
                            </span>
                            <span className="dial-code">+380</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={971}
                            data-country-code="ae"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ae" />
                            </div>
                            <span className="country-name">
                              United Arab Emirates (‫الإمارات العربية المتحدة‬‎)
                            </span>
                            <span className="dial-code">+971</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={44}
                            data-country-code="gb"
                          >
                            <div className="flag-box">
                              <div className="iti-flag gb" />
                            </div>
                            <span className="country-name">United Kingdom</span>
                            <span className="dial-code">+44</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={1}
                            data-country-code="us"
                          >
                            <div className="flag-box">
                              <div className="iti-flag us" />
                            </div>
                            <span className="country-name">United States</span>
                            <span className="dial-code">+1</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={598}
                            data-country-code="uy"
                          >
                            <div className="flag-box">
                              <div className="iti-flag uy" />
                            </div>
                            <span className="country-name">Uruguay</span>
                            <span className="dial-code">+598</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={998}
                            data-country-code="uz"
                          >
                            <div className="flag-box">
                              <div className="iti-flag uz" />
                            </div>
                            <span className="country-name">
                              Uzbekistan (Oʻzbekiston)
                            </span>
                            <span className="dial-code">+998</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={678}
                            data-country-code="vu"
                          >
                            <div className="flag-box">
                              <div className="iti-flag vu" />
                            </div>
                            <span className="country-name">Vanuatu</span>
                            <span className="dial-code">+678</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={39}
                            data-country-code="va"
                          >
                            <div className="flag-box">
                              <div className="iti-flag va" />
                            </div>
                            <span className="country-name">
                              Vatican City (Città del Vaticano)
                            </span>
                            <span className="dial-code">+39</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={58}
                            data-country-code="ve"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ve" />
                            </div>
                            <span className="country-name">Venezuela</span>
                            <span className="dial-code">+58</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={84}
                            data-country-code="vn"
                          >
                            <div className="flag-box">
                              <div className="iti-flag vn" />
                            </div>
                            <span className="country-name">
                              Vietnam (Việt Nam)
                            </span>
                            <span className="dial-code">+84</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={681}
                            data-country-code="wf"
                          >
                            <div className="flag-box">
                              <div className="iti-flag wf" />
                            </div>
                            <span className="country-name">
                              Wallis and Futuna (Wallis-et-Futuna)
                            </span>
                            <span className="dial-code">+681</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={212}
                            data-country-code="eh"
                          >
                            <div className="flag-box">
                              <div className="iti-flag eh" />
                            </div>
                            <span className="country-name">
                              Western Sahara (‫الصحراء الغربية‬‎)
                            </span>
                            <span className="dial-code">+212</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={967}
                            data-country-code="ye"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ye" />
                            </div>
                            <span className="country-name">
                              Yemen (‫اليمن‬‎)
                            </span>
                            <span className="dial-code">+967</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={260}
                            data-country-code="zm"
                          >
                            <div className="flag-box">
                              <div className="iti-flag zm" />
                            </div>
                            <span className="country-name">Zambia</span>
                            <span className="dial-code">+260</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={263}
                            data-country-code="zw"
                          >
                            <div className="flag-box">
                              <div className="iti-flag zw" />
                            </div>
                            <span className="country-name">Zimbabwe</span>
                            <span className="dial-code">+263</span>
                          </li>
                          <li
                            className="country"
                            data-dial-code={358}
                            data-country-code="ax"
                          >
                            <div className="flag-box">
                              <div className="iti-flag ax" />
                            </div>
                            <span className="country-name">Åland Islands</span>
                            <span className="dial-code">+358</span>
                          </li>
                        </ul>
                      </div>
                      <input
                        id="PhoneNumber"
                        name="PhoneNumber"
                        type="text"
                        defaultValue=""
                        autoComplete="off"
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="CsvFormatting"
                  >
                    Data Exports
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      data-val="true"
                      data-val-required="The Data Exports field is required."
                      id="CsvFormatting"
                      name="CsvFormatting"
                    >
                      <option selected value={0}>
                        Use Standard Format
                      </option>
                      <option value={1}>Use Browser Language</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="DateFormatting"
                  >
                    Date Format
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      data-val="true"
                      data-val-required="The Date Format field is required."
                      id="DateFormatting"
                      name="DateFormatting"
                    >
                      <option selected value={0}>
                        Use Default
                      </option>
                      <option value={1}>YYYY-MM-DD</option>
                      <option value={2}>MM-DD-YYYY</option>
                      <option value={3}>DD-MM-YYYY</option>
                      <option value={4}>YYYY/MM/DD</option>
                      <option value={5}>MM/DD/YYYY</option>
                      <option value={6}>DD/MM/YYYY</option>
                    </select>
                    <br />
                    <div className="m-t-10 pull-right">
                      <input
                        className="form-control chk-col-light-blue"
                        data-val="true"
                        data-val-required="The Prefer Short Dates field is required."
                        id="PreferShortDates"
                        name="PreferShortDates"
                        type="checkbox"
                        defaultValue="true"
                      />
                      <label
                        htmlFor="PreferShortDates"
                        style={{ fontSize: 13 }}
                      >
                        Prefer Short Dates
                      </label>
                      &nbsp;&nbsp;
                      <input
                        className="form-control chk-col-light-blue"
                        data-val="true"
                        data-val-required="The Use Workspace Time Zone field is required."
                        id="UseWorkspaceTimeZone"
                        name="UseWorkspaceTimeZone"
                        type="checkbox"
                        defaultValue="true"
                      />
                      <label
                        htmlFor="UseWorkspaceTimeZone"
                        style={{ fontSize: 13 }}
                      >
                        Use Workspace Time Zone
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="form-group row pull-right"
                  style={{ height: 40 }}
                >
                  <div id="div_onUpdateAccountSuccess" className="hide">
                    <img
                      src="/app/Content/assets2/images/form/saved2.gif"
                      width={40}
                      className="m-l-20"
                    />
                  </div>
                  <button
                    type="submit"
                    id="btn_updateAccount"
                    className="btn btn-info"
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
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Physical Address
                </h4>
                <h6 className="card-subtitle">
                  Enter your physical address to simplify billing and checkout.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
              <form
                action="/app/Me/Me_UpdateAddress/173dac8d-2c4a-11ef-8ee7-002248475315"
                data-ajax="true"
                data-ajax-failure="onUpdateRecordFailure"
                data-ajax-method="POST"
                data-ajax-success="onUpdateAddressSuccess"
                id="form_updateAddress"
                method="post"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="8JRyQKHaZOQosiltzl3WfkWkcTU_kbHQh1QBN9VI788lnykVzL4dfst0lOmbg06QF6VJzoIvR9i3LetgFopdEHgcCA2KPEpHxL9HCsmfdeM0tJKUyZcVq88K7nLk0U9f9Oz_qypjpu00WtKiIqmGDg2"
                />{" "}
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_Address1"
                  >
                    Address 1
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field Address 1 must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_Address1"
                      name="SystemUser.Address1"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_Address2"
                  >
                    Address 2
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field Address 2 must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_Address2"
                      name="SystemUser.Address2"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_City"
                  >
                    City
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field City must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_City"
                      name="SystemUser.City"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_ZipCode"
                  >
                    Postal Code / ZIP
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field Postal Code / ZIP must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_ZipCode"
                      name="SystemUser.ZipCode"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_State"
                  >
                    State / Province
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field State / Province must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_State"
                      name="SystemUser.State"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-3 text-right control-label col-form-label"
                    htmlFor="SystemUser_Country"
                  >
                    Country / Region
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field Country / Region must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_Country"
                      name="SystemUser.Country"
                    >
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">
                        Bolivia (Plurinational State of)
                      </option>
                      <option value="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="CV">Cabo Verde</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">
                        Congo, Democratic Republic of the
                      </option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czechia</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="SZ">Eswatini</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="VA">Holy See</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran (Islamic Republic of)</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">
                        Korea (Democratic People's Republic of)
                      </option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">
                        Micronesia (Federated States of)
                      </option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MK">North Macedonia</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestine, State of</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthélemy</option>
                      <option value="SH">
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin (French part)</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten (Dutch part)</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option selected value="US">
                        United States of America
                      </option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">
                        Venezuela (Bolivarian Republic of)
                      </option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands (British)</option>
                      <option value="VI">Virgin Islands (U.S.)</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div
                  className="form-group row pull-right"
                  style={{ height: 40 }}
                >
                  <div id="div_onUpdateAddressSuccess" className="hide">
                    <img
                      src="/app/Content/assets2/images/form/saved2.gif"
                      width={40}
                      className="m-l-20"
                    />
                  </div>
                  <button
                    type="submit"
                    id="btn_updateAddress"
                    className="btn btn-info"
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
      </div>
    </div>
  </div>
  <div className="tab-pane" id="security" role="tabpanel">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Automatic Logout
                </h4>
                <h6 className="card-subtitle">
                  Select after how much inactive time your session should end.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
              <form
                action="/app/Me/Me_UpdateLogout/173dac8d-2c4a-11ef-8ee7-002248475315"
                data-ajax="true"
                data-ajax-failure="onUpdateRecordFailure"
                data-ajax-method="POST"
                data-ajax-success="onUpdateLogoutSuccess"
                id="form_updateLogout"
                method="post"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="LZW_nXY1eDMlx9_YFWMeiwjVkm-8Olp-RHJ7IA-1VE62RINtsc3OfUbA_jK9mwkNyU15ITWIcE_khWI7spx9R_VhXkI5UedPDuWGYZ0rKoSahNnQEIdoiTtuG9ewsqPbxgs09Ja2uHs04bJ0k8Obig2"
                />{" "}
                <div className="form-group row">
                  <label
                    className="col-sm-5 text-right control-label col-form-label"
                    htmlFor="SystemUser_AutoLogout"
                  >
                    Log Me Out When Inactive For
                  </label>
                  <div className="col-sm-5">
                    <select
                      className="form-control"
                      data-val="true"
                      data-val-number="The field Log Me Out When Inactive For must be a number."
                      data-val-range="The field Log Me Out When Inactive For must be between 0 and 2147483647."
                      data-val-range-max={2147483647}
                      data-val-range-min={0}
                      data-val-required="The Log Me Out When Inactive For field is required."
                      id="SystemUser_AutoLogout"
                      name="SystemUser.AutoLogout"
                    >
                      <option value={525600}>Never</option>
                      <option value={1440}>1 day</option>
                      <option selected value={60}>
                        1 hour
                      </option>
                      <option value={45}>45 minutes</option>
                      <option value={30}>30 minutes</option>
                      <option value={10}>10 minutes</option>
                      <option value={5}>5 minutes</option>
                    </select>
                  </div>
                </div>
                <div
                  className="form-group row pull-right"
                  style={{ height: 40 }}
                >
                  <div id="div_onUpdateLogoutSuccess" className="hide">
                    <img
                      src="/app/Content/assets2/images/form/saved2.gif"
                      width={40}
                      className="m-l-20"
                    />
                  </div>
                  <button
                    type="submit"
                    id="btn_updateLogout"
                    className="btn btn-info"
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
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  API Key
                </h4>
                <h6 className="card-subtitle">
                  Use your API key to access all incentive results,
                  transactions, and more.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
              <div className="form-group row">
                <label
                  className="col-sm-5 text-right control-label col-form-label"
                  htmlFor="WorkspaceRole_ApiKey"
                >
                  API Key
                </label>
                <div className="col-sm-5">
                  <input
                    className="apiKey form-control"
                    data-val="true"
                    data-val-maxlength="The field API Key must be a string or array type with a maximum length of '450'."
                    data-val-maxlength-max={450}
                    // disabled={1}
                    id="WorkspaceRole_ApiKey"
                    name="WorkspaceRole.ApiKey"
                    type="text"
                    defaultValue="0f30769d10e1a58daeadba5cf269e37f"
                  />
                  <small className="text-muted">
                    Click to{" "}
                    <a id="a_odataUrl" href="javascript:void(0)">
                      copy
                    </a>{" "}
                    the OData URL to the clipboard
                  </small>
                  <button
                    type="button"
                    className="changeApiKey btn btn-info btn-xs m-t-5"
                  >
                    <i className="changeApiKey ti-lock" />
                    &nbsp;&nbsp;Revoke And Generate API Key
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-9 col-lg-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Workspace Administrator
                </h4>
                <h6 className="card-subtitle">
                  You have full administrative rights over the following{" "}
                  <mark>workspaces</mark>.
                </h6>
              </div>
            </div>
            <div className="table-responsive table-hover no-wrap col-xl-9 col-lg-12">
              <table className="table vm no-th-brd">
                <thead>
                  <tr>
                    <th colSpan={2}>Name</th>
                    <th colSpan={2}>Created By</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    // onclick="window.location='/app/Me/MyWorkspaces/173dac8d-2c4a-11ef-8ee7-002248475315'"
                    style={{ cursor: "pointer" }}
                  >
                    <td style={{ fontSize: 48 }} width={1}>
                      <i className="ti-layers-alt" />
                    </td>
                    <td>
                      <h6>
                        <span data-toggle="tooltip" data-original-title="Demo">
                          Demo (current workspace)
                        </span>
                      </h6>
                      <span
                        data-toggle="tooltip"
                        data-original-title="Sandbox demo workspace."
                      >
                        <small className="text-muted">
                          Sandbox demo workspace.
                        </small>
                      </span>
                    </td>
                    <td width={1}>
                      <span
                        className="profileImage"
                        data-toggle="tooltip"
                        data-original-title="Nguyễn Khắc Anh"
                      >
                        <span
                          style={{ cursor: "pointer" }}
                        //   onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/52a398c6-95f9-4fc7-bbc6-bee09a16cc23'"
                        >
                          <span
                            className="userUploadedImage image round"
                            style={{ backgroundColor: "white" }}
                          >
                            <img
                              src="/app/Account/UserProfileImage?systemUserId=52a398c6-95f9-4fc7-bbc6-bee09a16cc23&v=3980383293"
                              width={50}
                              height={50}
                            />
                          </span>
                        </span>
                      </span>
                    </td>
                    <td width={1}>
                      <h6>
                        <span
                          data-toggle="tooltip"
                          data-original-title="Nguyễn Khắc Anh"
                        >
                          Nguyễn Khắc Anh
                        </span>
                      </h6>
                      <small className="text-muted">
                        <span
                          data-toggle="tooltip"
                          data-original-title="2024-04-10T06:14:01"
                        >
                          2 months ago
                        </span>
                      </small>
                    </td>
                    <td>
                      <small className="text-muted">
                        <span
                          data-toggle="tooltip"
                          data-original-title="2024-06-11T09:54:02"
                        >
                          Users last logged in 14 days ago.
                        </span>
                      </small>
                    </td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-9 col-lg-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Plan Administrator
                </h4>
                <h6 className="card-subtitle">
                  You are an administrator of the following <mark>plans</mark>{" "}
                  in the current workspace.
                </h6>
              </div>
            </div>
            <div className="table-responsive table-hover m-t-5 col-xl-9 col-lg-12">
              <table className="table vm no-th-brd">
                <thead>
                  <tr>
                    <th colSpan={2}>Name</th>
                    <th>Type</th>
                    <th>Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    // onclick="window.location='/app/Plans/Details/173dac8d-2c4a-11ef-8ee7-002248475315/173db3c3-2c4a-11ef-8ee7-002248475315'"
                    style={{ cursor: "pointer" }}
                  >
                    <td style={{ fontSize: 48 }} width={1}>
                      <span
                        data-toggle="tooltip"
                        data-original-title="An incentive plan with a monthly recurrence."
                      >
                        <i className="fa fa-calendar-o" />
                      </span>
                    </td>
                    <td>
                      <h6 className="m-t-5">
                        <span
                          data-toggle="tooltip"
                          data-original-title="Sales Manager Compensation"
                        >
                          Sales Manager Compensat…
                        </span>
                      </h6>
                      <span
                        data-toggle="tooltip"
                        data-original-title="A team-based plan for team managers."
                      >
                        <small className="text-muted">
                          A team-based plan for team …
                        </small>
                      </span>
                    </td>
                    <td>
                      <h6>
                        <span
                          data-toggle="tooltip"
                          data-original-title="An incentive plan with a monthly recurrence."
                        >
                          Monthly
                        </span>
                      </h6>
                    </td>
                    <td>
                      <span
                        data-toggle="tooltip"
                        data-placement="left"
                        data-original-title="This plan is hidden. Only authorized admins can view and manage it."
                      >
                        <span
                          className="label label-rounded m-b-10"
                          style={{ backgroundColor: "red" }}
                        >
                          <i
                            className="fa fa-lock m-r-5"
                            style={{ marginTop: 2, marginBottom: 2 }}
                          />
                          Hidden
                        </span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-9 col-lg-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Team Manager
                </h4>
                <h6 className="card-subtitle">
                  You are an explicit manager of the following{" "}
                  <mark>teams</mark> in the current workspace.
                </h6>
              </div>
            </div>
            <div className="table-responsive table-hover no-wrap m-t-5 col-xl-9 col-lg-12">
              <table className="table vm no-th-brd">
                <thead>
                  <tr>
                    <th colSpan={2}>Name</th>
                    <th colSpan={2}>Manager</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    // onclick="window.location='/app/Teams/Details/173dac8d-2c4a-11ef-8ee7-002248475315/0bac3a2e-aeec-3abe-3ad2-7edae4d70f72'"
                    style={{ cursor: "pointer" }}
                  >
                    <td style={{ fontSize: 48 }} width={1}>
                      <span
                        data-toggle="tooltip"
                        data-original-title="This team has child teams."
                      >
                        <i className="icon-globe" />
                      </span>
                    </td>
                    <td>
                      <h6 className="m-t-5">
                        <span
                          data-toggle="tooltip"
                          data-original-title="HQ Team"
                        >
                          HQ Team
                        </span>
                      </h6>
                      <span
                        data-toggle="tooltip"
                        data-original-title="Headquarter sales managers."
                      >
                        <small className="text-muted">
                          Headquarter sales managers.
                        </small>
                      </span>
                    </td>
                    <td width={1}>
                      <span
                        className="profileImage"
                        data-toggle="tooltip"
                        data-original-title="Nguyễn Khắc Anh"
                      >
                        <span
                          style={{ cursor: "pointer" }}
                        //   onclick="top.window.location.href='/app/SystemUsers/Details/173dac8d-2c4a-11ef-8ee7-002248475315/52a398c6-95f9-4fc7-bbc6-bee09a16cc23'"
                        >
                          <span
                            className="userUploadedImage image round"
                            style={{ backgroundColor: "white" }}
                          >
                            <img
                              src="/app/Account/UserProfileImage?systemUserId=52a398c6-95f9-4fc7-bbc6-bee09a16cc23&v=3980383293"
                              width={50}
                              height={50}
                            />
                          </span>
                        </span>
                      </span>{" "}
                    </td>
                    <td width={1}>
                      <h6>
                        <span
                          data-toggle="tooltip"
                          data-original-title="Nguyễn Khắc Anh"
                        >
                          Nguyễn Khắc Anh
                        </span>
                        <br />
                        <span
                          data-toggle="tooltip"
                          data-original-title="anhhuha4@gmail.com"
                        >
                          <small className="text-muted">
                            anhhuha4@gmail.com
                          </small>
                        </span>
                      </h6>
                    </td>
                    <td className="align-bottom">
                      <ul>
                        <li className="small">3 member(s)</li>
                        <li className="small">2 sub-team(s)</li>
                        <li className="small">2nd depth</li>
                      </ul>
                    </td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tab-pane" id="communications" role="tabpanel">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Email Preferences
                </h4>
                <h6 className="card-subtitle">
                  Select the type of email communication you want to receive.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-l-20 m-t-30">
              <form
                action="/app/Me/Me_UpdateCommunications/173dac8d-2c4a-11ef-8ee7-002248475315"
                data-ajax="true"
                data-ajax-failure="onUpdateRecordFailure"
                data-ajax-method="POST"
                data-ajax-success="onUpdateCommunicationsSuccess"
                id="form_updateCommunications"
                method="post"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="ra8LztxJCNM33cKyYyaNooDEE7YGlfyVX8BrEU_fO47RgCcueOQjM7nPqsfRwPK3r4zCRQLLw0D-A2ev2y6hRCWpKssfTJTCXIoeUy_qK4FIMD93e9Skgk2wS2QsF9LHzqRQ-JJZQh-rr2P6sYEimA2"
                />{" "}
                <div className="form-group row">
                  <label
                    className="control-label col-form-label text-right col-4"
                    htmlFor="SystemUser_AltEmailAddress"
                  >
                    Backup Email Address
                  </label>
                  <div className="col-8">
                    <input
                      className="form-control"
                      data-val="true"
                      data-val-maxlength="The field Backup Email Address must be a string or array type with a maximum length of '450'."
                      data-val-maxlength-max={450}
                      id="SystemUser_AltEmailAddress"
                      name="SystemUser.AltEmailAddress"
                      style={{ maxWidth: 280 }}
                      type="email"
                      defaultValue=""
                    />
                    <br />
                    <small className="text-muted m-l-5">
                      Only used if primary email delivery fails
                    </small>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="control-label col-form-label text-right col-4">
                    Send Me Emails About
                  </label>
                  <div className="col-8 m-t-5">
                    <input
                      className="form-control chk-col-light-blue"
                      data-val="true"
                      data-val-required="The Important Product Alerts field is required."
                      id="SystemUser_SendAlerts"
                      name="SystemUser.SendAlerts"
                      type="checkbox"
                      defaultValue="true"
                    />
                    <label htmlFor="SystemUser_SendAlerts">
                      Important Product Alerts
                    </label>
                    <br />
                    <input
                      className="form-control chk-col-light-blue"
                      data-val="true"
                      data-val-required="The Product Training & Tips field is required."
                      id="SystemUser_SendTips"
                      name="SystemUser.SendTips"
                      type="checkbox"
                      defaultValue="true"
                    />
                    <label htmlFor="SystemUser_SendTips">
                      Product Training &amp; Tips
                    </label>
                    <br />
                    <input
                      className="form-control chk-col-light-blue"
                      data-val="true"
                      data-val-required="The Promotions & Discounts field is required."
                      id="SystemUser_SendPromos"
                      name="SystemUser.SendPromos"
                      type="checkbox"
                      defaultValue="true"
                    />
                    <label htmlFor="SystemUser_SendPromos">
                      Promotions &amp; Discounts
                    </label>
                  </div>
                </div>
                <div className="form-group row m-l-30 m-b-10"></div>
                <div className="form-group row m-l-30 m-b-10"></div>
                <div className="form-group row m-l-30 m-b-10"></div>
                <div
                  className="form-group row pull-right"
                  style={{ height: 40 }}
                >
                  <div id="div_onUpdateCommunicationsSuccess" className="hide">
                    <img
                      src="/app/Content/assets2/images/form/saved2.gif"
                      width={40}
                      className="m-l-20"
                    />
                  </div>
                  <button
                    type="submit"
                    id="btn_updateCommunications"
                    className="btn btn-info"
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
      </div>
    </div>
  </div>
  <div className="tab-pane" id="account" role="tabpanel">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Change Password
                </h4>
                <h6 className="card-subtitle">
                  Use this option to change your password.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
              <p>
                To change your password, log off, log back in, and click on the
                <span className="mytooltip tooltip-effect-1">
                  <span className="tooltip-item">
                    <i className="fa fa-question-circle-o" />
                    don't remember
                  </span>
                  <span className="tooltip-content clearfix">
                    <img src="/app/Content/assets2/images/me/forgotPassword.png" />
                    <span className="tooltip-text p-t-10">
                      Notice the link at the bottom of the login screen.
                    </span>
                  </span>
                </span>
                your password link. This will allow you to securely reset your
                password. Also, if you've created your account via a
                <span className="mytooltip tooltip-effect-2">
                  <span className="tooltip-item">
                    <i className="fa fa-facebook" />
                    social provider
                  </span>
                  <span className="tooltip-content clearfix">
                    <img src="/app/Content/assets2/images/logos/salesguy_150x150.png" />
                    <span className="tooltip-text p-t-10">
                      You can use Facebook, Microsoft, LinkedIn to access your
                      account without a password.
                    </span>
                  </span>
                </span>
                (ex: Facebook), we do not have a password for your account.
              </p>
              <div className="text-center">
                <a
                  className="btn btn-info m-l-10 m-t-5 m-b-5 pull-right"
                  style={{ minWidth: 200 }}
                  href="/app/Account/LoggingOut"
                >
                  <i className="fa fa-history" />
                  &nbsp;&nbsp;Reset Password
                </a>
              </div>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Leave Workspace
                </h4>
                <h6 className="card-subtitle">
                  Use this option to leave a workspace you joined by mistake.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
              <p>
                You are in a workspace called "Demo". If you decide to leave
                this
                <span className="mytooltip tooltip-effect-2">
                  <span className="tooltip-item">
                    <i className="ti-layers-alt" />
                    Workspace
                  </span>
                  <span className="tooltip-content clearfix">
                    <img src="/app/Content/assets2/images/logos/salesguy_150x150.png" />
                    <span className="tooltip-text">
                      A secure container with all your participants, incentive
                      plans, sales transactions, reports, etc.
                    </span>
                  </span>
                </span>
                , you will no longer have access to its data and may need to be
                re-invited to regain access. If you are the only administrator,
                your workspace will be deleted. Type "Demo" below and click on
                the button below to proceed.
              </p>
              <form
                action="/app/Workspace/Leave/173dac8d-2c4a-11ef-8ee7-002248475315/173dac8d-2c4a-11ef-8ee7-002248475315"
                id="form_leaveWorkspace"
                method="post"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="EgFvmo15oaWaBGzpfCsnW2VDa7efbb_7ruP1ntTgyIHJ3Vb_hlxdsl-Vm4YEUe6feD2QyFuQ5TEORdJ4M6OP3ZuGSSBtbh21Fh8jzN-g7uIllG6Kw_AQ4SL3ZNwUSyztKo3wI5R0imJfq45Cpf79wg2"
                />{" "}
                <input
                  id="input_leaveWorkspace"
                  type="text"
                  className="col-sm-5 form-control m-t-5 m-b-5"
                  placeholder="Type: Demo"
                />
                <button
                  type="submit"
                  id="btn_leaveWorkspace"
                  className="btn btn-warning m-l-10 m-t-5 m-b-5 pull-right"
                  style={{ minWidth: 200 }}
                >
                  <i className="fa fa-sign-out" />
                  &nbsp;&nbsp;Leave Workspace
                </button>
              </form>{" "}
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Delete Workspace
                </h4>
                <h6 className="card-subtitle">
                  Use this option to permanently delete a workspace.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
              <p>
                You are in a workspace called "Demo". If you decide to delete
                this
                <span className="mytooltip tooltip-effect-2">
                  <span className="tooltip-item">
                    <i className="ti-layers-alt" />
                    Workspace
                  </span>
                  <span className="tooltip-content clearfix">
                    <img src="/app/Content/assets2/images/logos/salesguy_150x150.png" />
                    <span className="tooltip-text">
                      A secure container with all your participants, incentive
                      plans, sales transactions, reports, etc.
                    </span>
                  </span>
                </span>
                , all the data it contains will be permanently deleted and not
                accessible to anyone. Type "Demo" below and click on the button
                below to proceed.
              </p>
              <form
                action="/app/Workspace/Delete/173dac8d-2c4a-11ef-8ee7-002248475315/173dac8d-2c4a-11ef-8ee7-002248475315"
                id="form_deleteWorkspace"
                method="post"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="LO6q_zWbOVk5GUHdDmQ8Xs7_oVrjfRn80WpBKlX--hnJJDfXX13DfU2GQghan6aH-y2YNHyS33cKJ7J2c3wtSYmnvDBjY1Xvs5GnK6tDd_I4f_q569edBQ-AO3-qIQ0O6yj5nGjV7U75xsjlaQ2giQ2"
                />{" "}
                <input
                  id="input_deleteWorkspace"
                  type="text"
                  className="col-sm-5 form-control m-t-5 m-b-5"
                  placeholder="Type: Demo"
                />
                <button
                  type="submit"
                  id="btn_deleteWorkspace"
                  className="btn btn-danger m-l-10 m-t-5 m-b-5 pull-right"
                  style={{ minWidth: 200 }}
                //   disabled=""
                >
                  <i className="fa fa-close" />
                  &nbsp;&nbsp;Delete Workspace
                </button>
              </form>{" "}
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex col-xl-6 col-lg-9 col-md-12">
              <div>
                <h4 className="card-title">
                  <span className="lstick" />
                  Delete Account
                </h4>
                <h6 className="card-subtitle">
                  Use this option to permanently delete your user account.
                </h6>
              </div>
            </div>
            <div className="col-xl-6 col-lg-9 col-md-12 p-r-10 m-t-30">
              <p>
                You are logged in as anhhuha4@gmail.com. If you decide to delete
                this
                <span className="mytooltip tooltip-effect-2">
                  <span className="tooltip-item">
                    <i className="ti-layers-alt" />
                    User Account
                  </span>
                  <span className="tooltip-content clearfix">
                    <img src="/app/Content/assets2/images/logos/salesguy_150x150.png" />
                    <span className="tooltip-text">
                      Your user account has access to all your Sales Cookie
                      information.
                    </span>
                  </span>
                </span>
                , you will no longer be able to log in. We will delete as much
                of your
                <span className="mytooltip tooltip-effect-2">
                  <span className="tooltip-item">
                    <i className="icon-user" />
                    Personal Data
                  </span>
                  <span className="tooltip-content clearfix">
                    <img src="/app/Content/assets2/images/logos/salesguy_150x150.png" />
                    <span className="tooltip-text">
                      Your email address, first and last name, product usage
                      information, etc.
                    </span>
                  </span>
                </span>
                as possible (ex: we may need to retain purchase history for our
                financial records). Also, all your workspaces will be deleted,
                and this unless they have another administrator. Type
                "anhhuha4@gmail.com" below and click on the button below to
                proceed.
              </p>
              <form
                action="/app/Account/DeleteAccount"
                id="form_deleteAccount"
                method="post"
              >
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  defaultValue="EjYyTmPYZ3stNXBMdgh-LVw-8ftiB6TBWXAWWMESQ1_Y2z9As-4nasXV6AbaPNP_EMnChkI-XZ88TpeIbVpc2e6GzrP25WLVl6_XBTU_sZCyYCtr4rrj0rZ4toAeBuLiLDZEqPpDvMK79c9Im1zRHQ2"
                />{" "}
                <input
                  id="input_deleteAccount"
                  type="text"
                  className="col-sm-5 form-control m-t-5 m-b-5"
                  placeholder="Type: anhhuha4@gmail.com"
                />
                <button
                  type="submit"
                  id="btn_deleteAccount"
                  className="btn btn-danger m-l-10 m-t-5 m-b-5 pull-right"
                  style={{ minWidth: 200 }}
                //   disabled=""
                >
                  <i className="fa fa-close" />
                  &nbsp;&nbsp;Delete Account
                </button>
              </form>{" "}
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
export default profileUser;