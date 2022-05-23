import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import MyProduct from './MyProduct/MyProduct';
import { makeStyles } from '@material-ui/core/styles';
import { getMyProducts } from '../../api/api';
import EditProduct from '../EditProduct';




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



const MyProducts = ({ products, setProducts, userId }) => {
    const classes = useStyles();


    useEffect(() => {
        getMyProducts(setProducts, userId)
    }, [userId, setProducts])



    return (
        <main className={classes.content} >
            <div className={classes.toolbar}></div>
            {<Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <MyProduct product={product} userId={userId} setProducts={setProducts} />

                    </Grid>
                ))}
            </Grid>}
        </main>
    )
}

export default MyProducts;