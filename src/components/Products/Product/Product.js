import React, { useState, useEffect } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import useStyles from './styles'

import { sendTradeOffer } from '../../../api/api';
import { Modal, Button } from "react-bootstrap";

const Product = ({ product, userId, setProducts, products }) => {
    const classes = useStyles();
    const [selectedProdName, setSelectedProdName] = useState()
    const [selectedProdPrice, setSelectedProdPrice] = useState()
    const [selectedProdImage, setSelectedProdImage] = useState()
    const [selectProdDetails, setSelectProdDetails] = useState()
    const [showModal, setShow] = useState(false);

    const handleClose = () => {
        setSelectedProdName("")
        setSelectedProdPrice("")
        setSelectedProdImage("")
        setSelectProdDetails("")
        setShow(false);
    }

    const handleShow = () => setShow(true);


    function handleSendAndClose() {
        if (!selectedProdName == " ") {
            sendTradeOffer(
                product.productName,
                product.productPrice,
                product.ProductImage,
                product.productDetails,
                product.categoryId,
                product.userId,
                userId,
                selectedProdName,
                selectedProdPrice,
                selectedProdImage,
                selectProdDetails
            )
            setShow(false);
            setSelectedProdName("")
            setSelectedProdPrice("")
            setSelectedProdImage("")
            setSelectProdDetails("")
        } else {
            alert("Please Select a Products to send offer!!!")
        }

    }

    function setHandler(prods) {
        if (userId == product.userId) {
            alert("you cant not send")
            setSelectedProdName("")
            setSelectedProdPrice("")
            setSelectedProdImage("")
            setSelectProdDetails("")
            window.location = "/"

        }
        setSelectedProdName(prods.productName)
        setSelectedProdPrice(prods.productPrice)
        setSelectedProdImage(prods.ProductImage)
        setSelectProdDetails(prods.productDetails)

    }

    /*   useEffect(() => {
          getProducts(setProducts);
      }, []) */

    return (
        <>
            <Card className={classes.root}>
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
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Takas Teklifi Gönder" onClick={handleShow} >
                        Trade Offer
                        <SwapHorizontalCircleIcon />
                    </IconButton>
                </CardActions>

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Products</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, Choose your product to trade</Modal.Body>
                    <table>
                        <tbody>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            {
                                products.filter(prod => prod.userId === userId)
                                    .map(prods => (
                                        < tr key={prods.id} onClick={() => setHandler(prods)}>
                                            <input type="checkbox" />
                                            <td value={prods.productName}>{prods.productName}</td>
                                            <td>{prods.productPrice}</td>
                                            <img src={prods.ProductImage} style={{ height: 100, width: 100 }}></img>
                                        </tr>

                                    ))}
                        </tbody>
                    </table>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSendAndClose}>
                            Send Trade Offer
                        </Button>
                    </Modal.Footer>
                </Modal>





            </Card>
        </>

    )
}

export default Product
