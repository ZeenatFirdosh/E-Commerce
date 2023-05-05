import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: 'vfxfwnaw',
  projectId: '2iw48x8q',
  dataset: 'production',
  // apiVersion: '2022-03-10',
  apiVersion: '2023-04-20',
  useCdn: true,
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  token: 'skgH54EuyGSu0QhNTAwfSXBfaiM9nmkhfymSGEM4prHyig4PbKUC9Z9IAJekBH63WWGcWZ51Aynn2ic3BW0c0qRcyL9xJ6zgFmmI4QA7a3HZjc4YvTCetB9Bb08ZIF7d5KqIHzE8P8TAaAxTA49HwfNhsdFBmNlSb8FLUivHok8qWIbhxMQl'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);