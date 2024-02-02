import React, { useEffect, useState, createContext } from "react";
import { auth } from "../firebase";

const FirebaseContext = createContext(auth);

const FirebaseProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user);
		});

		return () => unsubscribe();
	}, [auth]);

	return <FirebaseContext.Provider value={user}>{children}</FirebaseContext.Provider>;
};

export { FirebaseContext, FirebaseProvider };
