
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAuWYLWBVmzyeWKNszoFAYtlyUETu9jvlc",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCHET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_ID_APP,
};
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth};