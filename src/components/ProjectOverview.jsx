

const ProjectOverview = () => {
    return (
        <div className="card p-2 lg:card-side lg:py-20">
        <div className="lg:w-1/2 bg-[#1313130D] rounded-2xl  flex justify-center items-center">
            <div className="mockup-phone">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    <img className="h-full w-full" src="studybud.png" />
    </div>
  </div>
</div>
        </div>
        <div className="card-body lg:w-1/2">
            <h2 className="text-4xl font-bold">{}</h2>
            <p className="text-[#131313CC] text-base">By : {}</p>
            <div className="divider"></div>
            <p>{}</p>
            <div className="divider"></div>
            <div>
                <p className=" text-base">
                    <span className="text-black font-semibold">Review:</span>{" "}
                    {}
                </p>

                {/* {book.tags.map((tag, index) => (
                    <div
                        key={index}
                        className="bg-[#23BE0A0D] btn text-[#23BE0A] lg:p-3 font-semibold rounded-3xl text-xs"
                    >
                        {tag}
                    </div>
                ))} */}
            </div>
            <div className="divider"></div>
            <div className="flex gap-4">
                <div>
                    <p className="text-[#131313B2] text-base">Number of pages: </p>
                    <p className="text-[#131313B2] text-base">Publisher: </p>
                    <p className="text-[#131313B2] text-base">Year of Publishing: </p>
                    <p className="text-[#131313B2] text-base">Rating: </p>
                </div>
                <div>
                    <p className="text-black font-bold">{}</p>
                    <p className="text-black font-bold">{}</p>
                    <p className="text-black font-bold">{}</p>
                    <p className="text-black font-bold">{}</p>
                </div>
            </div>
            <div className="card-actions justify-start flex gap-4">
                <button className="btn text-black font-semibold">Read</button>
                <button className="btn bg-[#50B1C9] text-white font-semibold">
                    Wishlist
                </button>
            </div>
        </div>
    </div>
    );
};

export default ProjectOverview;