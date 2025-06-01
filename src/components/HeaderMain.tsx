// "use client";

// import React, { useState } from 'react'
// import { BiUser } from 'react-icons/bi'
// import { FiHeart } from 'react-icons/fi'
// import { HiOutlineShoppingBag } from 'react-icons/hi'
// import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'

// const HeaderMain = () => {
//   const [showLoginModal, setShowLoginModal] = useState(false)
//   const [showSignupModal, setShowSignupModal] = useState(false)
//   const [showAccountPage, setShowAccountPage] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(true) // Simulating logged in user
  
//   // Mock user data for demonstration
//   const [userData, setUserData] = useState({
//     fullName: 'John Doe',
//     email: 'john.doe@email.com',
//     phone: '+1 (555) 123-4567',
//     joinDate: 'January 15, 2024',
//     orders: 12,
//     wishlistItems: 5
//   })

//   const handleAccountClick = () => {
//     if (isLoggedIn) {
//       setShowAccountPage(true)
//     } else {
//       setShowLoginModal(true)
//     }
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setShowAccountPage(false)
//   }

//   return (
//     <div className='border-b border-pink-200 py-6'>
//       <div className='container sm:flex justify-between items-center'>
//         <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-pink-800'>Logo</div>
        
//         {/* Login and Signup Buttons - Show only if not logged in */}
//         {!isLoggedIn && (
//           <div className='flex gap-3 justify-center sm:justify-end mb-4 sm:mb-0'>
//             <button 
//               onClick={() => setShowLoginModal(true)}
//               className='bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200'
//             >
//               Login
//             </button>
//             <button 
//               onClick={() => setShowSignupModal(true)}
//               className='bg-pink-100 hover:bg-pink-200 text-pink-700 border border-pink-300 px-6 py-2 rounded-lg font-medium transition-colors duration-200'
//             >
//               Sign Up
//             </button>
//           </div>
//         )}

//         {/* User greeting - Show only if logged in */}
//         {isLoggedIn && (
//           <div className='hidden sm:block text-center mb-4 sm:mb-0'>
//             <span className='text-pink-700 font-medium'>Welcome back, {userData.fullName.split(' ')[0]}!</span>
//           </div>
//         )}

//         <div className='hidden lg:flex gap-4 text-pink-500 text-[30px]'>
//           <BiUser 
//             className='hover:text-pink-600 cursor-pointer transition-colors duration-200'
//             onClick={handleAccountClick}
//           />
//           <div className='relative'>
//             <FiHeart className='hover:text-pink-600 cursor-pointer transition-colors duration-200'/>
//             <div className='bg-pink-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
//               {isLoggedIn ? userData.wishlistItems : 0}
//             </div>
//           </div>
//           <div className='relative'>
//             <HiOutlineShoppingBag className='hover:text-pink-600 cursor-pointer transition-colors duration-200'/>
//             <div className='bg-pink-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
//               0
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Account Page Modal */}
//       {showAccountPage && (
//         <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
//           <div className='bg-white rounded-lg p-8 w-full max-w-2xl mx-4 max-h-[calc(100vh-100px)] overflow-y-auto'>
//             <div className='flex justify-between items-center mb-6'>
//               <h2 className='text-3xl font-bold text-pink-800'>My Account</h2>
//               <button 
//                 onClick={() => setShowAccountPage(false)}
//                 className='text-gray-500 hover:text-gray-700'
//               >
//                 <AiOutlineClose size={24} />
//               </button>
//             </div>

//             {/* User Profile Card */}
//             <div className='bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-6 mb-6'>
//               <div className='flex items-center justify-between mb-4'>
//                 <div className='flex items-center space-x-4'>
//                   <div className='w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold'>
//                     {userData.fullName.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   <div>
//                     <h3 className='text-xl font-semibold text-gray-800'>{userData.fullName}</h3>
//                     <p className='text-gray-600'>Member since {userData.joinDate}</p>
//                   </div>
//                 </div>
//                 <button className='flex items-center space-x-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg border border-pink-200 text-pink-600 transition-colors duration-200'>
//                   <AiOutlineEdit size={16} />
//                   <span>Edit</span>
//                 </button>
//               </div>
//             </div>

