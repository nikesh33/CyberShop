import React from "react";

function AdminOrder() {
    return (
        <div>
            <section className="placed-orders">

                <h1 className="title">placed orders</h1>

                <div className="box-container">
                    <div className="box">
                        <p> user id : <span></span> </p>
                        <p> placed on : <span></span> </p>
                        <p> name : <span></span> </p>
                        <p> number : <span></span> </p>
                        <p> email : <span></span> </p>
                        <p> address : <span></span> </p>
                        <p> total products : <span></span> </p>
                        <p> total price : <span>Rs/-</span> </p>
                        <p> payment method : <span></span> </p>
                        <form action="" method="">
                            <input type="hidden" name="order_id" value="" />
                                <select name="update_payment">
                                    <option disabled selected></option>
                                    <option value="pending">pending</option>
                                    <option value="completed">completed</option>
                                </select>
                                <input type="submit" name="update_order" value="update" className="option-btn" />
                                    <a href="admin_orders.js" className="delete-btn" onclick="">delete</a>
                            </form>
                        </div>
                    </div>

            </section>
        </div>
    );
}

export default AdminOrder;