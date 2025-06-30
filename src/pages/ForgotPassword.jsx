import React, { useContext, useState } from 'react'
import { UserContext } from '../components/utilities/UserContext';
import { useNavigate } from 'react-router-dom';
import ENDPOINT from '../components/utilities/ENDPOINT';
import SecurityHeaders from '../components/utilities/SecurityHeaders';
import { Alert, Slide, Snackbar } from '@mui/material';
import axios from 'axios';

const ForgotPassword = () => {
  const {User} = useContext(UserContext);
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({
    show: false,
    message: ''
  });

  const sendOtp = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const data = new FormData();
      data.append('email', email);
    

      const res = await axios.post(ENDPOINT + 'forgot-password.php', data, SecurityHeaders);
      if (res && res.data) {
        if(res.data.status === 'success'){
          localStorage.setItem('otp_email',email);
         navigate('/forgot-password-step2');
        }
        setToast({ show: true, message: res.data.message });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleClose = () => {
    setToast({ show: false, message: '' });
  };
  return (
    <div>
      <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={toast.show}
        onClose={handleClose}
        key="bottom-center" // Key expects a string or number
        autoHideDuration={3000}
        TransitionComponent={Slide} // Using Slide component for transition
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
  <div className="osahan-signup login-page">
    <video loop="" autoPlay="" muted="" id="vid">
      <source src="img/bg.mp4" type="video/mp4" />
      <source src="img/bg.mp4" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
      <div className="px-5 col-md-6 ms-auto">
        <div className="px-5 col-10 mx-auto">
          <h2>Forgot password</h2>
          <p>
            Enter your email address below and we'll send you an email with
            instructions on how to change your password
          </p>
          <form onSubmit={sendOtp} className="mt-5 mb-4">
            <div className="form-group">
              <label className="form-label pb-1">Email</label>
              <input  onChange={(e) => setEmail(e.target.value)} type="email" className="form-control py-1" />
            </div>
            <button className="btn btn-primary btn-lg w-100">Send</button>
          </form>
        </div>
        <div className="new-acc d-flex align-items-center justify-content-center">
          <a href="login.html">
            <p className="text-center m-0">Already an account? Sign in</p>
          </a>
        </div>
      </div>
    </div>
  </div>

</>

    </div>
  )
}

export default ForgotPassword
