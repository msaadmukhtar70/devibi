import JsonLd from "@/components/seo/JsonLd";
import { BLOGS, getBlog } from "@/lib/blogs"; // adapt if needed
import { baseMeta, urlFor } from "@/lib/seo/meta";
import { breadcrumbLD, blogPostingLD } from "@/lib/jsonld";
import BlogClient from "./BlogClient";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return Array.isArray(BLOGS) ? BLOGS.map(b => ({ slug: b.slug })) : [];
}

export function generateMetadata({ params }) {
  const post = getBlog(params.slug);
  if (!post) return {};
  const canonical = urlFor(`/blogs/${params.slug}`);
  return baseMeta({
    title: post.title,
    description: post.excerpt || post.description,
    canonical,
    image: post.cover || "/og-default.jpg",
    type: "article"
  });
}

export default function Page({ params }) {
  const post = getBlog(params.slug);
  if (!post) return notFound();

  const canonical = urlFor(`/blogs/${params.slug}`);
  const crumbs = breadcrumbLD([
    { name: "Home", item: urlFor("/") },
    { name: "Blog", item: urlFor("/blogs") },
    { name: post.title, item: canonical }
  ]);
  const ld = blogPostingLD({
    canonical,
    title: post.title,
    description: post.excerpt || post.description,
    image: post.cover,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: post.author
  });

  return (
    <>
      <BlogClient post={{ ...post, allBlogs: BLOGS, blogs: BLOGS }} />
      <JsonLd id="ld-breadcrumb" data={crumbs} />
      <JsonLd id="ld-blog" data={ld} />
    </>
  );
}
