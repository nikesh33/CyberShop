import React ,{ Fragment,useState,useEffect }from "react";
// import axios from "axios";

function AdminProducts() {
    const [name,setName]= useState();
    const [details,setDetails]= useState();
    const [price,setPrice]= useState();
    const [image,setImage] = useState();

    const onSubmitProduct = async e =>{
        e.preventDefault();
        try {
            const body = {name,price,details,image};
            const reponse = await fetch("http://localhost:5000/admin_products.js",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(body)

            });
            window.location = "/admin_products.js";
        } catch (err) {
            console.error(err.message);
        }
    }

    const showProducts = async()=>{
        try {
            const response = await fetch("http://localhost:5000/admin_products.js");
            const jsonData = await response.json();
            setName(jsonData);
            setDetails(jsonData);
            setPrice(jsonData);
            setImage(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect( ()=>{
        showProducts();
    },[]);

    const prod ={
        "name":"abcde",
        "details":"lmnopqrst",
        "price":1000,
        "image":"C:/Users/yash/Desktop/finalproject/client/public/images/pic-1.png"
    }

    return(
    <Fragment>
        <section className="add-products">

                <form action="" onSubmit={onSubmitProduct} method="POST" encType="multipart/form-data">
                    <h3>add new product</h3>
                    <input type="text" className="box" required placeholder="enter product name" name="name" value={name} onChange={e => { setName(e.target.value) }} />
                    <textarea name="details" className="box" required placeholder="enter product details" cols="30" rows="10" value={details} onChange={e => { setDetails(e.target.value) }}></textarea>
                    <input type="number" min="0" className="box" required placeholder="enter product price" name="price" value={price} onChange={e => { setPrice(e.target.value) }} />
                    <input type="file" accept="image/jpg, image/jpeg, image/png" required className="box" name="image" value={image} onChange={e => { setImage(e.target.value) }} />
                    <input type="submit" value="add product" name="add_product" className="btn" />
                </form>

        </section>    

        <section className="show-products">

                <div className="box-container">
                    {prod.map(products => (
                    <div className="box" key ={products.id}>
                        <div className="price">Rs {products.price}/-</div>
                        <img className="image" src={products.image} alt="" />
                        <div className="name">{products.name}</div>
                        <div className="details">{products.details}</div>
                        <a href="admin_update_product.js" className="option-btn">update</a>
                        <a href="admin_products.js" className="delete-btn" onclick="return confirm('delete this product?');">delete</a>
                    </div>))}
                </div>
        </section>
    </Fragment>);
}

export default AdminProducts;