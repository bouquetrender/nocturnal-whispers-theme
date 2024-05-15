import Link from "next/link";

export default function Nav({ inPost = false }) {
  return (
    <nav className={`text-neutral-50 flex gap-4 ${inPost ? "" : "mt-4 mb-12"}`}>
      <Link
        className={`cursor-pointer hover:text-veblue transition ${
          inPost ? "no-underline" : "no-underline"
        }`}
        href="/posts"
      >
        Posts
      </Link>{" "}
      {inPost ? "/" : "-"}
      <Link
        className={`cursor-pointer hover:text-veblue transition ${
          inPost ? "no-underline" : "no-underline"
        }`}
        href="/fragment"
      >
        Fragment
      </Link>{" "}
      {inPost ? "/" : "-"}
      <Link
        className={`cursor-pointer hover:text-veblue transition ${
          inPost ? "no-underline" : "no-underline"
        }`}
        href="/"
      >
        Intro
      </Link>{" "}
    </nav>
  );
}
