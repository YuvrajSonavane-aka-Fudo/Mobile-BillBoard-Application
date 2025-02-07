import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import BigEventsCard from './Components/BigEventsCard';
import SmallEventsCard from './Components/SmallEventsCard';
import YellowEventsCard from './Components/YellowEventsCard';
import NavBar from './Components/NavBar';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';

const App = () => {
  const places = ["Place 1", "Place 2", "Place 3", "Place 4"];
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      document.body.classList.add('no-margin');
    } else {
      document.body.classList.remove('no-margin');
    }
  }, [location]);

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && <NavBar />}
      <Routes>
        <Route path="/" element={
          <>
            <h1 className="heading">Explore events in the city</h1>
            <div className="cardContainer">
              <BigEventsCard />
              <SmallEventsCard text="Event 1" />
              <YellowEventsCard places={places} />
            </div>
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);