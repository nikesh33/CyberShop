import React from "react";

function adminHeader() {
    return (
        <div>
            <header className="header">

                <div className="flex">

                    <a href="admin_page.js" className="logo">Seller<span>Panel</span></a>

                    <nav className="navbar">
                        <a href="admin_page.js">home</a>
                        <a href="admin_products.js">products</a>
                        <a href="admin_orders.js">orders</a>
                        <a href="admin_contacts.js">messages</a>
                    </nav>

                    <div className="icons">
                        <div id="menu-btn" className="fas fa-bars"></div>
                        <div id="user-btn" className="fas fa-user"></div>
                    </div>

                    <div className="account-box">
                        <p>username : <span></span></p>
                        <p>email : <span></span></p>
                        <a href="logout.js" className="delete-btn">logout</a>
                        <div>new <a href="login.js">login</a> | <a href="register.js">register</a> </div>
                    </div>

                </div>

            </header>
        </div>
    );
}

export default adminHeader;