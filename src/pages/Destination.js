// src/pages/Destination.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

const Destination = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/destinations/${id}`)
      .then((response) => response.json())
      .then((data) => setDestination(data));
  }, [id]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
    </Container>
  );
};

export default Destination;
