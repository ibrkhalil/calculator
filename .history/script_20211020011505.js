const hashingInput = document.getElementById('hashing')
const costInput = document.getElementById('cost')
const poolInput = document.getElementById('pool')
const powerInput = document.getElementById('power')
const coinsInput = document.getElementById('coins')
const mainform = document.getElementById('mainform')
mainform.addEventListener("submit", "handleSubmit")
const handleSubmit = (e) => {
    e.preventDefault()
    const hashing = parseFloat(hashingInput.textContent)
    const cost = parseFloat(costInput.textContent)
    const pool = parseFloat(poolInput.textContent)
    const coins = parseFloat(coinsInput.textContent)
    console.log()
}
