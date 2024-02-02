// YourComponent.js
import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext, auth } from './FirebaseContext';

const YourComponent = () => {
  const firebaseAuth = useContext(FirebaseContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [firebaseAuth]);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default YourComponent;