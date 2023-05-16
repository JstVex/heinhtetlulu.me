import DetailedProjects from "@/components/DetailedProjects"
import { mainProjects } from "@/data/mainProjectsList"
import Link from "next/link"

export default function Projects() {
    return (
        <main className="">
            <section className="lg:w-[65%]">
                <h1 className="text-5xl mt-12 font-bold ">
                    Projects I have created
                </h1>
                <p className="text-zinc-600 mt-4 dark:text-zinc-400">
                    The best way to prove one&apos;s skills is through work and here are my proudest ones during my one year of web development journey. Check <Link href='/all-projects' className="underline dark:hover:text-zinc-300">here</Link> for all projects.
                </p>
            </section>
            <section className="my-20 flex flex-col items-center gap-y-40 p-x-10">
                {mainProjects.map((project, projectIndex) => {
                    return <DetailedProjects key={projectIndex} project={project} />
                })}
            </section>
        </main>
    )
}
