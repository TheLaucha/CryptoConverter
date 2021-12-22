const apiKey = "&api_key=e60d073da8b59be3699c4f55f4cb1d598799a15ae3638b8c522a66df919035fe"

export async function getOptions(url) {
  url += "&api_key=e60d073da8b59be3699c4f55f4cb1d598799a15ae3638b8c522a66df919035fe"

  let data = await fetch(url)
  let dataJson = await data.json()

  return dataJson
}

export async function getCryptoCurrency(url) {
  let data = await fetch(url)
  let dataJson = await data.json()

  return dataJson
}
