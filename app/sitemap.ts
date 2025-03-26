import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://https://picwise.co/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
 
  ];
}