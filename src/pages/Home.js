import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-header'>
      <h1 className='home-content1'>Providing Full Range Of High Services</h1>
      <p>
        Ad reprehenderit tempor enim quis esse magna occaecat do. Lorem ipsum
        veniam sit voluptate sunt mollit. Est quis laboris enim id veniam in
        proident incididunt.
      </p>

      <Link to='/contact' className='contact'>
        Contact Us
      </Link>
    </div>
  );
};

export default Home;
