import { createClient } from 'microcms-js-sdk';

const SERVICE_DOMAIN = 'tofu-blog';

export const cmsClient = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: process.env.MICRO_CMS_API_KEY,
});

export const ENDPOINT = {
  BLOGS: 'blogs',
};
