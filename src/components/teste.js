import React from 'react';
import { Link } from 'react-router-dom';

const Teste = () => {
    return (
        
        <header>
            
            <div>
                <Link to="/uncontrolled"> Uncontrolled </Link>
                <Link to="/controlled"> Controlled </Link>
                <Link to="/user"> User </Link>
                <Link to="/login">Log-in</Link>
            </div>
        </header>
    );
};

export default Teste;