import React from 'react';
import { Typography, Button, CardContent } from '@mui/material';
import Lottie from 'lottie-react';
import cookingAnimation from './success.json'
import { Link } from 'react-router-dom';

const Homepage = () => {
 

  return (
    <div>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9f9f9',
          padding: '16px',
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Osahan, Your order has been<br />successful
        </Typography>

        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          style={{ marginBottom: '32px' }}
        >
          Check your order status in{' '}
          <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>My Orders</span> about next steps
          information.
        </Typography>

        <div
          style={{
            maxWidth: '900px',
            width: '900px',
            maxHeight: '1000px',
            height: '450px',
            textAlign: 'center',
            padding: '24px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardContent>
            <Lottie
              animationData={cookingAnimation}
              path={cookingAnimation}
              loop
              autoplay
              style={{ height: '200px', marginBottom: '16px' }}
            />
          </CardContent>

          <div>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Preparing your order
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ marginBottom: '24px' }}
            >
              Your order will be prepared and will come soon
            </Typography>
            <Button
              variant="contained"
              fullWidth
              style={{
                background: 'linear-gradient(to right, #e53935, #e35d5b)',
                color: '#fff',
                fontWeight: 'bold',
                padding: '10px',
                borderRadius: '8px',
                textTransform: 'none',
              }}
            >
              <Link to={'/my-orders'} style={{ color: '#fff', textDecoration: 'none' }}>
              Track My Order

              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;