import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row.js';
import Banner from './Banner' ;


function App() {
  return (
    <div className="app">
      {/** Nav Bar} */}
      <Banner />
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fectchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated"fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>
           
    </div>
  );
}

export default App;
