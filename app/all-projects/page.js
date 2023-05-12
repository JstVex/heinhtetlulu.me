import { allProjects } from "@/data/allProjects"
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

export default function AllProjects() {
    return (
        <main>
            <h2 className="text-3xl text-zinc-700 dark:text-zinc-200 mt-12 pb-5 border-b border-zinc-800 dark:border-zinc-700">
                Here are most of the projects I&apos;ve created during my web development journey
            </h2>
            <ul>
                {allProjects.map((project) => {
                    return (
                        <li key={project.name} className="w-full my-5 sm:py-5 py-5 md:py-10 flex sm:flex-row flex-col justify-between items-center gap-x-5 px-5 hover:bg-zinc-800">
                            <h4 className="text-lg lg:w-[30%] sm:w-[40%] w-full ">
                                {project.title}
                            </h4>
                            <ul className="lg:w-[30%] sm:w-[40%] w-full text-sm text-zinc-500 mt-2 flex flex-wrap gap-x-2 items-start justify-start text-left sm:mt-0">
                                {project.tech.map((tech, techIndex) => {
                                    return (
                                        <li key={techIndex}>
                                            {tech}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="w-full flex items-center justify-end gap-x-4 sm:justify-normal sm:w-auto">
                                <a href={project.githubUrl}>
                                    <BsGithub className="text-xl dark:text-zinc-300 dark:hover:text-zinc-50" />
                                </a>
                                <a href={project.projectLink}>
                                    <BiLinkExternal className="text-xl dark:text-zinc-300 dark:hover:text-zinc-50" />
                                </a>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </main>
    )
}