import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h1>Home Component</h1>
        <a
          href="#"
          className="btn btn-outline-danger"
          onClick={() => navigate(-1)}
        >
          Back
        </a>
        <a
          href="#"
          className="btn btn-outline-info"
          onClick={() => navigate("/about")}
        >
          About
        </a>
      </div>
    );
  };

export default Home;

