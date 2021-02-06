import {createContext} from 'react';

export const ProjectContext = createContext({
    projArray: [
    {
        title: "Media Recommender App",
        role: "API and JavaScript Programmer",
        text: "A web app that allows user to search a topic for movies, books, or songs to consume during quarantine. The project involved JavaScript, HTML, CSS, AJAX, and multiple APIs as well as dynamically built HTML. Built, debugged, and refactored multiple API calls and developed and executed the suggestions frontend app and javascript. ",
        repo: "https://github.com/brianrshort/Media-Recommender-App",
        image: "/React-Portfolio/Assets/Media.jpg",
        deploy: "https://brianrshort.github.io/Media-Recommender-App/"
    },
    {
        title: "Employee Database App",
        role: "Solo Developer",
        text: "An app that takes input from the command line to create, read, update, and delete entries in a an employee database. A solo programming project including foreign keys and joins, SQL and MySQL as well as Node.js.",
        repo: "https://github.com/brianrshort/Employee-Database-App",
        image: "/React-Portfolio/Assets/Database.jpg",
        deploy: "#"
    },
    {
        title: "Open Weather API Dashboard",
        role: "Solo Developer",
        text: "A weather dashboard app that uses the Open Weather API.",
        repo: "https://github.com/brianrshort/open-weather-api-weather-dashboard",
        image: "/React-Portfolio/Assets/Weather.jpg",
        deploy: "https://brianrshort.github.io/open-weather-api-weather-dashboard/"
    },
    {
        title: "Inquirer App",
        role: "Solo Developer",
        text: "A program that uses command line interface (CLI) to take input in from the use and generate a simple, thorough README.md file.",
        repo: "https://github.com/brianrshort/inquirer-app",
        image: "/React-Portfolio/Assets/Inquirer.jpg",
        deploy: "#"
    },
    {
        title: "Directory App",
        role: "Solo Developer",
        text: "This project uses react and the Random User API to create a 20-person set of employees with basic information that can be searched and sorted.",
        repo: "https://github.com/brianrshort/Employee-Directory-App",
        image: "/React-Portfolio/Assets/Directory.jpg",
        deploy: "https://brianrshort.github.io/Employee-Directory-App/"
    },
    {
        title: "Exercise Fitness Tracker",
        role: "Solo Developer",
        text: "An app that captures user input to log resistance or cardio exercises and uses those entries to populate a database.",
        repo: "https://github.com/brianrshort/Exercise-Fitness-Tracker",
        image: "/React-Portfolio/Assets/Exercise.jpg",
        deploy: "https://floating-spire-56790.herokuapp.com/"
    }
]
})