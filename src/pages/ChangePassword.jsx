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
  const [otp, setOtp] = useState('');
  const [otp_email, setOtp_email] = useState('');
  const [password_massage, setPassword_Message] = useState({
    show: false,
    message: ''
  })
  const [toast, setToast] = useState({
    show: false,
    message: ''
  });
  useEffect(() => {
    const firstOtpInput = document.querySelector('input');
    if (firstOtpInput) firstOtpInput.focus();
    setOtp_email(localStorage.getItem('otp_email'));

  }, []);


  const [credential, setCredential] = useState({
    con_password: '',
    password: '',

  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    setCredential({
      ...credential,
      [name]: value
    });

    if (name === 'password') {
      const strength = checkStrength(value);
      updateStrengthIndicator(strength);
      updateStrengthText(strength);
    }
  };
  const [checkPassword, setCheckPassword] = useState({
    color: '#000',
    message: ''
  });

  const [showPassword, setShowPassword] = useState('password');

  const checkStrength = (password) => {
    let strength = 0;
    if (password.length > 7) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W]/.test(password)) strength += 1; // Checks for special characters
    return strength;
  };

  const updateStrengthIndicator = (strength) => {
    const colors = ['#ccc', 'red', 'orange', '#130dff', 'green'];

    setCheckPassword(prevState => ({
      ...prevState,
      color: colors[strength]
    }));
  };

  const updateStrengthText = (strength) => {
    const strengthMessages = ['Too Short', 'Weak', 'Medium', 'Strong', 'Very Strong'];

    setCheckPassword(prevState => ({
      ...prevState,
      message: strengthMessages[strength]
    }));
  };

  const changePassword = async (e) => {
    e.preventDefault()

    if (credential.con_password !== credential.password) {
      setPassword_Message({ ...password_massage, show: true, message: 'Password Not Match' });
      return;
    }

    try {
      const data = new FormData()
      data.append('otp', otp);
      data.append('new_password', credential.password);
      data.append('email', otp_email);

      const res = await axios.post(ENDPOINT+"conform-otp.php",data,SecurityHeaders);
      if(res){
        if(res.data.status === 'success'){
          localStorage.removeItem('otp_email')
          setTimeout(()=>{
navigate('/login')
            
          },2000)
        }
        setToast({ show: true, message: res.data.message });

      }

    }
    catch (err) {
      console.log(err.message);
    }
  }


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
          <center>
            <h3>Set Password</h3>
            <p>OTP sent to your <strong>{otp_email}</strong></p>

            <div className='d-flex justify-content-center'>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className='' />}
                renderInput={(props) => <input {...props} className='otp-input' />}
              />
            </div>


          </center>

          <div className='mt-4 ps-4 pe-4'>
            <label>Enter New Password</label>
            <TextField onChange={handleForm} name='password' className='form-control' id="standard-basic" variant="standard" />
            
          </div>
          {checkPassword.color !== '#000' ?
            <h5 className={`text-center mt-2 bg-light `} style={{ color: checkPassword.color }}>{checkPassword.message}</h5>
            : <></>}
          <div className='mt-4 ps-4 pe-4'>
            <label>Enter Conform Password</label>

            <TextField onChange={(handleForm)} name='con_password' className='form-control' id="standard-basic" label="" variant="standard" />
            <p className='text-danger mt-1'>{password_massage.show ? password_massage.message : <></>}</p>
          </div>
          <div className='d-flex justify-content-center mt-4'>
            <button onClick={changePassword} className='btn btn-primary col-9'>set new password</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
