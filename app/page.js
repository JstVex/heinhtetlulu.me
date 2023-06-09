'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import ProjectSimple from "@/components/ProjectSimple";
import LatestPosts from "@/components/LastestPosts";
import { allDocs } from "@/.contentlayer/generated";


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

  useEffect(() => {
    const getLatestPosts = async () => {
      try {
        const response = await fetch('https://dev-x-life.onrender.com/posts');
        const data = await response.json();
        setLatestPosts(data);
      }
      catch (error) {
        console.error(error);
      }
    }
    getLatestPosts();
  }, [latestPosts])

  return (
    <main className="h-full">
      <section className="">
        <div className="text-5xl font-bold w-full mt-12 mb-5 lg:w-[70%] md:w-[75%] ">
          Web Developer, Student and about to be a startup Founder
        </div>
        <div className="text-md text-zinc-300 w-full lg:w-[70%] md:w-[75%]">
          I&apos;m Hein Htet Lu Lu aka Jst Vex. I&apos;m a full stack web developer from Myanmar. I create complicated yet fully accessible websites using lastest techonology. I&apos;m persuing my goal of becoming a great software enginner and a founder for my dream startups.
        </div>
        <button className="mt-10 p-4 rounded-lg ring-1 ring-zinc-900/5 bg-white/90 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
          Download Resume
        </button>
      </section>
      <section className="my-12">
        <div className="flex items-center">
          <div className="text-4xl font-bold">
            Projects
          </div>
          <Link href='/all-projects' className="ml-auto">
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
      <section className="my-16">
        <div className="flex items-center">
          <div className="text-4xl font-bold">
            Latest Posts
          </div>
          <Link href='/blogs' className="ml-auto">
            <button className="py-2 text-zinc-200 px-3 rounded-lg bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
              View all
            </button>
          </Link>

        </div>

        {/* <div className="flex flex-col my-8 divide-y divide-zinc-800 dark:divide-zinc-600">
          {latestPosts.map((post) => {
            return <LatestPosts key={post._id} post={post} />
          })}
        </div> */}

        <ul className="flex flex-col divide-y my-4 divide-zinc-800 dark:divide-zinc-700">
          {allDocs.map((doc) => {
            return (
              <li key={doc.slug}>
                <Link href={`/blogs/${doc.slugAsParams}`} className="flex py-[0.3rem] items-center">
                  <div className="text-lg ">
                    {doc.title}
                  </div>
                  <div className=" ml-auto text-blue-300">
                    {doc.creationDate}, {doc.creationYear}
                  </div>

                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex justify-center">
          <button className="p-4 text-lg rounded-lg ring-1 ring-zinc-900/5 bg-white/90 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
            Subscribe to the Newsletter
          </button>
        </div>

      </section>
      <section>

      </section>
    </main>
  )
}
