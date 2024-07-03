import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className="relative">
            <img className="max-h-screen w-full object-cover" src="cool-background.png" alt="" />
            <div className="absolute space-y-4 inset-0 flex flex-col items-center justify-center text-center">
                <h2 className="text-6xl text-white">Hi, This is </h2>
                <h2 className="text-6xl text-gray-800 font-bold">
                    <Typewriter
                        words={['Naimoon Jannat Prapti']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={200}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <h2 className="text-2xl text-white">A Frontend Developer</h2>
                <button className="btn transition duration-300 ease-in-out transform hover:-translate-y-1 bg-[#D12E5C] hover:scale-110 hover:bg-white hover:text-">
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default Banner;
