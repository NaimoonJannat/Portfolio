import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <div className="w-11/12 space-y-20 md:w-4/5 mx-auto">
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Contact></Contact>
            </div>
            
        </div>
    );
};

export default Home;