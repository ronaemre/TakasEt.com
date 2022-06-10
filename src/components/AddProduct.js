import React from "react";
import { useState } from "react";

import { addProduct } from "../api/api"


const AddProduct = ({ userId }) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [about, setAbout] = useState("");
    const [category, setCategory] = useState("");





    /*     async function addProduct() {
                console.log(name, price, image, about) 
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', price);
            formData.append('image', image);
            formData.append('about', about);
            await axios.post(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons`, {
                name,
                price,
                avatar: image,
                about
            });
            alert("Ürün Kaydedildi")
        } */

    async function Home() {
        window.location = "/"
    }


    return (
        <div className="container" style={{ backgroundColor: "pink", borderRadius: "20px", marginTop: "180px" }} data-testid="container">
            <div >
                <input
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Fill The Form To Add A Product.."
                    disabled
                />
                <div className="form-row">
                    <div className="form-group col-md-10" data-testid="name">
                        <label htmlFor="inputName">Product Name</label>
                        <input type="text" autoComplete="off" className="form-control" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-2" data-testid="price">
                        <label htmlFor="inputRating">Estimated price</label>
                        <input type="text" autoComplete="off" className="form-control" name="rating" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12" data-testid="image">
                        <label htmlFor="inputImage">Image URL</label>
                        <input type="text" autoComplete="off" className="form-control" name="imageURL" onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
                <div className="form-row" >
                    <div className="form-group col-md-12" data-testid="about">
                        <label htmlFor="overviewTextarea">About Product</label>
                        <textarea
                            onChange={(e) => setAbout(e.target.value)}
                            className="form-control"
                            name="overview"
                            rows="5"
                            autoComplete="off"
                        ></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <select name="choice" onClick={(e) => setCategory(e.target.value)}>
                        <option value="10" selected>Other</option>
                        <option value="1">Electronic</option>
                        <option value="2">Sports, Entertainment and Games</option>
                        <option value="3">Car</option>
                        <option value="4">Motorcycles and Other Vehicles</option>
                        <option value="6">Home and Garden</option>
                        <option value="7">Fashion - Accessory</option>
                        <option value="8">Baby and Child</option>
                        <option value="9">Movies, Books and Music</option>

                    </select>
                </div>
                <input
                    onClick={() => addProduct(name, price, image, about, category, userId)}
                    type="submit"
                    className="btn btn-danger btn-block"
                    value="Add Product"
                />
                <input
                    onClick={() => Home()}
                    type="button"
                    style={{ margin: "10px" }}
                    className="btn btn-success btn-block"
                    value="Turn to Home Page"
                />

            </div >

        </div >
    );

}

export default AddProduct;
