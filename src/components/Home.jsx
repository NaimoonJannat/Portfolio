import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="space-y-20">
            <div id="home">
                <Banner />
            </div>
            <div className="w-11/12 space-y-20 md:w-4/5 mx-auto">
                <div id="about-me">
                    <AboutMe />
                </div>
                <div id="skills">
                    <Skills />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Home;
