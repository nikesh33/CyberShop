import React from "react";
import Header from "./header";
import Footer from "./footer";



function Home()
{
    return(
        
        <div>
            <Header />
            <section className="home">

                <div className="content">
                   <h3>Cyber Shop</h3>
                   <p>Everything at one shop.</p>
                   <a href="about.js" className="btn">discover more</a>
                </div>

            </section>

            <section className="products">
                <h1 className="title">products</h1>
                    <div className="box-container">
                       <form action="" method="POST" className="box">
                          <a href="view_page.js" className="fas fa-eye"></a>
                          <div className="price">Rs</div>
                          <img src="uploaded_img" alt="" class="image" />
                          <input type="number" name="product_quantity" value="1" min="0" class="qty" />
                          <input type="hidden" name="product_id" value="" />
                          <input type="hidden" name="product_name" value="" />
                          <input type="hidden" name="product_price" value="" />
                          <input type="hidden" name="product_image" value="" />
                          <input type="submit" value="add to wishlist" name="add_to_wishlist" className="option-btn" />
                          <input type="submit" value="add to cart" name="add_to_cart" className="btn" />
                       </form>
                    </div>
                    <div className="more-btn">
                       <a href="shop.js" className="option-btn">load more</a>
                    </div>
            </section>
               
            <section className="home-contact">
            
            <div className="content">
               <h3>have any questions?</h3>
               <a href="contact.js" className="btn">contact us</a>
            </div>
            
            </section>
            <script src="script.js"></script>
            <Footer />
               
        </div>
        );
}

export default Home;