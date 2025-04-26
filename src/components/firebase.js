
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuWYLWBVmzyeWKNszoFAYtlyUETu9jvlc",
  authDomain: "app-491f1.firebaseapp.com",
  projectId: "app-491f1",
  storageBucket: "app-491f1.firebasestorage.app",
  messagingSenderId: "680548821644",
  appId: "1:680548821644:web:3b01f74f669c3fc5f769a9",
  measurementId: "G-0R3X2E52N9"
};
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth};