import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = getAllPosts();
  return allPosts.map((post) => {
    return {
      url: "https://xxx.com/posts/" + post.slug,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 1,
    };
  });
}
