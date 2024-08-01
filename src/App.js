import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Destination = lazy(() => import('./pages/Destination'));
const Favorites = lazy(() => import('./pages/Favorites'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<Destination />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
