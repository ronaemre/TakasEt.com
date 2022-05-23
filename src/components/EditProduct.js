import React, { Fragment, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { updateMaterial } from "../api/api";
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core'
import { ProductUpdate } from '../api/api'



const EditProduct = ({ product, setOpen, setProducts, userId }) => {

    const [productname, setProductName] = useState(product.productName);
    const [productprice, setProductPrice] = useState(product.productPrice);
    const [productimage, setProductImage] = useState(product.ProductImage);
    const [productdetails, setProductDetails] = useState(product.productDetails);

    function Updated() {
        alert("Product UPDATED")
        setOpen(false)
    }

    return (
        <Fragment>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Product</h4>
                        <Button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={() => setOpen(false)}
                        >
                            &times;
                        </Button>
                    </div>

                    <div className="modal-body">
                        Name
                        <input
                            autoComplete="off"
                            type="numtextber"
                            className="form-control"
                            value={productname}
                            onChange={e => setProductName(e.target.value)}
                        />
                        Price
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            value={productprice}
                            onChange={e => setProductPrice(e.target.value)}
                        />
                        Image
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            value={productimage}
                            onChange={e => setProductImage(e.target.value)}
                        />
                        Details
                        <input
                            autoComplete="off"
                            type="text"
                            className="form-control"
                            value={productdetails}
                            onChange={e => setProductDetails(e.target.value)}
                        />


                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-warning"
                            data-dismiss="modal"

                            onClick={() => { Updated(); ProductUpdate(product.id, productname, productprice, productimage, productdetails, setProducts, userId) }}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>

        </Fragment >
    );
};

export default EditProduct;