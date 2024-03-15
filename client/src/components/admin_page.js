import React from "react";
import adminHeader from "./admin_header";

function AdminPage() {
    return (
        <div>
            <adminHeader />
            <section className="dashboard">

                <h1 className="title">dashboard</h1>

                <div className="box-container">

                    <div className="box">
                        <h3>Rs/-</h3>
                        <p>total pendings</p>
                    </div>

                    <div className="box">
                        <h3>Rs/-</h3>
                        <p>completed paymets</p>
                    </div>

                    <div className="box">
                        <h3></h3>
                        <p>orders placed</p>
                    </div>

                    <div className="box">
                       <h3></h3>
                        <p>products added</p>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default AdminPage;