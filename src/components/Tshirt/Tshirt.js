import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt }) => {
    const { name, picture, price } = tshirt
    return (
        <div className='tshirt-details'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p className='tshirt-price'>Price: {price}$</p>
            <button className='buy-button'>Buy now</button>

        </div>
    );
};

export default Tshirt;