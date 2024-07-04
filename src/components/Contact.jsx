import { useRef } from 'react';
import Title from "./Title";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ob45rhk', 'template_yvtkwfq', form.current, 'YsE6lpKl-Lo3A7LrF')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, please try again.");
            });

        e.target.reset();
    };

    return (
        <section className="py-6 text-gray-800">
            <Title title="Contact Me"></Title>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-3xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/naimoon-jannat922"><img className="mr-3 w-10" src="linkedin.gif" alt="LinkedIn" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/naimoon.jannat/"><img className="mr-3 w-10" src="facebook.gif" alt="Facebook" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/NaimoonJannat"><img className="mr-3 w-10" src="github.gif" alt="GitHub" /></a>
                        </p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" name="user_name" placeholder="John Doe" className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300" required />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" name="user_email" placeholder="doe@john.com" className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300" required />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea name="message" rows="3" className="p-2 block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-300" required></textarea>
                    </label>
                    <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-gray-800 text-white focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
