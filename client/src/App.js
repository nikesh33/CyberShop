import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/home"
import Cart from "./components/cart"
import Login from "./components/login"
import Logout from "./components/logout"
import Checkout from "./components/checkout";
import Contact from "./components/contact"
import About from "./components/about";
import Register from "./components/register";
import adminOrder from "./components/admin_order";
import adminPage from "./components/admin_page";
import AdminProducts from "./components/admin_products";




function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/home.js" Component={Home}/>
        <Route path="/cart.js" Component={Cart} /> 
        <Route path="/login.js" Component={Login} /> 
        <Route path="/logout.js" Component={Logout} /> 
        <Route path="/register.js" Component={Register} /> 
        <Route path="/checkout.js" Component={Checkout} /> 
        <Route path="/contact.js" Component={Contact} /> 
        <Route path="/About.js" Component={About} /> 
        <Route path="/Admin_order.js" Component={adminOrder}/>
        <Route path="/Admin_page.js" Component={adminPage}/>
        <Route path="/admin_products.js" Component={AdminProducts}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App
