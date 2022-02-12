import Login from '../authentication/Login'
import Register from  '../authentication/Register'
import Semesters from '../semesters/Semesters'
import SemestersEdit from '../semesters/SemestersEdit'
import Courses from '../courses/Courses'
import CoursesEdit from '../courses/CoursesEdit'
import Class from '../classes/Class'
import ClassEidt from '../classes/ClassEdit'
import Scales from '../cgpa/Scales'
import Grades from '../cgpa/Grades'
import Settings from '../settings/Settings'
import { Navigate } from 'react-router-dom'

export const appRoutes = [
    { path: '/', element: <Semesters/>, protected: true},
    { path: '/Semesters/edit', element: <SemestersEdit/>, protected: true},
    { path: '/login', element: <Login/>, protected: false},
    { path: '/register', element: <Register/>, protected: false},
    { path: '/:semesterId', element: <Courses />, protected: true},
    { path: '/courses/:semesterId/edit', element: <CoursesEdit />, protected: true},
    { path: '/courses/:semesterId/:courseId', element: <Class />, protected: true},
]