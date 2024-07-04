import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Naimoon_Jannat_Prapti_CV.pdf';
        link.setAttribute('download', 'Naimoon_Jannat_Prapti_CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative">
            <img className="h-80 md:min-h-screen w-full object-cover" src="cool-background.png" alt="Background" />
            <div className="absolute py-50 space-y-4 inset-0 flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl md:text-6xl text-white">Hi, This is </h2>
                <h2 className="text-4xl md:text-6xl text-gray-800 font-bold">
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
                <button 
                    className="btn transition duration-300 ease-in-out transform hover:-translate-y-1 bg-[#D12E5C] hover:scale-110 hover:bg-white hover:text-black"
                    onClick={handleDownload}
                >
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default Banner;
