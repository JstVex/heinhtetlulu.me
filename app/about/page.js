'use client'

import Image from "next/image"

let resume = [
    {
        title: "Associate Degree",
        role: "Pasadena City College",
        start: "2023",
        end: "Present"
    },
    {
        title: "Soteria",
        role: "Founder and Maintainer",
        start: "2023",
        end: "Present"
    },
    {
        title: "Freelancer",
        role: "Full Stack Web Developer",
        start: "2022",
        end: "Present"
    },
]

export default function About() {
    return (
        <main className="h-full">
            <div className="grid grid-cols-1 gap-y-16 mt-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                {/* <div className="flex flex-col items-center justify-center gap-y-12 gap-x-8 mt-16 lg:flex-row"> */}
                <section className="lg:pl-20 mt-12">
                    <div className="max-w-xs px-2.5">
                        <Image
                            src=''
                            alt=""
                            sizes="(min-width: 768px) 24rem, 16rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </section>
                <section className="lg:order-first lg:row-span-2">
                    <div className="text-5xl font-bold mt-12 mb-3">
                        About Me
                    </div>
                    <div className="text-blue-300 text-xl mb-5">
                        About my life, my career, my skills, my plans and my dreams
                    </div>
                    <div className="mt-6 space-y-6 text-base text-zinc-600 dark:text-zinc-300">
                        <p>
                            I&apos;m Hein Htet Lu Lu. I was born in Yangon, Myanmar where i spent my childhood and highschool years and where I started my journey in programming and web development.
                        </p>
                        <p>
                            I discovered my passion in programming back in 2021 when i came across the endless possiblies of creating many softwares which can be of anything i wish to be.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed perspiciatis quasi earum inventore aut deleniti ab, quibusdam nobis minima hic distinctio, dicta totam harum nesciunt labore modi dolor eum provident!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam aspernatur doloribus corrupti ipsa sapiente eligendi reprehenderit excepturi expedita nobis fugit necessitatibus, sint explicabo pariatur dolor rerum at itaque molestias?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad at velit quidem totam, eos, dolor iste repudiandae ipsam ducimus repellendus animi architecto in dolores dolorem quo tempore recusandae aperiam.
                        </p>
                    </div>
                </section>
                <section className="mx-auto lg:mx-0 lg:pl-20">
                    <div className="rounded-2xl mb-10 text-zinc-900 p-6 ring-1 ring-zinc-900/5 dark:ring-white/10 dark:text-zinc-200 md:min-w-[30rem] lg:min-w-0">
                        <div>
                            Education & Work
                        </div>
                        <ul className="mt-6 space-y-5">
                            {resume.map((role, roleIndex) => {
                                return (
                                    <li key={roleIndex} className="flex flex-col gap-1">
                                        <div className="text-zinc-900 dark:text-zinc-50">
                                            {role.title}
                                        </div>
                                        <div className="flex text-sm text-zinc-700 dark:text-zinc-400 gap-4">
                                            <div className="">
                                                {role.role}
                                            </div>
                                            <div className="ml-auto">
                                                {role.start} - {role.end}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div >


        </main >
    )
}
