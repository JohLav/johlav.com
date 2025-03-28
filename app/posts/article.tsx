import type { Post } from "@/.contentlayer/generated";
import Link from "next/link";
import type React from "react";
import { FaRegEye } from "react-icons/fa6";

interface Props {
  post: Post;
  views: number;
}

export const Article: React.FC<Props> = ({ post, views }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between items-center gap-2">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {post.date ? (
              <time dateTime={new Date(post.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(post.date),
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
          {post.title}
        </h2>

        <p className="z-20 my-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {post.description}
        </p>
      </article>
    </Link>
  );
};
