import { Color } from '@tremor/react'

export type WeatherChart = {
  title: string
  categories: string[]
  colors: Color[]
  format: string
  maxValue: number | undefined
}

export const charts: WeatherChart[] = [
  {
    title: 'Temperature & UV Index',
    categories: ['Temperature (C)', 'UV Index'],
    colors: ['yellow', 'rose'],
    format: '°C',
    maxValue: undefined,
  },
  {
    title: 'Chances of Rain',
    categories: ['Rain (%)'],
    colors: ['blue'],
    format: '%',
    maxValue: 100,
  },
  {
    title: 'Humidity Levels',
    categories: ['Humidity (%)'],
    colors: ['teal'],
    format: '%',
    maxValue: 100,
  },
]
