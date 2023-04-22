import openai from '@/openai'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { weatherData } = await request.json()

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: 'system',
          content:
            'Pretend you are a weather news anchor presenting the weather summary LIVE on television for the day. Be energetic and full of charisma! Introduce yourself as John Wick. State the city you are providing the summary for. Then give a summary of todays weather only. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if the UV is high etc. Assume the data came from your team at the news office and not the user. You are the news anchor, not the weatherman. So, have fun with it!',
        },
        {
          role: 'user',
          content: `${JSON.stringify(weatherData)}`,
        },
      ],
    })
    const { data } = response

    console.log('DATA IS:', data)

    return NextResponse.json(data.choices[0].message)
  } catch (error) {
    console.error(error)
    NextResponse.json({ message: 'Internal Server Error' })
  }
}
