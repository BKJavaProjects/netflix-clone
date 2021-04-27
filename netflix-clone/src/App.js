import React from 'react';
import './App.css';
import Row from './Row.js';

function App() {
  return (
    <div className="App">
      <h1>Hello , this will be the netflix-clone app </h1>
      <Row title="NETFLIX ORIGINALS"/>
      <Row title="Trending Now"/>
      <Row title="Top Rated"/>
      <Row title="Action Movies"/>
      <Row title="Horror Movies"/>
      <Row title="Romance Movies"/>
      <Row title="Documentaries"/>
           
    </div>
  );
}

export default App;
