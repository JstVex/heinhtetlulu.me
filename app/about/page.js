'use client'

import Image from "next/image"
import { useState } from "react"
import { BsDiamondFill } from 'react-icons/bs'
import clsx from 'clsx'

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

function ProficientSkills() {
    return (
        <div className="my-4">
            <h4 className="mt-8 pb-2 text-2xl md:w-[80%] text-blue-300 border-b border-zinc-800 dark:border-zinc-700">
                Proficient in
            </h4>
            <div className="text-lg h-48 md:w-[80%] md:h-36 flex flex-wrap mt-2 gap-x-8 ">
                <Skills icon={'ic'} text={'Html'}></Skills>
                <Skills icon={'ic'} text={'Css'}></Skills>
                <Skills icon={'ic'} text={'Javascript (ES6+)'}></Skills>
                <Skills icon={'ic'} text={'Typescript'}></Skills>
                <Skills icon={'ic'} text={'React'}></Skills>
                <Skills icon={'ic'} text={'Nextjs'}></Skills>
                <Skills icon={'ic'} text={'Tailwind'}></Skills>
                <Skills icon={'ic'} text={'Vite'}></Skills>
                <Skills icon={'ic'} text={'Nodejs'}></Skills>
                <Skills icon={'ic'} text={'Express'}></Skills>
                <Skills icon={'ic'} text={'Mongodb'}></Skills>
                <Skills icon={'ic'} text={'Postgres'}></Skills>
                <Skills icon={'ic'} text={'Prisma'}></Skills>
                <Skills icon={'ic'} text={'Git'}></Skills>
                {/* <div className="flex flex-col items-center"> */}
                {/* <div className="flex items-center gap-x-8 gap-y-4 border-b border-blue-300"> */}


                {/* </div> */}
                {/* <div className="text-md text-blue-300 font-handwritten">
                        My go-to stack
                    </div> */}
                {/* </div> */}
            </div>
            <p className="text-md mt-6 text-zinc-700 dark:text-zinc-500">
                *My go-to stack is MERN and currently I use nextjs for pretty much every dynamic applications*
            </p>

        </div>
    )
}

function HaveExperienceSkills() {
    return (
        <div className="my-4">
            <div className="mt-8 pb-2 text-2xl md:w-[80%] text-blue-300 border-b border-zinc-800 dark:border-zinc-700">
                Have experience in
            </div>
            <div className="text-lg h-48 md:h-36 flex flex-wrap items-center md:w-[80%] mt-2 gap-x-8">
                <Skills icon={'ic'} text={'Firebase'}></Skills>
                <Skills icon={'ic'} text={'Markdown'}></Skills>
                <Skills icon={'ic'} text={'Framer Motion'}></Skills>
                <Skills icon={'ic'} text={'Nextauth'}></Skills>
                <Skills icon={'ic'} text={'JWT'}></Skills>
                <Skills icon={'ic'} text={'Puppeteer'}></Skills>
                <Skills icon={'ic'} text={'Cloudinary'}></Skills>
                <Skills icon={'ic'} text={'Rich text editor'}></Skills>
                <Skills icon={'ic'} text={'OpenAI'}></Skills>
            </div>
            <p className="text-md mt-6 text-zinc-700 dark:text-zinc-500">
                *I enjoy trying out new packages and integrating useful libraries into my projects to improve them*
            </p>
        </div >
    )
}

function LearningSkills() {
    return (
        <div className="my-4">
            <div className="mt-8 pb-2 text-2xl md:w-[80%] text-blue-300 border-b border-zinc-800 dark:border-zinc-700">
                Planning to learn
            </div>
            <div className="text-lg h-48 md:h-36 md:w-[80%] flex flex-wrap items-center mt-2 gap-x-8 ">
                <Skills icon={'ic'} text={'Graphql'}></Skills>
                <Skills icon={'ic'} text={'React query'}></Skills>
                <Skills icon={'ic'} text={'Clerk'}></Skills>
            </div>
            <p className="text-md mt-6 text-zinc-700 dark:text-zinc-500">
                *Learning is a life long process and I want to be well rounded and up to date with the lastest technology*
            </p>
        </div>
    )
}

export default function About() {
    const [section, setSection] = useState('first');

    const handleClickFirst = () => {
        setSection('first')
    }

    const handleClickSecond = () => {
        setSection('second')
    }

    const handleClickThird = () => {
        setSection('third')
    }

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
                <h2 className="text-4xl font-semibold">
                    Skills
                </h2>
                {section === 'first' && <ProficientSkills />}
                {section === 'second' && <HaveExperienceSkills />}
                {section === 'third' && <LearningSkills />}
                <div className="flex mt-10 h-10 items-center justify-center gap-x-6">
                    <BsDiamondFill className={clsx(`transition-all duration-300 hover:text-xl hover:text-blue-300 `, section === 'first' && 'text-xl text-blue-300')} onClick={handleClickFirst} />
                    <BsDiamondFill className={clsx(`transition-all duration-300 hover:text-xl hover:text-blue-300 `, section === 'second' && 'text-xl text-blue-300')}
                        onClick={handleClickSecond} />
                    <BsDiamondFill className={clsx(`transition-all duration-300 hover:text-xl hover:text-blue-300 `, section === 'third' && 'text-xl text-blue-300')} onClick={handleClickThird} />
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
