import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey:process.env.VITE_APIKEY,
  authDomain:process.env.VITE_AUTHDOMAIN,
  projectId:process.env.VITE_PROJECTID,
  storageBucket:process.env.VITE_STORAGEBUCKET,
  messagingSenderId:process.env.VITE_MESSAGINGSENDERID,
  appId:process.env.VITE_APPID,
  measurementId:process.env.VITE_MEASURMENTID,
});

// export const auth = app.auth()
export const authentication = getAuth(app);
export default app;



// apiKey: import.meta.env.VITE_APIKEY,
// authDomain: import.meta.env.VITE_AUTHDOMAIN,
// projectId: import.meta.env.VITE_PROJECTID,
// storageBucket: import.meta.env.VITE_STORAGEBUCKET,
// messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
// appId: import.meta.env.VITE_APPID,
// measurementId: import.meta.env.VITE_MEASURMENTID,