import React, { useState } from "react";
import { Redirect } from "react-router";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { register } from "../../src/api/api";
import background from '../PNG/background.png'
import { makeStyles } from '@material-ui/core/styles';


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

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password === rePassword) {
      let resp = await register(username, password);

      if (resp) {
        setRedirect(true);
      }
    }
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.container}>
      <div className="row justify-content-center mt-5">
        <div style={{ color: '#EF476F', marginLeft: '3rem', marginTop: '-4rem' }}>
          <h3 style={{ fontSize: '200px' }}>TAKASET.COM</h3>
        </div>
        <div className="col-md-4" style={{ marginTop: '0px', marginRight: '590px', color: 'white' }}>
          <Form onSubmit={(e) => handleRegister(e)}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                required={true}
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Label>Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required={true}
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Label>Re-Password</Label>
              <Input
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                placeholder="Re-Password"
                required={true}
              />
            </FormGroup>
            <div className="d-flex flex-row-reverse">
              <input
                type="submit"
                value="Register"
                className="btn btn-success mt-3"
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
