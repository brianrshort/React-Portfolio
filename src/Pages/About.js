import React from 'react';
import {Link} from 'react-router-dom';

const styles={
    background: {
        backgroundColor: "#D9F2FF",
        border: "1px solid grey"
    },
    name: {
            fontFamily: "'Permanent Marker', cursive",
            textAlign: "center"
        },
    info: {
        fontFamily: "'Lato', sans-serif",
        textAlign: "center"
    },
    body: {
        fontFamily: "'Lato', sans-serif",
        textAlign: "center",
        fontSize: "1.75em"
    }
}

export function About() {
    return (
        <React.Fragment>
        <div style={styles.background} className="container m-3 p-3">
        <h1 style={styles.name}>Hi, I'm Brian</h1>
        <p style={styles.info} className="text-muted">Ann Arbor, MI ·
            (734) 545-3035 ·
            <a href="mailto:brian.ralph.short@gmail.com" target="_blank"> brian.ralph.short@gmail.com</a> · 
            <a href="https://www.linkedin.com/in/brian-short-b3017320/" target="_blank"> LinkedIn</a> · 
            <a href="https://github.com/brianrshort" target="_blank"> Github</a> · 
            <Link to="/Assets/Resume.pdf"> Resume</Link>
        </p>
        <p style={styles.body}><strong>Web developer and award-winning content creator</strong> with a passion for the way the web connects and empowers people all over the world.</p>
        <p style={styles.info}><strong>SELECT SKILLS</strong>: HTML5, CSS3, JavaScript, React. Node.js, MySQL, MVC, Express</p>
        </div>
        </React.Fragment>
    )
}