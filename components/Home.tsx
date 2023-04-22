'use client'

import { Card, Divider, Subtitle, Text } from '@tremor/react'
import React from 'react'
import CityPicker from './CityPicker'

export default function Home() {
  return (
    <Card className='mx-auto max-w-4xl'>
      <Text className='mb-10 text-center text-6xl font-bold'>Weather AI</Text>
      <Subtitle className='text-center text-xl'>
        Powered by OpenAI, Next.js 13.3, TailwindCSS, Tremor 2.0 + More!
      </Subtitle>
      <Divider className='my-10' />
      
      <Card className='bg-gradient-to-br from-[#394F68] to-[#183B7E]'>
        <CityPicker />
      </Card>
    </Card>
  )
}
