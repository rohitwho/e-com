import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
apiKey: "AIzaSyATPhOlqKTK9haJVTun6o4Rl2K7R-wQeic",
authDomain: import.meta.env.VITE_AUTHDOMAIN,
projectId: import.meta.env.VITE_PROJECTID,
storageBucket: import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
appId: import.meta.env.VITE_APPID,
measurementId: import.meta.env.VITE_MEASURMENTID,
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