export const posts = [
  {
    slug: 'saas-launch-12-weeks',
    h1: 'Launch a B2B SaaS in 8–12 Weeks',
    html: '&lt;p&gt;Outline of the validated launch process…&lt;/p&gt;',
    metaTitle: 'SaaS Launch in 8–12 Weeks',
    metaDescription: 'Validated, production-grade launch with GTM built in.',
  },
  // add more as needed or wire to your CMS later
];
export async function getAllPosts() { return posts; }
export async function getPostBySlug(slug) { return posts.find(p => p.slug === slug); }