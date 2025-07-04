import React from 'react'

const ComingSoon = () => {
  return (
    <div>
      <>
  <header className="section-header">
    <section className="header-main shadow-sm bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-1">
            <a href="home.html" className="brand-wrap mb-0">
              <img alt="#" className="img-fluid" src="img/logo_web.png" />
            </a>
            {/* brand-wrap.// */}
          </div>
          <div className="col-3 d-flex align-items-center m-none">
            <div className="dropdown me-3">
              <a
                className="text-dark dropdown-toggle d-flex align-items-center py-3"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div>
                  <i className="feather-map-pin me-2 bg-light rounded-pill p-2 icofont-size" />
                </div>
                <div>
                  <p className="text-muted mb-0 small">Select Location</p>
                  Jawaddi Ludhiana...
                </div>
              </a>
              <div className="dropdown-menu p-0 drop-loc">
                <div className="osahan-country">
                  <div className="search_location bg-primary p-3 text-end">
                    <div className="input-group bg-white rounded shadow-sm">
                      <span className="input-group-text bg-transparent border-0 rounded-0">
                        <i className="feather-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-transparent border-0 rounded-0 px-0 shadow-none"
                        placeholder="Enter Your Location"
                        aria-label="Enter Your Location"
                      />
                    </div>
                  </div>
                  <div className="p-3 border-bottom">
                    <a href="home.html" className="text-decoration-none">
                      <p className="fw-bold text-primary m-0">
                        <i className="feather-navigation" /> New York, USA
                      </p>
                    </a>
                  </div>
                  <div className="filter">
                    <h6 className="p-3 bg-light m-0 border-bottom">
                      Choose your country
                    </h6>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio1"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio1"
                        >
                          Afghanistan
                        </label>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio2"
                          name="location"
                          className="form-check-input"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio2"
                        >
                          India
                        </label>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio3"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio3"
                        >
                          USA
                        </label>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio4"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio4"
                        >
                          Australia
                        </label>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio5"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio5"
                        >
                          Japan
                        </label>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio6"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio6"
                        >
                          China
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col.// */}
          <div className="col-8">
            <div className="d-flex align-items-center justify-content-end pe-5">
              {/* search */}
              <a href="search.html" className="widget-header me-4 text-dark">
                <div className="icon d-flex align-items-center">
                  <i className="feather-search h6 me-2 mb-0" />{" "}
                  <span>Search</span>
                </div>
              </a>
              {/* offers */}
              <a
                href="offers.html"
                className="widget-header me-4 text-white btn bg-primary m-none"
              >
                <div className="icon d-flex align-items-center">
                  <i className="feather-disc h6 me-2 mb-0" />{" "}
                  <span>Offers</span>
                </div>
              </a>
              {/* signin */}
              <a
                href="login.html"
                className="widget-header me-4 text-dark m-none"
              >
                <div className="icon d-flex align-items-center">
                  <i className="feather-user h6 me-2 mb-0" />{" "}
                  <span>Sign in</span>
                </div>
              </a>
              {/* my account */}
              <div className="dropdown me-4 m-none">
                <a
                  href="#"
                  className="dropdown-toggle text-dark py-3 d-block"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    alt="#"
                    src="img/user/1.jpg"
                    className="img-fluid rounded-circle header-user me-2 header-user"
                  />{" "}
                  Hi Osahan
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="profile.html">
                    My account
                  </a>
                  <a className="dropdown-item" href="faq.html">
                    Delivery support
                  </a>
                  <a className="dropdown-item" href="contact-us.html">
                    Contant us
                  </a>
                  <a className="dropdown-item" href="terms.html">
                    Term of use
                  </a>
                  <a className="dropdown-item" href="privacy.html">
                    Privacy policy
                  </a>
                  <a className="dropdown-item" href="login.html">
                    Logout
                  </a>
                </div>
              </div>
              {/* signin */}
              <a href="checkout.html" className="widget-header me-4 text-dark">
                <div className="icon d-flex align-items-center">
                  <i className="feather-shopping-cart h6 me-2 mb-0" />{" "}
                  <span>Cart</span>
                </div>
              </a>
              <a className="toggle" href="#">
                <span />
              </a>
            </div>
            {/* widgets-wrap.// */}
          </div>
          {/* col.// */}
        </div>
        {/* row.// */}
      </div>
      {/* container.// */}
    </section>
    {/* header-main .// */}
  </header>
  <div className="d-none">
    <div className="bg-primary border-bottom p-3 d-flex align-items-center mb-4">
      <a className="toggle togglew toggle-2" href="#">
        <span />
      </a>
      <h4 className="fw-bold m-0 text-white">Coming Soon</h4>
    </div>
  </div>
  <div className="container py-5 osahan-coming-soon d-flex justify-content-center align-items-center">
    <div className="osahan-img text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="bfad9f77-0abd-4173-8308-819d02b95b56"
        data-name="Layer 1"
        viewBox="0 0 722.78214 670.02319"
        className="injected-svg modal__media modal__lg_media mb-5 w-300 mx-auto"
        data-src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/barbecue_3x93.svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <ellipse cx={358} cy="646.02319" rx={358} ry={24} fill="#3f3d56" />
        <rect x={352} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={376} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={400} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={424} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={448} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={472} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={496} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={520} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={544} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={568} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <rect x={592} y="384.02319" width={12} height={7} fill="#3f3d56" />
        <path
          d="M870.10893,503.5116a144,144,0,1,1-288,0Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#3f3d56"
        />
        <path
          d="M863.14891,504.43158l-91.6-273.04a143.90129,143.90129,0,0,1,182.32,90.72c.97,2.89,1.85,5.8,2.63,8.71A144.007,144.007,0,0,1,863.14891,504.43158Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#3f3d56"
        />
        <circle cx={628} cy="393.02319" r={18} fill="#3f3d56" />
        <path
          d="M683.60938,541.01172a5,5,0,1,0,0,10h86a5,5,0,0,0,0-10Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e23744"
        />
        <polygon
          points="607 649.023 589.094 649.685 524.584 510.95 540.906 503.361 607 649.023"
          fill="#3f3d56"
        />
        <polygon
          points="368 649.023 385.906 649.685 450.416 510.95 434.094 503.361 368 649.023"
          fill="#3f3d56"
        />
        <rect x={414} y="569.02319" width={148} height={10} fill="#3f3d56" />
        <path
          d="M775.21,226.294a4.5007,4.5007,0,0,0-4.30273,5.814l3.79394,12.43408a4.50055,4.50055,0,0,0,8.60938-2.62646l-3.79395-12.43408A4.50982,4.50982,0,0,0,775.21,226.294Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e23744"
        />
        <path
          d="M576.10889,506.01172a4.5,4.5,0,0,0,0,9h13a4.5,4.5,0,0,0,0-9Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e23744"
        />
        <path
          d="M683.60893,473.0116h-54c-.34,0-.67.01-1,.04a13.99661,13.99661,0,0,0-.03,27.92c.34.03.68005.04,1.03.04h54a14,14,0,0,0,0-28Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#ff6584"
        />
        <path
          d="M624.16893,499.9016c9.2-1.18,16.44-12.79,16.44-26.89h-2c0,13.79-7.18,25-16,25v1.12Z"
          transform="translate(-238.60893 -114.9884)"
          opacity="0.2"
        />
        <path
          d="M643.60893,500.0116v-2c8.82227,0,16-11.21485,16-25h2C661.60893,487.89929,653.53422,500.0116,643.60893,500.0116Z"
          transform="translate(-238.60893 -114.9884)"
          opacity="0.2"
        />
        <path
          d="M664.60893,500.0116v-2c8.82227,0,16-11.21485,16-25h2C682.60893,487.89929,674.53422,500.0116,664.60893,500.0116Z"
          transform="translate(-238.60893 -114.9884)"
          opacity="0.2"
        />
        <path
          d="M781.60893,473.0116h-54c-.34,0-.67.01-1,.04a13.99661,13.99661,0,0,0-.03,27.92c.34.03.68005.04,1.03.04h54a14,14,0,0,0,0-28Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#ff6584"
        />
        <path
          d="M722.16893,499.9016c9.2-1.18,16.44-12.79,16.44-26.89h-2c0,13.79-7.18,25-16,25v1.12Z"
          transform="translate(-238.60893 -114.9884)"
          opacity="0.2"
        />
        <path
          d="M741.60893,500.0116v-2c8.82227,0,16-11.21485,16-25h2C759.60893,487.89929,751.53422,500.0116,741.60893,500.0116Z"
          transform="translate(-238.60893 -114.9884)"
          opacity="0.2"
        />
        <path
          d="M762.60893,500.0116v-2c8.82227,0,16-11.21485,16-25h2C780.60893,487.89929,772.53422,500.0116,762.60893,500.0116Z"
          transform="translate(-238.60893 -114.9884)"
          opacity="0.2"
        />
        <path
          d="M679.657,338.56817c-7.077-3.82334-15.82641.34644-19.353,7.11409-4.28963,8.23192-.73409,18.12835,4.268,25.1644,5.19791,7.31144,12.25263,13.34642,15.72243,21.79562a36.43191,36.43191,0,0,1-14.21277,44.86694c-3.25472,2.05887-.24771,7.25317,3.02831,5.18082a42.42529,42.42529,0,0,0,19.32529-43.22121,42.36477,42.36477,0,0,0-4.1285-12.36258,59.44346,59.44346,0,0,0-7.80773-11.03471c-5.20539-6.16053-11.75815-12.952-12.08477-21.5232a13.54853,13.54853,0,0,1,.23088-3.31974,11.67479,11.67479,0,0,1,.69252-2.22669,10.8575,10.8575,0,0,1,3.15191-3.93277,9.59093,9.59093,0,0,1,4.29118-1.94291,6.43462,6.43462,0,0,1,3.84791.62276c3.39749,1.83548,6.4304-3.34286,3.02832-5.18082Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e6e6e6"
        />
        <path
          d="M769.94036,374.86206a17.5003,17.5003,0,0,0-17.50772,4.06905,10.63255,10.63255,0,0,0-2.84391,9.28411c.57185,3.6359,2.86753,6.86525,5.358,9.46773,4.873,5.09218,11.6933,8.3847,15.779,14.23089a17.86,17.86,0,0,1,3.30052,8.46847,15.99686,15.99686,0,0,1-1.46365,8.004c-3.04832,6.19587-9.09925,10.41-15.48091,13.12287-1.49143.634-1.8202,2.83267-1.07626,4.10457A3.08,3.08,0,0,0,760.11,446.69c11.74358-4.9923,22.60925-16.17434,19.37011-29.91222-1.7039-7.22662-6.92621-12.32685-12.55006-16.76066a70.32947,70.32947,0,0,1-7.89223-6.73514c-1.94459-2.0655-3.96487-4.8856-3.60774-7.68474a4.25054,4.25054,0,0,1,1.34779-2.52835,11.62973,11.62973,0,0,1,2.97239-1.97531,11.18009,11.18009,0,0,1,8.59507-.44589,3.02825,3.02825,0,0,0,3.69036-2.09532,3.06156,3.06156,0,0,0-2.09532-3.69035Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e6e6e6"
        />
        <path
          d="M724.26416,289.5127a10.29274,10.29274,0,0,0-6.39527-2.46261,11.29509,11.29509,0,0,0-6.22808,2.01372,21.44061,21.44061,0,0,0-8.25243,12.36426c-3.0319,11.61339.923,24.13072,6.41771,34.35865,2.77781,5.17065,6.01321,10.07843,8.80958,15.23858a67.63223,67.63223,0,0,1,6.16166,15.63565,75.5888,75.5888,0,0,1,.74288,34.12784c-2.40134,11.23137-7.45245,22.35237-16.0457,30.10148a3,3,0,0,0,4.24264,4.24265c7.6272-6.878,12.72772-16.31261,15.807-26.01423a79.76277,79.76277,0,0,0,2.91291-33.89479,77.69687,77.69687,0,0,0-3.84638-16.62225,91.76252,91.76252,0,0,0-7.63184-15.579c-5.63947-9.53486-11.64265-19.17852-12.459-30.53163-.40145-5.58291.29709-11.40246,3.75063-15.89209-.189.24568.15158-.17871.15305-.18048q.31392-.3761.65141-.73207a13.26571,13.26571,0,0,1,1.37838-1.28344c-.10415.08255-.36973.25988.11372-.07526.24044-.16669.48568-.3265.73794-.47478.20515-.12059.416-.22754.62595-.33892q.187-.09546.37926-.17984-.43782.18873.04927.00362c.23479-.07356,1.397-.32467.752-.24318a6.0339,6.0339,0,0,1,.648-.04212c.09183-.00165.901.03979.50572-.00347-.46225-.05059.36557.08215.3715.08363a5.93621,5.93621,0,0,1,.76163.24127c-.62412-.24948,1.02371.67711.64331.38141a3.09924,3.09924,0,0,0,4.24264,0c1.03514-1.03514,1.28652-3.24259,0-4.24264Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e6e6e6"
        />
        <polygon
          points="255.288 625.401 232.67 631.401 191.127 439.38 237.748 435.225 255.288 625.401"
          fill="#ffb9b9"
        />
        <polygon
          points="151.804 628.352 128.666 631.848 108.331 436.439 155.126 437.398 151.804 628.352"
          fill="#ffb9b9"
        />
        <path
          d="M378.49977,465.28111l2.13652,39.88167a10.2394,10.2394,0,0,1-11.15177,10.7451h0a10.23939,10.23939,0,0,1-9.2732-9.30259l-3.86787-44.09372-30.465-103.39623.92318-66.469,36.00405,1.84636Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#ffb9b9"
        />
        <path
          d="M397.88656,563.13826q-27.05188-9.39234-62.77628-3.69272c3.37763-40.00989,5.33376-77.16351,3.69272-107.089H461.586Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#2f2e41"
        />
        <path
          d="M483.74236,562.21508c-18.58814,9.833-45.47634,14.54037-76.624,16.61725l-38.77359-123.7062,95.0876-1.84636Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#2f2e41"
        />
        <path
          d="M531.60653,760.46331l-66.88995,2.47677c-8.56847.31727-9.02037-7.0409-7.40281-15.46129l7.91923-22.61248c17.82952,17.46746,19.50857,18.44364,27.15168-6.40412l23.32638,18.42395,17.26625,2.96015a10.38675,10.38675,0,0,1,8.63161,10.25365v0A10.38675,10.38675,0,0,1,531.60653,760.46331Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#2f2e41"
        />
        <path
          d="M430.29718,760.46331l-66.88995,2.47677c-8.56847.31727-9.02037-7.0409-7.40281-15.46129l7.91923-22.61248c17.82952,17.46746,19.50857,18.44364,27.15168-6.40412l23.32638,18.42395,17.26625,2.96015a10.38675,10.38675,0,0,1,8.63161,10.25365v0A10.38675,10.38675,0,0,1,430.29718,760.46331Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#2f2e41"
        />
        <circle cx="207.28302" cy="43.79674" r="36.00404" fill="#ffb9b9" />
        <polygon
          points="188.819 107.496 146.353 94.572 174.972 52.105 207.283 65.953 188.819 107.496"
          fill="#ffb9b9"
        />
        <path
          d="M467.12511,463.43475c-43.65488,9.815-92.11556,5.921-133.86119-5.53908,9.99688-55.74537,5.17046-115.62288-4.61591-164.32615-7.66-38.121,12.54683-70.10959,46.159-85.8558a93.60615,93.60615,0,0,1,22.379-5.03926c23.578-2.08905,44.32428,15.59016,46.78392,39.13243Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e23744"
        />
        <polygon
          points="114.965 197.045 84.5 193.352 93.732 145.347 114.965 145.347 114.965 197.045"
          fill="#e23744"
        />
        <path
          d="M445.38854,164.48593l-5.51576-2.45132a9.42783,9.42783,0,0,0-12.9426,6.243h0l-7.68676,13.88853-19.145-3.03039.66875-29.4007A41.098,41.098,0,0,1,450.385,116.00868l.52259.11822c9.3465,2.11434,21.48008,8.97653,27.81412,16.18007l11.8015,13.42155a4.63724,4.63724,0,0,1-2.966,7.66945l-16.14052,1.781Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#2f2e41"
        />
        <path
          d="M564.81,410.02543,544.136,428.1593a1.5,1.5,0,0,1-1.97824-2.25534l20.674-18.13387-3.95648-4.51068-20.674,18.13387a1.5,1.5,0,0,1-1.97824-2.25534l20.674-18.13388-3.95648-4.51068-20.674,18.13387a1.5,1.5,0,1,1-1.97824-2.25534l20.674-18.13387-4.94561-5.63835-29.21582,25.62625a15.14033,15.14033,0,0,0-3.2193,18.78587l-88.20636,77.369,7.913,9.02136,88.149-77.31865a14.66114,14.66114,0,0,0,18.74739-.48189l29.571-25.93781Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e6e6e6"
        />
        <path
          d="M464.35556,465.28111l2.13652,39.88167a10.23939,10.23939,0,0,1-11.15176,10.7451h0a10.23939,10.23939,0,0,1-9.2732-9.30259l-3.86787-44.09372-30.465-103.39623.92318-66.469,36.004,1.84636Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#ffb9b9"
        />
        <path
          d="M451.431,304.64769c-10.955-10.50851-25.415-10.89437-41.54313-6.46227V248.5717a22.39437,22.39437,0,0,1,22.39436-22.39437h0a20.50689,20.50689,0,0,1,20.50122,20.98928Z"
          transform="translate(-238.60893 -114.9884)"
          fill="#e23744"
        />
      </svg>
      <div className="osahan-text text-center mt-3">
        <h2 className="text-primary font-weight-light">
          We're coming <span className="fw-bold">soon.</span>
        </h2>
        <p className="lead small mb-5">
          Our website is under construction. We'll be here soon with our new
          awesome site, subscribe to be notified.
        </p>
        <div className="row">
          <div className="col px-1">
            <div className="border p-2 rounded text-center mb-2">
              <h5 className="fw-bold text-primary mb-1">322</h5>
              <p className="mb-0 text-dark">Days</p>
            </div>
          </div>
          <div className="col px-1">
            <div className="border p-2 rounded text-center mb-2">
              <h5 className="fw-bold text-primary mb-1">22</h5>
              <p className="mb-0 text-dark">Hours</p>
            </div>
          </div>
          <div className="col px-1">
            <div className="border p-2 rounded text-center mb-2">
              <h5 className="fw-bold text-primary mb-1">04</h5>
              <p className="mb-0 text-dark">Mins</p>
            </div>
          </div>
          <div className="col px-1">
            <div className="border p-2 rounded text-center mb-2">
              <h5 className="fw-bold text-primary mb-1">43</h5>
              <p className="mb-0 text-dark">Secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer */}
  <footer className="section-footer border-top bg-dark">
    <div className="container">
      <div className="footer-top padding-y py-5">
        <div className="row pt-3">
          <aside className="col-md-4 footer-about">
            <article className="d-flex pb-3">
              <div>
                <img
                  alt="#"
                  src="img/logo_web.png"
                  className="logo-footer me-3"
                />
              </div>
              <div>
                <h6 className="title text-white">About Us</h6>
                <p className="text-muted">
                  Some short text about company like You might remember the Dell
                  computer commercials in which a youth reports.
                </p>
                <div className="d-flex align-items-center">
                  <a
                    className="btn btn-icon btn-outline-light me-1 btn-sm"
                    title="Facebook"
                    target="_blank"
                    href="#"
                  >
                    <i className="feather-facebook" />
                  </a>
                  <a
                    className="btn btn-icon btn-outline-light me-1 btn-sm"
                    title="Instagram"
                    target="_blank"
                    href="#"
                  >
                    <i className="feather-instagram" />
                  </a>
                  <a
                    className="btn btn-icon btn-outline-light me-1 btn-sm"
                    title="Youtube"
                    target="_blank"
                    href="#"
                  >
                    <i className="feather-youtube" />
                  </a>
                  <a
                    className="btn btn-icon btn-outline-light me-1 btn-sm"
                    title="Twitter"
                    target="_blank"
                    href="#"
                  >
                    <i className="feather-twitter" />
                  </a>
                </div>
              </div>
            </article>
          </aside>
          <aside className="col-sm-3 col-md-2 text-white">
            <h6 className="title">Error Pages</h6>
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="not-found.html" className="text-muted">
                  Not found
                </a>
              </li>
              <li>
                {" "}
                <a href="maintence.html" className="text-muted">
                  Maintence
                </a>
              </li>
              <li>
                {" "}
                <a href="coming-soon.html" className="text-muted">
                  Coming Soon
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-3 col-md-2 text-white">
            <h6 className="title">Services</h6>
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="faq.html" className="text-muted">
                  Delivery Support
                </a>
              </li>
              <li>
                {" "}
                <a href="contact-us.html" className="text-muted">
                  Contact Us
                </a>
              </li>
              <li>
                {" "}
                <a href="terms.html" className="text-muted">
                  Terms of use
                </a>
              </li>
              <li>
                {" "}
                <a href="privacy.html" className="text-muted">
                  Privacy policy
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-3  col-md-2 text-white">
            <h6 className="title">For users</h6>
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="login.html" className="text-muted">
                  {" "}
                  User Login{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="signup.html" className="text-muted">
                  {" "}
                  User register{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="forgot_password.html" className="text-muted">
                  {" "}
                  Forgot Password{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="profile.html" className="text-muted">
                  {" "}
                  Account Setting{" "}
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-3  col-md-2 text-white">
            <h6 className="title">More Pages</h6>
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="trending.html" className="text-muted">
                  {" "}
                  Trending{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="most_popular.html" className="text-muted">
                  {" "}
                  Most popular{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="restaurant.html" className="text-muted">
                  {" "}
                  Restaurant Details{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="favorites.html" className="text-muted">
                  {" "}
                  Favorites{" "}
                </a>
              </li>
            </ul>
          </aside>
        </div>
        {/* row.// */}
      </div>
      {/* footer-top.// */}
      <section className="footer-center border-top padding-y py-5">
        <h6 className="title text-white">Countries</h6>
        <div className="row">
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  India
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Indonesia
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Ireland
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Italy
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Lebanon
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Malaysia
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  New Zealand
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Philippines
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Poland
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Portugal
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Australia
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Brasil
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Canada
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Chile
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Czech Republic
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Turkey
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  UAE
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  United Kingdom
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  United States
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Sri Lanka
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Qatar
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Singapore
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Slovakia
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  South Africa
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Green Land
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Pakistan
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Bangladesh
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Bhutaan
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Nepal
                </a>
              </li>
            </ul>
          </aside>
        </div>
        {/* row.// */}
      </section>
    </div>
    {/* //container */}
    <div className="footer-copyright border-top py-3 bg-light">
      <div className="container d-flex align-items-center">
        <p className="mb-0"> © 2023 Company All rights reserved </p>
        <p className="text-muted mb-0 ms-auto d-flex align-items-center">
          <a href="#" className="d-block">
            <img alt="#" src="img/appstore.png" height={40} />
          </a>
          <a href="#" className="d-block ms-3">
            <img alt="#" src="img/playmarket.png" height={40} />
          </a>
        </p>
      </div>
    </div>
  </footer>
  <nav id="main-nav">
    <ul className="second-nav">
      <li>
        <a href="home.html">
          <i className="feather-home me-2" /> Homepage
        </a>
      </li>
      <li>
        <a href="my_order.html">
          <i className="feather-list me-2" /> My Orders
        </a>
      </li>
      <li>
        <a href="#">
          <i className="feather-edit-2 me-2" /> Authentication
        </a>
        <ul>
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a href="signup.html">Register</a>
          </li>
          <li>
            <a href="forgot_password.html">Forgot Password</a>
          </li>
          <li>
            <a href="verification.html">Verification</a>
          </li>
          <li>
            <a href="location.html">Location</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="favorites.html">
          <i className="feather-heart me-2" /> Favorites
        </a>
      </li>
      <li>
        <a href="trending.html">
          <i className="feather-trending-up me-2" /> Trending
        </a>
      </li>
      <li>
        <a href="most_popular.html">
          <i className="feather-award me-2" /> Most Popular
        </a>
      </li>
      <li>
        <a href="restaurant.html">
          <i className="feather-paperclip me-2" /> Restaurant Detail
        </a>
      </li>
      <li>
        <a href="checkout.html">
          <i className="feather-list me-2" /> Checkout
        </a>
      </li>
      <li>
        <a href="successful.html">
          <i className="feather-check-circle me-2" /> Successful
        </a>
      </li>
      <li>
        <a href="map.html">
          <i className="feather-map-pin me-2" /> Live Map
        </a>
      </li>
      <li>
        <a href="#">
          <i className="feather-user me-2" /> Profile
        </a>
        <ul>
          <li>
            <a href="profile.html">Profile</a>
          </li>
          <li>
            <a href="favorites.html">Delivery support</a>
          </li>
          <li>
            <a href="contact-us.html">Contact Us</a>
          </li>
          <li>
            <a href="terms.html">Terms of use</a>
          </li>
          <li>
            <a href="privacy.html">Privacy &amp; Policy</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="feather-alert-triangle me-2" /> Error
        </a>
        <ul>
          <li>
            <a href="not-found.html">Not Found</a>
          </li>
          <li>
            <a href="maintence.html"> Maintence</a>
          </li>
          <li>
            <a href="coming-soon.html">Coming Soon</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="feather-link me-2" /> Navigation Link Example
        </a>
        <ul>
          <li>
            <a href="#">Link Example 1</a>
            <ul>
              <li>
                <a href="#">Link Example 1.1</a>
                <ul>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Link Example 1.2</a>
                <ul>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Link Example 2</a>
          </li>
          <li>
            <a href="#">Link Example 3</a>
          </li>
          <li>
            <a href="#">Link Example 4</a>
          </li>
          <li data-nav-custom-content="">
            <div className="custom-message">
              You can add any custom content to your navigation items. This text
              is just an example.
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="bottom-nav">
      <li className="email">
        <a className="text-danger" href="home.html">
          <p className="h5 m-0">
            <i className="feather-home text-danger" />
          </p>
          Home
        </a>
      </li>
      <li className="github">
        <a href="faq.html">
          <p className="h5 m-0">
            <i className="feather-message-circle" />
          </p>
          FAQ
        </a>
      </li>
      <li className="ko-fi">
        <a href="contact-us.html">
          <p className="h5 m-0">
            <i className="feather-phone" />
          </p>
          Help
        </a>
      </li>
    </ul>
  </nav>
  <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
    <div className="row">
      <div className="col selected">
        <a
          href="home.html"
          className="text-danger small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-home text-danger" />
          </p>
          Home
        </a>
      </div>
      <div className="col">
        <a
          href="most_popular.html"
          className="text-dark small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-map-pin" />
          </p>
          Trending
        </a>
      </div>
      <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
        <div className="bg-danger rounded-circle mt-n0 shadow">
          <a
            href="checkout.html"
            className="text-white small fw-bold text-decoration-none"
          >
            <i className="feather-shopping-cart" />
          </a>
        </div>
      </div>
      <div className="col">
        <a
          href="favorites.html"
          className="text-dark small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-heart" />
          </p>
          Favorites
        </a>
      </div>
      <div className="col">
        <a
          href="profile.html"
          className="text-dark small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-user" />
          </p>
          Profile
        </a>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript */}
</>

    </div>
  )
}

export default ComingSoon
