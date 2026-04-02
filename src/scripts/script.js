// MISSÃO 1: RECEPÇÃO DO ATLETA (DATE E CONDICIONAIS) //
const agora = new Date()
const hora = agora.getHours()
const saudacao = document.getElementById('saudacao-atleta')

if (hora < 12 && hora > 5) {
    saudacao.textContent = 'Treino matinal liberado!'
} if (hora >= 12 && hora <= 18) {
    saudacao.textContent = 'Boa tarde, foco no treino!'
} if (hora > 18) {
    saudacao.textContent = 'Descanso noturno merecido!'
}


// MISSÃO 2: BANNER MOTIVACIONAL (EVENTOS DE MOUSE) //
const foco = document.getElementById('banner-foco')
foco.addEventListener('mouseover', function() {
    foco.classList.add('foco-total')
})

foco.addEventListener('mouseout', function() {
    foco.classList.remove()
})


// MISSÃO 3: CALCULADORA DE HIDRATAÇÃO (INPUT COM TRATAMENTO)
const pesoAluno = document.getElementById('peso-aluno')
const metaAgua = document.getElementById('meta-agua')
pesoAluno.addEventListener('input', () => {
    const valor = Number(pesoAluno.value) * 35

    metaAgua.textContent = `Sua meta diária de água é de:${valor.toFixed(2)}ml por dia!`
})