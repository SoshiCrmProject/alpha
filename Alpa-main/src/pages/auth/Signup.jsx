import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaAngleDown } from 'react-icons/fa';
import google_logo from '../../assets/google_logo.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center signup_bg">
      <div className="text-center my-5">
        <h1 className="text-2xl text-white">Create an Account</h1>
        <p className="text-white font-light mt-1 text-[0.92rem]">On time. Within budget. Committed to creating exceptional spaces.</p>
      </div>

      <div className="2xl:w-[30%] lg:w-[37%] xl:w-[40%] md:w-[60%] w-[90%] text-sm">
        <form className="space-y-4 bg-white shadow-lg rounded-xl px-8 py-6">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="fname" className="text-sm font-medium">First Name</label>
              <input
                type="text"
                id="fname"
              />
            </div>
            <div>
              <label htmlFor="lname" className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                id="lname"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="workemail@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">Password</label> <br />
            <span className="text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
              />
              <span
                className="absolute right-3 top-3.5 cursor-pointer text-slate-400 text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy"
              className="h-5 w-5 text-indigo-600 rounded-none"
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
              By creating an account, I agree to the <Link to="/" className="text-orange-500 underline">Terms of use</Link> and <Link to="/" className="text-orange-500 underline">Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" className="bg-orange-500 text-white py-2.5 px-6 rounded-full hover:bg-orange-600 transition">
            Sign Up
          </button>

          <p className="text-sm">
            Already have an account? <Link to="/login" className="text-orange-600 underline">Log in</Link>
          </p>

        </form>
        <div className='flex justify-between items-center mt-3 2xl:mb-0 xl:mb-4 lg:mb-5 mb-5 text-white text-sm'>
          <div>
            <button className='flex items-center'>
              English (US) <FaAngleDown className='ml-1' />
            </button>
          </div>
          <ul className='flex'>
            <li className='mx-2.5'><Link>Help</Link></li>
            <li className='mx-2.5'><Link>Privacy</Link></li>
            <li className='mx-2.5'><Link>Terms</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
