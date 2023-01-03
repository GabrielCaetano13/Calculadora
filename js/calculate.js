export default function calculate() {
    const resultInput = document.getElementById('result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value) // Dentro dessa função, ele roda códigos javascript
    resultInput.value = result
    resultInput.classList.remove('error')
}