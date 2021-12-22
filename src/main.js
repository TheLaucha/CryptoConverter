import { getOptions } from "./useFetch.js"
import { setOptions } from "./ui.js"
import { getCoinData } from "./ux.js"

const crypto_list_url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"

const form = document.querySelector("form")

async function setApp() {
  try {
    const data = await getOptions(crypto_list_url)
    if (data.Response !== "Error") {
      const crypto_list = data.Data
      setOptions(crypto_list)
    } else {
      throw data.Message
    }
  } catch (error) {
    console.log(error)
  }
}

form.addEventListener("submit", getCoinData)

setApp()
