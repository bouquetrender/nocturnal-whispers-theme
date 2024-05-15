import Link from "next/link";

const Header = () => {
  return (
    <h2 className="mt-24 mb-10 font-bold text-neutral-100">
      <Link href="/posts" className="hover:underline">
        NOCTURNAL WHISPERS
      </Link>
    </h2>
  );
};

export default Header;
