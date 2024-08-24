import React from 'react'
import  { useState,useEffect } from 'react'
import {auth,db} from './firebase'
import {doc,getDoc} from "firebase/firestore"
import {toast} from 'react-toastify'

const PDetails = () => {
    const [userDetails, setuserDetails]=useState(null)
  return (
    <div>
        {userDetails?(
            <>
             <h3>Welcome {userDetails.username}</h3>
             <button className='bg-blue-600 px-4 py-3 m-2 rounded-xl font-semibold'>
                Logout
             </button>
            </>
        ):(
            <p className='text-center justify-center text-2xl font-semibold'>Loading...</p>
        )}
    </div>
  )
}

export default PDetails