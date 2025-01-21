import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import "./mdx.css";
import { Mdx } from "@/app/components/mdx";
import { ReportView } from "@/app/components/view";
import { Header } from "@/app/posts/[slug]/header";
import { Redis } from "@upstash/redis";

interface PostProps {
  params: {
    slug: string;
  };
}

const redis = Redis.fromEnv();

export default async function PostPage({ params }: PostProps) {
  const slug = params?.slug;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "posts", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header post={post} views={views} />
      <ReportView slug={post.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
