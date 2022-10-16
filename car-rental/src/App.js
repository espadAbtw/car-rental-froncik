import React from "react";
import './App.css';
import { Footer, Header, HowWork, Popular, Subscribe, WhyUs} from './containers';
import { Navbar, CarRent, Booking} from './components';


function App() {
  return (
    <div className="App">
    <div className="color_bg">
        <Navbar/>
        <Header/>
    </div>      
      <Booking/>
      <HowWork/>
      <Popular/>
      <CarRent/>
      <WhyUs/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
