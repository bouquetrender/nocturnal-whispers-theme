import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import Nav from "../_components/nav";
import Image from "next/image";

const moments = [
  {
    content:
      "今天早餐吃了全家关东煮",
    date: "2024-05-01",
  },
  {
    content:
      "开发了基于 Next.js 14 的主题博客 nocturnal-whispers-theme",
    date: "2024-04-06",
  },
];

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <Nav />

        <div>
          <Image
            className="mb-12 select-none"
            style={{borderRadius: '4px'}}
            alt="janedoe"
            src={"/assets/graph.png"}
            width={665}
            height={357}
            quality={100}
            sizes="fill"
            unoptimized
            loading="eager"
          />

          {moments.map((item) => {
            return (
              <div className="mb-16">
                <div className="text-[#777f92] mb-2">{item.date}</div>
                <div className="text-gray-100">{item.content}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
