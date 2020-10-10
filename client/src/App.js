import React from 'react';
import AppNavbar from './components/AppNavbar';
import AvailableShifts from './components/AvailableShifts';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <AvailableShifts/>
      <h1>Landing Page</h1>
    </div>
  );
}

export default App;
