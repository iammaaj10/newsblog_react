import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ onClose1 }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Show a toast message immediately after clicking the button
    toast.info('Processing your request...', { position: 'top-center' });
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          username: username,
          phno: phone,
        });
        toast.dismiss();  // Dismiss the previous toast
        toast.success('User Registered Successfully', { position: 'top-center' });
      }
    } catch (error) {
      console.log(error.message);
      toast.dismiss();  // Dismiss the previous toast
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  return (
    <div className='flex items-center justify-center mt-6 fixed inset-0 backdrop-blur-sm bg-opacity-30 z-10'>
      <div className='w-96 p-6 m-3 border rounded-md bg-slate-100 border-white shadow-md relative'>
        <i
          className='fa-regular fa-circle-xmark right-2 absolute text-black top-2 font-bold text-lg hover:text-orange-600 cursor-pointer'
          onClick={onClose1}
        ></i>
        <form action='' onSubmit={handleRegister}>
          <div className='p-3 flex flex-col gap-4'>
            <div className='text-center'>
              <h1 className='text-black font-bold font-poppins text-2xl'>
                Sign Up Option
              </h1>
            </div>
            <input
              type='text'
              placeholder='Enter the username'
              className='text-black bg-slate-100 p-3 rounded-md'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type='text'
              placeholder='Enter the email'
              className='text-black bg-slate-100 p-3 rounded-md'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='number'
              placeholder='Enter the phone number'
              className='text-black bg-slate-100 p-3 rounded-md'
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Enter the password'
              className='text-black bg-slate-100 p-3 rounded-md'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='text-center'>
            <button className='bg-blue-700 rounded-3xl p-2 m-3 w-28 font-semibold text-white hover:bg-orange-500 hover:text-black cursor-pointer'>
              Sign Up
            </button>
          </div>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default SignUp;
