// app/blog/page.jsx
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import Image from "next/image";
import Link from "next/link";
import { BLOGS, ALL_BLOGS } from "@/lib/blogs";

export const metadata = {
  title: "Our Blog",
  description:
    "Articles for founders on product, growth, and practical AI. Browse by topic, tag, or search.",
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

export default function Blog({ searchParams }) {
  const q = (searchParams?.q || "").toString().trim().toLowerCase();
  const category = (searchParams?.category || "").toString().trim().toLowerCase();
  const tag = (searchParams?.tag || "").toString().trim().toLowerCase();

  // Sort newest first
  const sorted = [...BLOGS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter by category/tag/search
  let list = sorted.filter((p) => {
    const inCategory = category ? p.category.toLowerCase() === category : true;
    const hasTag = tag
      ? (p.tags || []).some((t) => t.toLowerCase() === tag)
      : true;
    const matchesQuery = q
      ? [p.title, p.excerpt]
          .filter(Boolean)
          .some((t) => t.toLowerCase().includes(q))
      : true;
    return inCategory && hasTag && matchesQuery;
  });

  // Pagination (6 per page)
  const perPage = 6;
  const pageCount = Math.max(1, Math.ceil(list.length / perPage));
  const currentPage = Math.min(
    Math.max(parseInt(searchParams?.page || "1", 10) || 1, 1),
    pageCount
  );
  const start = (currentPage - 1) * perPage;
  const pageItems = list.slice(start, start + perPage);

  // Sidebar data
  const catCounts = BLOGS.reduce((acc, b) => {
    acc[b.category] = (acc[b.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(catCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const recent = sorted.slice(0, 3);

  const tagSet = new Set();
  BLOGS.forEach((b) => (b.tags || []).forEach((t) => tagSet.add(t)));
  const tags = Array.from(tagSet).slice(0, 12);

  // Helper to keep existing filters in pagination links
  const baseQuery = new URLSearchParams();
  if (q) baseQuery.set("q", q);
  if (category) baseQuery.set("category", category);
  if (tag) baseQuery.set("tag", tag);

  const prevHref = (() => {
    if (currentPage <= 1) return null;
    const sp = new URLSearchParams(baseQuery);
    sp.set("page", String(currentPage - 1));
    return `/blog?${sp.toString()}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })();

  const nextHref = (() => {
    if (currentPage >= pageCount) return null;
    const sp = new URLSearchParams(baseQuery);
    sp.set("page", String(currentPage + 1));
    return `/blog?${sp.toString()}`;
  })();

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">Our Blog</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Our Blog</li>
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
                  {/* Blog Post List */}
                  <ul className="grid grid-cols-2 gap-6">
                    {pageItems.length === 0 && (
                      <li className="col-span-2 rounded-[10px] bg-white p-10 text-center ring-1 ring-[#EAEDF0]">
                        No posts found.
                      </li>
                    )}

                    {pageItems.map((p) => (
                      <li
                        key={p.slug}
                        className="jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]"
                      >
                        <Link href={`/blog/${p.slug}`} className="block overflow-hidden">
                          <Image
                            src={p.hero?.src || "/assets/img_placeholder/th-1/blog-main-1.jpg"}
                            alt={p.hero?.alt || p.title}
                            width={856}
                            height={540}
                            className="h-auto w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                          />
                        </Link>
                        <div className="border border-[#EAEDF0] p-[30px]">
                          {/* Meta */}
                          <ul className="flex flex-wrap items-center gap-6">
                            <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                              <Link
                                href={`/blog?category=${toParam(p.category)}`}
                                className="hover:text-colorOrangyRed"
                              >
                                {p.category}
                              </Link>
                            </li>
                            <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                              <Link
                                href={`/blog/${p.slug}`}
                                className="hover:text-colorOrangyRed"
                              >
                                {formatDate(p.date)}
                              </Link>
                            </li>
                          </ul>

                          {/* Title */}
                          <h5 className="mb-3 mt-7 hover:text-colorOrangyRed">
                            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                          </h5>

                          {/* Excerpt */}
                          {p.excerpt && (
                            <p className="mb-7 line-clamp-2 last:mb-0">{p.excerpt}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Blog Post List */}

                  {/* Pagination */}
                  <nav className="jos flex justify-center" data-jos_animation="fade">
                    <ul className="flex gap-x-[15px]">
                      <li>
                        {prevHref ? (
                          <Link
                            href={prevHref}
                            className="group relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white active:bg-black"
                          >
                            <Image
                              src="/assets/img_placeholder/th-1/icon-black-cheveron-left.svg"
                              alt="prev"
                              width={24}
                              height={24}
                              className="group-active: h-6 w-6 opacity-100 group-hover:opacity-0"
                            />
                            <Image
                              src="/assets/img_placeholder/th-1/icon-white-cheveron-left.svg"
                              alt="prev"
                              width={24}
                              height={24}
                              className="absolute h-6 w-6 opacity-0 group-hover:opacity-100"
                            />
                          </Link>
                        ) : (
                          <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white opacity-40">
                            <Image
                              src="/assets/img_placeholder/th-1/icon-black-cheveron-left.svg"
                              alt="prev"
                              width={24}
                              height={24}
                            />
                          </span>
                        )}
                      </li>

                      {/* Page numbers (1..pageCount) */}
                      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => {
                        const sp = new URLSearchParams(baseQuery);
                        sp.set("page", String(n));
                        const href = `/blog?${sp.toString()}`;
                        const isActive = n === currentPage;
                        return (
                          <li key={n}>
                            <Link
                              href={href}
                              className={`group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white ${
                                isActive ? "active:bg-black active:text-white" : ""
                              }`}
                            >
                              {n}
                            </Link>
                          </li>
                        );
                      })}

                      <li>
                        {nextHref ? (
                          <Link
                            href={nextHref}
                            className="group relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white"
                          >
                            <Image
                              src="/assets/img_placeholder/th-1/icon-black-cheveron-right.svg"
                              alt="next"
                              width={24}
                              height={24}
                              className="h-6 w-6 opacity-100 group-hover:opacity-0"
                            />
                            <Image
                              src="/assets/img_placeholder/th-1/icon-white-cheveron-right.svg"
                              alt="next"
                              width={24}
                              height={24}
                              className="absolute h-6 w-6 opacity-0 group-hover:opacity-100"
                            />
                          </Link>
                        ) : (
                          <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white opacity-40">
                            <Image
                              src="/assets/img_placeholder/th-1/icon-black-cheveron-right.svg"
                              alt="next"
                              width={24}
                              height={24}
                            />
                          </span>
                        )}
                      </li>
                    </ul>
                  </nav>
                  {/* Pagination */}
                </div>

                {/* Right: Sidebar */}
                <aside className="jos flex flex-col gap-y-[30px]">
                  {/* Search (use GET so it filters the list) */}
                  <div>
                    <form action="/blog" method="get" className="relative h-[60px]">
                      {/* preserve category/tag on search */}
                      {category && <input type="hidden" name="category" value={category} />}
                      {tag && <input type="hidden" name="tag" value={tag} />}
                      <input
                        type="search"
                        name="q"
                        defaultValue={q}
                        placeholder="Type to search..."
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
                      Blog Categories
                    </div>
                    <ul>
                      {categories.map((c) => (
                        <li key={c.name} className="mb-6 last:mb-0">
                          <Link
                            href={`/blog?category=${toParam(c.name.toLowerCase())}`}
                            className="text-black hover:text-colorOrangyRed"
                          >
                            {c.name} ({String(c.count).padStart(2, "0")})
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Posts */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Recent Posts
                    </div>
                    <ul className="flex flex-col gap-y-6">
                      {recent.map((r) => (
                        <li
                          key={r.slug}
                          className="group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row"
                        >
                          <Link
                            href={`/blog/${r.slug}`}
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
                              href={`/blog/${r.slug}`}
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
                  {tags.length > 0 && (
                    <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                      <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                        Tags
                      </div>
                      <ul className="flex flex-wrap gap-x-2 gap-y-4">
                        {tags.map((t) => (
                          <li key={t}>
                            <Link
                              href={`/blog?tag=${toParam(t.toLowerCase())}`}
                              className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-colorOrangyRed hover:text-white"
                            >
                              {t}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Subscribe (unchanged UI) */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Subscribe
                    </div>
                    <p className="mb-3">
                      Subscribe to our newsletter and get the latest news updates.
                    </p>
                    <form action="#" method="post" className="flex flex-col">
                      <input
                        type="email"
                        name="sidebar-newsletter"
                        id="sidebar-newsletter"
                        placeholder="Enter your email address"
                        className="h-[60px] w-full rounded-[50px] border border-colorCodGray bg-transparent px-10 py-[15px] text-lg outline-none transition-all placeholder:text-black focus:border-colorOrangyRed"
                        required=""
                      />
                      <button
                        type="submit"
                        className="button mt-5 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                      >
                        Subscribe Now
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
