import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { UserContext } from '../components/utilities/UserContext';
import ENDPOINT from '../components/utilities/ENDPOINT';
import SecurityHeaders from '../components/utilities/SecurityHeaders';


const StatusOnProcess = () => {
  const { user, location } = useContext(UserContext);
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchOrderStatus = async () => {
    if (!user?.user_id || !user?.session || !orderId) {
      setError('Please log in to view order status');
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();
      data.append('user_id', user.user_id);
      data.append('user_token', user.session);
      data.append('order_id', orderId);
      const res = await axios.post(ENDPOINT + 'get-order-status.php', data, SecurityHeaders);
      if (res.data.status === 'success') {
        setOrder(res.data.order);
        setError('');
        // Validate location
  console.log(+location.location_id !== +res.data.order.location_id);

        if (+res.data.order.location_id !== +location.location_id) {
          setError('Order location does not match selected location');
        }
      } else {
        setError('Failed to load order status: ' + res.data.message);
      }
    } catch (err) {
      console.error('Fetch order status error:', err);
      setError('Failed to load order status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderStatus();
  }, [user, orderId]);

  const statusSteps = [
    { status: 'preparing', label: 'Preparing order', icon: 'feather-check-circle' },
    { status: 'ready', label: 'Ready to collect', icon: 'feather-check-circle' },
    { status: 'on_the_way', label: 'On the way', icon: 'feather-check-circle' },
    { status: 'delivered', label: 'Delivered Order', icon: 'feather-check-circle' },
  ];

  const isStepActive = (stepStatus) => {
    if (!order) return false;
    const statusOrder = ['preparing', 'ready', 'on_the_way', 'delivered'];
    return statusOrder.indexOf(order.status) >= statusOrder.indexOf(stepStatus);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ', ' +
           date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  return (
    <div className="py-4 osahan-main-body">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-9 mx-auto">
            <section className="bg-white osahan-main-body rounded shadow-sm overflow-hidden">
              <div className="container p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="osahan-status">
                      {error && <div className="alert alert-danger">{error}</div>}
                      {loading ? (
                        <div className="text-center py-5">
                          <div className="spinner-border" role="status"></div>
                        </div>
                      ) : !order ? (
                        <div className="text-center py-5">
                          <p className="fw-bold text-dark h5">Order not found</p>
                        </div>
                      ) : (
                        <>
                          <div className="p-3 status-order border-bottom bg-white">
                            <p className="small m-0">
                              <i className="feather-calendar text-primary" /> {formatDate(order.created_at)}
                            </p>
                          </div>
                          <div className="p-3 border-bottom">
                            <div className="d-flex">
                              <h6 className="fw-bold">Order Status - {order.restaurant_name}</h6>
                              <span className="ms-auto">
                                <a href={`https://maps.google.com/?q=${encodeURIComponent(order.destination_address)}`} className="btn btn-primary">
                                  Track on map
                                </a>
                              </span>
                            </div>
                            <div className="tracking-wrap">
                              {statusSteps.map((step) => (
                                <div className={`my-1 step ${isStepActive(step.status) ? 'active' : ''}`} key={step.status}>
                                  <span className={`icon ${isStepActive(step.status) ? 'text-success' : 'text-danger'}`}>
                                    <i className={isStepActive(step.status) ? 'feather-check-circle' : 'feather-x-circle'} />
                                  </span>
                                  <span className="text small">{step.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-3 border-bottom bg-white">
                            <h6 className="fw-bold">Destination</h6>
                            <p className="m-0 small">{order.destination_address}</p>
                          </div>
                          <div className="p-3 border-bottom">
                            <p className="fw-bold small mb-1">Courier</p>
                            <img
                              alt="Swiggiweb"
                              src="img/logo_web.png"
                              className="img-fluid sc-osahan-logo me-2"
                            />
                            <span className="small text-primary fw-bold">Swiggiweb Courier</span>
                          </div>
                          <div className="p-3 border-bottom bg-white">
                            <div className="d-flex align-items-center mb-2">
                              <h6 className="fw-bold mb-1">Total Cost</h6>
                              <h6 className="fw-bold ms-auto mb-1">${order.total_cost.toFixed(2)}</h6>
                            </div>
                            <p className="m-0 small text-muted">
                              You can check your order detail here,
                              <br />
                              Thank you for your order.
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusOnProcess;