import React from 'react';
import logo from './logo.svg';
import Semesters from './semesters/Semesters';
import SemestersEdit from './semesters/SemestersEdit';
import Courses from './courses/Courses';
import Class from './classes/Class';
import './App.css';
import Settings from './settings/Settings';
import SemestersAdd from './semesters/SemestersAdd';
import Login from './authentication/Login';
import Register from './authentication/Register';

function App() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
