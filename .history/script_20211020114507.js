const hashingInput = document.getElementById('hashing')
const costInput = document.getElementById('cost')
const poolInput = document.getElementById('pool')
const powerInput = document.getElementById('power')
const coinsInput = document.getElementById('coins')
const mainform = document.getElementById('mainform')
const ClienID = "9f78bfdd52fa7d4e3ca0f4d7af6819aa4c786603085c7059144b64a6e20cacc5"
const ClienSecret = "0b79f034066c9c06ca1e8d948cb8cf07709d534ccf4b865d953c8b810317007b"
const handleSubmit = (e) => {
    e.preventDefault()
    const hashing = hashingInput.value
    const cost = costInput.value
    const pool = poolInput.value
    const power = powerInput.value
}
mainform.addEventListener("submit", handleSubmit)



const data = fetch(`https://api.nomics.com/v1/currencies/ticker?key=5062a1c78b71f9b54e103a1d39110d85bd5dcab3&interval=1d,30d&per-page=100&page=1"&ids=BTC,ETH,LTC,DOGE`).then(response => response.json()).then(response => console.log(response[0].price))
