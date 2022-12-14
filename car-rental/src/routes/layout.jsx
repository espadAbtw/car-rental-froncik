import Home from "./home/home";
import { Navbar } from "../components";
import Login from "./login/login";
import Register from "./register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "../containers/booking/booking";
import SignIn from "./sign-in/sign-in";

function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/car-rental-froncik" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/car-rental-froncik/login" element={<Login />} />
        <Route path="/car-rental-froncik/signin" element={<SignIn />} />
        <Route path="/car-rental-froncik/register" element={<Register />} />
        <Route path="/car-rental-froncik/booking" element={<Booking />} />
      </Routes> 
    </Router>
  );
}
export default Layout;
