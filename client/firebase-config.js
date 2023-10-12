import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCq4AOYpHfAUEGwTPLHOeoebko8XJLsn48",
  authDomain: "poweringstems2.firebaseapp.com",
  projectId: "poweringstems2",
  storageBucket: "poweringstems2.appspot.com",
  messagingSenderId: "728613094642",
  appId: "1:728613094642:web:109030b8700b3d8a663c6b",
  measurementId: "G-LYES3HQ67Q",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
