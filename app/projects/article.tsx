import type { Project } from "@/.contentlayer/generated";
import { parseTechnology } from "@/app/components/technologyIcons";
import Link from "next/link";
import type React from "react";
import { FaRegEye } from "react-icons/fa6";

interface Props {
  project: Project;
  views: number;
}

export const Article: React.FC<Props> = ({ project, views }) => {
  const parsedTechnology = parseTechnology(project.technology);

  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between items-center gap-2">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date),
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          <span className="text-zinc-500 text-xs  flex items-center gap-1">
            <FaRegEye className="w-4 h-3" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {project.title}
        </h2>

        <p className="z-20 my-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
        <div className="flex justify-start items-center gap-2 flex-wrap">
          {parsedTechnology?.map((tech) => {
            const Icon = tech.icon;
            return (
              <p
                key={tech.name}
                className="inline-flex justify-center items-center gap-1 max-w-32 text-xs duration-1000 text-zinc-400 group-hover:text-zinc-200 rounded-md border border-zinc-500 px-2 py-0.5 font-semibold"
              >
                <span>{Icon && <Icon />}</span>
                <span>{tech.name}</span>
              </p>
            );
          })}
        </div>
      </article>
    </Link>
  );
};
