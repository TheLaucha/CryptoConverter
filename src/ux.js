import { getCryptoCurrency } from "./useFetch.js"
import { setLoader, setData } from "./ui.js"

export async function getCoinData(e) {
  e.preventDefault()
  setLoader(true)
  const FIAT = document.querySelector("#fiat-options").value
  const CRYPTO = document.querySelector("#crypto-options").value

  const single_coin_url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${CRYPTO}&tsyms=${FIAT}`

  try {
    const data = await getCryptoCurrency(single_coin_url)
    if (data.Response !== "Error") {
      // Desestructuro valor actual, maximo del dia, minimo del dia, CHANGEPCT24HOUR
      const { PRICE, CHANGEPCT24HOUR, HIGH24HOUR, LOW24HOUR, FROMSYMBOL, TOSYMBOL } =
        data.DISPLAY[CRYPTO][FIAT]

      // Remplazo data
      setData(PRICE, CHANGEPCT24HOUR, HIGH24HOUR, LOW24HOUR, FROMSYMBOL, TOSYMBOL)
    } else {
      throw data.Message
    }
  } catch (error) {
    console.log(error)
  }
  setLoader(false)
}
