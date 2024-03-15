import React from "react";


function Header(){
    return (
        <div>
            <header className="header" >

            <div className="flex">
                
                <a href="home.js" className="logo">Cyber Shop</a>
                
                <nav className="navbar">
                    <ul>
                        <li><a href="home.js">home</a></li>
                        <li><a href="#">pages +</a>
                            <ul>
                                <li><a href="about.js">about</a></li>
                                <li><a href="contact.js">contact</a></li>
                            </ul>
                        </li>
                        <li><a href="shop.js">shop</a></li>
                        <li><a href="orders.js">orders</a></li>
                        <li><a href="#">account +</a>
                            <ul>
                                <li><a href="login.js">login</a></li>
                                <li><a href="register.js">register</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars"></div>
                    <a href="search_page.js" className="fas fa-search"></a>
                    <div id="user-btn" className="fas fa-user"></div>
                    
                    <a href="wishlist.js"><i className="fas fa-heart"></i></a>
                    
                    <a href="cart.js"><i className="fas fa-shopping-cart"></i></a>
                </div>
                
                <div className="account-box-active">
                    <p>username : Yash Darole</p>
                    <p>email : yashdarole007@gmail.com</p>
                    <a href="logout.js" className="delete-btn">logout</a>
                </div>
                
            </div>
            <script src="script.js"></script>
            </header>
        </div>
    );
}

export default Header;