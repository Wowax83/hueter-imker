import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hueter-imker.de',
      lastChange:
          new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}