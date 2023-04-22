'use client'

import { WeatherChart } from '@/lib/charts'
import { Root } from '@/typings'
import { AreaChart, Card, Title } from '@tremor/react'

type Props = {
  results: Root
  weatherChart: WeatherChart
}

export default function Chart({ results, weatherChart }: Props) {
  const { title, categories, colors, format, maxValue } = weatherChart

  const hourly = results.hourly.time
    .map((time) =>
      new Date(time).toLocaleString('en-US', {
        hour: 'numeric',
        hour12: false,
      })
    )
    .slice(0, 24)

  const data =
    title === 'Temperature & UV Index'
      ? hourly.map((hour, i) => ({
          time: Number(hour),
          'UV Index': results.hourly.uv_index[i],
          'Temperature (C)': results.hourly.temperature_2m[i],
        }))
      : title === 'Chances of Rain'
      ? hourly.map((hour, i) => ({
          time: Number(hour),
          'Rain (%)': results.hourly.precipitation_probability[i],
        }))
      : hourly.map((hour, i) => ({
          time: Number(hour),
          'Humidity (%)': results.hourly.relativehumidity_2m[i],
        }))

  const dataFormatter = (value: number) => `${value}${format}`

  return (
    <Card>
      <Title>{title}</Title>
      <AreaChart
        categories={categories}
        className='mt-6'
        colors={colors}
        data={data}
        index='time'
        minValue={0}
        maxValue={maxValue}
        showLegend
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  )
}
