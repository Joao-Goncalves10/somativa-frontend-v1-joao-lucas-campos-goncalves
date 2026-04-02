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
    foco.classList.remove('foco-total')
})


// MISSÃO 3: CALCULADORA DE HIDRATAÇÃO (INPUT COM TRATAMENTO)
const pesoAluno = document.getElementById('peso-aluno')
const metaAgua = document.getElementById('meta-agua')
pesoAluno.addEventListener('input', () => {
    const valor = Number(pesoAluno.value) * 35

    metaAgua.textContent = `Sua meta diária de água é de ${valor}ml por dia!`
})


// MISSÃO 4: O DIÁRIO DE REFEIÇÕES (CLICK COM EMOJIS) //
const btnRegistrar = document.getElementById('btn-registrar')
const nomeRefeicao = document.getElementById('nome-refeicao')
const listaRefeicoes = document.getElementById('lista-refeicoes')

btnRegistrar.addEventListener('click', function() {
    listaRefeicoes.innerHTML = `🍽️Prato: ${nomeRefeicao}`
    listaRefeicoes.classList.add('card-refeicao')
})


// MISSÃO 5: DIA DE JEJUM (LIMPEZA COM AVISO VISUAL) //
const btnZerar = document.getElementById('btn-zerar')
btnZerar.addEventListener('click', function() {
    listaRefeicoes.textContent = ''
    window.alert('Diário reiniciado com sucesso para amanhã!')
})