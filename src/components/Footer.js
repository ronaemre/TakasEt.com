import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Navbar, Nav, FormControl, Form } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { Fingerprint } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from '../api/api'
import { Grid } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import logo from '../PNG/TAKASET.COM.png'
import google from '../SVG/footer_google_play.svg'
import store from '../SVG/footer_app_store.svg'


const useStyles = makeStyles((theme) => ({

    footer: {
        backgroundColor: '#EF476F',
        fontSize: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,

    },


}));




export default function Footer() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    function handleRemoveCookie() {
        window.location = "/login"
    }



    return (

        <Grid container className={classes.footer}>

            <Grid item xs={3}>
                <img style={{ height: '350px', width: '400px' }} src={logo} />


            </Grid>
            <Grid item xs={3}>

                <h4>Communication</h4>

                <ul style={{ fontSize: '20px' }}>
                    <li>About Us</li>
                    <li>Help and Support</li>
                    <li>Safety Tips</li>
                </ul>

            </Grid>
            <Grid item xs={3}>
                <h4></h4>
                <ul style={{ fontSize: '20px' }}>
                    <li>Why Choose TakasEt.com</li>
                    <li>Legal</li>
                    <li>Wishes</li>
                </ul>
            </Grid>
            <Grid item xs={3}>
                <h4>Download the app</h4>
                <img style={{ height: '60px', width: '300px' }} src={google} />
                <br />
                <br />
                <img style={{ height: '60px', width: '300px' }} src={store} />
            </Grid>

        </Grid>


    )
}



