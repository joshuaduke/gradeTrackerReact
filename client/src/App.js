import React from 'react';
import logo from './logo.svg';
import Semesters from './semesters/Semesters';
import SemestersEdit from './semesters/SemestersEdit';
import Courses from './courses/Courses';
import CoursesEdit from './courses/CoursesEdit';
import Class from './classes/Class';
import ClassEdit from './classes/ClassEdit';
import Grades from './cgpa/Grades';
import Settings from './settings/Settings';
import Scales from './cgpa/Scales';
import Login from './authentication/Login';
import Register from './authentication/Register';
import {BrowserRouter as Router, Navigate, Route,  Routes, useNavigate } from 'react-router-dom' ;

const token = localStorage.getItem('token');


function App() {

  return (
    <Router>
      <Routes>
        {!token && (
          <>
            <Route path="/Login" element={<Login/> } />
            <Route path="/Register" element={<Register/>} />
          </>
        )}
        {token && (
          <>
          <Route path='/' element={<Semesters /> } />
          
          <Route path="/Semesters/edit" element={<SemestersEdit/>} />
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/Courses/edit" element={<CoursesEdit/>} />
          <Route path="/Courses/:id" element={<Class/>} />
          <Route path="/Courses/:id/edit" element={<ClassEdit/>} />
          <Route path="/Scales" element={<Scales/>} />
          <Route path="/Grades" element={<Grades/>} />
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="*" element={<Login/>}/>
          </>
        )}
        <Route path="*" element={<Navigate to={token ? '/' : '/Login'}/>} />
      </Routes>
    </Router>
  );
}

export default App;
