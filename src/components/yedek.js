import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import { Container, Navbar, Nav, FormControl, Form } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { Fingerprint } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from '../api/api'
import logo from '../PNG/TAKASET.COM.png'
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

    enterenceDiv: {
        marginRight: '100px'
    },
    navbar: {
        backgroundColor: '#EF476F',
        fontSize: '25px',
        height: '120px'
    },
    menu: {
        marginLeft: '100px'
    },
    input: {
        width: '500px'
    },
    men: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    denee: {
        display: 'flex',

        alignItems: 'center'
    }


}));

export default function WebNavbar({ setProducts, username, userId, removeCookie, setSearchTerm }) {
    const classes = useStyles();

    function handleRemoveCookie() {
        window.location = "/login"
    }

    const handlesetSearchTerm = e => {
        setSearchTerm(e.target.value)
    }

    return (

        <Navbar variant="dark" className={classes.navbar}>
            <Grid container className={classes.men} >

                <Grid item xs={1}>
                    <Navbar.Brand href="/" onClick={() => getProducts(setProducts)} >TakasEt.com </Navbar.Brand>

                </Grid>

                <Grid item xs={6} className={classes.denee}>

                    <Nav className="me-auto">
                        <Nav.Link href="/myProducts">My Products</Nav.Link>
                        <Nav.Link href="/Add">Add Product</Nav.Link>
                        <Nav.Link href="/incomings">Incoming Trade Offers</Nav.Link>
                        <Nav.Link href="/submited">Submitted Trade Offers</Nav.Link>
                    </Nav>
                    <Form>
                        <FormControl

                            id="input"
                            type="text"
                            placeholder="Search..."
                            autocomplete="off"
                            onChange={(e) => handlesetSearchTerm(e)}
                        />
                    </Form>

                </Grid>

                <Grid item xs={1}>
                    <IconButton onClick={(e) => { removeCookie("user-token"); handleRemoveCookie() }} aria-label="fingerprint" color="success" >
                        <Fingerprint />
                        <h4>{username}</h4>
                    </IconButton>

                </Grid>

            </Grid>


        </Navbar>


    )
}
