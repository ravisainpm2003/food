import React from 'react'
import { Link } from 'react-router-dom'

const Successful = () => {
  return (
    <>
 
    <div className="d-none">
      <div className="bg-primary p-3 d-flex align-items-center">
        <a className="toggle togglew toggle-2" href="#">
          <span />
        </a>
        <h4 className="fw-bold m-0 text-white">Thanks :)</h4>
      </div>
    </div>
    <div className="py-5 osahan-coming-soon d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="text-center pb-3">
          <h1 className="fw-bold">Osahan, Your order has been successful</h1>
          <p>
            Check your order status in{" "}
            <a
              href="my_order.html"
              className="fw-bold text-decoration-none text-primary"
            >
              My Orders
            </a>{" "}
            about next steps information.
          </p>
        </div>
        {/* continue */}
        <div className="bg-white rounded text-center p-4 shadow-sm">
          <h1 className="display-1 mb-4">🎉</h1>
          <h6 className="fw-bold mb-2">Preparing your order</h6>
          <p className="small text-muted">
            Your order will be prepared and will come soon
          </p>
          <Link
            to="/my-orders"
            className="btn rounded btn-primary btn-lg w-100"
          >
            Track My Order
          </Link>
        </div>
      </div>
    </div>

  </>
  
  )
}

export default Successful
