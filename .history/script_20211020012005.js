const hashingInput = document.getElementById('hashing')
const costInput = document.getElementById('cost')
const poolInput = document.getElementById('pool')
const powerInput = document.getElementById('power')
const coinsInput = document.getElementById('coins')
const mainform = document.getElementById('mainform')
const handleSubmit = (e) => {
    e.preventDefault()
    const hashing = hashingInput.value
    console.log(hashingInput.value)
    const cost = costInput.value
    const pool = poolInput.value
    const coins = coinsInput.value
    console.log(hashing * cost * pool * coins)
}
mainform.addEventListener("submit", handleSubmit)
