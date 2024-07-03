const Banner = () => {
    return (
        <div className="relative">
            <img className="max-h-screen w-full object-cover" src="cool-background.png" alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h2 className="text-6xl text-white">Hi, This is </h2>
                <h2 className="text-6xl text-[#5A2C08] font-bold">Naimoon Jannat Prapti</h2>
                <h2 className="text-2xl text-white">A Frontend Developer</h2>
            </div>
        </div>
    );
};

export default Banner;
