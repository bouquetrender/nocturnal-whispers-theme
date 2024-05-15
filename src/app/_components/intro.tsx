import Link from "next/link";

export function Intro() {
  return (
    <>
      <section className="mt-24 mb-4">
        <Link
          href="/"
          className="text-veblue text-2xl font-medium cursor-pointer"
        >
          NOCTURNAL WHISPERS
        </Link>
      </section>
    </>
  );
}
