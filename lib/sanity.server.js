import { createClient } from 'next-sanity';
import { config } from './config';

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;