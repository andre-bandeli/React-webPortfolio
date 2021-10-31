import React from 'react';
import "./usuario.scss";
import Navbar from '../Home/components/Navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import PortfolioList from './components/portfolioList/PortfolioList';


const Usuario = () => {
    return (
        <div className='usuario'>
            <Navbar />
            <Portfolio />
            <PortfolioList />
        </div>
    );
}

export default Usuario;