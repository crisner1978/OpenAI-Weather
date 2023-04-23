'use client'

import { GlobeAltIcon } from '@heroicons/react/20/solid'
import { City, Country } from 'country-state-city'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Select from 'react-select'

type option = {
  value: { latitude: string; longitude: string; isoCode: string }
  label: string
} | null

type cityOption = {
  value: {
    latitude: string
    longitude: string
    countryCode: string
    name: string
    stateCode: string
  }
  label: string
} | null

const options = Country.getAllCountries().map((country) => ({
  value: { latitude: country.latitude, longitude: country.longitude, isoCode: country.isoCode },
  label: country.name,
}))

export default function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null)
  const [selectedCity, setSelectedCity] = useState<cityOption>(null)
  const router = useRouter()

  const cities = City?.getCitiesOfCountry(selectedCountry?.value?.isoCode!)?.map((city) => ({
    value: {
      latitude: city.latitude!,
      longitude: city.longitude!,
      countryCode: city.countryCode,
      name: city.name,
      stateCode: city.stateCode,
    },
    label: city.name,
  }))

  const uniqueCities = cities?.filter(
    (city, index) => cities?.findIndex((c) => c.label === city.label) === index
  )

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option)
    setSelectedCity(null)
  }

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option)
    router.push(
      `/location/${option?.value?.name}/${option?.value.latitude}/${option?.value.longitude}`
    )
  }

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <div className='flex items-center space-x-2 text-white/80'>
          <GlobeAltIcon className='h-5 w-5' />
          <label htmlFor='country'>Country</label>
        </div>
        <Select
          className='text-black'
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>
      {selectedCountry && (
        <div className='space-y-2'>
          <div className='flex items-center space-x-2 text-white/80'>
            <GlobeAltIcon className='h-5 w-5' />
            <label htmlFor='city'>City</label>
          </div>
          <Select
            className='text-black'
            value={selectedCity}
            onChange={handleSelectedCity}
            options={uniqueCities}
          />
        </div>
      )}
    </div>
  )
}
