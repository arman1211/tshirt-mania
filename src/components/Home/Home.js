import { computeHeadingLevel } from '@testing-library/react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            alert('items already added')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const handleRemoveCart = item => {

        const removeItem = cart.filter(ts => ts._id !== item._id)

        setCart(removeItem)

    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveCart={handleRemoveCart} />
            </div>
        </div>
    );
};

export default Home;