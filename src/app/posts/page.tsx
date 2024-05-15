import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../../lib/api";
import Nav from "../_components/nav";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <Nav />
        <MoreStories posts={allPosts} />
      </Container>
    </main>
  );
}
