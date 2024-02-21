import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<FirebaseProvider>
				<App />
			</FirebaseProvider>
		</BrowserRouter>
	</React.StrictMode>
);
