import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const styles= {
    //backgroundColor: "#314d64",
    text: {
        fontFamily: "'Permanent Marker', cursive",
        color: "white",
    },
    link: {
        fontFamily: "'Lato', sans-serif",
        color: "#8EAFBD"
    }
}

export function Header() {
    return (
        <React.Fragment>
        <div >
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
        <Link className="navbar-brand" to="/" style={styles.text}>Brian Short || Web Developer</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/" style={styles.link}>About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/projects" style={styles.link}>Projects</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/education" style={styles.link}>Education</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/interests" style={styles.link}>Interests</Link>
            </li>
            </ul>
        </div>
        </nav>
        </div>
        </React.Fragment>
    )
}