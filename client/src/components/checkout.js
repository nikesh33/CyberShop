import React from "react";
import Header from "./header";
import Footer from "./footer";

function Checkout(){
    return(
    <div>
        <Header />
    <section className="checkout">

    <form action="" method="POST">

    <h3>place your order</h3>

    <div className="flex">
        <div className="inputBox">
            <span>your name :</span>
            <input type="text" name="name" placeholder="enter your name" />
        </div>

        <div className="inputBox">
            <span>your number :</span>
            <input type="number" name="number" min="0" placeholder="enter your number" />
        </div>

        <div className="inputBox">
            <span>your email :</span>
            <input type="email" name="email" placeholder="enter your email" />
        </div>

        <div className="inputBox">
            <span>payment method :</span>
            <select name="method">
                <option value="cash on delivery">cash on delivery</option>
                <option value="UPI">UPI</option>
                 {/* <!-- <option value="paypal">paypal</option> --> 
                <!-- <option value="paytm">paytm</option> -->  */}
            </select>
        </div>

        <div className="inputBox">
            <span>address line 01 :</span>
            <input type="text" name="flat" placeholder="e.g. flat no." />
        </div>
        <div className="inputBox">
            <span>address line 02 :</span>
            <input type="text" name="street" placeholder="e.g.  streen name " />
        </div>

        <div className="inputBox">
            <span>city :</span>
            <input type="text" name="city" placeholder="e.g. mumbai" />
        </div>

        <div className="inputBox">
            <span>state :</span>
            <input type="text" name="state" placeholder="e.g. maharashtra" />
        </div>
        <div className="inputBox">
            <span>country :</span>
            <input type="text" name="country" placeholder="e.g. india" />
        </div>

        <div className="inputBox">
            <span>pin code :</span>
            <input type="number" min="0" name="pin_code" placeholder="e.g. 123456" />
        </div>
    </div>

    <input type="submit" name="order" value="order now" class="btn" />

</form>

</section>

<Footer />
    </div>
        
    );
}

export default Checkout;
