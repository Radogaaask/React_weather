import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/header/header';

function App() {
  return (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/month-statistics" Component={MonthStatistics}/>
    </Routes>
  </div>
  )
}

export default App;