import React, { useState, useEffect } from 'react'


import Products from './Products/Products'
import Categories from './Categories/Categories';
import WebNavbar from './WebNavbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from './AddProduct';
import Login from './Login';
import { isAuthenticated } from '../api/api';
import MyProducts from './MyProducts/MyProducts'
import Offers from './Offers';
import SubmitedOffers from './SubmitedOffers';
import { useCookies } from "react-cookie"
import Register from './Register';
import Footer from './Footer';


export default function App() {
    const [products, setProducts] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");  //giriş yapan user id
    const [tradeOffers, setTradeOffers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const [/* cookies */, setCookie, removeCookie] = useCookies(['user-token']);

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
                                <WebNavbar setProducts={setProducts} username={username} userId={userId} removeCookie={removeCookie} setSearchTerm={setSearchTerm} />
                                <Categories setProducts={setProducts} />
                                <Products products={products} setProducts={setProducts} userId={userId} searchTerm={searchTerm} />

                            </React.Fragment>
                        )}>
                    </Route>
                    <Route
                        path="/add"
                    >
                        <WebNavbar setProducts={setProducts} username={username} userId={userId} removeCookie={removeCookie} setSearchTerm={setSearchTerm} />
                        <AddProduct userId={userId} />
                        <Footer />
                    </Route>
                    <Route
                        path="/login"

                    >
                        <Login
                            username={username}
                            password={password}
                            setPassword={setPassword}
                            setUsername={setUsername}
                            setCookie={setCookie}
                        />
                        <Footer />
                    </Route>
                    <Route
                        path="/register"

                    >
                        <Register
                            username={username}
                            password={password}
                            setPassword={setPassword}
                            setUsername={setUsername}
                            setCookie={setCookie}
                        />
                        <Footer />
                    </Route>
                    <Route
                        path="/incomings"
                    >
                        <WebNavbar setProducts={setProducts} username={username} userId={userId} removeCookie={removeCookie} setSearchTerm={setSearchTerm} />
                        <Offers userId={userId} tradeOffers={tradeOffers} setTradeOffers={setTradeOffers} products={products} />

                    </Route>
                    <Route
                        path="/submited"
                    >
                        <WebNavbar setProducts={setProducts} username={username} userId={userId} removeCookie={removeCookie} setSearchTerm={setSearchTerm} />
                        <SubmitedOffers userId={userId} tradeOffers={tradeOffers} setTradeOffers={setTradeOffers} />
                        <Footer />
                    </Route>

                    <Route
                        path="/myProducts"
                    >
                        <WebNavbar setProducts={setProducts} username={username} userId={userId} removeCookie={removeCookie} setSearchTerm={setSearchTerm} />
                        <MyProducts products={products} setProducts={setProducts} userId={userId} />

                    </Route>



                </Switch>
            </div>
        </Router >


    )
}
