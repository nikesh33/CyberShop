import React from "react";

const currentYear = new Date().getFullYear();

function Footer(){
    return (
        <div>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="home.js">home</a>
                        <a href="about.js">about</a>
                        <a href="contact.js">contact</a>
                        <a href="shop.js">shop</a>
                    </div>

                    <div className="box">
                        <h3>extra links</h3>
                        <a href="login.js">login</a>
                        <a href="register.js">register</a>
                        <a href="orders.js">my orders</a>
                        <a href="cart.js">my cart</a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <p> <i className="fas fa-phone"></i>8450805625</p>
                        <p> <i className="fas fa-phone"></i>8010972037</p>
                        <p> <i className="fas fa-envelope"></i> CyberShop@gmail.com </p>
                        <p> <i className="fas fa-map-marker-alt"></i> mumbai, india - 123-456 </p>
                    </div>

                    <div className="box">
                        <h3>follow us</h3>
                        <a href="#"><i class="fab fa-facebook-f"></i>facebook</a>
                        <a href="#"><i class="fab fa-twitter"></i>twitter</a>
                        <a href="#"><i class="fab fa-instagram"></i>instagram</a>
                        <a href="#"><i class="fab fa-linkedin"></i>linkedin</a>
                    </div>

                </div>

                <div className="credit">&copy; copyright @ {currentYear} by <span>CyberShop</span> </div>

            </section>
        </div>
    );
}

export default Footer;