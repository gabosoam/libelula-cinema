module.exports = {
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_TOKEN: process.env.TMDB_TOKEN,
  },
  experimental: {
    // Utiliza el Context API para el estado global
    appDir: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
}