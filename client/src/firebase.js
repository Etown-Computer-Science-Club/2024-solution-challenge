import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
	apiKey: "AIzaSyCMNhcLRPLQVTqAw1folNMLzbQidmd_crM",
	authDomain: "solution-challenge-junk.firebaseapp.com",
	projectId: "solution-challenge-junk",
	storageBucket: "solution-challenge-junk.appspot.com",
	messagingSenderId: "552368459409",
	appId: "1:552368459409:web:df527c7c8f28564c98b930",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	],
	// Other config options...
});
