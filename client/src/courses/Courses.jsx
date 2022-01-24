import React from "react";
import Header from "../general/Header";
import Navbar from "../general/Navbar";
import CourseInfo from "./CourseInfo";
import CoursesStats from "./CoursesStats";

export default function Courses(){
    return(
        <div>
            <Header pageTitle='Courses' previousPage='Fall 2019'/>
            <CoursesStats/>
            <CourseInfo courseName="WEB 322" 
                        gpa="3.0" 
                        gradePercentage="88.9" 
                        gradeLetter="A"/>

            <CourseInfo courseName="GAM 537" 
                        gpa="4.0" 
                        gradePercentage="95" 
                        gradeLetter="A+"/>
            <Navbar/>
        </div>
    )
}