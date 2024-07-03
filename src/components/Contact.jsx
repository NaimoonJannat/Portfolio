import Title from "./Title";

const Contact = () => {
    return (
        <section className="py-6 text-gray-800">
            <Title title="Contact Me"></Title>
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<a target="_blank" href="https://www.linkedin.com/in/naimoon-jannat922"><img className="mr-3 w-10" src="linkedin.gif" alt="" /></a>
					<a target="_blank" href="https://www.facebook.com/naimoon.jannat/"><img className="mr-3 w-10" src="facebook.gif" alt="" /></a>
					<a target="_blank" href="https://github.com/NaimoonJannat"><img className="mr-3 w-10" src="github.gif" alt="" />
                    </a>
                </p>
			</div>
		</div>
		<form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="John Doe" className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="doe@john.com" className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="p-2 block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-gray-800 text-white focus:ring-violet-400 hover:ring-violet-400">Submit</button>
		</form>
	</div>
</section>
    );
};

export default Contact;