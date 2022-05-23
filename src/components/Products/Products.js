import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


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

const Products = ({ products, setProducts, userId, searchTerm }) => {
    const classes = useStyles();


    useEffect(() => {
        getProducts(setProducts);
    }, [])


    return (
        <main className={classes.content}>
            {
                <Grid container justify="center" spacing={4}>
                    {
                        products.filter((filtered) => {
                            if (searchTerm == "") {
                                return products
                            }
                            else if (filtered.productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return filtered
                            }
                        })
                            .map((product) => (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product} userId={userId} products={products} />
                                </Grid>
                            ))}
                </Grid>
            }
        </main >
    )

}

export default Products;