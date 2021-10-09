import React from 'react'


import Products from './Products/Products'
import Categories from './Categories/Categories';
import WebNavbar from './WebNavbar';



export default function App() {
    return (
        <div>
            <WebNavbar />
            <Categories />
            <Products />


        </div>
    )
}
