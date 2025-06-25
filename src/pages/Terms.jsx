import React from 'react'

const Terms = () => {
  return (
    <div>
      <>

  
  <div className="py-5 osahan-coming-soon d-flex justify-content-center align-items-center">
    <div className="col-md-12">
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
        <a
          href="status_onprocess.html"
          className="btn rounded btn-primary btn-lg w-100"
        >
          Track My Order
        </a>
      </div>
    </div>
  </div>

</>

    </div>
  )
}

export default Terms
