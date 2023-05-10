import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
    return (
        <footer className='flex items-center justify-between my-10'>
            <div className='flex items-center text-zinc-800 dark:text-zinc-400'>
                <a href="https://github.com/JstVex" target="_blank">
                    <BsGithub className='text-xl mr-2 sm:mr-4 cursor-pointer dark:hover:text-zinc-300' />
                </a>
                <a href="" target='_blank'>
                    <BsTwitter className='text-xl mx-2 sm:mx-4 cursor-pointer dark:hover:text-zinc-300' />
                </a>
                <a href="https://www.linkedin.com/in/hein-htet-lu-lu-44a1a1249/" target='_blank'>
                    <BsLinkedin className='text-xl mx-2 sm:mx-4 cursor-pointer dark:hover:text-zinc-300' />
                </a>
                <a href="mailto: heinhtetlulu14@gmail.com" >
                    <MdEmail className='text-xl ml-2 sm:ml-4 cursor-pointer dark:hover:text-zinc-300' />
                </a>
            </div>

            <h4 className='text-sm text-zinc-800 dark:text-zinc-500'>
                © 2023 All rights reserved
            </h4>
        </footer>
    )
}