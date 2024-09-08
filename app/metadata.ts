import type { Metadata } from 'next';

export const metadataBaseURI = process.env.VERCEL_URL
  ? `https://picwise.co`
  : `http://localhost:${process.env.PORT ?? 3000}`;

const baseMetadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://picwise.co`)
    : new URL(`http://localhost:${process.env.PORT ?? 3000}`),
  title: {
    default: 'Picwise',
    template: '%s | Picwise',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Picwise - Free image compression, conversion, and resizing tool. Convert JPG to PNG, PNG to JPG, and resize images effortlessly.',
  openGraph: {
    title: 'Picwise - Free Image Compression and Conversion',
    description: 'Free online tool for image compression, JPG to PNG, PNG to JPG conversion, and image resizing.',
    siteName: 'Picwise',
    images: [
      {
        url: encodeURI(`https://${metadataBaseURI}/api/og?title=Picwise`),
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'Picwise - Free Image Compression and Conversion',
    card: 'summary_large_image',
    images: [
      {
        url: encodeURI(`https://${metadataBaseURI}/api/og?title=Picwise`),
        width: 1920,
        height: 1080,
      },
    ],
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

interface BuildMetaParams {
  title: string;
  description?: string;
  ogImage?: string;
}

export const buildMeta = ({
  title,
  description,
  ogImage,
}: BuildMetaParams): Metadata => {
  if (baseMetadata.openGraph) {
    if (ogImage)
      baseMetadata.openGraph.images = [
        {
          url: ogImage,
          width: 1920,
          height: 1080,
        },
      ];
    if (description) baseMetadata.openGraph.description = description;
  }

  if (baseMetadata.twitter) {
    if (ogImage)
      baseMetadata.twitter.images = [
        {
          url: ogImage,
          width: 1920,
          height: 1080,
        },
      ];
    if (description) baseMetadata.twitter.description = description;
    if (title) baseMetadata.twitter.title = title;
  }

  if (description) {
    baseMetadata.description = description;
  }

  if (title) {
    baseMetadata.title = title;
  }

  return baseMetadata;
};
