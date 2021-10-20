let state = {
    selectedItemPrice: 0,
    selecteitemIcon: "",
    hashingPower: "TH/s",
    diff: 0,
    reward_block: 0
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
var BTCLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png";
let BTCDiff = 0;
let BTCReward = 0;
let ETHPrice = 0;
let ETHLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png";
let ETHDiff = 0
let ETHReward = 0
let LTCPrice = 0;
let LTCLogo = "https://waytomine.com/wp-content/uploads/2018/03/LiteCoin-200x200.gif";
let LTCDiff = 0;
let LTCReward = 0;
let DOGEPrice = 0;
let DOGELogo = "data:image/png;base64,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";
let DOGEDiff = 0;
let DOGEReward = 0;
let KDNPrice = 0;
let KDNDiff = 0;
let KDNReward = 0;
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
    let factor = 0
    switch (state.hashingPower) {
        case "TH/s":
            factor = 1e+12
            break;
        case "GH/s":
            factor = 1e+9
            break;
        case "MH/s":
            factor = 1e+6
            break;
        case "KH/s":
            factor = 1e+6
            break;
        case "H/s":
            factor = 1
            break;
    }
    hashRate = factor * hashingInput.value
    console.log((hashRate * state.reward_block * 30 * 86400) / (state.diff * Math.pow(2, 32)))
}
// }
function handleCoinChange(e) {
    switch (e.target.value) {
        case "BTC":
            state.selectedItemPrice = "1 BitCoin = " + parseFloat(BTCPrice).toFixed(2) + "$"
            state.selecteitemIcon = BTCLogo
            state.diff = BTCDiff
            state.reward_block = BTCReward
            break;
        case "LiteCoin":
            state.selectedItemPrice = "1 LiteCoin = " + parseFloat(LTCPrice).toFixed(2) + "$"
            state.selecteitemIcon = LTCLogo
            state.diff = LTCDiff
            state.reward_block = LTCReward
            break;
        case "DogeCoin":
            state.selectedItemPrice = "1 DogeCoin = " + parseFloat(DOGEPrice).toFixed(2) + "$"
            state.selecteitemIcon = DOGELogo
            state.diff = DOGEDiff
            state.reward_block = DOGEReward
            break;
        case "Kadena":
            state.selectedItemPrice = "1 Kadena = " + parseFloat(KDNPrice).toFixed(2) + "$"
            state.selecteitemIcon = KDNLogo
            state.diff = KDNDiff
            state.reward_block = KDNReward
            break;
    }
    UNIT.textContent = state.selectedItemPrice
    iconImg.setAttribute("src", state.selecteitemIcon)

}
const CoinsData = fetch(`https://api.minerstat.com/v2/coins?list=BTC,ETH,LTC,KDA,DOGE`).then(response => response.json()).then(response => {
    BTCPrice = response[0].price
    BTCDiff = response[0].difficulty
    BTCReward = response[0].reward_block
    // BTCLogo = response[0].logo_url
    ETHPrice = response[1].price
    ETHDiff = response[1].difficulty
    ETHReward = response[1].reward_block
    LTCPrice = response[2].price
    LTCDiff = response[2].difficulty
    LTCReward = response[2].reward_block
    KDNPrice = response[3].price
    KDNDiff = response[3].difficulty
    KDNReward = response[3].reward_block
    DOGEPrice = response[4].price
    DOGEDiff = response[4].difficulty
    DOGEReward = response[4].reward_block
    state.selectedItemPrice = BTCPrice
    UNIT.textContent = "1 BitCoin = " + parseFloat(state.selectedItemPrice).toFixed(2) + "$"
    iconImg.setAttribute("src", BTCLogo)
    state.diff = BTCDiff
    state.reward_block = BTCReward
})
let xaccesstoken = "coinranking5f7bb632f3743c6bfa7b7b63addb54cf7ef02e166aa0c83e"

