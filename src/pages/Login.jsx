import axios from 'axios';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SecurityHeaders from '../components/utilities/SecurityHeaders';
import ENDPOINT from '../components/utilities/ENDPOINT';
import { UserContext } from '../components/utilities/UserContext';
import { v4 as uuidv4 } from 'uuid';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: '',
    password: ''
  });
  const [open, setOpen] = useState({
    isOpen: false,
    message: '',
    type: ''
  });
  const [csrfToken, setCsrfToken] = useState('');
  const [showFlag, setShowFlag] = useState(false);
  const [copied, setCopied] = useState(false); // Add this state
  const flagRef = useRef(null);

  useEffect(() => {
    axios.get(ENDPOINT + 'get-csrf-token.php', SecurityHeaders)
      .then(res => {
        if (res.data.csrf_token) {
          setCsrfToken(res.data.csrf_token);
          console.log('CSRF Token Fetched:', res.data.csrf_token);
        } else {
          console.error('No CSRF token in response:', res.data);
          setOpen({ isOpen: true, message: 'Failed to fetch CSRF token', type: 'error' });
        }
      })
      .catch(err => {
        console.error('CSRF token fetch failed:', err);
        setOpen({ isOpen: true, message: 'Failed to fetch CSRF token', type: 'error' });
      });
  }, []);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setCredential({
      ...credential,
      [name]: value
    });
  };

  const security = localStorage.getItem('security')
  // console.log('Security Level:', security);
  let API = '';

  const login = async (e) => {
    switch (security) {
      case 'High':
        API = 'login-levels/high-login.php';
        break;
      case 'Medium':
        API = 'login-levels/medium-login.php';
        break;
        case 'Imposable':
        API = 'login-levels/imposable-login.php';
        break;
      case 'Low':
      default:
        API = 'login-levels/low-login.php';
        break;
    }
    e.preventDefault();
    if (!csrfToken) {
      setOpen({ isOpen: true, message: 'CSRF token not available', type: 'error' });
      return;
    }
    try {
      // Generate or retrieve device ID
      const deviceId = localStorage.getItem('device_id') || uuidv4();
      localStorage.setItem('device_id', deviceId);

      const data = new FormData();
      data.append('email', credential.email);
      data.append('password', credential.password);
    if(security === 'High'||  security === 'Imposable') {
      data.append('device_id', deviceId);
    }
    if(security === 'Imposable') {
      data.append('csrf_token', csrfToken);
    }

      console.log('Sending Login Request:', {
        email: credential.email,
        csrf_token: csrfToken
      });
      const res = await axios.post(ENDPOINT + API, data, SecurityHeaders);
      console.log('Login Response:', res.data);

      if (res.data.status === 'success') {
        setOpen({ isOpen: true, message: 'Login Successful', type: 'success' });
        localStorage.setItem('client1', JSON.stringify(res.data.data));
        localStorage.setItem('profile', JSON.stringify(res.data.data.profile_pic));
        setUser(res.data.data);
        if (res.data.new_csrf_token) {
          setCsrfToken(res.data.new_csrf_token);
          console.log('New CSRF Token:', res.data.new_csrf_token);
        }
        setShowFlag(true);
        // setTimeout(() => {
        //   setShowFlag(false);
        //   navigate('/');
        // }, 6000);
      } else {
        setOpen({ isOpen: true, message: res.data.msg, type: 'error' });
      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err);
      setOpen({ isOpen: true, message: err.response?.data?.msg || 'Login failed', type: 'error' });
    }
  };

  const [showPassword, setShowPassword] = useState('password');
  const handlePassword = (params) => {
    setShowPassword(params);
  };

  return (
    <div>
      {/* Animated Flag Modal */}
      {showFlag && (
        <div
          ref={flagRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 1s'
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 60px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              animation: 'popIn 0.7s cubic-bezier(.68,-0.55,.27,1.55)'
            }}
          >
            <h2 style={{ color: '#28a745', fontWeight: 700, marginBottom: 20, fontSize: 32, letterSpacing: 1 }}>
              🎉 Congrats! 🎉
            </h2>
            <p style={{ fontSize: 20, marginBottom: 10 }}>
              You got your first flag!
            </p>
            <div
              style={{
                fontSize: 24,
                fontFamily: 'monospace',
                background: '#f8f9fa',
                borderRadius: 8,
                padding: '12px 24px',
                margin: '20px 0',
                color: '#d63384',
                letterSpacing: 2,
                animation: 'flagGlow 1.5s infinite alternate',
                display: 'inline-block'
              }}
            >
              123123-35723-3456-345
            </div>
            <br />
            <button
              onClick={() => {
                navigator.clipboard.writeText('123123-35723-3456-345');
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              style={{
                marginTop: 10,
                padding: '8px 18px',
                borderRadius: 6,
                border: 'none',
                background: '#28a745',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: 16,
                transition: 'background 0.2s'
              }}
            >
              {copied ? 'Copied!' : 'Copy Flag'}
            </button>
            <p style={{ color: '#888', fontSize: 16, marginTop: 18 }}>
              Keep going to unlock more!
            </p>
            <Link
              to="/"
              style={{
                display: 'inline-block',
                marginTop: 20,
               
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'background 0.2s',
                
              }}
              className='text-primary'
            >
              Go to Home
            </Link>
          </div>
          {/* Keyframes for animation */}
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes popIn {
                0% { transform: scale(0.7); opacity: 0; }
                80% { transform: scale(1.1); opacity: 1; }
                100% { transform: scale(1); }
              }
              @keyframes flagGlow {
                from { box-shadow: 0 0 10px #d63384; }
                to { box-shadow: 0 0 30px #d63384, 0 0 10px #fff inset; }
              }
            `}
          </style>
        </div>
      )}
      <div className="login-page vh-100">
        <video loop autoPlay muted id="vid" aria-hidden="true">
          <source src="/img/bg.mp4" type="video/mp4" />
          <source src="/img/bg.mp4" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="px-5 col-md-6 ms-auto">
            <div className="px-5 col-10 mx-auto">
              <h2 className="text-dark my-0">Welcome Back</h2>
              <p className="text-50">Sign in to continue</p>
              {open.isOpen && (
                <div className={`alert alert-${open.type}`}>
                  {open.message}
                </div>
              )}
              <form className="mt-5 mb-4" onSubmit={login}>
                <div className="form-group">
                  <label htmlFor="email" className="text-dark pb-1">
                    Email
                  </label>
                  <input
                    onChange={handleForm}
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="form-control py-1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-dark pb-1">
                    Password
                  </label>
                  <input
                    onChange={handleForm}
                    name="password"
                    type={showPassword}
                    id="password"
                    placeholder="Enter Password"
                    className="form-control py-1"
                    aria-describedby="passwordHelp"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  SIGN IN
                </button>
              </form>
              <Link to="/forgot-password" className="text-decoration-none">
                <p className="text-center">Forgot your password?</p>
              </Link>
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/signup">
                  <p className="text-center m-0">Don't have an account? Sign up</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;