import React from 'react';
import './DandD.css';
import { Link } from 'react-router-dom';

const DandD = () => {
    return (
        <div className="dandd-container">
            <img src="https://tse2.mm.bing.net/th?id=OIP.orczu7Drrxupz4faquKgGgHaEK&pid=Api&P=0&h=180" width="1550"height="650"/>
            <Link to="/D">
            <button className="cute-button">Click Me</button>
            </Link>
        </div>
    );
}

export default DandD;