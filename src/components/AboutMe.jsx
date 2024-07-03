import Title from "./Title";

const AboutMe = () => {
    return (
        <div>
            <Title title="About Me"></Title>
            <div>
                <div className="flex gap-6 flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                        <div className="p-6 sm:p-12 text-gray-100">
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                                <img
                                    src="profile.jpg"
                                    alt=""
                                    className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700"
                                />
                                <div className="flex flex-col">
                                <h1 className="text-2xl text-gray-800 font-semibold">Get to Know Me</h1>
                                    <p className="text-gray-800">
                                    I am Naimoon Jannat Prapti, living in Bangladesh. Currently, I am pursuing a B.Sc in Computer Science and Engineering. I have a passion for web development and am dedicated to continuously learning and improving my skills in this field. In my journey, I have been exploring various web technologies and frameworks, and I enjoy building interactive and dynamic web applications. My goal is to become a proficient full-stack developer and contribute to impactful projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education  */}
                    <div className="w-full md:w-1/2">
                        <div className="p-6 sm:p-12 text-gray-100">
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                                <img
                                    src="education.png"
                                    alt=""
                                    className="self-center flex-shrink-0 w-24 h-24 border md:justify-self-start border-gray-700"
                                />
                                <div className="flex flex-col">
                                <h1 className="text-2xl text-gray-800 font-semibold">My Education</h1>
                                    <h4 className="text-lg text-gray-800 font-semibold text-left">
                                    B.Sc (3rd Year, 3rd semester) 
                                    </h4>
                                    <h4 className="text-gray-800">
                                    Computer Science and Engineering 
                                    </h4>
                                    <p className="text-gray-800">Manarat International University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 

                
            </div>
        </div>
    );
};

export default AboutMe;
