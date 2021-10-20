let state = {
    selectedItemPrice: 0,
    selecteitemIcon: ""
}
const hashingInput = document.getElementById('hashing')
const costInput = document.getElementById('cost')
const poolInput = document.getElementById('pool')
const powerInput = document.getElementById('power')
const coinsInput = document.getElementById('coins')
const mainform = document.getElementById('mainform')
let UNIT = document.getElementById('UNIT')
let iconImg = document.getElementById('iconImg')
let coins = document.getElementById('coins')
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
const handleSubmit = (e) => {
    e.preventDefault()
    const hashing = hashingInput.value
    const cost = costInput.value
    const pool = poolInput.value
    const power = powerInput.value
}
mainform.addEventListener("submit", handleSubmit)


function handleCoinChange(e) {
    switch (e.target.value) {
        case "BTC":
            state.selectedItemPrice = "1 BitCoin = " + parseFloat(BTCPrice).toFixed(2) + "$"
            state.selecteitemIcon = BTCLogo
            console.log(BTCLogo);
            break;
        case "LiteCoin":
            state.selectedItemPrice = "1 LiteCoin = " + parseFloat(LTCPrice).toFixed(2) + "$"
            state.selecteitemIcon = LTCLogo
            break;
        case "DogeCoin":
            state.selectedItemPrice = "1 DogeCoin = " + parseFloat(DOGEPrice).toFixed(2) + "$"
            state.selecteitemIcon = DOGELogo
            break;
    }
    UNIT.textContent = state.selectedItemPrice
    iconImg.setAttribute("src", state.selecteitemIcon)

}
const data = fetch(`https://api.nomics.com/v1/currencies/ticker?key=5062a1c78b71f9b54e103a1d39110d85bd5dcab3&interval=1d,30d&per-page=100&page=1"&ids=BTC,ETH,LTC,DOGE`).then(response => response.json()).then(response => {
    BTCPrice = "1 BitCoin = " + parseFloat(response[0].price).toFixed(2) + "$"
    BTCLogo = response[0].logo_url
    ETHPrice = response[1].price
    ETHLogo = response[1].logo_url
    LTCPrice = response[3].price
    LTCLogo = response[3].logo_url
    DOGEPrice = response[2].price
    DOGELogo = response[2].logo_url
    state.selectedItemPrice = BTCPrice
    state.selecteitemIcon = BTCLogo
    UNIT.textContent = state.selectedItemPrice
    iconImg.setAttribute("src", state.selecteitemIcon)

})
