import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
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
        name: 'Shoes',
        description: 'Runnnig Shoes',
        price: "$5",
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/abaac39ad1204ece988ba999002c619d_9366/Runfalcon_Ayakkabi_Siyah_F36549_01_standard.jpg'
    },

];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products;