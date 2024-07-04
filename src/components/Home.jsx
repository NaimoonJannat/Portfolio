import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
       <div>
        <Header></Header>
         <div className="space-y-20">
            <div id="home" className="py-10">
                <Banner />
            </div>
            <div className="w-11/12 space-y-20 md:w-4/5 mx-auto">
                <div id="about-me">
                    <AboutMe />
                </div>
                <div id="skills" className="py-10">
                    <Skills />
                </div>
                <div id="projects" className="py-10">
                    <Projects />
                </div>
                <div id="contact" className="py-10">
                    <Contact />
                </div>
            </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Home;
