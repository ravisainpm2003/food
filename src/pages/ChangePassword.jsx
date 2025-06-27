import { Alert, Slide, Snackbar, TextField } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/utilities/UserContext';
import ENDPOINT from '../components/utilities/ENDPOINT';
import SecurityHeaders from '../components/utilities/SecurityHeaders';



const ChangePassword = () => {
  const User = useContext(UserContext);

  const navigate = useNavigate()
  const [credential, setCredential] = useState({
    confirm_password: '',
    password: '',
    current_password: ''
  });

  const [checkPassword, setCheckPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [toast, setToast] = useState({
    message: '',
    show: false,
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    setCredential((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const resetPassword = async (e) => {
    e.preventDefault();

    if (credential.password !== credential.confirm_password) {
      setCheckPassword(true);
      return;
    }

    setCheckPassword(false);

    try {
      const data = new FormData();
   
data.append('user_token', User?.user.session);
      data.append('current_password', credential.current_password);
      data.append('password', credential.password);

      const res = await axios.post(`${ENDPOINT}reset-password.php`, data, SecurityHeaders);

      if (res && res.data.status === 'success') {
        // setPasswordChanged(true);
        setTimeout(() => {
          navigate(-1)
        }, 2000);
     
      }

      setToast({...toast, message: res.data.message, show: true });
    } catch (err) {
      console.log('User Login Error:', err);
      setToast({...toast, message: 'An error occurred. Please try again later.', show: true });
    }
  };


  return (
    <>
      <div className='d-flex align-items-center justify-content-center vh-100 otp-container'>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={toast.show}
        onClose={()=>setToast({...toast,show:false})}
        key="bottom-center" // Key expects a string or number
        autoHideDuration={2000}
        TransitionComponent={Slide} // Using Slide component for transition
      >
        <Alert
          onClose={()=>setToast({...toast,show:false})}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
        <div className='col-12 col-sm-12 col-md-4 col-lg-4 bg-white shadow rounded p-4'>
        {/* <Toast message={toast.message} showToast={toast.show} Close={() => setToast({ ...toast, show: false })} /> */}

      <>
        <>
          <form onSubmit={resetPassword}>
            <h1 className="h3 mb-3 mb-3 fw-normal text-center">Reset Password</h1>

            <div className=" mt-3">
              <input type="password" className="form-control" onChange={handleForm} name="current_password" placeholder="Current Password" />
            </div>

            {checkPassword && <p className='text-danger ms-1 mt-1 mb-0 pb-0'>Passwords do not match. Please try again.</p>}

            <div className="mt-4">
              <input type="password" className="form-control" onChange={handleForm} name="password" placeholder="New Password" />
            </div>

            <div className=" mt-4">
              <input type="password" className="form-control" onChange={handleForm} name="confirm_password" placeholder="Confirm Password" />
            </div>


            <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Reset Password</button>
          </form>
        </>
      </>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
