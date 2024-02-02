// YourLoginComponent.js
import React, { useState, useContext } from 'react';
import { FirebaseContext, auth } from './contexts/FirebaseContext';

const YourLoginComponent = () => {
  const firebaseAuth = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseAuth.signOut();
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default YourLoginComponent;