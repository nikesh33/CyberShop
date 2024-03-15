import React from "react";




function Login(){
    return (
        <div>
            <section className="form-container">

                <form action="" method="post">
                   <h3>login now</h3>
                   <input type="email" name="email" className="box" placeholder="enter your email" required />
                   <input type="password" name="pass" className="box" placeholder="enter your password" required />
                   <input type="submit" className="btn" name="submit" value="login now" />
                   <p>don't have an account? <a href="register.js">register now</a></p>
                </form>

            </section>
        </div>
    );
}

export default Login;