import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import axios from "axios"

/* const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Runnnig Shoes',
        price: "$5",
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/abaac39ad1204ece988ba999002c619d_9366/Runfalcon_Ayakkabi_Siyah_F36549_01_standard.jpg'
    },
    {
        id: 2,
        name: 'Book',
        description: 'Okumalık Kapağı olan',
        price: "$10",
        image: 'https://images-na.ssl-images-amazon.com/images/I/91AWmg7WVKL.jpg'
    },
    {
        id: 3,
        name: 'Mona Lisa Painting',
        description: 'Original Mona Lisa Painting',
        price: "$2265",
        image: 'https://isbh.tmgrup.com.tr/sb/album/2019/01/09/mona-lisa-tablosunun-buyuk-sirri-cozuldu-iste-mona-lisanin-gizemi-1547019775032.jpg'
    },
    {
        id: 4,
        name: 'AI Intelligent Super Smart Cube  ',
        description: 'App Remote Control Professional Magic Cube Magic',
        price: "$25",
        image: 'https://m.media-amazon.com/images/I/61GXDNuKp-L._AC_SX425_.jpg'
    },
    {
        id: 5,
        name: 'iPhone 12 64 Gb Akıllı Telefon Mor',
        description: 'İşlemci Sayısı:6 Çekirdek',
        price: "$925",
        image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/122698_large.jpg'
    },

]; */



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



const Products = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);


    const getProducts = async () => {
        const response = await axios.get("http://localhost:3002/products")
        setProducts(response.data)

    }

    useEffect(() => {
        getProducts();
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