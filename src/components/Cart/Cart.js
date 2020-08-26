import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }

        const totalPopulation = cart.reduce((sum,country) => sum + country.population, 0)

    return (
        <div>
            <h1>this is a cart{cart.length}</h1>
            <h2>totalPopulation: {totalPopulation}</h2>
        </div>
    );
};

export default Cart;