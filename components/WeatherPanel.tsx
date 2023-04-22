import { charts } from '@/lib/charts'
import { Root } from '@/typings'
import CalloutCard from './CalloutCard'
import Chart from './Chart'
import StatCard from './StatCard'

type Props = {
  results: Root
  content: string
}

export default function WeatherPanel({ results, content }: Props) {
  const currentTime = new Date(results.current_weather.time).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hourCycle: 'h12',
    hour: 'numeric',
    minute: 'numeric',
  })

  return (
    <div className='flex-1 p-5 lg:p-10'>
      <div className='p-5'>
        <div className='pb-5'>
          <h2 className='text-xl font-bold'>Todays Overview</h2>
          <p className='text-sm text-gray-400'>
            Last updated at: {currentTime} ({results.timezone})
          </p>
        </div>
        <div className='m-2 mb-10'>
          <CalloutCard message={content} />
        </div>

        <div className='m-2 grid grid-cols-1 gap-5 xl:grid-cols-2'>
          <StatCard
            title='Maximum Temperature'
            metric={results.daily.temperature_2m_max[0].toFixed(1)}
            color='yellow'
          />
          <StatCard
            title='Minimum Temperature'
            metric={results.daily.temperature_2m_min[0].toFixed(1)}
            color='green'
          />
          <div>
            <StatCard
              title='UV Index'
              metric={results.daily.uv_index_max[0].toFixed(1)}
              color='rose'
            />
            {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
              <CalloutCard message='High UV Index' warning />
            )}
          </div>

          <div className='flex space-x-3'>
            <StatCard
              title='Wind Speed'
              metric={results.current_weather.windspeed.toFixed(1)}
              color='cyan'
            />
            <StatCard
              title='Wind Speed'
              metric={results.current_weather.winddirection.toFixed(1)}
              color='violet'
            />
          </div>
        </div>
      </div>
      <hr className='mb-5' />

      <div className='grid w-full grid-cols-1 space-y-3'>
        {charts.map((chart) => (
          <Chart key={chart.title} results={results} weatherChart={chart} />
        ))}
      </div>
    </div>
  )
}
