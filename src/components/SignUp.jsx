import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import{auth,db} from './firebase'
import { setDoc,doc } from 'firebase/firestore'
const SignUp = ({onClose1}) => {
    const [username,setusername]= useState("")
    const [email,setemail]= useState("")
    const [phone,setphone]= useState("")
    const [password,setpassword]= useState("")

    const handleregister = async(e)=>{
        e.preventDefault()
        try {
            await  createUserWithEmailAndPassword(auth,email,password)
            const user = auth.currentUser
            console.log(user);
            if(user)
            {
                await setDoc(doc(db,"Users",user.uid),{
                    email:user.email,
                    username:username,
                    phno:phone
                })
            }
            console.log("Registration done ");
            
            
        } 
        catch (error) {
           console.log(error.message);
            
        }

    }
  return (
    <div className='flex items-center justify-center mt-6 fixed inset-0 backdrop-blur-sm bg-opacity-30 z-10'>
        <div className='w-96 p-6 m-3 border rounded-md bg-slate-100 border-white shadow-md relative'>
        <i class="fa-regular fa-circle-xmark right-2 absolute text-black top-2 font-bold text-lg hover:text-orange-600 cursor-pointer" onClick={onClose1}></i>
        <form action="" onSubmit={handleregister}>
            <div className='p-3 flex flex-col gap-4'>
            
                <div className='text-center'>
                    <h1 className='text-black font-bold font-poppins text-2xl'>Sign Up Option</h1>
                </div>
            
                <input type="text" placeholder='Enter the username' className='text-black bg-slate-100 p-3 rounded-md' onChange={(e)=>setusername( e.target.value)} required/>
                <input type="text" placeholder='Enter the email' className='text-black bg-slate-100 p-3 rounded-md' onChange={(e)=>setemail( e.target.value)} required/>
                <input type="number" placeholder='Enter the phone number' className='text-black bg-slate-100 p-3 rounded-md' onChange={(e)=>setphone( e.target.value)} required/>
                <input type="password" placeholder='Enter the password' className='text-black bg-slate-100 p-3 rounded-md' onChange={(e)=>setpassword( e.target.value)} required/>
                
                
            </div>
            <div className='text-center'>
                <button className='bg-blue-700 rounded-3xl p-2 m-3 w-28 font-semibold text-white hover:bg-orange-500 hover:text-black cursor-pointer'>Sign Up</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp
