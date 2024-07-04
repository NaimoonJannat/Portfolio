import { Link } from "react-router-dom";
import Title from "./Title";
const ProjectCard = ({project}) => {
   // const {id, name, image, description, features, technologies, serverLink, clientLink, liveLink} = project;
    const {id, name, image} = project;
   return (
        <Link to={`/project-overview/${id}`}>
            <div className="mockup-phone">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">
        <img className="h-full w-full" src={image} alt="" />
    </div>
    <Title title={name}></Title>
  </div>
</div>
           
        </Link>
    );
};

export default ProjectCard;