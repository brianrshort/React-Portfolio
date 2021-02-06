import React from 'react';

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

export function Interests() {
    return (
        <div className="m-3 p-3" style={styles.background}>
            <h1 style={styles.name}>Interests</h1>
            <p>I have a passion for the power of the web—the way that it connects and empowers people all over the world. As a writer and editor with 20 years of experience, I'm passionate about understanding people, sharing knowledge, and the ways the web helps people engage brands, ideas, and each other.</p>
            <p>Outside of work, I enjoy hiking with my family and watching pretty much any movie. I lived in Mizusawa in northern Japan for three years, where I played taiko drums with a local group, tried waterfall meditation, and plunked 100-yen coins into UFO Catchers at the local arcade.</p>
            <p>I'm an avid reader, with a nightstand full of books. The last book I read that I'd recommend was <em>Caging Skies</em> by Christine Leunens.</p>
        </div>
    )
}