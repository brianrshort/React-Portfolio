import React, { useContext } from 'react';
import { Project } from '../Components/Project';
import { ProjectContext } from "../Utils/ProjectContext";



export function Projects() {
    const { projArray } = useContext(ProjectContext);

    const cardsMap = projArray.map(p => {
        //console.log(codeProjects);
        //console.log(p.image);
        return <Project key={p.title} title={p.title} text={p.text} repo={p.repo} deploy={p.deploy} image={p.image} />
    })

    return (
        <div>
            {cardsMap}
        </div>
    )

}