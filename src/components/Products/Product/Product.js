import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import useStyles from './styles'

import { sendTradeOffer } from '../../../api/api';
import MyProducts from '../../MyProducts/MyProducts';

//props are coming from PRODUCTS to PRODUCT...


//PRODUCT=CHILD

const Product = ({ product, userId }) => {
    const classes = useStyles();
    /*    console.log(product) */
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.ProductImage} title={product.productName} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.productName}
                    </Typography>
                    <Typography variant="h5" >
                        {product.productPrice}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.productDetails}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Takas Teklifi Gönder"
                    onClick={() => sendTradeOffer(product.productName, product.productPrice, product.ProductImage, product.productDetails, product.categoryId, product.userId, userId)}>
                    TAKAS TEKLİFİ GÖNDER
                    <SwapHorizontalCircleIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
