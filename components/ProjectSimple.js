export default function ProjectSimple({ project }) {
    return (
        <div className="bg-zinc-50 w-full h-full rounded-lg ring-1 ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-500">
            <div className="flex flex-col items-start p-6">
                <div className="text-blue-300 text-lg ">
                    {project.name}
                </div>
                <div className="text-md text-zinc-400">
                    {project.description}
                </div>
            </div>

        </div>
    )
}