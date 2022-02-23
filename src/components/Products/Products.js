import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import axios from "axios"
import { getProducts } from '../../api/api';



const useStyles = makeStyles((theme) => ({
    toolbar: theme.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    }
}));



const Products = ({ products, setProducts }) => {
    const classes = useStyles();
    /*  const [products, setProducts] = useState([]); */


    /*    const getProducts = async () => {
           const response = await axios.get("http://localhost:3002/products")
           setProducts(response.data)
   
       } */

    useEffect(() => {
        getProducts(setProducts);
    }, [])



    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            {<Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>}
        </main>
    )

}

export default Products;