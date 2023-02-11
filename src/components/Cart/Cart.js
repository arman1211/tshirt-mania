import './Cart.css'
import React, { useState } from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({ cart }) => {
    const [items, setItems] = useState([])
    const handleRemoveCart = item => {


    }
    // console.log(cart)
    return (
        <div>
            <h3>Items ordered: {cart.length}</h3>
            <div className="cartproductcontainer">
                {
                    cart.length === 0 ? <h3>No items</h3> :
                        cart.map(item => <CartProduct item={item} handleRemoveCart={handleRemoveCart} />)
                }
            </div>
        </div>
    );
};

export default Cart;