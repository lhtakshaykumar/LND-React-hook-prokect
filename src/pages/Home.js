import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button } from '@mui/material';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <Container>
      <h1>Welcome to Dynamic Travel Guide</h1>
      <TextField
        label="Search Destinations"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch} variant="contained" color="primary">
        Search
      </Button>
    </Container>
  );
};

export default Home;
