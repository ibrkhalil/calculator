const hashingInput = document.getElementById('hashing')
const costInput = document.getElementById('cost')
const poolInput = document.getElementById('pool')
const powerInput = document.getElementById('power')
const coinsInput = document.getElementById('coins')
const mainform = document.getElementById('mainform')
const handleSubmit = (e) => {
    e.preventDefault()
    const hashing = hashingInput.value
    const cost = costInput.value
    const pool = poolInput.value
    const power = powerInput.value
    console.log(cost * hashing * pool * power)
}
mainform.addEventListener("submit", handleSubmit)
