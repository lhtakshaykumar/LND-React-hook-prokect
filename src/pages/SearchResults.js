// src/pages/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, List, ListItem, ListItemText } from '@mui/material';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://api.example.com/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, [query]);

  return (
    <Container>
      <h1>Search Results for "{query}"</h1>
      <List>
        {results.map((result) => (
          <ListItem button component="a" href={`/destination/${result.id}`} key={result.id}>
            <ListItemText primary={result.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SearchResults;
