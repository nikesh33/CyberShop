import React from "react";

function Register(){
    return(
        <div>
            <section className="form-container">

                <form action="" method="post">
                   <h3>register now</h3>
                   <input type="text" name="name" className="box" placeholder="enter your username" required />
                   <input type="email" name="email" className="box" placeholder="enter your email" required />
                   <input type="password" name="pass" className="box" placeholder="enter your password" required />
                   <input type="password" name="cpass" className="box" placeholder="confirm your password" required />
                   <input type="submit" className="btn" name="submit" value="register now" />
                   <p>already have an account? <a href="login.jsx">login now</a></p>
                </form>

            </section>
        </div>
    );
}

export default Register;