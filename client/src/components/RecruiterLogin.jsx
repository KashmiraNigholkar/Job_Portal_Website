import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const RecruiterLogin = () => {
  const [authMode, setAuthMode] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const { setShowRecruiterLogin } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email, password, image };
    console.log('Form submitted:', {
      ...payload,
      imageName: image?.name || 'No image selected',
    });
    setIsTextDataSubmitted(true);
  };

  const handleForgotPassword = () => {
    alert('Redirecting to forgot password flow...');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-10 rounded-xl text-slate-500 w-[350px]"
      >
       

        <h1 className="text-2xl font-medium text-neutral-700 text-center">
          Recruiter {authMode}
        </h1>
        <p className="text-sm text-center mb-4">
          Welcome back! Please {authMode.toLowerCase()} to continue.
        </p>

        {/* Upload Logo (only after text form submission in Signup mode) */}
        {authMode === 'Signup' && isTextDataSubmitted && (
          <div className="text-center mb-4">
            <label htmlFor="image" className="cursor-pointer inline-block">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Logo"
                  className="mx-auto mb-2 h-20 w-20 object-cover rounded-full border"
                />
              ) : (
                <img
                  src={assets.upload_area}
                  alt="Upload"
                  className="mx-auto mb-2"
                />
              )}
              <input
                type="file"
                id="image"
                hidden
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <p className="text-sm text-gray-600">Upload Company Logo</p>
            {image && (
              <p className="text-xs text-green-600 mt-1">
                Selected: {image.name}
              </p>
            )}
          </div>
        )}

        {/* Company Name Input (Only in Signup) */}
        {authMode === 'Signup' && (
          <div className="flex items-center border px-4 py-2 rounded-full mt-4">
            <img
              src={assets.person_icon}
              alt="Company Icon"
              className="w-5 h-5 mr-2"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full outline-none"
            />
          </div>
        )}

        {/* Email Input */}
        <div className="flex items-center border px-4 py-2 rounded-full mt-4">
          <img
            src={assets.email_icon}
            alt="Email Icon"
            className="w-5 h-5 mr-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center border px-4 py-2 rounded-full mt-4">
          <img
            src={assets.lock_icon}
            alt="Password Icon"
            className="w-5 h-5 mr-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full outline-none"
          />
        </div>

        {/* Forgot Password */}
        {authMode === 'Login' && (
          <div className="text-right">
            <p
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 my-4 cursor-pointer hover:underline"
            >
              Forgot Password?
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded-full hover:bg-blue-700 transition mt-2"
        >
          {authMode === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {/* Toggle Login/Signup */}
        <p className="text-sm text-center text-gray-600 mt-4">
          {authMode === 'Login' ? (
            <>
              Don’t have an account?{' '}
              <span
                onClick={() => {
                  setAuthMode('Signup');
                  setIsTextDataSubmitted(false);
                  setImage(null);
                }}
                className="text-blue-600 cursor-pointer underline"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                onClick={() => {
                  setAuthMode('Login');
                  setIsTextDataSubmitted(false);
                  setImage(null);
                }}
                className="text-blue-600 cursor-pointer underline"
              >
                Login
              </span>
            </>
          )}
        </p>
         {/* ❌ Close Button */}
        <img
          onClick={() => setShowRecruiterLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer w-5 h-5"
          alt="Close"
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;
