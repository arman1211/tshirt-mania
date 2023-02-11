import React from 'react';
import './CartProduct.css'

const CartProduct = ({ item, handleRemoveCart }) => {
    const { picture, name, price } = item

    return (
        <div className='cartproduct'>
            <div className="image-section">
                <img src={picture} alt="" />
                <svg onClick={() => handleRemoveCart(item)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className='svg' stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </div>
            <h3>{name}</h3>
        </div>
    );
};

export default CartProduct;