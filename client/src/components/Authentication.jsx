// YourComponent.js
import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../contexts/FirebaseContext";

const YourComponent = () => {
	const user = useContext(FirebaseContext);

	return <div>{user ? <p>Welcome, {user.email}</p> : <p>Please log in</p>}</div>;
};

export default YourComponent;
