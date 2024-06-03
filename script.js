const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "O Festival de Parintins acontece na cidade de Parintins, no Amazonas, desde o ano de 1965. São três dias consecutivos de desfiles e competição entre os dos dois bois que representam a festa: Boi Garantido e Boi Caprichoso Uma comissão de jurados é responsável por avaliar quesitos como enredo, música e alegoria e dar a nota final. O Festival de Parintins é considerado Patrimônio Cultural do Brasil.?",
        alternativas: [
            {
                texto: "Não conhecia, muito legal! Quero conhecer mais!",
                afirmacao: "Verdadeira"
            },
            {
                texto: "Já conhecia, quero algo novo!",
                afirmacao: "Falsa"
            }
        ]
    },
   
];


    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Valorize";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "A promoção e preservação da cultura brasileira envolvem diversas áreas, como a educação, turismo, artes e patrimônio histórico.";
}

mostraPergunta();