const hashingInput = document.getElementById('hashing')
const costInput = document.getElementById('cost')
const poolInput = document.getElementById('pool')
const powerInput = document.getElementById('power')
const coinsInput = document.getElementById('coins')
const mainform = document.getElementById('mainform')
const ClienID = "9f78bfdd52fa7d4e3ca0f4d7af6819aa4c786603085c7059144b64a6e20cacc5"
const handleSubmit = (e) => {
    e.preventDefault()
    const hashing = hashingInput.value
    const cost = costInput.value
    const pool = poolInput.value
    const power = powerInput.value
}
mainform.addEventListener("submit", handleSubmit)



const data = fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC").then(response => response.json).then(console.log(response.data))
