import React from 'react';
import { Route, Routes } from "react-router-dom"
import HomePage from '../routes/HomePage';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/"><HomePage /></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;