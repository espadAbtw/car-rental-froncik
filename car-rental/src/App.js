import React from "react";
import './App.css';
import { Footer, Header, HowWork, Popular, WhyUs} from './containers';
import { Navbar, Brand} from './components';
import './index.css'

function App() {
  return (
    <div className="App">
    <div className="color_header">
        <Navbar/>
        <Header/>
    </div>  
      <Brand/>    
      <HowWork/>
      <Popular/>
      <WhyUs/>
      <Footer/>
    </div>
  );
}

export default App;
