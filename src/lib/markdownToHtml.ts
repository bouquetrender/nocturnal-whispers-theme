import { remark } from "remark";
import html from "remark-html";
import remarkUnwrapImages from "remark-unwrap-images";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(remarkUnwrapImages)
    .process(markdown);
  return result.toString();
}
