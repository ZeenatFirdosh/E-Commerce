import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: 'vfxfwnaw',
  projectId: '2iw48x8q',
  dataset: 'production',
  // apiVersion: '2022-03-10',
  apiVersion: '2023-04-20',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);