import React from 'react';
import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Dialog />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
