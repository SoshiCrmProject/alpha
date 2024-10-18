import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaAngleDown } from 'react-icons/fa';
import google_logo from '../../assets/google_logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center signup_bg">
        <div className="text-center my-5">
          <h1 className="text-2xl text-white">Login to your Account</h1>
          <p className="text-white font-light mt-1 text-[0.92rem]">On time. Within budget. Committed to creating exceptional spaces.</p>
        </div>

        <div className="2xl:w-[25%] lg:w-[35%] xl:w-[30%] md:w-[50%] w-[90%] text-sm">
          <form className="space-y-4 bg-white shadow-lg rounded-xl px-8 py-6 xl:min-h-96">
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="workemail@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">Password</label>
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

            <div className="flex justify-between items-center mb-3">
              <div className='flex items-center'>
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-indigo-600 rounded-none"
                />
                <label htmlFor="remember" className="ml-2 text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <Link to="/forgot-password" className="text-sm underline text-orange-400">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button type="submit" className="bg-orange-500 text-white py-2.5 px-6 rounded-full hover:bg-orange-600 transition">
              Login with Email
            </button>

            <p className="text-sm">
              Don't have an account? <Link to="/signup" className="text-orange-600 underline">Sign up</Link>
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
    </div>
  )
}

export default Login