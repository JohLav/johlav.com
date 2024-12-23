import type {Project} from "@/.contentlayer/generated";
import Link from "next/link";
import {Eye} from "lucide-react";

type Props = {
    project: Project;
    views: number;
};

export const Article: React.FC<Props> = ({project, views}) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <article className="p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
					<span
                        className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
                            <time dateTime={new Date(project.date).toISOString()}>
                                {Intl.DateTimeFormat(undefined, {dateStyle: "medium"}).format(
                                    new Date(project.date),
                                )}
                            </time>
                        ) : (
                            <span>SOON</span>
                        )}
					</span>
                    <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4"/>{" "}
                        {Intl.NumberFormat("en-US", {notation: "compact"}).format(views)}
					</span>
                </div>
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {project.title}
                </h2>
                {/*<div*/}
                {/*	className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm text-zinc-400 group-hover:text-zinc-200 font-semibold">{project.title}*/}
                {/*</div>*/}
                <div className="flex justify-between items-end">
                    <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {project.description}
                    </p>
                    <p className="text-xs duration-1000 text-zinc-400 group-hover:text-zinc-200 rounded-md border border-zinc-400 px-2 py-0.5 ml-1 font-semibold">
                        {project.technology}
                    </p>
                </div>
            </article>
        </Link>
    );
};
