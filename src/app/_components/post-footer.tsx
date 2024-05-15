import Link from "next/link";

export function PostFooter() {
  return (
    <>
      <div className="mt-12">
        <footer className="py-5 text-gray-400 ">
          <Link
            className="text-gray-300 transition-colors duration-300 ease-in-out hover:text-veblue underline"
            href="/posts"
          >
            BACK TO THE BEGINNING
          </Link>
          <span></span>
        </footer>
      </div>
    </>
  );
}
