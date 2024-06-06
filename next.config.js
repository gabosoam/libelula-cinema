module.exports = {
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_TOKEN: process.env.TMDB_TOKEN,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
} 