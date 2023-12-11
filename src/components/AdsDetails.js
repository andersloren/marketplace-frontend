import React from 'react';
import { useParams } from 'react-router-dom';

const AdsDetails = () => {
    const params = useParams();
  
    // using useEffect you can call get ad details by id and then set the response into the booking object data in a card
  
    return (
      <div>
        <h3>Details</h3>
        <p>ID: {params.id}</p>
      </div>
    );
  };

export default AdsDetails;