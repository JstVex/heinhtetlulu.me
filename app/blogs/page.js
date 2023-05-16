import Link from "next/link";
import { readdirSync } from 'fs';
import path from "path";
import { allDocs } from '../../.contentlayer/generated'

// async function getPosts() {
//     const res = await fetch('https://dev-x-life.onrender.com/posts');
//     const data = await res.json();
//     return data;
// }

// function LatestPosts({ post }) {

//     const { _id, title, creationDate } = post;

//     return (
//         <Link href={`/blogs/${_id}`}>
//             <div className="flex py-[0.3rem] items-center">
//                 <div className="text-lg ">
//                     {title}
//                 </div>
//                 <div className=" ml-auto text-blue-300">
//                     {creationDate}
//                 </div>
//             </div>
//         </Link>
//     )
// }

// function getAllDocs() {
//     const doc = allDocs;
//     console.log('doc is', doc)
//     return doc
// }

// function BlogList() {
//     console.log('docs is ', docs)
//     const postsDirectory = path.join(process.cwd(), 'data/blog');
//     const postFiles = readdirSync(postsDirectory);

//     return (
//         <ul>
//             {postFiles.map((filename) => {
//                 const slug = filename.replace(/\.mdx$/, '');
//                 return (
//                     <li key={slug}>
//                         <Link href={`/blogs/${slug}`} passHref>
//                             <div>{slug}</div>
//                         </Link>
//                     </li>
//                 );
//             })}
//         </ul>
//     );
// }

function AllBlogs() {
    return (
        <ul className="flex flex-col divide-y my-4 divide-zinc-800 dark:divide-zinc-700">
            {allDocs.map((doc) => {
                return (
                    <li key={doc.slug}>
                        <Link href={`/blogs/${doc.slugAsParams}`} className="flex py-[0.3rem] items-center">
                            <div className="text-lg ">
                                {doc.title}
                            </div>
                            <div className=" ml-auto text-blue-300">
                                {doc.creationDate}
                            </div>

                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default async function Blogs() {
    return (
        <main className="">
            <h1 className="text-5xl mt-12 font-bold lg:w-[65%]">
                Writing is a great habit
            </h1>
            <p className="text-zinc-600 mt-4 dark:text-zinc-300 lg:w-[65%]">
                I write to share knowledge to everyone and also to improve my knowlege on a certain topic and to be motivated to continue learning more and more!
            </p>
            <section className="grid grid-cols-1 gap-y-2 lg:grid-cols-5 lg:grid-rows-[auto_1fr] lg:gap-y-4">
                <div className="mx-auto lg:mx-0 lg:pl-20 mt-16 col-span-2">
                    <div className="rounded-2xl mb-2 text-zinc-900 p-6 ring-1 ring-zinc-900/5 dark:ring-white/10 dark:text-zinc-200 md:min-w-[30rem] lg:min-w-[250px]">
                        <div className="font-semibold uppercase tracking-tight">
                            Categories
                        </div>
                        <p className="text-zinc-400 mt-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus officia veritatis omnis! Corporis dolores quod, cum excepturi, omnis error in reiciendis autem dolore magnam ab consequatur suscipit, incidunt laboriosam!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta cum natus nulla mollitia numquam alias quaerat illum, veritatis voluptatibus fugiat rem. Totam ipsa in odit facilis obcaecati consequatur eius.
                        </p>
                    </div>
                </div>

                <div className="order-first lg:row-span-2 col-span-3">
                    <h3 className="mt-10 text-3xl font-semibold text-blue-300">
                        2023
                    </h3>

                    <AllBlogs />

                    {/* <h3 className="mt-10 text-3xl font-semibold text-blue-300">
                        2022
                    </h3>
                    <div className="flex flex-col my-4 divide-y divide-zinc-800 dark:divide-zinc-600">
                        {posts.map((post) => {
                            return <LatestPosts key={post._id} post={post} />
                        })}

                    </div> */}
                </div>
                <div className="mt-3 col-span-2">
                    <div className="mx-auto lg:mx-0 lg:pl-20">
                        <div className="rounded-2xl mb-10 text-zinc-900 p-6 ring-1 ring-zinc-900/5 dark:ring-white/10 dark:text-zinc-200 md:min-w-[30rem] lg:min-w-[250px]">
                            <div className="font-semibold uppercase tracking-tight">
                                Tags
                            </div>
                            <p className="text-zinc-400 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reiciendis accusantium culpa voluptates, eius cupiditate tenetur iure? Facilis dicta autem vitae itaque et nisi quam optio. Id maxime dolore voluptate!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


