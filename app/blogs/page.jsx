// Force SSG + ISR (daily) and block SSR
export const revalidate = 86400;
export const dynamic = 'error';

import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { BLOGS, ALL_BLOGS } from "@/lib/blogs";
import BlogsClient from "./BlogsClient";
import { Suspense } from "react";

// SEO Optimized Metadata
export const metadata = {
  title: "The Devibi Playbook | Actionable B2B SaaS Strategies",
  description: "Go beyond theory. Our blog delivers actionable playbooks on product development, user activation, and scaling for B2B SaaS founders.",
  alternates: { canonical: '/blogs' },
};

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function toParam(str = "") {
  return encodeURIComponent(str);
}

export default function BlogsPage() {
  const sorted = [...BLOGS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const initialPosts = sorted;

  const catCounts = BLOGS.reduce((acc, b) => {
    acc[b.category] = (acc[b.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(catCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const recent = sorted.slice(0, 3).map(blog => {
    const fullBlog = BLOGS.find(b => b.slug === blog.slug);
    return {
      slug: blog.slug,
      title: blog.title,
      date: blog.date,
      hero: fullBlog?.hero || blog.hero
    };
  });

  const tagSet = new Set();
  BLOGS.forEach((b) => (b.tags || []).forEach((t) => tagSet.add(t)));
  const tags = Array.from(tagSet).slice(0, 12);

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">The Devibi Playbook</h1>
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
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[1fr,minmax(416px,_0.45fr)]">
                {/* Left: Posts */}
                <div className="flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20">
                  <Suspense fallback={<div>Loading playbooks...</div>}>
                    <BlogsClient 
                      initialPosts={initialPosts}
                      allBlogs={ALL_BLOGS}
                      showAllPosts={true}
                    />
                  </Suspense>
                </div>

                {/* Right: Sidebar */}
                <aside className="jos flex flex-col gap-y-[30px]">
                  {/* Search (use GET so it filters the list) */}
                  <div>
                    <form action="/blogs" method="get" className="relative h-[60px]">
                      <input
                        type="search"
                        name="q"
                        placeholder="Search the playbook..."
                        className="h-full w-full rounded-[50px] border border-[#E1E1E1] bg-white py-[15px] pl-16 pr-8 text-lg outline-none transition-all focus:border-colorOrangyRed"
                        required={false}
                      />
                      <button type="submit" className="absolute left-[30px] top-0 h-full">
                        <Image
                          src="/assets/img_placeholder/th-1/icon-black-search.svg"
                          alt="search"
                          width={20}
                          height={20}
                        />
                      </button>
                    </form>
                  </div>

                  {/* Categories */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Categories
                    </div>
                    <ul className="space-y-[15px]">
                      {categories.map((c) => (
                        <li key={c.name} className="flex items-center justify-between">
                          <Link
                            href={`/blogs?category=${toParam(c.name.toLowerCase())}`}
                            className="text-black hover:text-colorOrangyRed"
                          >
                            {c.name}
                          </Link>
                          <span className="text-[#999]">({c.count})</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Posts */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Recent Plays
                    </div>
                    <ul className="flex flex-col gap-y-6">
                      {recent.map((r) => (
                        <li
                          key={r.slug}
                          className="group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row"
                        >
                          <Link
                            href={`/blogs/${r.slug}`}
                            className="inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]"
                          >
                            <Image
                              src={r.hero?.src || "/assets/img_placeholder/th-1/blog-recent-img-1.jpg"}
                              alt={r.hero?.alt || r.title}
                              width={150}
                              height={130}
                              className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                            />
                          </Link>
                          <div className="flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1">
                            <span className="flex items-center gap-[10px] text-sm">
                              <div className="h-6 w-6">
                                <Image
                                  src="/assets/img_placeholder/th-1/icon-black-calendar.svg"
                                  alt="calendar"
                                  width={24}
                                  height={24}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              {formatDate(r.date)}
                            </span>
                            <Link
                              href={`/blogs/${r.slug}`}
                              className="text-base font-bold hover:text-colorOrangyRed"
                            >
                              {r.title}
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Tags
                    </div>
                    <div className="flex flex-wrap gap-[10px]">
                      {tags.map((t) => (
                        <Link
                          key={t}
                          href={`/blogs?tag=${toParam(t.toLowerCase())}`}
                          className="rounded-[50px] border border-[#E1E1E1] px-4 py-2 text-sm transition-all hover:border-colorOrangyRed hover:text-colorOrangyRed"
                        >
                          {t}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Subscribe */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Get the Playbook
                    </div>
                    <p className="mb-3">
                      Get our best playbooks delivered to your inbox. No fluff, just actionable strategies for B2B SaaS founders.
                    </p>
                    <form action="#" method="post" className="flex flex-col">
                      <input
                        type="email"
                        name="sidebar-newsletter"
                        id="sidebar-newsletter"
                        placeholder="Enter your email address"
                        className="h-[60px] w-full rounded-[50px] border border-colorCodGray bg-transparent px-10 py-[15px] text-lg outline-none transition-all placeholder:text-black focus:border-colorOrangyRed"
                        required
                      />
                      <button
                        type="submit"
                        className="button mt-5 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Blog Section End :::... */}
      </main>
      <Footer_01 />
    </>
  );
}