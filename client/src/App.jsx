import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Post from "./components/Post";
import Authentication from "./components/Authentication";
import CreatePost from "./components/CreatePost";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="/posts/:id" element={<Post />} />
			<Route path="/login" element={<Authentication />} />
			<Route path="/create-post" element={<CreatePost />} />
		</Routes>
	);
}

export default App;
