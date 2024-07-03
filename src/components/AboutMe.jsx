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
                                    <h4 className="text-lg text-gray-800 font-semibold text-center md:text-left">
                                        Naimoon Jannat Prapti 
                                    </h4>
                                    <p className="text-gray-800">
                                        Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                                        Integer velit ligula, semper sed nisl in, cursus commodo
                                        elit. Pellentesque sit amet mi luctus ligula euismod
                                        lobortis ultricies et nibh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                    <h1 className="text-2xl font-semibold">My Education</h1>
                    <h2>B.Sc in CSE (3rd Year, 3rd semester)</h2>
                    <h2>Manarat International University</h2>
                </div>
                </div>
                {/* <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-semibold">Get to Know Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aut, officiis quae nihil ab perspiciatis quam autem non totam mollitia ipsa tempore, quidem ducimus cumque quisquam dignissimos sequi obcaecati! Asperiores autem quia laborum dolores veritatis fugiat neque quibusdam dolorum laudantium?</p>
            </div> */}
                
            </div>
        </div>
    );
};

export default AboutMe;
