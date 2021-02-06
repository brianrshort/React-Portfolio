import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const styles = {
    div: {
        backgroundColor: "white",
    },
    image: {
        width: 150,
        height: 150,
        float: "left"
    }
}

export function Project(props) {
    return (
        <Router>
        <div className="m-3 p-5" style={styles.div}>
        <img className="mr-3" style={styles.image} src={props.image} alt="Web or CLI interface" />
        <div>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
            <p>Repo: <Link to={props.repo}>{props.repo}</Link> || Deployed Site: <Link to={props.deploy}>{props.deploy}</Link></p>
        </div>
        </div>
        </Router>
    )
}