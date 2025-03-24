import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // Allow all public pages
        disallow: '/dashboard/', // Disallow any dashboard routes (if applicable)
      },
    ],
    sitemap: 'https://samaghapour.vercel.app/sitemap.xml', // Updated sitemap URL
  };
}
