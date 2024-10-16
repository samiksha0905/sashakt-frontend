import React from 'react';
import LoginSignUpPage from './LoginSignUpPage'; // Import the LoginSignUpPage component

const Home = () => {
  return (
    <div className="home-container">
      <div className="large-image-container">
        <img
          src="https://prod.drupal.aws.sesamestreet.org/sites/default/files/styles/original/public/2024-02/BeasBlock-Homepage-Button%20%282%29%20%281%29.png?itok=IvIDclP3"
          alt="Big Bird playing basketball"
        />
      </div>
      <div className="right-side-container">
        <LoginSignUpPage /> {/* Place the LoginSignUpPage component here */}
      </div>
      <div className="get-started-button-container">
        <p className="get-started-button-text">SASHAKT - EMPOWERING CHILDREN<br />Click on "Get started" to get a glimpse of the app!</p>

        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;