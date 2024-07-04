import Subtitle from "./Subtitle";
import Title from "./Title";
import { 
    IoLogoFirebase, 
    IoLogoHtml5, 
    IoLogoCss3, 
    IoLogoJavascript, 
    IoLogoNodejs 
} from "react-icons/io5";
import { 
    SiTailwindcss, 
    SiMongodb, 
    SiExpress, 
    SiC, 
    SiPython, 
    SiAdobephotoshop, 
    SiAdobeillustrator, 
    SiMicrosoftword, 
    SiMicrosoftpowerpoint, 
    SiGithub,
    SiReact
} from "react-icons/si";

const Skills = () => {
    return (
        <div>
            <Title title="My Skills"></Title>
            <div className="flex flex-col md:flex-row gap-6">
                <div>
                    <Subtitle subtitle="Soft Skills"></Subtitle>
                    <section className="text-gray-800">
                        <div className="container mx-auto">
                            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                {[
                                    "Good communication and presentation skills",
                                    "Fast learning skill",
                                    "Creativity",
                                    "Adaptability",
                                    "Leadership qualities and management skills",
                                    "Teamwork skills",
                                    "Event Organizing and managing skills"
                                ].map((skill, index) => (
                                    <div key={index} className="relative col-span-12 space-y-6 sm:col-span-9">
                                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#F12F78]">
                                                <h3 className="text-xl font-semibold tracking-wide">{skill}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <Subtitle subtitle="Technical Skills"></Subtitle>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-5xl text-gray-800">
                        <IoLogoHtml5 style={{ color: "#E34F26" }} />
                        <IoLogoCss3 style={{ color: "#1572B6" }} />
                        <SiTailwindcss style={{ color: "#38B2AC" }} />
                        <IoLogoJavascript style={{ color: "#F7DF1E" }} />
                        <SiReact style={{ color: "#61DAFB" }} />
                        <IoLogoFirebase style={{ color: "#FFCA28" }} />
                        <SiMongodb style={{ color: "#47A248" }} />
                        <IoLogoNodejs style={{ color: "#339933" }} />
                        <SiExpress style={{ color: "#000000" }} />
                        <SiC style={{ color: "#A8B9CC" }} />
                        <SiPython style={{ color: "#3776AB" }} />
                        <SiAdobephotoshop style={{ color: "#31A8FF" }} />
                        <SiAdobeillustrator style={{ color: "#FF9A00" }} />
                        <SiMicrosoftword style={{ color: "#2B579A" }} />
                        <SiMicrosoftpowerpoint style={{ color: "#D24726" }} />
                        <SiGithub style={{ color: "#181717" }} />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
