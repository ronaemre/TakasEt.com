import React, { useState } from 'react'


import Products from './Products/Products'
import Categories from './Categories/Categories';
import WebNavbar from './WebNavbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from './AddProduct';
/* import { Router } from '@material-ui/icons'; */



export default function App() {
    const [products, setProducts] = useState([]);
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <React.Fragment>
                                <WebNavbar />
                                <Categories />
                                <Products products={products} setProducts={setProducts} />
                            </React.Fragment>
                        )}>
                    </Route>
                    <Route
                        path="/add"
                        component={AddProduct}
                    >
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
