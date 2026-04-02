/* MISSÃO 1: RECEPÇÃO DO ATLETA (DATE E CONDICIONAIS) */
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