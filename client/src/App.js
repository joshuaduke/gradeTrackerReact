import React from 'react';

import {BrowserRouter as Router, Navigate, Route,  Routes, useNavigate } from 'react-router-dom' ;
import { appRoutes } from './routes';
import { checkToken } from './authentication/authToken.js';
import RequireAuth from './authentication/protectedRoutes'

console.log(checkToken());


function App() {

  return (
    <Router>
      <Routes>
        {appRoutes.map(({ path, element, protected: protect}, index)=>{
          return !protect ? (
            <Route path={path} element={element} key={index} />
          ) : (
            <Route path={path} element={<RequireAuth>{element}</RequireAuth>} key={index}/> 
          );
        })}
          <Route path='*' element={<Navigate to='/' />}/> 

      </Routes>
    </Router>
  );
}

export default App;
