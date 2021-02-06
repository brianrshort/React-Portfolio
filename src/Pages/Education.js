import React, {useContext} from "react";
import { EdContext } from "../Utils/EdContext";

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

export function Education() {
    const {institutions} = useContext(EdContext);

    const map = institutions.map(school => {
        return (
            <div style={styles.info}>
                <h4>{school.name}</h4>
                <p>{school.degree} // <em>{school.attended}</em></p>
            </div>
        )
    }
    );

    return (
        <div style={styles.background} className="m-3 pb-3">
        <h2 className="mt-3" style={styles.name}>Education</h2>
        {map}
        </div>
    )
}