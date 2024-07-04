import { useEffect, useState } from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";


const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect( () =>{
        fetch('projectData.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    } ,[])
    return (
        <div className="text-center lg:my-10">
            <Title title="My Projects"></Title>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    projects.map(project => <ProjectCard
                    key="project.id"
                    project={project}
                    ></ProjectCard>)
                }
            </div>
            
        </div>
    );
};

export default Projects;