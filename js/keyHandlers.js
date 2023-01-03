import calculate from "./calculate.js"
const input = document.getElementById('input')

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
}

export function handleClearButton(){
    input.value = ''
    input.focus() // Apaga tudo e já foca direto no input
}

export function handleTyping(ev) {
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) { // se a tecla que for pressionada estiver incluida dentro da lista criada
        input.value += ev.key // colocamos no input essa tecla que foi pressionada
        return
    }
    if (ev.key === 'Backspace') { // ev.key = a tecla que for pressionada/digitada
        input.value = input.value.slice(0, -1) // cortando um caracter, ele vai pegar do incial até o penúltimo, ou seja, vai excluir o último
    }
    if (ev.key === 'Enter') {
        calculate()
    }
}