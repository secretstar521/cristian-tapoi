import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://samaghapour.vercel.app/';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ];
}
