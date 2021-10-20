const hashingInput = document.getElementById('hashing')
const costInput = document.getElementById('cost')
const poolInput = document.getElementById('pool')
const powerInput = document.getElementById('power')
const coinsInput = document.getElementById('coins')
const mainform = document.getElementById('mainform')
const handleSubmit = (e) => {
    e.preventDefault()
    const hashing = hashingInput.value
    console.log(hashing)
    const cost = costInput.value
    console.log(cost)
    const pool = poolInput.value
    console.log(pool)

}
mainform.addEventListener("submit", handleSubmit)
