import React from 'react'

const ContactUs = () => {
  return (
    <div>
   
 
  
    
   
       
        <div className="col-md-12 mb-3">
          <div className="rounded shadow-sm">
            <div className="osahan-cart-item-profile bg-white rounded shadow-sm p-4">
              <div className="flex-column">
                <h6 className="fw-bold">Tell us about yourself</h6>
                <p className="text-muted">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </p>
                <form>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="small fw-bold pb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Gurdeep Osahan"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="small fw-bold pb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="iamosahan@gmail.com"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="exampleFormControlInput3"
                      className="small fw-bold pb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput3"
                      placeholder="1-800-643-4500"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="small fw-bold pb-1"
                    >
                      HOW CAN WE HELP YOU?
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Hi there, I would like to ..."
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <a className="btn btn-primary w-100" href="#">
                    SUBMIT
                  </a>
                </form>
                {/* Map */}
                <div className="mapouter pt-3">
                  <div className="gmap_canvas">
                    <iframe
                      className="w-100 h-100 border-0"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=dugri%20ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  


      
    </div>
  )
}

export default ContactUs
