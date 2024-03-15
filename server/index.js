const express = require("express");
const app = express();
const cors = require("cors");

const pool = require("./db")



//middleware
app.use(cors());
app.use(express.json());

//admin 

//add products

app.post("/admin_products.js",async (req,res)=>{
    try {
        const {name,details,price,image} = req.body;
        const newProd = await pool.query("INSERT INTO products(name,details,price,image) VALUES($1,$2,$3,$4) RETURNING*",[name,details,price,image]);

        res.json(newProd.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
   

});

//show products
app.get("/admin_products.js",async(req,res)=>{

    try {
        const allProd = await pool.query("SELECT * FROM products");

        res.json(allProd.rows);
        
    } catch (err) {
        console.error(err.message); 
    }
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
});