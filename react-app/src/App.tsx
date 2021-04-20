import React from 'react';
import './App.css';
import Head from './MyComponents/Head';
import Ads from './MyComponents/Ads';
import Avatar from './MyComponents/Avatar';
import MyCards from './components/MyCards';

function App() {
  return (
    <div className="App">
      <Head/>
      <Ads/>
      <Avatar/>
      <MyCards/>
    </div>
  );
}

export default App;
