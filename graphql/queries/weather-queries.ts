import { gql } from '@apollo/client'

const WeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      elevation
      generationtime_ms
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      current_weather {
        windspeed
        winddirection
        weathercode
        time
        temperature
        is_day
      }
      hourly_units {
        windgusts_10m
        uv_index_clear_sky
        uv_index
        temperature_2m
        time
        snowfall
        snow_depth
        showers
        relativehumidity_2m
        rain
        precipitation_probability
        precipitation
        apparent_temperature
      }
      hourly {
        windgusts_10m
        uv_index_clear_sky
        uv_index
        time
        temperature_2m
        snowfall
        snow_depth
        showers
        relativehumidity_2m
        rain
        precipitation_probability
        precipitation
        apparent_temperature
      }
      daily_units {
        weathercode
        uv_index_max
        time
        uv_index_clear_sky_max
        temperature_2m_min
        temperature_2m_max
        sunset
        sunrise
        apparent_temperature_min
        apparent_temperature_max
      }
      daily {
        weathercode
        uv_index_max
        uv_index_clear_sky_max
        time
        temperature_2m_min
        temperature_2m_max
        sunset
        sunrise
        apparent_temperature_min
        apparent_temperature_max
      }
    }
  }
`

export default WeatherQuery
