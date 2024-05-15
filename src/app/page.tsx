import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import Nav from "./_components/nav";
import Image from "next/image";

export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <Nav />

        <div className="text-neutral-100">

          <Image
            className="mt-8 select-none"
            alt="janedoe"
            src={"/assets/janedoe.webp"}
            width={200}
            height={155}
            quality={100}
            sizes="fill"
            unoptimized
            loading="eager"
          />

          <div className="mt-8 text-sm sm:text-base">
            <div>{` > Initializing core systems ... 2% `}</div>
            <div className="mt-1">{` > Synching neural networks ... [ Proceeding with caution ]`}</div>
            <div className="mt-1">{` > Power surges detected *`}</div>
            <div className="mt-1">{` > Activating unit ... Synchronizing pilot interface ...`}</div>
            <div className="mt-1">{` > Initiating startup sequence... All systems nominal. `}</div>
            <div className="mt-1">{` > Engaging Eva Engine ... Power levels optimal ...`}</div>
            <div className="mt-1">{` > Establishing AT Field ... Defensive posture initiated. `}</div>
            <div className="mt-1">{` > Assimilating LCL ... Neural pathways connecting ...`}</div>
            <div className="mt-1">{` > Startup successful. All functions are operating normally.`}</div>
            <div className="mt-1">{` > 100.000000000% `}</div>
            <div className="mt-1">{` > Welcome to Nocturnal Whispers. `}</div>
            <div className="mt-1">{` > Establishing AT Field ... `}</div>
            <div className="mt-1">
              {` > Assimilating LCL ... Neural pathways connecting ... `}
            </div>
            <div className="mt-1">
              {` > `}
              <span className="cursor-flicker">|</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-1">
              Github{" "}
              <a
                className="a-with-underline"
                target="_blank"
                href="https://github.com/yourGithub"
              >
                @YourGithub
              </a>
            </div>
            <div className="mb-1">
              🗑{" "}
              <a
                className="a-with-underline"
                target="_blank"
                href="https://instagram.com/xxx"
              >
                Your Instagram
              </a>
            </div>
            <div className="mb-1">
              📮{" "}
              <a
                href="mailto:yourmail@gmail.com"
                className="a-with-underline"
              >
                YourMail@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 text-[#777f92]">
            © 2017 - {new Date().getFullYear()} Nocturnal Whispers
          </div>
        </div>
      </Container>
    </main>
  );
}
