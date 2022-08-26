/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: process.env.NODE_ENV === "production" ? ["en", "de", "fr", "nl"] : ["en", "de", "fr", "nl", "pseudo"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
