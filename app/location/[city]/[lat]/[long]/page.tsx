import InfoPanel from '@/components/InfoPanel'
import WeatherPanel from '@/components/WeatherPanel'
import cleanData from '@/lib/cleanData'
import { getClient } from '@/apollo-client'
import { Root } from '@/typings'
import WeatherQuery from '@/graphql/queries/weather-queries'
import BASE_URL from '@/lib/BASE_URL'

export const revalidate = 1440

async function getWeather(params: any) {
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

type Props = {
  params: {
    city: string
    lat: string
    long: string
  }
}

export default async function WeatherPage({ params: { city, lat, long } }: Props) {
  const results = await getWeather({ lat, long })
  const dataToSend = cleanData(results, city)

  const res = await fetch(BASE_URL + '/api/weather_summary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ weatherData: dataToSend }),
  }).then((res) => res.json())

  const { content } = res

  const props = { city, lat, long, results }

  return (
    <div className='flex min-h-screen flex-col lg:flex-row'>
      <InfoPanel city={city} lat={lat} long={long} results={results} />
      <WeatherPanel results={results} content={content} />
    </div>
  )
}
