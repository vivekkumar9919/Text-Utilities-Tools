
import './App.css';
import React, { useState } from 'react';
import DarkMode from './components/DarkMode';
import HomePage from './components/HomePage';

function App() {
  const toggleTheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="white";
    } else {
      setMode('light');
      document.body.style.backgroundColor="black";
      }
   };
  const [mode, setMode] = useState('dark');
  return (
    <div className={`App`}>
      <DarkMode mode={mode} toggleTheme={toggleTheme}/>
       <HomePage mode={mode}/>
    </div>
  );
}

export default App;
