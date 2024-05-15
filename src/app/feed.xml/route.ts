import RSS from "rss";
import { getAllPosts } from "@/lib/api";

export async function GET() {
  const feed = new RSS({
    title: "NOCTURNAL WHISPERS",
    description: "nameless's personal blog",
    site_url: "https://xxx.com",
    feed_url: "https://xxx.com/feed.xml",
    language: "zh-CN",
    image_url: "",
  });

  const data = getAllPosts();

  data.forEach((post) => {
    feed.item({
      title: post.title,
      guid: post.title,
      url: `https://xxx.com/posts/${post.slug}`,
      description: "1100101010001110101",
      date: new Date(post.date),
      author: 'nameless',
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "content-type": "application/xml",
    },
  });
}
