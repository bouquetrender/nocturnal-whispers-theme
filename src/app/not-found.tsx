import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'

const DuduCalligraphyFont = localFont({
  src: './dudu_calligraphy.woff2',
  display: 'swap',
})

export default function NotFound() {
  return (
    <div className={`absolute w-full h-full flex flex-col items-center justify-center ${DuduCalligraphyFont.className}`}>
      <div className="text-xl text-neutral-200 text-center">
        Life is Strange, <br />
        but this 404 isn't a part of the storyline. <br />
        Let's get back on track.
      </div>
      <Link className="text-lg underline text-neutral-200 mt-3" href="/">
        REWIND
      </Link>
      <div className="mt-3 text-neutral-200">@Nocturnal_Whispers</div>
    </div>
  );
}
