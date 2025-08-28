'use client';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

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

export default function BlogsClient({ initialPosts, allBlogs }) {
  const searchParams = useSearchParams();
  
  const q = (searchParams?.get('q') || "").toString().trim().toLowerCase();
  const category = (searchParams?.get('category') || "").toString().trim().toLowerCase();
  const tag = (searchParams?.get('tag') || "").toString().trim().toLowerCase();
  const currentPageParam = parseInt(searchParams?.get('page') || "1", 10);

  // Sort newest first - allBlogs is already the lightweight ALL_BLOGS from lib/blogs.js
  const sorted = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter by category/tag/search
  let list = sorted.filter((p) => {
    const inCategory = category ? p.category.toLowerCase() === category : true;
    const hasTag = tag
      ? (p.tags || []).some((t) => t.toLowerCase() === tag)
      : true;
    const matchesQuery = q
      ? p.title.toLowerCase().includes(q)
      : true;
    return inCategory && hasTag && matchesQuery;
  });

  // Pagination (6 per page)
  const perPage = 6;
  const pageCount = Math.max(1, Math.ceil(list.length / perPage));
  const currentPage = Math.min(
    Math.max(currentPageParam || 1, 1),
    pageCount
  );
  const start = (currentPage - 1) * perPage;
  const pageItems = list.slice(start, start + perPage);

  // Helper to keep existing filters in pagination links
  const baseQuery = new URLSearchParams();
  if (q) baseQuery.set("q", q);
  if (category) baseQuery.set("category", category);
  if (tag) baseQuery.set("tag", tag);

  const createPageUrl = (pageNum) => {
    const sp = new URLSearchParams(baseQuery);
    if (pageNum > 1) sp.set("page", String(pageNum));
    const queryString = sp.toString();
    return `/blogs${queryString ? `?${queryString}` : ''}`;
  };

  const prevHref = currentPage <= 1 ? null : createPageUrl(currentPage - 1);
  const nextHref = currentPage >= pageCount ? null : createPageUrl(currentPage + 1);

  return (
    <>
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
            data-jos_animation="fade-up"
          >
            <Link href={`/blogs/${p.slug}`} className="block overflow-hidden">
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
                    href={`/blogs?category=${toParam(p.category)}`}
                    className="hover:text-colorOrangyRed"
                  >
                    {p.category}
                  </Link>
                </li>
                <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                  <Link
                    href={`/blogs/${p.slug}`}
                    className="hover:text-colorOrangyRed"
                  >
                    {formatDate(p.date)}
                  </Link>
                </li>
              </ul>

              {/* Title */}
              <h5 className="mb-3 mt-7 hover:text-colorOrangyRed">
                <Link href={`/blogs/${p.slug}`}>{p.title}</Link>
              </h5>

              {/* Note: ALL_BLOGS doesn't include excerpt, removed for consistency */}
            </div>
          </li>
        ))}
      </ul>
      {/* Blog Post List */}

      {/* Pagination */}
      {pageCount > 1 && (
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
              const href = createPageUrl(n);
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
      )}
      {/* Pagination */}
    </>
  );
}