//             {/* Account Details */}
//             <div className='grid md:grid-cols-2 gap-6 mb-6'>
//               {/* Personal Information */}
//               <div className='bg-white border border-gray-200 rounded-lg p-6'>
//                 <h4 className='text-lg font-semibold text-gray-800 mb-4'>Personal Information</h4>
//                 <div className='space-y-3'>
//                   <div>
//                     <label className='block text-sm font-medium text-gray-600'>Full Name</label>
//                     <p className='text-gray-800 font-medium'>{userData.fullName}</p>
//                   </div>
//                   <div>
//                     <label className='block text-sm font-medium text-gray-600'>Email Address</label>
//                     <p className='text-gray-800 font-medium'>{userData.email}</p>
//                   </div>
//                   <div>
//                     <label className='block text-sm font-medium text-gray-600'>Phone Number</label>
//                     <p className='text-gray-800 font-medium'>{userData.phone}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Account Statistics */}
//               <div className='bg-white border border-gray-200 rounded-lg p-6'>
//                 <h4 className='text-lg font-semibold text-gray-800 mb-4'>Account Overview</h4>
//                 <div className='space-y-4'>
//                   <div className='flex justify-between items-center'>
//                     <span className='text-gray-600'>Total Orders</span>
//                     <span className='bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium'>
//                       {userData.orders}
//                     </span>
//                   </div>
//                   <div className='flex justify-between items-center'>
//                     <span className='text-gray-600'>Wishlist Items</span>
//                     <span className='bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium'>
//                       {userData.wishlistItems}
//                     </span>
//                   </div>
//                   <div className='flex justify-between items-center'>
//                     <span className='text-gray-600'>Account Status</span>
//                     <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>
//                       Active
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className='bg-gray-50 rounded-lg p-6 mb-6'>
//               <h4 className='text-lg font-semibold text-gray-800 mb-4'>Quick Actions</h4>
//               <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
//                 <button className='bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors duration-200'>
//                   <div className='text-pink-500 text-xl mb-2'>📦</div>
//                   <span className='text-sm font-medium text-gray-700'>Orders</span>
//                 </button>
//                 <button className='bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors duration-200'>
//                   <div className='text-pink-500 text-xl mb-2'>❤️</div>
//                   <span className='text-sm font-medium text-gray-700'>Wishlist</span>
//                 </button>
//                 <button className='bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors duration-200'>
//                   <div className='text-pink-500 text-xl mb-2'>📍</div>
//                   <span className='text-sm font-medium text-gray-700'>Addresses</span>
//                 </button>
//                 <button className='bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors duration-200'>
//                   <div className='text-pink-500 text-xl mb-2'>⚙️</div>
//                   <span className='text-sm font-medium text-gray-700'>Settings</span>
//                 </button>
//               </div>
//             </div>

//             {/* Logout Button */}
//             <div className='flex justify-center'>
//               <button 
//                 onClick={handleLogout}
//                 className='bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200'
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Login Modal */}
//       {showLoginModal && (
//         <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
//           <div className='bg-white rounded-lg p-8 w-96 max-w-md mx-4'>
//             <div className='flex justify-between items-center mb-6'>
//               <h2 className='text-2xl font-bold text-pink-800'>Login</h2>
//               <button 
//                 onClick={() => setShowLoginModal(false)}
//                 className='text-gray-500 hover:text-gray-700'
//               >
//                 <AiOutlineClose size={24} />
//               </button>
//             </div>
//             <div className='space-y-4'>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Phone Number
//                 </label>
//                 <input 
//                   type='tel'
//                   placeholder='Enter your phone number'
//                   className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
//                 />
//               </div>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Password
//                 </label>
//                 <input 
//                   type='password'
//                   placeholder='Enter your password'
//                   className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
//                 />
//               </div>
//               <button 
//                 type='button'
//                 onClick={() => {
//                   setIsLoggedIn(true)
//                   setShowLoginModal(false)
//                 }}
//                 className='w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition-colors duration-200'
//               >
//                 Login
//               </button>
//             </div>
//             <div className='mt-6 text-center'>
//               <p className='text-gray-600'>
//                 Don't have an account?{' '}
//                 <button 
//                   onClick={() => {
//                     setShowLoginModal(false)
//                     setShowSignupModal(true)
//                   }}
//                   className='text-pink-500 hover:text-pink-600 font-medium underline'
//                 >
//                   Sign up here
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Signup Modal */}
//       {showSignupModal && (
//         <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
//           <div className='bg-white rounded-lg p-8 w-96 max-w-md mx-4 max-h-[calc(100vh-100px)] overflow-y-auto'>
//             <div className='flex justify-between items-center mb-6'>
//               <h2 className='text-2xl font-bold text-pink-800'>Sign Up</h2>
//               <button 
//                 onClick={() => setShowSignupModal(false)}
//                 className='text-gray-500 hover:text-gray-700'
//               >
//                 <AiOutlineClose size={24} />
//               </button>
//             </div>
//             <div className='space-y-4'>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Full Name
//                 </label>
//                 <input 
//                   type='text'
//                   placeholder='Enter your full name'
//                   className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
//                 />
//               </div>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Email
//                 </label>
//                 <input 
//                   type='email'
//                   placeholder='Enter your email'
//                   className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
//                 />
//               </div>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Phone Number
//                 </label>
//                 <input 
//                   type='tel'
//                   placeholder='Enter your phone number'
//                   className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
//                 />
//               </div>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Password
//                 </label>
//                 <input 
//                   type='password'
//                   placeholder='Create a password'
//                   className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
//                 />
//               </div>
//               <div>
//                 <label className='block text-sm font-medium text-gray-700 mb-2'>
//                   Confirm Password
//                 </label>
//                 <input 
//                   type='password'
//                   placeholder='Confirm your password'
//                   className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-500 focus:border-transparent'
//                 />
//               </div>
//               <button 
//                 type='button'
//                 onClick={() => {
//                   setIsLoggedIn(true)
//                   setShowSignupModal(false)
//                 }}
//                 className='w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition-colors duration-200'
//               >
//                 Sign Up
//               </button>
//             </div>
//             <div className='mt-6 text-center'>
//               <p className='text-gray-600'>
//                 Already have an account?{' '}
//                 <button 
//                   onClick={() => {
//                     setShowSignupModal(false)
//                     setShowLoginModal(true)
//                   }}
//                   className='text-pink-500 hover:text-pink-600 font-medium underline'
//                 >
//                   Login here
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default HeaderMain

