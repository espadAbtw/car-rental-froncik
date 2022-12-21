import Home from "./home/home";
import { Navbar } from "../components";
import Login from "./login/login";
import Register from "./register/register";
import { Routes, Route } from 'react-router-dom';
import Booking from "../containers/booking/booking";
import SignIn from "./sign-in/sign-in";
import Myaccount from "./myaccount/myaccount";

function Layout() {
  return (
      <Routes>
        <Route path="/car-rental-froncik" element={<Navbar />}>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home/>} /> */}
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="signin" element={<SignIn />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="booking" element={<Booking />} />
          <Route path="myaccount" element={<Myaccount />} />
        </Route>
      </Routes>
  );
}
export default Layout;
