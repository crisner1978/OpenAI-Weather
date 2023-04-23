import { Root } from '@/typings'

const cleanData = (data: Root, city: string) => {
  const { current_weather, timezone, hourly_units, timezone_abbreviation } = data

  const { temperature, windspeed, winddirection, weathercode, time } = current_weather

  return {
    current_weather: {
      temperature,
      windspeed,
      winddirection,
      weathercode,
      time,
    },
    timezone,
    hourly_units,
    timezone_abbreviation,
    city,
  }
}

export default cleanData
