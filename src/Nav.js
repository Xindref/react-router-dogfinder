import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ dogs }) => {
    const [showDogs, setShowDogs] = useState(false);

    const handleMouseEnter = () => {
        setShowDogs(true);
    };

    const handleMouseLeave = () => {
        setShowDogs(false);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/dogs" className="nav-link">
                        <span>Home</span>
                    </Link>
                </li>
                <li
                    className="nav-item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="nav-link">
                        Dogs
                    </span>
                    {showDogs && (
                        <ul className="sub-menu">
                            {dogs.map((dog) => (
                                <li key={dog.name}>
                                    <Link to={`/dogs/${dog.name}`}>
                                        <span>{dog.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
