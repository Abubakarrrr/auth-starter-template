import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice.js'

const OAuth = () => {
    const dispatch = useDispatch()
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth, provider)
            console.log(result)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                }),
            })
            const data = await res.json()
            dispatch(signInSuccess(data))
        } catch (error) {
            console.log('could not login with google', error)
        }
    }

    return (
        // default type of button is submit 
        <button onClick={handleGoogleClick}
            type='button' className='bg-slate-500 text-white rounded-lg p-3 hover:opacity-95'>Continue with Google</button>
    )
}

export default OAuth