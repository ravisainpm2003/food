import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider, UserContext } from './components/utilities/UserContext';
import './assests/css/style-1.css';
import './assests/vendor/slick/slick/slick.css';
import './assests/vendor/slick/slick/slick-theme.css';
import './assests/vendor/icons/feather.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserProvider>
    <App />
  </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