"use client";

import React, { useState, useEffect } from 'react'
import { User, Heart, ShoppingBag, X, Edit } from 'lucide-react'

// Define types for your data structures
type UserData = {
  fullName: string;
  email: string;
  phone: string;
  joinDate: string;
  orders: number;
  wishlistItems: number;
}

type LoginForm = {
  phone: string;
  password: string;
}

type SignupForm = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const HeaderMain = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [showAccountPage, setShowAccountPage] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  // Form states with proper typing
  const [loginForm, setLoginForm] = useState<LoginForm>({
    phone: '',
    password: ''
  })
  
  const [signupForm, setSignupForm] = useState<SignupForm>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  
  // User data with proper typing
  const [userData, setUserData] = useState<UserData>({
    fullName: '',
    email: '',
    phone: '',
    joinDate: '',
    orders: 0,
    wishlistItems: 0
  })

  // Use environment variable or fallback to localhost:5000
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api'

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetchUserProfile(token)
    }
  }, [])

  // Add type annotation for token parameter
  const fetchUserProfile = async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const data = await response.json()
        setUserData({
          fullName: data.user.fullName || data.user.name,
          email: data.user.email,
          phone: data.user.phone,
          joinDate: new Date(data.user.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          orders: data.user.totalOrders || 0,
          wishlistItems: data.user.wishlistCount || 0
        })
        setIsLoggedIn(true)
      } else {
        localStorage.removeItem('token')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching user profile:', error.message)
      }
      localStorage.removeItem('token')
    }
  }

  // Add type annotation for event parameter
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!loginForm.phone || !loginForm.password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: loginForm.phone,
          password: loginForm.password
        })
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('token', data.token)
        setUserData({
          fullName: data.user.fullName || data.user.name,
          email: data.user.email,
          phone: data.user.phone,
          joinDate: new Date(data.user.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          orders: data.user.totalOrders || 0,
          wishlistItems: data.user.wishlistCount || 0
        })
        setIsLoggedIn(true)
        setShowLoginModal(false)
        setLoginForm({ phone: '', password: '' })
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
          setError(`Cannot connect to server. Please check if the backend is running on ${API_BASE_URL}`)
        } else {
          setError('Network error. Please try again.')
        }
      }
    } finally {
      setLoading(false)
    }
  }

  // Add type annotation for event parameter
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!signupForm.fullName || !signupForm.email || !signupForm.phone || !signupForm.password || !signupForm.confirmPassword) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (signupForm.password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: signupForm.fullName,
          email: signupForm.email,
          phone: signupForm.phone,
          password: signupForm.password
        })
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('token', data.token)
        setUserData({
          fullName: data.user.fullName || data.user.name,
          email: data.user.email,
          phone: data.user.phone,
          joinDate: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          orders: 0,
          wishlistItems: 0
        })
        setIsLoggedIn(true)
        setShowSignupModal(false)
        setSignupForm({ fullName: '', email: '', phone: '', password: '', confirmPassword: '' })
      } else {
        setError(data.message || 'Registration failed')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
          setError(`Cannot connect to server. Please check if the backend is running on ${API_BASE_URL}`)
        } else {
          setError('Network error. Please try again.')
        }
      }
    } finally {
      setLoading(false)
    }
  }

  const handleAccountClick = () => {
    if (isLoggedIn) {
      setShowAccountPage(true)
    } else {
      setShowLoginModal(true)
    }
  }

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Logout error:', error.message)
      }
    } finally {
      localStorage.removeItem('token')
      setIsLoggedIn(false)
      setShowAccountPage(false)
      setUserData({
        fullName: '',
        email: '',
        phone: '',
        joinDate: '',
        orders: 0,
        wishlistItems: 0
      })
    }
  }

