// app/blogs/page.jsx
export const revalidate = 900;
export const dynamic = 'error';

import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer";
import Link from "next/link";
import { getAllPosts } from "./_data";

export const metadata = {
  title: "Blogs - B2B SaaS Success Stories", 
  description: "Real case studies and insights from successful B2B SaaS launches. Learn from proven strategies and implementations.",
  alternates: { canonical: '/blogs' },
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Blogs</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Blogs</li>
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
              <ul>
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blogs/${post.slug}`}>
                      <h2>{post.h1}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/*...::: Blog Section End :::... */}
      </main>
      <Footer_01 />
    </>
  );
}