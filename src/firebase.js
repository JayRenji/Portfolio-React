import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCCm_0plrtKrHDhwYJSIvuhzc5MuoD1PS8',
  authDomain: 'react-portfolio-dashboar-f446d.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-f446d',
  storageBucket: 'react-portfolio-dashboar-f446d.appspot.com',
  messagingSenderId: '685107750220',
  appId: '1:685107750220:web:c4653c51b546dc74975be9',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
