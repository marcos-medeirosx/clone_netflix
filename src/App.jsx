import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Api from './Api';
import MovieList from './components/MovieList';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import LoginPage from './pages/Login';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('authenticated') === 'true';
  });

  useEffect(() => {
    const loadAll = async () => {
      let list = await Api.getHomeList();
      setMovieList(list);

      let action = list.filter(i => i.slug === 'action');
      let randomChosen = Math.floor(Math.random() * (action[0].items.results.length - 1));
      let chosen = action[0].items.results[randomChosen];

      let chosenInfo = await Api.getMovieInfo(chosen.id, 'movie');
      setFeaturedData(chosenInfo);
    };

    if (isAuthenticated) {
      loadAll();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('authenticated', 'true'); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authenticated');
  };

  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/" element={isAuthenticated ? (
            <>
              <Header onLogout={handleLogout} />
              {featuredData && <FeaturedMovie item={featuredData} />}
              <section className="lists">
                {movieList.map((item, key) => (
                  <MovieList key={key} title={item.title} items={item.items} />
                ))}
              </section>
            </>
          ) : (
            <Navigate to="/login" />
          )} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
