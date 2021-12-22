const select_crypto = document.querySelector("#crypto-options")
const loader = document.querySelector(".lds-roller")

export function setOptions(crypto_list) {
  crypto_list.map((el) => {
    const { Name, FullName } = el.CoinInfo
    const $option = document.createElement("option")

    $option.value = Name
    $option.textContent = FullName
    select_crypto.appendChild($option)
  })
}

export function setLoader(set) {
  if (set) {
    loader.style.display = "inline-block"
  } else {
    loader.style.display = "none"
  }
}

const currency = document.querySelector(".currency")
const highDay = document.querySelector(".high-day")
const lowDay = document.querySelector(".low-day")
const changePct = document.querySelector(".changepct")
const responseContainer = document.querySelector(".response-container")
const from = document.querySelector(".from")
const to = document.querySelector(".to")

export function setData(PRICE, CHANGEPCT24HOUR, HIGH24HOUR, LOW24HOUR, FROMSYMBOL, TOSYMBOL) {
  currency.textContent = PRICE
  highDay.textContent = HIGH24HOUR
  lowDay.textContent = LOW24HOUR
  changePct.textContent = CHANGEPCT24HOUR + "%"
  from.textContent = FROMSYMBOL
  to.textContent = TOSYMBOL

  // Muestro el bloque
  responseContainer.classList.remove("oculto")
}
