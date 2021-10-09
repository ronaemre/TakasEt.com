import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import useStyles from './styles'

//props are coming from PRODUCTS to PRODUCT...


//PRODUCT=CHILD

const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.decription}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Takas Teklifi Gönder">
                    TAKAS TEKLİFİ GÖNDER <SwapHorizontalCircleIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
