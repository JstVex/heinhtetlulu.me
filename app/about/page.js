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

function Skills({ icon, text }) {
    return (
        <div className="flex items-center justify-center gap-1">
            <div>
                {icon}
            </div>
            <div>
                {text}
            </div>
        </div>

    )
}

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

            <section className="my-12">
                <div className="text-4xl">
                    Skills
                </div>
                <div className="mt-3 flex flex-col justify-center gap-x-10 md:flex-row md:items-center">
                    <div className="text-lg flex flex-wrap items-start mt-6 gap-x-8 gap-y-5">
                        <Skills icon={'ic'} text={'Html'}></Skills>
                        <Skills icon={'ic'} text={'Css'}></Skills>
                        <Skills icon={'ic'} text={'Javascript (ES6+)'}></Skills>
                        <Skills icon={'ic'} text={'Typescript'}></Skills>
                        <Skills icon={'ic'} text={'React'}></Skills>
                        <Skills icon={'ic'} text={'Tailwind'}></Skills>
                        <Skills icon={'ic'} text={'Vite'}></Skills>
                        <Skills icon={'ic'} text={'Firebase'}></Skills>
                        <Skills icon={'ic'} text={'Postgres'}></Skills>
                        <Skills icon={'ic'} text={'Prisma'}></Skills>
                        <Skills icon={'ic'} text={'Git'}></Skills>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-x-8 gap-y-4 border-b border-blue-300">
                                <Skills icon={'ic'} text={'Nextjs'}></Skills>
                                <Skills icon={'ic'} text={'Nodejs'}></Skills>
                                <Skills icon={'ic'} text={'Express'}></Skills>
                                <Skills icon={'ic'} text={'Mongodb'}></Skills>
                            </div>
                            <div className="text-md text-blue-300 font-handwritten">
                                My go-to stack
                            </div>
                        </div>

                    </div>
                    <div className="mt-5 min-w-[120px] text-xl order-first text-cyan-300 md:mx-6 md:my-auto md:order-last">
                        Proficient in
                    </div>
                </div>
                <div className="mt-4 text-lg flex flex-col justify-center gap-x-10 md:flex-row md:items-center">
                    <div className="mt-10 min-w-[200px] text-xl text-cyan-300 md:mx-auto">
                        Have experience in
                    </div>
                    <div className=" flex flex-wrap items-center mt-6 gap-x-8 gap-y-4 md:mt-12">
                        <Skills icon={'ic'} text={'Markdown'}></Skills>
                        <Skills icon={'ic'} text={'Framer Motion'}></Skills>
                        <Skills icon={'ic'} text={'Puppeteer'}></Skills>
                        <Skills icon={'ic'} text={'Cloudinary'}></Skills>
                        <Skills icon={'ic'} text={'Rich text editor'}></Skills>
                        <Skills icon={'ic'} text={'OpenAI'}></Skills>
                    </div>
                </div>
                <div className="mt-12 text-lg flex flex-col gap-x-10 md:flex-row md:items-center md:mt-4">
                    <div className="flex flex-wrap items-center mt-6 gap-x-8 gap-y-4 md:mt-12">
                        <Skills icon={'ic'} text={'Graphql'}></Skills>
                        <Skills icon={'ic'} text={'Something'}></Skills>
                        <Skills icon={'ic'} text={'Something'}></Skills>
                    </div>
                    <div className="min-w-[120px] text-xl order-first text-cyan-300 md:mx-auto md:mt-auto md:order-last ">
                        About to Learn
                    </div>
                </div>
            </section>
            <section className="my-12">
                <div className="text-4xl">
                    Tools
                </div>
                <div className="space-y-20 mt-12">
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-500/40">
                        <div className="grid max-w-4xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                                Hardware
                            </h2>
                            <div className="md:col-span-3">
                                <ul className="space-y-16">
                                    <li className="flex flex-col items-start">
                                        <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            MacBook M1 2020
                                        </h3>
                                        <p className="mt-2 text-md text-zinc-600 dark:text-zinc-400">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nemo voluptas ex. Id nam, atque maiores tempore dicta velit natus ab inventore consequatur deleniti eos debitis! Alias, perspiciatis porro? Culpa!
                                        </p>
                                    </li>
                                    <li className="flex flex-col items-start">
                                        <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            Compac monitor with Windows and Ubuntu dual booted
                                        </h3>
                                        <p className="mt-2 text-md text-zinc-600 dark:text-zinc-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quibusdam quas? Veniam ex facilis fuga explicabo rem, molestias minima amet, tempore, mollitia saepe officiis. Dicta quidem ex earum deleniti ab.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-500/40">
                        <div className="grid max-w-4xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                                Software
                            </h2>
                            <div className="md:col-span-3">
                                <ul className="space-y-16">
                                    <li className="flex flex-col items-start">
                                        <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            Visual Studio Code
                                        </h3>
                                        <p className="mt-2 text-md text-zinc-600 dark:text-zinc-400">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ab tempore itaque inventore officia est sunt aut, blanditiis quos possimus ea animi saepe obcaecati distinctio? Ea, dignissimos! Quaerat, quam atque?
                                        </p>
                                    </li>
                                    <li className="flex flex-col items-start">
                                        <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            NeoVim
                                        </h3>
                                        <p className="mt-2 text-md text-zinc-600 dark:text-zinc-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus molestiae maxime in nostrum provident labore inventore explicabo officia at libero nihil, quae odit! Maiores nisi assumenda vero ipsa doloribus.
                                        </p>
                                    </li>
                                    <li className="flex flex-col items-start">
                                        <h3 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            Obsidian
                                        </h3>
                                        <p className="mt-2 text-md text-zinc-600 dark:text-zinc-400">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima inventore ea neque tempora sed quae nihil quam quas ipsa sequi, expedita delectus numquam! Ratione inventore hic aliquid dicta cumque vel.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
