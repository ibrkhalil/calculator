let state = {
    selectedItemPrice: 0,
    selecteitemIcon: "",
    hashingPower: "TH/s"
}
const hashingInput = document.getElementById('hashing')
const costInput = document.getElementById('cost')
const poolInput = document.getElementById('pool')
const powerInput = document.getElementById('power')
const coinsInput = document.getElementById('coins')
const mainform = document.getElementById('mainform')
const hs = document.getElementById("H/s")
const khs = document.getElementById("KH/s")
const mhs = document.getElementById("MH/s")
const ghs = document.getElementById("GH/s")
const ths = document.getElementById("TH/s")
hs.addEventListener('click', hashingPowerClicked)
khs.addEventListener('click', hashingPowerClicked)
mhs.addEventListener('click', hashingPowerClicked)
ghs.addEventListener('click', hashingPowerClicked)
ths.addEventListener('click', hashingPowerClicked)
let UNIT = document.getElementById('UNIT')
let iconImg = document.getElementById('iconImg')
let calculate = document.getElementById('calculate')
calculate.addEventListener('click', calculateFN)
let coins = document.getElementById('coins')
let hashing = document.getElementById('hashing')
coins.addEventListener("change", handleCoinChange)
const ClienID = "9f78bfdd52fa7d4e3ca0f4d7af6819aa4c786603085c7059144b64a6e20cacc5"
const ClienSecret = "0b79f034066c9c06ca1e8d948cb8cf07709d534ccf4b865d953c8b810317007b"
var BTCPrice = 0;
var BTCLogo = "";
let ETHPrice = 0;
let ETHLogo = "";
let LTCPrice = 0;
let LTCLogo = "";
let DOGEPrice = 0;
let DOGELogo = "";
let KDNPrice = 0;
let KDNLogo = "https://cdn.coinranking.com/JxReTneSE/kadena.svg?size=48x48";
function hashingPowerClicked(e) {
    hashing.nextElementSibling.textContent = e.target.textContent
    state.hashingPower = e.target.textContent
}
const handleSubmit = (e) => {
    e.preventDefault()
    const hashing = hashingInput.value
    const cost = costInput.value
    const pool = poolInput.value
    const power = powerInput.value
}
mainform.addEventListener("submit", handleSubmit)

// function logic(param) {

// revenue = $0.14 / TH * 86 TH * 30 days = $361.20
function calculateFN(e) {
    costs = parseInt(powerInput.textContent) * 24 * 30 * parseInt(costInput.textContent)
    console.log(powerInput.value)
}
// }

function handleCoinChange(e) {
    switch (e.target.value) {
        case "BTC":
            state.selectedItemPrice = "1 BitCoin = " + parseFloat(BTCPrice).toFixed(2) + "$"
            state.selecteitemIcon = BTCLogo
            break;
        case "LiteCoin":
            state.selectedItemPrice = "1 LiteCoin = " + parseFloat(LTCPrice).toFixed(2) + "$"
            state.selecteitemIcon = LTCLogo
            break;
        case "DogeCoin":
            state.selectedItemPrice = "1 DogeCoin = " + parseFloat(DOGEPrice).toFixed(2) + "$"
            state.selecteitemIcon = DOGELogo
            break;
        case "Kadena":
            state.selectedItemPrice = "1 Kadena = " + parseFloat(KDNPrice).toFixed(2) + "$"
            state.selecteitemIcon = KDNLogo
            break;
    }
    UNIT.textContent = state.selectedItemPrice
    iconImg.setAttribute("src", state.selecteitemIcon)

}
const CoinsData = fetch(`https://api.nomics.com/v1/currencies/ticker?key=5062a1c78b71f9b54e103a1d39110d85bd5dcab3&interval=1d,30d&per-page=100&page=1"&ids=BTC,ETH,LTC,DOGE`).then(response => response.json()).then(response => {
    BTCPrice = response[0].price
    BTCLogo = response[0].logo_url
    ETHPrice = response[1].price
    ETHLogo = response[1].logo_url
    LTCPrice = response[3].price
    LTCLogo = response[3].logo_url
    DOGEPrice = response[2].price
    DOGELogo = response[2].logo_url
    state.selectedItemPrice = BTCPrice
    state.selecteitemIcon = BTCLogo
    UNIT.textContent = "1 BitCoin = " + parseFloat(state.selectedItemPrice).toFixed(2) + "$"
    iconImg.setAttribute("src", state.selecteitemIcon)
})
let xaccesstoken = "coinranking5f7bb632f3743c6bfa7b7b63addb54cf7ef02e166aa0c83e"
const KadenaData = fetch(`https://api.coingecko.com/api/v3/coins/kadena`).then(response => response.json()).then(response =>
    KDNPrice = response.market_data.current_price.usd
)

