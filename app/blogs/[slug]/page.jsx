// app/blogs/[slug]/page.jsx
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGS, ALL_BLOGS, getBlog } from "@/lib/blogs";

/* ------------------------- Static params for SSG ------------------------- */
export function generateStaticParams() {
  return ALL_BLOGS.map(({ slug }) => ({ slug }));
}

/* --------------------------------- SEO ---------------------------------- */
export function generateMetadata({ params }) {
  const post = getBlog(params.slug);
  if (!post) return {};
  const title = `${post.title} | The Devibi Playbook`;
  const description = post.excerpt || "An actionable playbook for B2B SaaS founders on product, growth, and practical AI.";
  const image = post.hero?.src;

  return {
    title,
    description,
    openGraph: { title, description, images: image ? [{ url: image }] : [], type: "article" },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : [] },
    alternates: { canonical: `/blogs/${params.slug}` },
  };
}

/* --------------------------------- Page --------------------------------- */
export default function BlogDetailsPage({ params }) {
  const post = getBlog(params.slug);
  if (!post) notFound();

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  // Recent posts (exclude current)
  const recent = ALL_BLOGS.filter((b) => b.slug !== post.slug).slice(0, 3);

  // Categories with counts
  const catCounts = BLOGS.reduce((acc, b) => {
    acc[b.category] = (acc[b.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(catCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Prev/Next by array order
  const idx = BLOGS.findIndex((b) => b.slug === post.slug);
  const prev = BLOGS[idx - 1];
  const next = BLOGS[idx + 1];

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/* Breadcrumb */}
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title">{post.title}</h1>
                <ul className="breadcrumb-nav">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/blogs">The Playbook</Link></li>
                  <li>{post.category}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <div className="blog-section">
          <div className="pb-40 xl:pb-[220px]">
            <div className="global-container">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[1fr,minmax(416px,_0.5fr)]">
                {/* Main */}
                <div className="flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20">
                  {/* Article */}
                  <div className="flex flex-col gap-6">
                    <article className="jos overflow-hidden bg-white">
                      {/* Hero */}
                      {post.hero?.src && (
                        <div className="mb-7 block overflow-hidden rounded-[10px]">
                          <Image
                            src={post.hero.src}
                            alt={post.hero.alt || post.title}
                            width={856}
                            height={540}
                            className="h-auto w-full scale-100 object-cover"
                            priority
                          />
                        </div>
                      )}

                      {/* Meta */}
                      <ul className="flex flex-wrap items-center gap-6">
                        <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                          <Link href={`/blogs?category=${encodeURIComponent(post.category)}`} className="hover:text-colorOrangyRed">
                            {post.category}
                          </Link>
                        </li>
                        <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                          <span className="hover:text-colorOrangyRed">{formatDate(post.date)}</span>
                        </li>
                      </ul>

                      {/* Title and intro */}
                      <h2 className="mb-3 mt-5">{post.title}</h2>
                      {post.excerpt && <p className="mb-7 text-lg leading-relaxed last:mb-0">{post.excerpt}</p>}

                      {/* Numbered points (keeps your structure) */}
                      {Array.isArray(post.points) && post.points.length > 0 && (
                        <ul className="mb-7 flex flex-col gap-7 last:mb-0">
                          {post.points.map((p, i) => (
                            <li key={i}>
                              <div className="font-semibold">{`${i + 1}. ${p.title}`}</div>
                              {p.image && (
                                <div className="my-4 overflow-hidden rounded-[10px]">
                                  <Image
                                    src={p.image.src}
                                    alt={p.image.alt || p.title}
                                    width={1000}
                                    height={600}
                                    className="h-auto w-full"
                                  />
                                </div>
                              )}
                              <p className="mb-7 last:mb-0">{p.body}</p>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Takeaways */}
                      {Array.isArray(post.takeaways) && post.takeaways.length > 0 && (
                        <>
                          <div className="font-semibold">Key Takeaways for Founders</div>
                          <ul className="mb-7 last:mb-0">
                            {post.takeaways.map((t, i) => (
                              <li
                                key={i}
                                className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {/* Closing */}
                      {post.closing && <p className="mb-7 last:mb-0">{post.closing}</p>}
                      {post.thanks && <p className="mb-7 last:mb-0">{post.thanks}</p>}
                    </article>

                    {/* Post events */}
                    <div className="jos flex justify-between gap-x-8">
                      <div className="flex items-center gap-x-6">
                        <button className="inline-flex items-center gap-x-1 text-[#121212]">
                          <Image src="/assets/img_placeholder/th-1/icon-black-outline-thumb-up.svg" alt="like" width={24} height={24} />
                          {post.stats?.likes ?? 0}
                        </button>
                        <button className="inline-flex items-center gap-x-1 text-[#121212]">
                          <Image src="/assets/img_placeholder/th-1/icon-black-outline-chat-alt.svg" alt="comments" width={24} height={24} />
                          {post.stats?.comments ?? 0}
                        </button>
                      </div>
                      <div className="flex items-center gap-x-6">
                        <button className="inline-flex items-center gap-x-1 text-[#121212]">
                          <Image src="/assets/img_placeholder/th-1/icon-black-outline-share.svg" alt="share" width={24} height={24} />
                        </button>
                        <button className="inline-flex items-center gap-x-1 text-[#121212]">
                          <Image src="/assets/img_placeholder/th-1/icon-black-outline-inbox-in.svg" alt="save" width={24} height={24} />
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="jos my-[30px] h-[1px] w-full bg-[#EAEDF0]" />

                    {/* Prev / Next */}
                    <div className="jos flex flex-col justify-between md:flex-row md:gap-x-10 xl:gap-x-24 xxl:gap-x-[196px]">
                      {prev ? (
                        <Link href={`/blogs/${prev.slug}`} className="group text-left">
                          <span className="inline-flex items-center gap-x-3 text-[21px] font-bold transition-all duration-300 group-hover:text-colorOrangyRed">
                            <Image src="/assets/img_placeholder/th-1/icon-black-cheveron-left.svg" alt="Previous post" width={24} height={24} />
                            Previous Play
                          </span>
                          <p>{prev.title}</p>
                        </Link>
                      ) : <span />}
                      {next && (
                        <Link href={`/blogs/${next.slug}`} className="group text-right">
                          <span className="inline-flex flex-row-reverse items-center gap-x-3 text-[21px] font-bold transition-all duration-300 group-hover:text-colorOrangyRed">
                            <Image src="/assets/img_placeholder/th-1/icon-black-cheveron-right.svg" alt="Next post" width={24} height={24} />
                            Next Play
                          </span>
                          <p>{next.title}</p>
                        </Link>
                      )}
                    </div>

                    {/* Comments */}
                    {Array.isArray(post.comments) && post.comments.length > 0 && (
                      <div className="jos">
                        <div className="mb-6 text-[24px] font-bold">
                          {post.comments.length} comment{post.comments.length > 1 ? "s" : ""} on this post:
                        </div>
                        <ul className="flex flex-col gap-y-[30px]">
                          {post.comments.map((c, i) => (
                            <li key={i} className="border-b border-[#EAEDF0] last:border-b-0">
                              <div className="flex gap-x-5">
                                <div className="h-[80px] w-[80px] overflow-hidden rounded-full">
                                  <Image src={c.avatar} alt={c.author} width={80} height={80} />
                                </div>
                                <div className="flex flex-1 flex-col gap-y-4">
                                  <div className="flex items-center justify-between gap-x-5">
                                    <div className="flex flex-col gap-y-1">
                                      <div className="font-bold">{c.author}</div>
                                      <div className="text-sm">{formatDate(c.date)}</div>
                                    </div>
                                    <button className="font-bold transition-all duration-300 hover:text-colorOrangyRed">
                                      Reply
                                    </button>
                                  </div>
                                  <p className="max-w-[616px]">{c.text}</p>
                                </div>
                              </div>

                              {/* Replies */}
                              {Array.isArray(c.replies) && c.replies.length > 0 && (
                                <ul className="mt-[30px] flex flex-col pl-8 sm:pl-32">
                                  {c.replies.map((r, ri) => (
                                    <li key={ri} className="border-t border-[#EAEDF0] py-[30px]">
                                      <div className="flex gap-x-5">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                                          <Image src={r.avatar} alt={r.author} width={50} height={50} />
                                        </div>
                                        <div className="flex flex-1 flex-col gap-y-4">
                                          <div className="flex items-center justify-between gap-x-5">
                                            <div className="flex flex-col gap-y-1">
                                              <div className="font-bold">{r.author}</div>
                                              <div className="text-sm">{formatDate(r.date)}</div>
                                            </div>
                                            <button className="font-bold transition-all duration-300 hover:text-colorOrangyRed">
                                              Reply
                                            </button>
                                          </div>
                                          <p className="max-w-[536px]">{r.text}</p>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Comment form – unchanged UI */}
                  <div className="jos">
                    <div className="mb-6 text-[24px] font-bold">Leave a Comment:</div>
                    <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
                      <form action="#" method="post" className="flex flex-col gap-y-5">
                        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                          <div className="flex flex-col gap-y-[10px]">
                            <label htmlFor="comment-name" className="text-lg font-bold leading-[1.6]">Enter your name</label>
                            <input type="text" id="comment-name" placeholder="Adam Smith" className="placeholder:[#7F8995] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed" required />
                          </div>
                          <div className="flex flex-col gap-y-[10px]">
                            <label htmlFor="comment-email" className="text-lg font-bold leading-[1.6]">Email address</label>
                            <input type="email" id="comment-email" placeholder="example@gmail.com" className="placeholder:[#7F8995] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="flex flex-col gap-y-[10px]">
                            <label htmlFor="comment-message" className="text-lg font-bold leading-[1.6]">Message</label>
                            <textarea id="comment-message" className="placeholder:[#7F8995] min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed" placeholder="Write your message here..." required />
                          </div>
                        </div>
                        <div>
                          <button type="submit" className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white">
                            Send your message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="jos flex flex-col gap-y-[30px]">
                  {/* Search – unchanged UI */}
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
                        <Image src="/assets/img_placeholder/th-1/icon-black-search.svg" alt="search" width={20} height={20} />
                      </button>
                    </form>
                  </div>

                  {/* Categories */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Categories
                    </div>
                    <ul>
                      {categories.map((c) => (
                        <li key={c.name} className="mb-6 last:mb-0">
                          <Link href={`/blogs?category=${encodeURIComponent(c.name)}`} className="text-black hover:text-colorOrangyRed">
                            {c.name} ({String(c.count).padStart(2, "0")})
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent posts */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Recent Plays
                    </div>
                    <ul className="flex flex-col gap-y-6">
                      {recent.map((r) => (
                        <li key={r.slug} className="group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row">
                          <Link href={`/blogs/${r.slug}`} className="inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]">
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
                                <Image src="/assets/img_placeholder/th-1/icon-black-calendar.svg" alt="calendar" width={24} height={24} className="h-full w-full object-cover" />
                              </div>
                              {formatDate(r.date)}
                            </span>
                            <Link href={`/blogs/${r.slug}`} className="text-base font-bold hover:text-colorOrangyRed">
                              {r.title}
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  {Array.isArray(post.tags) && post.tags.length > 0 && (
                    <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                      <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                        Tags
                      </div>
                      <ul className="flex flex-wrap gap-x-2 gap-y-4">
                        {post.tags.map((tag) => (
                          <li key={tag}>
                            <Link
                              href={`/blogs?tag=${encodeURIComponent(tag)}`}
                              className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-colorOrangyRed hover:text-white"
                            >
                              {tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Subscribe – unchanged UI */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Get the Playbook
                    </div>
                    <p className="mb-3">Get our best playbooks delivered to your inbox. No fluff, just actionable strategies.</p>
                    <form action="#" method="post" className="flex flex-col">
                      <input
                        type="email"
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
        </div>
      </main>
      <Footer_01 />
    </>
  );
}