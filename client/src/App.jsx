import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Post from "./components/Post";
import YourComponent from "./components/Authentication";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import CreatePost from "./components/CreatePost";

function App() {
	return (
		<FirebaseProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/posts/:id" element={<Post />} />
				<Route path="/login" element={<YourComponent />} />
				<Route path="/create-post" element={<CreatePost />} />
			</Routes>
		</FirebaseProvider>
	);
}

export default App;
