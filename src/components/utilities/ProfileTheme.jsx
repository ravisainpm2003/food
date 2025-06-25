import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Truck, Phone, Info, Lock } from 'react-feather';
import { UserProvider, UserContext } from './UserContext';
import { Alert, Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import ENDPOINT from './ENDPOINT';
import SecurityHeaders from './SecurityHeaders';
import axios from 'axios';

const ProfileTheme = ({ children,  }) => {
  const [showPayCardModal, setShowPayCardModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const {user,security} = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(selectedFile); // Set the selected file
        console.log('File selected:', selectedFile); // Debugging log
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [profilePic, setProfilePic] = useState(() => {
    const storedProfile = localStorage.getItem('profile');
    return storedProfile ? JSON.parse(storedProfile) : null;
  });
  
  const [csrfToken, setCsrfToken] = useState('');
  const fetchCsrfToken =  () => {
       axios.get(ENDPOINT + 'get-csrf-token.php', SecurityHeaders)
      .then(res => {
        if (res.data.csrf_token) {
          setCsrfToken(res.data.csrf_token);
          // console.log('CSRF Token Fetched:', res.data.csrf_token);
        } else {
          console.error('No CSRF token in response:', res.data);
          // setOpen({ isOpen: true, message: 'Failed to fetch CSRF token', type: 'error' });
        }
      })
      .catch(err => {
        console.error('CSRF token fetch failed:', err);
        // setOpen({ isOpen: true, message: 'Failed to fetch CSRF token', type: 'error' });
      });
  }

  useEffect(() => {
 
    if (security === 'Imposable') {
      fetchCsrfToken();
    }

  }, [profilePic, security]);
  const uploadProfile = async () => {
    if (!file) {
      console.log('File is missing');
      return;
    }

    let API = ''; // <-- Move here
    switch (security) {
      case 'High':
        API = 'file-upload-levels/high-file-upload.php';
        break;
      case 'Medium':
        API = 'file-upload-levels/medium-file-upload.php';
        break;
        case 'Imposable':
        API = 'file-upload-levels/impossible-file-upload.php';
        break;
      case 'Low':
      default:
        API = 'file-upload-levels/low-file-upload.php';
        break;
    }
  
    try {
      setLoading(true); 
  
      const data = new FormData();
      data.append("user_id", user.user_id);
      data.append("id_photo", file); 
  
      data.append("user_token", user.session); 
  
  if(security === 'Imposable') {
      data.append('csrf_token', csrfToken);
    }
  
      const res = await axios.post(ENDPOINT+API, data, SecurityHeaders);
      // console.log(res.data); 
  
      if (res.data.status === "success") {
        const imageUrl = res.data.file_path; 
  


        localStorage.setItem('profile', JSON.stringify(imageUrl)); 
        setProfilePic(imageUrl); 
        setProfile(prevUser => ({...prevUser, profile_pic: imageUrl})); // Update UserContext immediately
  
        setOpen(false);
        setToast({ ...toast, show: true, message: 'Upload Successfully' });
      } else {
        setToast({ ...toast, show: true, message: res.data.message });
      }
    } catch (error) {
      console.error('Upload error:', error);
      setToast({ ...toast, show: true, message: 'Something went wrong' });
    } finally {
      setLoading(false); // Hide loader
    }
  };
    const [userData, setUser] = useState(null);
  
    useEffect(() => {
      const storedUser = localStorage.getItem('name');
    
      if (storedUser) {

        const parsedUser = JSON.parse(storedUser);
  
        setUser(parsedUser);
      }
 
    }, [user?.session])

  return (
    <UserProvider>

<Dialog open={open} onClose={handleClose}>
          <DialogTitle>Change Profile Picture</DialogTitle>
          <DialogContent>
            <input type="file" onChange={handleFileChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel</Button>
            <Button onClick={uploadProfile} color="primary">Upload</Button>
          </DialogActions>
        </Dialog>
     <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={toast.show}
        onClose={() => setToast({ ...toast, show: false })}

        key={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={3000}
        TransitionComponent={'SlideTransition'}
      >
        <Alert
          onClose={() => setToast({ ...toast, show: false })}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}

        >
          {toast.message}
        </Alert>
      </Snackbar>
          <div className="osahan-profile">
  
  <div className="container position-relative">
  <div className=" container osahan-profile row">
    <div className="col-md-4 mb-3">
      <div className="bg-white rounded shadow-sm sticky_sidebar overflow-hidden">
        <Link to="/profile">
          <div className="d-flex align-items-center p-3">
            <div className="left me-3">
             <Avatar sx={{ width: 56, height: 56 }} src={profilePic || 'img/default-user.jpg'}/>
            </div>
            <div className="right">
              <h6 className="mb-1 fw-bold">
                {userData || 'Guest'} <CheckCircle className="text-success" />
              </h6>
              {/* <p className="text-muted m-0 small">{user.email || 'No email'}</p> */}
            </div>
          </div>
        </Link>
        <h6 type='submit' className='text-primary ms-3' onClick={setOpen}>Edit Profile</h6>
        
        <div className="bg-white profile-details">
        <Link to="/my-orders"
            className="d-flex w-100 align-items-center border-bottom p-3"
           
          >
            <div className="left me-3">
              <h6 className="fw-bold mb-1 text-dark">My Orders</h6>
              <p className="small text-muted m-0">Track your orders</p>
            </div>
            <div className="right ms-auto">
              <ChevronRight className="h6 m-0" />
            </div>
          </Link>
          <Link to="/checkout"
            className="d-flex w-100 align-items-center border-bottom p-3"
           
          >
            <div className="left me-3">
              <h6 className="fw-bold mb-1 text-dark">Address</h6>
              <p className="small text-muted m-0">Add or remove a delivery address</p>
            </div>
            <div className="right ms-auto">
              <ChevronRight className="h6 m-0" />
            </div>
          </Link>
          <div
            className="d-flex align-items-center border-bottom p-3"
            onClick={() => setShowInviteModal(true)}
          >
            <div className="left me-3">
              <h6 className="fw-bold mb-1">Refer Friends</h6>
              <p className="small text-primary m-0">Get $10.00 FREE</p>
            </div>
            <div className="right ms-auto">
              <ChevronRight className="h6 m-0" />
            </div>
          </div>
          <Link to="/faq" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
            <div className="left me-3">
              <h6 className="fw-bold m-0 text-dark">
                <Truck className="bg-danger text-white p-2 rounded-circle me-2" /> Delivery Support
              </h6>
            </div>
            <div className="right ms-auto">
              <ChevronRight className="h6 m-0" />
            </div>
          </Link>
          <Link to="/contact" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
            <div className="left me-3">
              <h6 className="fw-bold m-0 text-dark">
                <Phone className="bg-primary text-white p-2 rounded-circle me-2" /> Contact
              </h6>
            </div>
            <div className="right ms-auto">
              <ChevronRight className="h6 m-0" />
            </div>
          </Link>
          <Link to="/terms" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
            <div className="left me-3">
              <h6 className="fw-bold m-0 text-dark">
                <Info className="bg-success text-white p-2 rounded-circle me-2" /> Term of use
              </h6>
            </div>
            <div className="right ms-auto">
              <ChevronRight className="h6 m-0" />
            </div>
          </Link>
          <Link to="/privacy" className="d-flex w-100 align-items-center px-3 py-4">
            <div className="left me-3">
              <h6 className="fw-bold m-0 text-dark">
                <Lock className="bg-warning text-white p-2 rounded-circle me-2" /> Privacy policy
              </h6>
            </div>
            <div className="right ms-auto">
              <ChevronRight className="h6 m-0" />
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div className="col-md-8 mb-3">{children}</div>
  </div>
  </div>
  </div>
    </UserProvider>
  );
};

export default ProfileTheme;