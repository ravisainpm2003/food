import React from 'react'

const StatusCanceled = () => {
  return (
    <div>
      <>

  <div className="d-none">
    <div className="bg-primary p-3 d-flex align-items-center">
      <a className="toggle togglew toggle-2" href="#">
        <span />
      </a>
      <h4 className="fw-bold m-0 text-white">My Order</h4>
    </div>
  </div>
  <div className="py-4 osahan-main-body">
    <div className="container">
      <div className="row g-4">
        <div className="col-md-3">
          <ul
            className="nav nav-tabsa custom-tabsa border-0 flex-column bg-white rounded overflow-hidden shadow-sm p-2 c-t-order"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3 active"
                href="my_order.html"
              >
                <i className="feather-check me-2 text-success mb-0" /> Completed
              </a>
            </li>
            <li className="nav-item border-top" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3"
                href="my_order.html"
              >
                <i className="feather-clock me-2 text-warning mb-0" /> On
                Progress
              </a>
            </li>
            <li className="nav-item border-top" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3"
                href="my_order.html"
              >
                <i className="feather-x-circle me-2 text-danger mb-0" />{" "}
                Canceled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          {/* body */}
          <section className="bg-white osahan-main-body rounded shadow-sm overflow-hidden">
            <div className="container p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="osahan-status">
                    {/* status complete */}
                    <div className="p-3 status-order border-bottom bg-white">
                      <p className="small m-0">
                        <i className="feather-calendar text-primary" /> 16 June,
                        11:30AM
                      </p>
                    </div>
                    <div className="p-3 border-bottom">
                      <h6 className="fw-bold">Order Status</h6>
                      <div className="tracking-wrap">
                        <div className="step active">
                          <span className="icon text-success">
                            <i className="feather-check-circle" />
                          </span>
                          <span className="text small">Ordered</span>
                        </div>
                        {/* step.// */}
                        <div className="step active">
                          <span className="icon text-danger">
                            <i className="feather-x-circle" />
                          </span>
                          <span className="text small">Canceled</span>
                        </div>
                        {/* step.// */}
                      </div>
                    </div>
                    {/* Destination */}
                    <div className="p-3 border-bottom bg-white">
                      <h6 className="fw-bold">Destination</h6>
                      <p className="m-0 small">
                        554 West 142nd Street, New York, NY 10031
                      </p>
                    </div>
                    <div className="p-3 border-bottom">
                      <p className="fw-bold small mb-1">Courier</p>
                      <img
                        alt="#"
                        src="img/logo_web.png"
                        className="img-fluid sc-osahan-logo me-2"
                      />{" "}
                      <span className="small text-primary fw-bold">
                        Grocery Courier
                      </span>
                    </div>
                    {/* total price */}
                    {/* Destination */}
                    <div className="p-3 border-bottom bg-white">
                      <div className="d-flex align-items-center mb-2">
                        <h6 className="fw-bold mb-1">Total Cost</h6>
                        <h6 className="fw-bold ms-auto mb-1">$8.52</h6>
                      </div>
                      <p className="m-0 small text-muted">
                        You can check your order detail here,
                        <br />
                        Thank you for order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

</>

    </div>
  )
}

export default StatusCanceled
