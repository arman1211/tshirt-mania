import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt.id} tshirt={tshirt} />)
                }
            </div>
            <div className="cart-container">
                <h3>Cart container</h3>
            </div>
        </div>
    );
};

export default Home;