export default function copyToClipboard(ev){
    const button = ev.currentTarget // currentTarget -> para saber quem acionou o evento, no caso será o botão
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success') // Está adicionando uma classe no botão, classe que tem um estilo diferente no css
        window.navigator.clipboard.writeText(document.getElementById('result').value) // coloca na área de transferência o resultado da conta
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}