import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Container, Navbar, Nav, FormControl, Form } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { Fingerprint } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from '../api/api'


const useStyles = makeStyles((theme) => ({
    SearchInput: {

    },
    searchButton: {

        display: 'flex',

    },
    form: {
        marginRight: '480px',
        display: 'flex',
        alignItems: 'center',
    },
    enterenceDiv: {
        marginRight: '-200px'
    },
    navbar: {
        backgroundColor: '#EF476F'
    }

}));

export default function WebNavbar({ setProducts }) {
    const classes = useStyles();
    return (
        <div>
            <Navbar variant="dark" className={classes.navbar}>
                <Container>
                    <Navbar.Brand href="#home" onClick={() => getProducts(setProducts)} >TakasEt.com</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="/Add">+Product</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form className={classes.form}>
                        <FormControl
                            className={classes.SearchInput}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Button className={classes.searchButton} variant="contained">Search</Button>
                    </Form>
                    <div id={"enterence"} className={classes.enterenceDiv}>
                        <Button>TAKAS ET !</Button>
                        <IconButton aria-label="fingerprint" color="success">
                            <Fingerprint />
                        </IconButton>
                    </div>
                </Container>
            </Navbar>

        </div>
    )
}
