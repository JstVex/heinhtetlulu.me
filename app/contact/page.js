'use client'

import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [appreciation, setAppreciation] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const submit = { name, email, message };
        const sendMessage = async () => {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(submit)
                });
                const data = await response.text();
                setName('');
                setEmail('');
                setMessage('');
                console.log(response);
                console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        setAppreciation('Thank you for getting in touch. I will reply as soon as possible!')
        sendMessage();
    }

    return (
        <div className="flex flex-col items-center ">
            <h3 className="text-5xl font-bold mt-12 text-zinc-800 dark:text-zinc-100">
                Contact Me
            </h3>
            <p className="text-center w-[90%] mt-4 text-zinc-800 dark:text-zinc-400  md:w-[75%]">
                I&apos;m super willing to be a part of any idea or project. Feel free to contact me for any question or just to say hi. I would be so grateful to meet new people! You can contact me through the form or directly to <a href="mailto: heinhtetlulu14@gmail.com" className="underline">my email</a> as well.
            </p>
            <form className="mt-12 flex flex-col items-center gap-y-5" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="absolute left-[-9999px]">Name</label>
                    <input type="text" id="name" placeholder="Name" className="bg-zinc-50 dark:bg-zinc-900 text-zinc-800 rounded-lg px-4 outline-none ring-1 ring-zinc-900/5 dark:ring-white/10 dark:text-zinc-300 w-72  h-[3.2rem] placeholder:text-zinc-500 md:w-96" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email" className="absolute left-[-9999px]">Email</label>
                    <input type="email" id="email" placeholder="Email" className="bg-zinc-50 dark:bg-zinc-900 text-zinc-800 rounded-lg px-4 outline-none ring-1 ring-zinc-900/5 dark:ring-white/10 dark:text-zinc-300 w-72 h-[3.2rem] placeholder:text-zinc-500 md:w-96" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" className="bg-zinc-50 dark:bg-zinc-900 text-zinc-800 rounded-lg w-72 h-40 px-4 py-3 outline-none ring-1 ring-zinc-900/5 dark:ring-white/10 dark:text-zinc-300 placeholder:text-zinc-500 md:w-96" value={message} onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <button className="p-4 rounded-lg max-w-[150px] bg-zinc-100 text-zinc-800 ring-1 ring-zinc-900/5 dark:ring-white/10 w-[50%] mx-auto mt-3 hover:dark:bg-zinc-50">
                    Send Message!
                </button>
                <p className="text-lg text-zinc-600 dark:text-blue-300 ">
                    {appreciation}
                </p>
            </form>
        </div>
    )
}