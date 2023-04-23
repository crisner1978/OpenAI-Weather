const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://open-ai-weather.vercel.app'

export default BASE_URL
