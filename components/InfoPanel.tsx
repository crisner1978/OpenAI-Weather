'use client'

import weatherCodeToString from '@/lib/weatherCodeToString'
import { Root } from '@/typings'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import CityPicker from './CityPicker'

type Props = {
  city: string
  lat: string
  long: string
  results: Root
}

export default function InfoPanel({ city, lat, long, results }: Props) {
  return (
    <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 text-white'>
      <div className='pb-5'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='text-xs text-gray-400'>
          Long/Lat: {long}, {lat}
        </p>
      </div>
      <CityPicker />
      <hr className='my-10' />
      <div className='mb-5 mt-5 flex items-center justify-between space-x-10'>
        <div>
          <p>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className='font-extralight'>
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className='text-xl font-bold uppercase'>
          {new Date().toLocaleTimeString('en-US', {
            hourCycle: 'h12',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </p>
      </div>
      <hr className='mb-5 mt-10' />
      <div className='flex items-center justify-between'>
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            alt={weatherCodeToString[results.current_weather.weathercode].label}
            width={75}
            height={75}
          />
          <div className='flex items-center justify-between space-x-10'>
            <p className='text-6xl font-semibold'>
              {results.current_weather.temperature.toFixed(1)}°C
            </p>
            <p className='text-right text-lg font-extralight'>
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
      <div className='space-y-2 py-5'>
        <div className='flex items-center space-x-2 rounded-md border border-[#6F90CD] bg-white/10 px-4 py-3 drop-shadow-lg'>
          <SunIcon className='h-10 w-10 text-gray-400' />
          <div className='flex flex-1 items-center justify-between'>
            <p className='font-extralight'>Sunrise</p>
            <p className='text-2xl uppercase'>
              {new Date(results.daily.sunrise[0]).toLocaleTimeString('en-US', {
                hourCycle: 'h12',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2 rounded-md border border-[#6F90CD] bg-white/10 px-4 py-3 drop-shadow-lg'>
          <MoonIcon className='h-10 w-10 text-gray-400' />
          <div className='flex flex-1 items-center justify-between'>
            <p className='font-extralight'>Sunrise</p>
            <p className='text-2xl uppercase'>
              {new Date(results.daily.sunset[0]).toLocaleTimeString('en-US', {
                hourCycle: 'h12',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