//   const testConnection = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL.replace('/api', '')}/health`)
//       if (response.ok) {
//         const data = await response.json()
//         console.log('Backend is reachable:', data)
//         alert('Backend connection successful!')
//       } else {
//         alert('Backend returned error: ' + response.status)
//       }
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         alert('Cannot connect to backend: ' + error.message)
//       }
//     }
//   }

const testConnection = async () => {
  const endpoints = [
    `${API_BASE_URL.replace('/api', '')}/health`,
    `${API_BASE_URL}/auth/health`,
    'http://localhost:3000/health',
    'http://127.0.0.1:3000/health'
  ];
  
  for (const url of endpoints) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(`Success connecting to ${url}:`, data);
        alert(`Backend connection successful!\nEndpoint: ${url}`);
        return;
      }
    } catch (error) {
      console.error(`Failed to connect to ${url}:`, error);
    }
  }
  alert('Could not connect to any backend endpoints');
};

  return (
    <div className='border-b border-pink-200 py-6'>
      <div className='container sm:flex justify-between items-center max-w-6xl mx-auto px-4'>
        <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-pink-800'>Logo</div>
        
        {/* Debug Connection Button */}
        <button 
          onClick={testConnection}
          className='mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm'
        >
          🧪 Test Backend Connection
        </button>
        
        {/* Login and Signup Buttons - Show only if not logged in */}
        {!isLoggedIn && (
          <div className='flex gap-3 justify-center sm:justify-end mb-4 sm:mb-0'>
            <button 
              onClick={() => setShowLoginModal(true)}
              className='bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200'
            >
              Login
            </button>
            <button 
              onClick={() => setShowSignupModal(true)}
              className='bg-pink-100 hover:bg-pink-200 text-pink-700 border border-pink-300 px-6 py-2 rounded-lg font-medium transition-colors duration-200'
            >
              Sign Up
            </button>
          </div>
        )}

        {/* User greeting - Show only if logged in */}
        {isLoggedIn && (
          <div className='hidden sm:block text-center mb-4 sm:mb-0'>
            <span className='text-pink-700 font-medium'>Welcome back, {userData.fullName.split(' ')[0]}!</span>
          </div>
        )}

        <div className='hidden lg:flex gap-4 text-pink-500 text-[30px]'>
          <User 
            className='hover:text-pink-600 cursor-pointer transition-colors duration-200'
            onClick={handleAccountClick}
          />
          <div className='relative'>
            <Heart className='hover:text-pink-600 cursor-pointer transition-colors duration-200'/>
            <div className='bg-pink-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              {isLoggedIn ? userData.wishlistItems : 0}
            </div>
          </div>
          <div className='relative'>
            <ShoppingBag className='hover:text-pink-600 cursor-pointer transition-colors duration-200'/>
            <div className='bg-pink-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your modals remain the same */}
      {/* Account Page Modal */}
      {showAccountPage && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-8 w-full max-w-2xl mx-4 max-h-[calc(100vh-100px)] overflow-y-auto'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-3xl font-bold text-pink-800'>My Account</h2>
              <button 
                onClick={() => setShowAccountPage(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                <X size={24} />
              </button>
            </div>

            {/* User Profile Card */}
            <div className='bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-6 mb-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-4'>
                  <div className='w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold'>
                    {userData.fullName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-800'>{userData.fullName}</h3>
                    <p className='text-gray-600'>Member since {userData.joinDate}</p>
                  </div>
                </div>
                <button className='flex items-center space-x-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg border border-pink-200 text-pink-600 transition-colors duration-200'>
                  <Edit size={16} />
                  <span>Edit</span>
                </button>
              </div>
            </div>

            {/* Account Details */}
            <div className='grid md:grid-cols-2 gap-6 mb-6'>
              {/* Personal Information */}
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='text-lg font-semibold text-gray-800 mb-4'>Personal Information</h4>
                <div className='space-y-3'>
                  <div>
                    <label className='block text-sm font-medium text-gray-600'>Full Name</label>
                    <p className='text-gray-800 font-medium'>{userData.fullName}</p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-600'>Email Address</label>
                    <p className='text-gray-800 font-medium'>{userData.email}</p>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-600'>Phone Number</label>
                    <p className='text-gray-800 font-medium'>{userData.phone}</p>
                  </div>
                </div>
              </div>

              {/* Account Statistics */}
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='text-lg font-semibold text-gray-800 mb-4'>Account Overview</h4>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Total Orders</span>
                    <span className='bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium'>
                      {userData.orders}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Wishlist Items</span>
                    <span className='bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium'>
                      {userData.wishlistItems}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Account Status</span>
                    <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='bg-gray-50 rounded-lg p-6 mb-6'>
              <h4 className='text-lg font-semibold text-gray-800 mb-4'>Quick Actions</h4>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                <button className='bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors duration-200'>
                  <div className='text-pink-500 text-xl mb-2'>📦</div>
                  <span className='text-sm font-medium text-gray-700'>Orders</span>
                </button>
                <button className='bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors duration-200'>
                  <div className='text-pink-500 text-xl mb-2'>❤️</div>
                  <span className='text-sm font-medium text-gray-700'>Wishlist</span>
                </button>
                <button className='bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors duration-200'>
                  <div className='text-pink-500 text-xl mb-2'>📍</div>
                  <span className='text-sm font-medium text-gray-700'>Addresses</span>
                </button>
                <button className='bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-4 text-center transition-colors duration-200'>
                  <div className='text-pink-500 text-xl mb-2'>⚙️</div>
                  <span className='text-sm font-medium text-gray-700'>Settings</span>
                </button>
              </div>
            </div>

            {/* Logout Button */}
            <div className='flex justify-center'>
              <button 
                onClick={handleLogout}
                className='bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-8 w-96 max-w-md mx-4'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-pink-800'>Login</h2>
              <button 
                onClick={() => setShowLoginModal(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                <X size={24} />
              </button>
            </div>
            <div className='space-y-4'>
              {error && (
                <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm'>
                  {error}
                </div>
              )}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone Number
                </label>
                <input 
                  type='tel'
                  value={loginForm.phone}
                  onChange={(e) => setLoginForm({...loginForm, phone: e.target.value})}
                  placeholder='Enter your phone number'
                  className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Password
                </label>
                <input 
                  type='password'
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  placeholder='Enter your password'
                  className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                />
              </div>
              <button 
                type='button'
                onClick={handleLogin}
                disabled={loading}
                className='w-full bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white py-3 rounded-lg font-medium transition-colors duration-200'
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
            <div className='mt-6 text-center'>
              <p className='text-gray-600'>
                Don't have an account?{' '}
                <button 
                  onClick={() => {
                    setShowLoginModal(false)
                    setShowSignupModal(true)
                  }}
                  className='text-pink-500 hover:text-pink-600 font-medium underline'
                >
                  Sign up here
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-8 w-96 max-w-md mx-4 max-h-[calc(100vh-100px)] overflow-y-auto'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-pink-800'>Sign Up</h2>
              <button 
                onClick={() => setShowSignupModal(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                <X size={24} />
              </button>
            </div>
            <div className='space-y-4'>
              {error && (
                <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm'>
                  {error}
                </div>
              )}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Full Name
                </label>
                <input 
                  type='text'
                  value={signupForm.fullName}
                  onChange={(e) => setSignupForm({...signupForm, fullName: e.target.value})}
                  placeholder='Enter your full name'
                  className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Email
                </label>
                <input 
                  type='email'
                  value={signupForm.email}
                  onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                  placeholder='Enter your email'
                  className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone Number
                </label>
                <input 
                  type='tel'
                  value={signupForm.phone}
                  onChange={(e) => setSignupForm({...signupForm, phone: e.target.value})}
                  placeholder='Enter your phone number'
                  className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Password
                </label>
                <input 
                  type='password'
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                  placeholder='Create a password'
                  className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Confirm Password
                </label>
                <input 
                  type='password'
                  value={signupForm.confirmPassword}
                  onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                  placeholder='Confirm your password'
                  className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                />
              </div>
              <button 
                type='button'
                onClick={handleSignup}
                disabled={loading}
                className='w-full bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white py-3 rounded-lg font-medium transition-colors duration-200'
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </div>
            <div className='mt-6 text-center'>
              <p className='text-gray-600'>
                Already have an account?{' '}
                <button 
                  onClick={() => {
                    setShowSignupModal(false)
                    setShowLoginModal(true)
                  }}
                  className='text-pink-500 hover:text-pink-600 font-medium underline'
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderMain