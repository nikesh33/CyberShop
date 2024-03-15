import React from "react";
import Header from "./header";
import Footer from "./footer";

function About(){
    return(
        <div>
            <Header />
            <section className="heading">
                <h3>about us</h3>
                <p> <a href="home.js">home</a> / about </p>
            </section>

            <section className="about">

           <div className="flex">

                 <div className="content">
                    <h3>why choose us?</h3>
                    <p>CyberShop is designed with your convenience and safety in mind. Our user-friendly interface ensures easy navigation,
                     allowing you to quickly find what you need or list your items for sale effortlessly. Safety is our top priority, and we provide
                     tools to protect both buyers and sellers, promoting secure communication within our platform. Whether you're seeking local deals
                     or global connections, we've got you covered, offering diverse categories from electronics to real estate. We're more than just
                     a marketplace; we're a community hub where you can engage with others through messaging, feedback, and reviews to build trust
                     and make your online buying and selling experience personal and rewarding.</p>
                     <a href="shop.js" className="btn">shop now</a>
                </div>

            </div>

         <div className="flex">

                 <div className="content">
                   <h3>Our Mission</h3>
                   <p>Our mission is simple yet powerful: to make buying and selling online easier, safer, 
                    and more convenient for everyone. We are dedicated to providing a secure and user-friendly environment 
                   where you can find great deals, discover unique items, and connect with other members of your community.</p>
                    <a href="contact.js" className="btn">contact us</a>
                 </div>

                <div className="image">
                    <img src="images/about-img-2.jpg" alt="" />
                </div>

        </div>

        <div className="flex">

                <div className="image">
                <img src="images/about-img-3.jpg" alt="" />
                </div>

                <div className="content">
                    <h3>Join Our Growing Community</h3>
                    <p>We invite you to become a part of the CyberShop community. Whether you're a seasoned online shopper, a first-time seller, or someone looking to declutter your space, we're here to help you achieve your goals.
                       Thank you for choosing CyberShop as your trusted online marketplace. We look forward to helping you buy, sell,
                        and connect with others in a secure and friendly environment. If you have any questions, feedback, or suggestions,
                         please don't hesitate to contact us. We're here to make your online buying and selling experience exceptional.
                      Happy shopping and selling!</p>
                    <a href="#reviews" className="btn">clients reviews</a>
                </div>

        </div>

</section>

<section className="reviews" id="reviews">

    <h1 className="title">client's reviews</h1>

    <div className="box-container">

        <div className="box">
            <img src="images/pic-2.png" alt="" />
            <p>Best website I have ever used.</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>Urvashi rautela</h3>
        </div>

        <div className="box">
            <img src="images/pic-1.png" alt="" />
            <p>Very understandable tabs and easy transaction.Very nice website</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>Vijay Dhinanath Chavan</h3>
        </div>

        <div className="box">
            <img src="images/pic-3.png" alt="" />
            <p>Keep it up WATS.</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>Yash Darole</h3>
        </div>

        <div className="box">
            <img src="images/pic-2.png" alt="" />
            <p>Fast delivery that I ever got from any Online Store .....It's always gonna be CyberShop.</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>Rachel Grey</h3>
        </div>

        <div className="box">
            <img src="images/pic-5.png" alt="" />
            <p>RIP other Online Shopping Websites.</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>GRAVEYARD</h3>
        </div>

        <div className="box">
            <img src="images/pic-4.png" alt="" />
            <p>Bole toh JHAKAAS ..........Nice Website.</p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>Anil Kapoor</h3>
        </div>

    </div>

</section>

            <Footer />
        </div>
    );

}

export default About;