import React from "react";
import Footer from "./footer";
import Header from "./header";

function Contact(){
    return(
        <div>

            <Header />
            <section className="heading">
                <h3>contact us</h3>
                <p> <a href="home.js">home</a> / contact </p>
            </section>

            <section className="contact">

                <form action="" method="POST">
                    <h3>send us message!</h3>
                    <input type="text" name="name" placeholder="enter your name" className="box" required /> 
                    <input type="email" name="email" placeholder="enter your email" className="box" required />
                    <input type="number" name="number" placeholder="enter your number" className="box" required />
                    <textarea name="message" className="box" placeholder="enter your message" required cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" name="send" className="btn" />
                </form>

            </section>

        <Footer />

        </div>
    );
}

export default Contact;