export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://devibi-ten.vercel.app/sitemap.xml',
  };
}