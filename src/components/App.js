import React, { useState, useEffect } from 'react'


import Products from './Products/Products'
import Categories from './Categories/Categories';
import WebNavbar from './WebNavbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from './AddProduct';
import Login from './Login';
import { isAuthenticated } from '../api/api';
import MyProducts from './MyProducts/MyProducts'






export default function App() {
    const [products, setProducts] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");  //giriş yapan user id

    const handleIsAuthenticated = async () => {
        let resp = await isAuthenticated();

        setUsername(resp.username);
        setUserId(resp.id)

    };

    useEffect(() => {
        handleIsAuthenticated();
    });
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <React.Fragment>
                                <WebNavbar setProducts={setProducts} username={username} userId={userId} />
                                <Categories setProducts={setProducts} />
                                <Products products={products} setProducts={setProducts} userId={userId} />
                            </React.Fragment>
                        )}>
                    </Route>
                    <Route
                        path="/add"
                    >
                        <AddProduct userId={userId} />
                    </Route>
                    <Route
                        path="/login"

                    >
                        <Login
                            username={username}
                            password={password}
                            setPassword={setPassword}
                            setUsername={setUsername}
                        />
                    </Route>
                    <Route
                        path="/trades"
                    >

                    </Route>

                    <Route
                        path="/myProducts"
                    >
                        <MyProducts products={products} setProducts={setProducts} userId={userId} />

                    </Route>



                </Switch>
            </div>
        </Router>


        /*   <div>
              <WebNavbar />
              <Categories />
              <Products />
  
  
          </div> */
    )
}
