import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Header from './components/Header'; 
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollingText from './components/ScrollingText';



function App() {
  return (
<div className="app">
      <ScrollingText />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
