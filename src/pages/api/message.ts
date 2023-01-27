// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Configuration, OpenAIApi} from 'openai'

type apiResponse = {
  timezone: string,
  shouldideploy: boolean,
  message: string
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function fetchShouldideploy<apiResponse>(): Promise<apiResponse> {
  const res = await fetch("https://shouldideploy.today/api?tz=UTC")
  const data = await res.json()

  const prompt = `translate English to Spanish: ${data.message}`
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 50,
    temperature: 0,
  })

  data.message = response.data.choices[0].text
  return data as apiResponse
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<apiResponse>
) {

  const response = await fetchShouldideploy<apiResponse>()

  res.status(200).json(response)
}
