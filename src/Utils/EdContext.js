import {createContext} from 'react';

export const EdContext = createContext({
        institutions: [
            {
                name: "Michigan State University",
                degree: "Web Developer Bootcamp Certificate",
                attended: "September 2020 - March 2021"
            },
            {
                name: "University of Michigan",
                degree: "Master of Fine Arts - Fiction/Creative Writing",
                attended: "August 2007 - May 2010"
            },
            {
                name: "Pennsylvania State University",
                degree: "Bachelor of Arts in Asian Studies",
                attended: "August 1996 - May 2000"
            }
        ]
    })
