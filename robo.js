import axios from "axios"

(async () => {
  let endpoint = "https://forgeware.withub.ai/api/bot/crawler/641b427f869a3f26010b33d5"
  const results = await axios.post(endpoint,
    {inputData: {}},
    {
      headers: {
      "x-api-key": "91d192e2-ebe7-49a4-bfa2-29595b50971d",
      "Content-Type": "application/json"
      }
    }
  )
})()