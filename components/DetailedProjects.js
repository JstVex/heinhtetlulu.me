'use client'

import Image from "next/image"
import { useState } from "react";
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import { clsx } from 'clsx'

export default function DetailedProjects({ project }) {
    const [appear, setAppear] = useState(false);

    const handleAppear = () => {
        setAppear(true);
    }

    const handleDisappear = () => {
        setAppear(false);
    }

    return (
        <div className="border-l relative md:px-10 xl:px-20 border-zinc-700/50 w-[100%] after:content-[''] after:h-[200px] after:w-[1px] after:absolute after:left-[-1px] after:top-[80%] after:transition-all after:duration-700 after:bg-gradient-to-b from-transparent via-blue-400 to-transparent after:opacity-0 hover:after:top-[25%] hover:after:opacity-100">
            <div className="xl:w-[90%] lg:w-[95%] rounded-lg h-full bg-zinc-800 mx-2">
                <div className="relative w-full h-80 bg-zinc-100" onMouseEnter={handleAppear} onMouseLeave={handleDisappear}>
                    <div className={clsx(`absolute transition-all duration-500 w-full h-full bg-zinc-100 z-10 flex items-center justify-center`, appear ? ' opacity-0' : 'opacity-100')}>
                        <BsGithub className="text-4xl dark:text-zinc-900" />
                    </div>
                    <Image
                        src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
                        alt={project.alt}
                        width={1000}
                        height={288}
                        className="w-auto h-80 min-w-full min-h-80 absolute z-0 bg-cover"
                    />
                </div>
                <h3 className="text-2xl mt-4 mx-4 mb-1 font-semibold">
                    {project.title}
                </h3>
                <p className="text-md mx-4 mt-0 text-zinc-300">
                    {project.description}
                </p>
                <ul className="text-sm my-4 text-zinc-400 flex items-center justify-around flex-wrap">
                    {project.tools.map((tool) => {
                        return (
                            <li key={tool} className="">
                                {tool}
                            </li>
                        )
                    })}
                </ul>
                <div className="flex items-center justify-end gap-x-4 p-5">
                    <a href={project.githubUrl}>
                        <BsGithub className="text-2xl dark:text-zinc-200 dark:hover:text-zinc-50" />
                    </a>
                    <a href={project.projectLink}>
                        <BiLinkExternal className="text-2xl dark:text-zinc-200 dark:hover:text-zinc-50" />
                    </a>
                </div>

            </div>
        </div>
    )
}