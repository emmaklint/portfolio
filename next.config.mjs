/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "prod-files-secure.s3.us-west-2.amazonaws.com", // Notion's S3 bucket
      "s3.us-west-2.amazonaws.com",
      "www.notion.so",
    ],
  },
};
export default nextConfig;
