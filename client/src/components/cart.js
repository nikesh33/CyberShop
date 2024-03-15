import React from "react";
import Header from "./header";
import Footer from "./footer";
function Cart(){
    return (
        
        <div>
            <Header />
            <section className="heading">
                <h3>shopping cart</h3>
                <p> <a href="home.js">home</a> / cart </p>
            </section>

            <section className="shopping-cart">

                <h1 className="title">products added</h1>

                <div className="box-container">
                    <div  className="box">
                        <a href="cart.js" className="fas fa-times" onclick="return confirm('delete this from cart?');"></a>
                        <a href="view_page.js" className="fas fa-eye"></a>
                        <img src="uploaded_img/" alt="" className="image" />
                        <div className="name"></div>
                        <div className="price">Rs/-</div>
                        <form action="" method="post">
                            <input type="hidden" value=" "name="cart_id" />
                            <input type="number" min="1" value="" name="cart_quantity" className="qty" />
                            <input type="submit" value="update" className="option-btn" name="update_quantity" />
                        </form>
                        <div className="sub-total"> sub-total : </div>
                    </div>
                </div>
            
                <div className="more-btn">
                    <a href="cart.js?delete_all" className="delete-btn " onclick="return confirm('delete all from cart?');">delete all</a>
                </div>
            
                <div className="cart-total">
                    <p>grand total :</p>
                    <a href="shop.js" className="option-btn">continue shopping</a>
                    <a href="checkout.js" className="btn ">proceed to checkout</a>
                </div>
            
            </section>
            <Footer />


        </div>
    );
}



export default Cart;