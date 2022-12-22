const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// Caracteres que podem ser digitados/apertados
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus() // Apaga tudo e já foca direto no input
})

input.addEventListener("keydown", function(ev) {
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
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value) // Dentro dessa função, ele roda códigos javascript
    resultInput.value = result
    resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget // currentTarget -> para saber quem acionou o evento, no caso será o botão
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success') // Está adicionando uma classe no botão, classe que tem um estilo diferente no css
        window.navigator.clipboard.writeText(resultInput.value) // coloca na área de transferência o resultado da conta
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9') // setando uma nova propriedade
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529') // setando uma nova propriedade
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})