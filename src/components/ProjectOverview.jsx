import { Link, useLoaderData, useParams } from "react-router-dom";
import Subtitle from "./Subtitle";
import Title from "./Title";


const ProjectOverview = () => {
    const projects = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const project = projects.find((project) => project.id == intId);
    return (
        <div className="card p-2 lg:card-side lg:py-20">
        <div className="lg:w-1/2 bg-[#1313130D] rounded-2xl  flex justify-center items-center">
            <div className="mockup-phone">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    <img className="h-full w-full" src={project.image} />
    </div>
  </div>
</div>
        </div>
        <div className="card-body lg:w-1/2">
            <Title title={project.name}></Title>
            <div className="divider"></div>
            <div>
                <p className=" text-base">
                    <span className="text-black font-semibold">Overview: </span>
                    {project.description}
                </p>

                {project.technology.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-[#23BE0A0D] btn text-[#F12F78] lg:p-3 font-semibold rounded-3xl text-xs"
                    >
                        {tag}
                    </div>
                ))}
            </div>
            <div className="divider"></div>
            <div className="">
                <Subtitle subtitle="Best Features"></Subtitle>
                <div>
                {project.features.map((tagg, index) => (
                    <div
                        key={index}
                        className=" text-[#F12F78] font-semibold text-lg"
                    >
                       {index+1}. {tagg}
                    </div>
                ))}
                </div>
              
            </div>
            <div className="card-actions justify-start flex gap-4">
                <Link to={project.clientLink} target="_blank" className="btn text-black font-semibold">View Client Code</Link>
                <Link to={project.liveLink} target="_blank" className="btn bg-[#F12F78] text-white font-semibold">
                   Live {project.name}
                </Link>
                <Link to={project.serverLink} target="_blank" className="btn bg-gray-800 text-white font-semibold">
                View Server Code
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ProjectOverview;