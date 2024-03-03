import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../url';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');

  // Function to send OTP
  const sendOTP = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: `${BASE_URL}/user/getotpforforgotpass`,
      data: email,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    })
      .then((response) => {
        toast.success('Please check your email for the OTP code');
        console.log('Email sent successfully', response.data);
      })
      .catch((error) => {
        toast.error('Please enter a valid email ID');
        console.log('Something went wrong', error.response);
      });
  };

  // Function to confirm OTP
  const confirmOTP = (e) => {
    e.preventDefault();
    const verifyotpobj = {
      otp,
      email,
    };

    axios({
      method: 'post',
      url: `${BASE_URL}/user/verifyotpforforgot`,
      data: verifyotpobj,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    })
      .then(() => {
        toast.success('OTP confirmed');
        console.log('OTP confirmed successfully');
      })
      .catch((error) => {
        toast.error('Please re-enter OTP');
        console.log('Something went wrong', error.response);
      });
  };

  // Function to save new password
  const saveForgot = (e) => {
    e.preventDefault();
    const saveForgotObject = {
      email,
      newPassword,
    };

    axios({
      method: 'post',
      url: `${BASE_URL}/user/storenewpass`,
      data: saveForgotObject,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      },
    })
      .then(() => {
        toast.success('Password changed successfully');
        console.log('Password changed successfully');
      })
      .catch((error) => {
        toast.error("Old Password doesn't match");
        console.log('Something went wrong', error.response);
      });
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <div className="card-body" style={{borderColor:'yellow'}}>
          <h4 className="card-title" style={{color:'orange'}}>Forgot Password</h4>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                id="email"
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          
              <button 
              type="button"
              className="btn btn-info btn-block btn-md"
              onClick={(e) => sendOTP(e)}
            >
              Send OTP
            </button>
         

            <div className="mb-3">
              <label htmlFor="otp">OTP:</label>
              <input
                id="otp"
                type="text"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-i btn-block btn-md"
              onClick={(e) => confirmOTP(e)}
            >
              Verify OTP
            </button>

            <div className="form-group">
              <label>New Password:</label>
              <input
                className="form-control"
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={(e) => saveForgot(e)}
            >
              Change Password
            </button>
            <ToastContainer
              position="top-right"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
