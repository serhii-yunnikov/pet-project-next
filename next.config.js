/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID: '450263688342-uuq3n88gf1t4sjflgo7tbplaopid1f61.apps.googleusercontent.com',
    GOOGLE_SECRET: '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',
    NEXTAUTH_SECRET: 'SECRET',
    NEXTAUTH_URL: 'http://localhost:3000/'
  }
}

module.exports = nextConfig
