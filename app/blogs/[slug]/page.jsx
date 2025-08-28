export const revalidate = 900;
export const dynamicParams = true;

import { getAllPosts, getPostBySlug } from '../_data';
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer";
import Link from "next/link";

export async function generateStaticParams() {
  const all = await getAllPosts();
  return all.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post?.metaTitle || 'Blog',
    description: post?.metaDescription || '',
    alternates: { canonical: `/blogs/${params.slug}` },
  };
}

export default async function Page({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div>Not found</div>;
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">{post.h1}</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>{post.h1}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Breadcrumb Section End :::... */}

        {/*...::: Blog Section Start :::... */}
        <section className="blog-section">
          <div className="pb-40 xl:pb-[220px]">
            <div className="global-container">
              <article dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </section>
        {/*...::: Blog Section End :::... */}
      </main>
      <Footer_01 />
    </>
  );
}
