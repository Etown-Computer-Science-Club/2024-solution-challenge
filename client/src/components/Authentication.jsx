import React, { useContext, useEffect } from "react";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { EmailAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const uiConfig = {
	signInOptions: [EmailAuthProvider.PROVIDER_ID],
	signInSuccessUrl: "/",
};

const Authentication = () => {
	const user = useContext(FirebaseContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user, navigate]);

	useEffect(() => {
		let userSignedIn = false;

		const firebaseUiWidget =
			firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

		if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

		const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
			if (!user && userSignedIn) firebaseUiWidget.reset();
			userSignedIn = !!user;
		});

		firebaseUiWidget.start("#firebaseui-auth-container", uiConfig);

		return () => {
			unregisterAuthObserver();
			firebaseUiWidget.reset();
		};
	}, [uiConfig, auth]);

	return (
		<>
			<div id="firebaseui-auth-container"></div>
		</>
	);
};

export default Authentication;
