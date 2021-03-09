import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Campgrounds from './components/Campgrounds';

import './App.css';

const App = () => {
  const [campgrounds, setCampgrounds] = useState([]);

  useEffect(async () => {
    const {
      data: { data },
    } = await axios.get('http://localhost:3000/api/v1/campgrounds');
    setCampgrounds(data);
  }, []);

  return (
    <div>
      <h1>Yelp Camp</h1>

      <Campgrounds list={campgrounds} />
    </div>
  );
};

export default App;

// APP -> fetch happens -> add fetched data to state -> send it down the component hierarchy
