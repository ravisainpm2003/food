import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
  return (
    
      <>

  
        <div className="col-md-8 mb-3">
          <div className="osahan-cart-item-profile">
            <div className="box bg-white mb-3 shadow-sm rounded">
              <div className="p-3 d-flex align-items-center">
                <i className="feather-message-circle display-4" />
                <div className="ms-3">
                  <h6 className="text-dark mb-2 mt-0">Help Forum</h6>
                  <p className="mb-0 text-muted">
                    Find the answer to any question, from the basics ...
                  </p>
                </div>
              </div>
              <div className="overflow-hidden border-top d-flex align-items-center p-3">
                <a className="fw-bold d-block" href="#">
                  {" "}
                  Swiggiweb Help Forum.{" "}
                </a>
                <i className="feather-arrow-right-circle ms-auto text-primary" />
              </div>
            </div>
            <div className="box bg-white mb-3 shadow-sm rounded">
              <div className="p-3 d-flex align-items-center">
                <i className="feather-lock display-4" />
                <div className="ms-3">
                  <h6 className="text-dark mb-2 mt-0">Safety Center</h6>
                  <p className="mb-0 text-muted">
                    Want to learn more about setting up and managing ...
                  </p>
                </div>
              </div>
              <div className="overflow-hidden border-top d-flex align-items-center p-3">
                <a className="fw-bold d-block" href="#">
                  {" "}
                  Swiggiweb Safety Center.{" "}
                </a>
                <i className="feather-arrow-right-circle ms-auto text-primary" />
              </div>
            </div>
            <div id="basics">
              {/* Title */}
              <div className="mb-2 mt-3">
                <h5 className="font-weight-semi-bold mb-0">Basics</h5>
              </div>
              {/* End Title */}
              {/* Basics Accordion */}
              <Accordion defaultActiveKey="0" alwaysOpen>
      {/* Item 1 */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do you have any built-in caching?</Accordion.Header>
        <Accordion.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid ...
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 2 */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I add/upgrade my plan at any time?</Accordion.Header>
        <Accordion.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid ...
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 3 */}
      <Accordion.Item eventKey="2">
        <Accordion.Header>What access comes with hosting plan?</Accordion.Header>
        <Accordion.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid ...
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 4 */}
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do I change my password?</Accordion.Header>
        <Accordion.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid ...
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
              {/* End Basics Accordion */}
            </div>
            <div id="account">
              {/* Title */}
              <div className="mb-2 mt-3">
                <h5 className="font-weight-semi-bold mb-0">Account</h5>
              </div>
              {/* End Title */}
              {/* Account Accordion */}
              <Accordion defaultActiveKey="0" alwaysOpen>
      {/* Item 1 */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I change my password?</Accordion.Header>
        <Accordion.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid ...
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 2 */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do I delete my account?</Accordion.Header>
        <Accordion.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid ...
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 3 */}
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I change my account settings?</Accordion.Header>
        <Accordion.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid ...
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 4 */}
      <Accordion.Item eventKey="3">
        <Accordion.Header>I forgot my password. How do I reset it?</Accordion.Header>
        <Accordion.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid ...
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
              {/* End Account Accordion */}
            </div>
          </div>
        </div>
      
</>

    
  )
}

export default Faq
