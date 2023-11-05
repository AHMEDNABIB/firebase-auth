// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAA-ASq8iegkHdgAJn73hw738CheHmCEiQ",
	authDomain: "simple-firebase-ddc17.firebaseapp.com",
	projectId: "simple-firebase-ddc17",
	storageBucket: "simple-firebase-ddc17.appspot.com",
	messagingSenderId: "393180211227",
	appId: "1:393180211227:web:6a360dbbc80a655aa870be",
	measurementId: "G-12C35G8C4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
