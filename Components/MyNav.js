import { Link, useLocation } from "react-router-dom";
import React, { useState } from 'react';

const MyNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const location = useLocation();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const handleEmojiClick = () => {
    toggleBox();
  };

  const boxStyle = {
    display: showBox ? 'block' : 'none',
    backgroundColor: '#fff',
    width: '300px',
    padding: '10px',
    position: 'absolute',
    top: '60px',
    right: '10px',
    zIndex: '999',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid #ccc',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SASHAKT
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.2jeT_WyJMbhoJHKlMnBI4gHaHa&pid=Api&P=0&h=180"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/s2">
                  Activities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <img
                className="emoji-img"
                src={sessionStorage.getItem('emoji')}
                onClick={handleEmojiClick}
              />
            </div>
          </div>
        </div>
      </nav>
      <div style={boxStyle}>
        <img className="emoji-img2" src={sessionStorage.getItem('emoji')} />
        <h5 className='username'>{sessionStorage.getItem("username")}</h5>
        <Link to="/select" className="custom-link">
          <button className="custom-button">SWITCH PROFILE</button>
        </Link>
      </div>
    </div>
  );
};

export default MyNav;
