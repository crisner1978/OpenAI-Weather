import 'server-only'
import { getClient } from '@/apollo-client'
import { Root } from '@/typings'
import WeatherQuery from '../queries/weather-queries'

export async function getWeather(params: any) {
  const client = getClient()
  const { data } = await client.query({
    query: WeatherQuery,
    variables: {
      current_weather: 'true',
      latitude: params.lat,
      longitude: params.long,
      timezone: 'GMT',
    },
  })
  return data.myQuery as Root
}
