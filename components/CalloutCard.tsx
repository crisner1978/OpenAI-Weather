'use client'

import { Callout } from '@tremor/react'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  message: string
  warning?: boolean
}

export default function CalloutCard({ message, warning }: Props) {
  console.log('CalloutCard message', message)
  return (
    <Callout
      className='mt-4'
      title={message}
      icon={warning ? ExclamationIcon : CheckCircleIcon}
      color={warning ? 'rose' : 'teal'}
    />
  )
}

function CheckCircleIcon(props: any) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' {...props}>
      <circle cx={12} cy={12} r={12} />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function ExclamationIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='currentColor'
      className='h-6 w-6 mr-[2px] -mt-[2px]'>
        
      <motion.path
        initial={{ pathLength: 0, fillRule: 'nonzero' }}
        animate={{ pathLength: 1, fillRule: 'evenodd', textLength: 1 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 1 }}
        fillRule='evenodd'
        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z'
        clipRule='evenodd'
      />
    </svg>
  )
}
