export default function LatestPosts({ post }) {
    return (
        <div className="flex py-[0.3rem] items-center">
            <div className="text-xl ">
                {post.title}
            </div>
            <div className=" ml-auto text-blue-300">
                {post.creationDate}
            </div>
        </div>
    )
}