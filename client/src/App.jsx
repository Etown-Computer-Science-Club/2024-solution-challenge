import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Settings from "./Settings";
import Post from "./Post";

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
