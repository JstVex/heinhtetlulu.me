// async function getBlog(_id) {
//     const res = await fetch(`https://dev-x-life.onrender.com/posts/${_id}`);
//     const data = await res.json();
//     console.log('data is', data)
//     return data;
// }

// export default async function Blog({ params }) {
//     const blog = await getBlog(params._id);
//     console.log('id is', params._id)
//     return (
//         <main>
//             {blog.title}
//         </main>
//     )
// }

// import { getMarkdownContent } from "@/lib/markdownUtils";

// export async function getServerComponentProps({ params }) {
//     const { slug } = params;
//     const content = getMarkdownContent(`${slug}.md`);
//     return {
//         props: {
//             content,
//         },
//     };
// }

// export default function BlogPost({ content }) {
//     return (
//         <article>
//             <div>hi</div>
//             <div dangerouslySetInnerHTML={content} />
//         </article>
//     );
// }

import { Mdx } from '@/components/Mdx'
import { allDocs } from '../../../.contentlayer/generated'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

async function getDocFromParams(slug) {
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

const page = async ({ params }) => {
    const doc = await getDocFromParams(params.slug)
    return (
        <div className='mt-12 my-28 lg:w-[775px] mx-auto'>
            <Link href='/blogs' className='text-sm flex items-center gap-x-1 text-zinc-400 mb-5 hover:text-zinc-300'>
                <BsArrowLeft />
                <span>
                    back
                </span>
            </Link>
            <div className='text-zinc-400 dark:text-zinc-500 border-l-2 border-zinc-500 pl-2'>
                {doc.creationDate}, {doc.creationYear}
            </div>
            <h2 className='text-5xl mt-5 mb-8 font-semibold text-zinc-800 dark:text-zinc-50'>
                {doc.title}
            </h2>
            {/* <p className=''>
                {doc.description}
            </p> */}
            <Mdx code={doc.body.code} />
        </div>
    )
}

export default page;