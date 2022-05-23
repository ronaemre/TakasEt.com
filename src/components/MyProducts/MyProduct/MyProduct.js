import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography, IconButton, CardActions, Button } from '@material-ui/core'
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStyles from './styles'
import { ProductDeleteHandler } from '../../../api/api'
import { getProducts } from '../../../api/api';
import EditProduct from '../../EditProduct';
import EditIcon from '@mui/icons-material/Edit';



//props are coming from PRODUCTS to PRODUCT...


//PRODUCT=CHILD

const MyProduct = ({ product, setProducts, userId }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    function openHandler() {
        setOpen(true)
    }



    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.ProductImage} title={product.productName} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.productName}
                    </Typography>
                    <Typography variant="h5" >
                        {product.productPrice} TL
                    </Typography>

                </div>
                <Typography variant="body2" color="textSecondary">{product.productDetails}</Typography>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="DELETE" onClick={() => ProductDeleteHandler(product.id, setProducts, userId)} >
                        DELETE
                        <DeleteForeverIcon />
                    </IconButton>
                    <IconButton aria-label="EDİT" onClick={() => openHandler()} >
                        UPDATE
                        <EditIcon />
                    </IconButton>
                </CardActions>
                {
                    open &&
                    <EditProduct setOpen={setOpen} product={product} setProducts={setProducts} userId={userId} />
                }

            </CardContent>

        </Card>
    )
}

export default MyProduct
