import { Card } from "@/app/components/card";
import { Navigation } from "@/app/components/nav";
import { Article } from "@/app/posts/article";
import { Redis } from "@upstash/redis";
import { allPosts } from "contentlayer/generated";
import React from "react";

const redis = Redis.fromEnv();

export default async function PostsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allPosts.map((p) => ["pageviews", "posts", p.slug].join(":")),
    )
  ).reduce(
    (acc, v, i) => {
      acc[allPosts[i].slug] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-zinc-400">
            Sometimes I like to share what I've learned or other things.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0">
          <div className="grid grid-cols-1 gap-4">
            {allPosts.map((post) => (
              <Card key={post._id}>
                <Article post={post} views={views[post.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
