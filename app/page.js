'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import ProjectSimple from "@/components/ProjectSImple";
import LatestPosts from "@/components/LastestPosts";


const projects = [
  {
    name: 'Soteria',
    description: 'Soteria is created with the aim of helping struggling people in Myanmar.',
    link: ''
  },
  {
    name: 'Astrocat',
    description: 'A chatting app with built in cutest AI text friend called Astrocat!',
    link: ''
  },
  {
    name: 'Amara Digital Agency',
    description: 'Redesigning website for Amara Digital Marketing Agency which is one of the first digital marketing agency in Myanmar',
    link: ''
  },
  {
    name: 'Yelp Myanmar',
    description: 'A website to find resturants and cafes and their descriptions easier for Myanmar',
    link: ''
  },
  {
    name: 'Task-it Out',
    description: 'A note taking app',
    link: ''
  },
  {
    name: 'Dev x Life',
    description: 'Personal Blog of mine',
    link: ''
  }
]

export default function Home() {
  const [latestPosts, setLatestPosts] = useState([]);

  return (
    <main className="h-full">
      <section className="">
        <div className="text-5xl font-bold w-full mt-12 mb-5 lg:w-[65%] ">
          Web Developer, Student and about to be a startup Founder
        </div>
        <div className="text-md text-zinc-300 w-full lg:w-[65%]">
          I&apos;m Hein Htet Lu Lu aka Jst Vex. I&apos;m a full stack web developer from Myanmar. I create complicated yet fully accessible websites using lastest techonology. I&apos;m persuing my goal of becoming a great software enginner and a founder for my dream startups.
        </div>
      </section>
      <section className="">
        <div className="flex items-center mt-20">
          <div className="text-4xl font-bold">
            Projects
          </div>
          <Link href='/projects' className="ml-auto">
            <button className="py-2 px-3 text-zinc-200 rounded-lg bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
              View all
            </button>
          </Link>

        </div>
        <ul className="my-8 grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            // return <ProjectSimple key={project.name} project={project} />
            return (
              <div key={project.name} className="w-full h-full rounded-lg bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/30 dark:ring-white/10 dark:hover:ring-white/20">
                <div className="flex h-full flex-col items-start justify-around px-6 py-4">
                  <div className="text-blue-300 text-2xl ">
                    {project.name}
                  </div>
                  <div className="text-md text-zinc-300 mt-2">
                    {project.description}
                  </div>
                  <button className="text-sm mt-3 p-2 rounded-lg bg-zinc-50 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/200">
                    Demo
                  </button>
                </div>
              </div>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
