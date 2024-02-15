import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import SubjectSelector from './Component/SubjectSelector';

const App = () => {
  return (
    <Router>
      <div>
       <div className='m-5'></div>
        <Routes>
          <Route path="/department/:department" element={<SubjectSelector />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
