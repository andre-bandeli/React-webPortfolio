import React from 'react';
import Navbar from '../Home/components/Navbar/Navbar';
import './academico.scss';
import Container2 from './components/container-2/Container2';
import Container from './components/container/Container';

const Academico = () => {
    return (
        <div className='academico'>
            <Navbar/>
            <Container/>
            <Container2/>
        </div>
    );
}

export default Academico;