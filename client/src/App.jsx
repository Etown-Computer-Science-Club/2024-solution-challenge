import { Button } from "antd";
import "./App.css";
import Home from "./Home";
import { FirebaseContext } from "./firebase_context";
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: "AIzaSyCMNhcLRPLQVTqAw1folNMLzbQidmd_crM",
	authDomain: "solution-challenge-junk.firebaseapp.com",
	projectId: "solution-challenge-junk",
	storageBucket: "solution-challenge-junk.appspot.com",
	messagingSenderId: "552368459409",
	appId: "1:552368459409:web:df527c7c8f28564c98b930"
};

const app = initializeApp(firebaseConfig);

function App() {
	return (
		<FirebaseContext value={auth}>
		<div className="App">
			<Home />
		</div>
		</FirebaseContext>
	);
}

export default App;
