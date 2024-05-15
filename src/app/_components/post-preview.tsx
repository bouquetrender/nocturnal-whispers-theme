import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
};

export function PostPreview({ title, date, slug }: Props) {
  return (
    <div className="flex my-3 gap-2">
      <h3 className="text-base text-neutral-50">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-[#777f92]">{date}</div>
    </div>
  );
}
