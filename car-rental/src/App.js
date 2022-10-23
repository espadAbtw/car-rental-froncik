import React from "react";
import './App.css';
import { Footer, Header, HowWork, Popular, Subscribe, WhyUs} from './containers';
import { Navbar, CarRent, Opinion} from './components';
import './index.css'

function App() {
  return (
    <div className="App">
    <div className="color_header">
        <Navbar/>
        <Header/>
    </div>      
      <HowWork/>
      <Popular/>
      <CarRent/>
      <WhyUs/>
      <Opinion/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
