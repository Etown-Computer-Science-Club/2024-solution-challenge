import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

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
export const ui = new firebaseui.auth.AuthUI(auth);

// need to work on this: https://github.com/firebase/firebaseui-web/issues/1040

ui.start('#firebaseui-auth-container', {
	signInOptions: [
		EmailAuthProvider.PROVIDER_ID
	],
	signInSuccessUrl: '/',
});
