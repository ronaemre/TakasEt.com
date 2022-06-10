import React, { useState } from 'react'
import { Redirect } from "react-router";
import { useCookies } from "react-cookie"


import { Form, FormGroup, Label, Input } from "reactstrap";

import { login } from "../api/api"
import background from '../PNG/background.png'
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0
    }
}));

const Login = ({ username, password, setPassword, setUsername, setCookie }) => {
    /*   const [username, setUsername] = useState("");
      const [password, setPassword] = useState(""); */
    const [redirect, setRedirect] = useState(false);
    const classes = useStyles();


    const loginHandler = async (e) => {
        e.preventDefault();
        let resp = await login(username, password, setPassword, setUsername);


        if (resp) {
            setRedirect(true);
            setCookie("user-token", resp.data.token)

        }


    };

    if (redirect) {
        return <Redirect to="/" />;
    }

    function RegisterPage() {
        window.location = "/register"
    }


    return (
        <div className={classes.container}  >
            <div className="row justify-content-center mt-5">
                <div style={{ color: '#EF476F', marginLeft: '3rem', marginTop: '-4rem' }}>
                    <h3 style={{ fontSize: '200px' }}>TAKASET.COM</h3>

                </div>
                <Divider />
                <div className="col-md-4" style={{ marginRight: '590px', color: 'white' }} >
                    <Form onSubmit={(e) => loginHandler(e)}>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Username"
                                required={true}
                            />
                        </FormGroup>
                        <FormGroup className="mt-4">
                            <Label for="examplePassword">Password</Label>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                required={true}
                            />
                        </FormGroup>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <div className="d-flex flex-row-reverse">
                                <input
                                    onClick={() => RegisterPage()}
                                    type="submit"
                                    value="Register"
                                    className="btn btn-success mt-3"
                                />
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn btn-success mt-3"
                                />
                            </div>

                        </div>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
