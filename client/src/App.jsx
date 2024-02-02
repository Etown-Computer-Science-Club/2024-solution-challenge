import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Settings from "./Settings";
import Post from "./Post";
import { FirebaseContext } from "./firebase_context";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCMNhcLRPLQVTqAw1folNMLzbQidmd_crM",
	authDomain: "solution-challenge-junk.firebaseapp.com",
	projectId: "solution-challenge-junk",
	storageBucket: "solution-challenge-junk.appspot.com",
	messagingSenderId: "552368459409",
	appId: "1:552368459409:web:df527c7c8f28564c98b930",
};

const app = initializeApp(firebaseConfig);

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="/posts/:id" element={<Post />} />
		</Routes>
	);
}

export default App;
