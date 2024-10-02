// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";  // Import Realtime Database
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9zWGL1Zuif6-TdNlGtuVusKOw5nVf5c",
  authDomain: "portfolio-ac8bf.firebaseapp.com",
  databaseURL: "https://portfolio-ac8bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-ac8bf",
  storageBucket: "portfolio-ac8bf.appspot.com",
  messagingSenderId: "236662543364",
  appId: "1:236662543364:web:0b73abcc0d11c31a6d5151",
  measurementId: "G-HEJ6SEQY5Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);  // Initialize the Realtime Database
// Export the database for use in your components
export { database };