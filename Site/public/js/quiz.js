// b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
var nomeVar = sessionStorage.NOME_USUARIO
var contador = 0
var pontos = 0
var resposta = ''
const inicioQuiz = document.querySelector('.iniciar')
const divQuiz = document.querySelector('.iniciarQuiz')
const conteudox = document.querySelector('.conteudoQuiz')

inicioQuiz.addEventListener("click", () => {
    divQuiz.style.display = 'none'
    conteudox.style.display = 'flex'
    atualizar();
})


function atualizar() {
    const Perguntas = [{
        pergunta: "Qual o nome da primeira amiga que Anne faz quando chega em Green Gables",
        resposta: [{ text: "Tillie Boulter", isCorrect: false },
        { text: "Josie Pye", isCorrect: false },
        { text: "Diana Barry", isCorrect: true },
        { text: "Ruby Gillis", isCorrect: false }
        ]

    },
    {
        pergunta: "O que Anne é acusada de roubar dos Cuthberts",
        resposta: [{ text: "Broche", isCorrect: true },
        { text: "Colar", isCorrect: false },
        { text: "Anel", isCorrect: false },
        { text: "Brinco", isCorrect: false }
        ]

    },
    {
        pergunta: "Como a mãe de Gilbert morreu",
        resposta: [{ text: "Não foi dito", isCorrect: false },
        { text: "Por causa de um vírus incurável na época", isCorrect: false },
        { text: "Ela sofreu um acidente", isCorrect: false },
        { text: "Morreu no parto", isCorrect: true }
        ]

    },
    {
        pergunta: "De quem Billy é irmão",
        resposta: [{ text: "Ruby e Prissy", isCorrect: false },
        { text: "Jane e Ruby", isCorrect: false },
        { text: "Jane e Prissy", isCorrect: true },
        { text: "Diana e Ruby", isCorrect: false }
        ]

    },
    {
        pergunta: "Qual a última cena da série",
        resposta: [{ text: "Com o beijo de Anne e Gilbert", isCorrect: false },
        { text: "Com todos na faculdade", isCorrect: false },
        { text: "Com Anne e Gilbert se despedindo, porque ele vai pro Canadá", isCorrect: false },
        { text: "Com Anne escrevendo uma carta para Gilbert, aceitando quem ela é", isCorrect: true }
        ]

    },
    {
        pergunta: "O que Gilbert deu a Anne de Natal",
        resposta: [{ text: "Um anel", isCorrect: false },
        { text: "Um livro", isCorrect: false },
        { text: "Um mini dicionário", isCorrect: true },
        { text: "Um desenho", isCorrect: false }
        ]

    },
    {
        pergunta: "O que Anne mais odeia em si mesma",
        resposta: [{ text: "Ser órfã", isCorrect: false },
        { text: "Falar demais", isCorrect: false },
        { text: "Suas roupas", isCorrect: false },
        { text: "Cabelo e sardas", isCorrect: true }
        ]

    }
    ]

    const frase = document.querySelector('#pergunta')
    const alternativa1 = document.querySelector('#op1')
    const alternativa2 = document.querySelector('#op2')
    const alternativa3 = document.querySelector('#op3')
    const alternativa4 = document.querySelector('#op4')

    frase.innerText = Perguntas[contador].pergunta
    alternativa1.innerText = Perguntas[contador].resposta[0].text
    alternativa2.innerText = Perguntas[contador].resposta[1].text
    alternativa3.innerText = Perguntas[contador].resposta[2].text
    alternativa4.innerText = Perguntas[contador].resposta[3].text

    alternativa1.value = Perguntas[contador].resposta[0].isCorrect
    alternativa2.value = Perguntas[contador].resposta[1].isCorrect
    alternativa3.value = Perguntas[contador].resposta[2].isCorrect
    alternativa4.value = Perguntas[contador].resposta[3].isCorrect

    alternativa1.addEventListener("click", () => {
        op1.style.color = 'var(--hot-brown)'
        op2.style.color = 'var(--pink-white)'
        op3.style.color = 'var(--pink-white)'
        op4.style.color = 'var(--pink-white)'
        op1.style.backgroundColor = "var(--pink-white)";
        op2.style.backgroundColor = "var(--hot-brown)";
        op3.style.backgroundColor = "var(--hot-brown)";
        op4.style.backgroundColor = "var(--hot-brown)";
        resposta = alternativa1.value;
    })

    alternativa2.addEventListener("click", () => {
        op1.style.color = 'var(--pink-white)'
        op2.style.color = 'var(--hot-brown)'
        op3.style.color = 'var(--pink-white)'
        op4.style.color = 'var(--pink-white)'
        op1.style.backgroundColor = "var(--hot-brown)";
        op2.style.backgroundColor = "var(--pink-white)";
        op3.style.backgroundColor = "var(--hot-brown)";
        op4.style.backgroundColor = "var(--hot-brown)";
        resposta = alternativa2.value;
    })

    alternativa3.addEventListener("click", () => {
        op1.style.color = 'var(--pink-white)'
        op2.style.color = 'var(--pink-white)'
        op3.style.color = 'var(--hot-brown)'
        op4.style.color = 'var(--pink-white)'
        op1.style.backgroundColor = "var(--hot-brown)";
        op2.style.backgroundColor = "var(--hot-brown)";
        op3.style.backgroundColor = "var(--pink-white)";
        op4.style.backgroundColor = "var(--hot-brown)";
        resposta = alternativa3.value;
    })

    alternativa4.addEventListener("click", () => {
        op1.style.backgroundColor = "var(--hot-brown)";
        op2.style.backgroundColor = "var(--hot-brown)";
        op3.style.backgroundColor = "var(--hot-brown)";
        op1.style.color = 'var(--pink-white)'
        op2.style.color = 'var(--pink-white)'
        op3.style.color = 'var(--pink-white)'
        op4.style.color = 'var(--hot-brown)'
        op4.style.backgroundColor = "var(--pink-white)";
        resposta = alternativa4.value;
    })
}

const respondeu = document.querySelector('#responder')

respondeu.addEventListener("click", () => {
    if (resposta == "true") {
        pontos++
    }
    else {
        pontos = pontos
    }

    if (contador < 6) {
        contador++
        atualizar();
    }
    else {
        finalizarQuiz();
    }
})

function finalizarQuiz() {
    const conteudo = document.querySelector('.conteudoQuiz')
    const nota = document.querySelector('.finalizarQuiz')
    conteudo.style.display = 'none'
    nota.style.display = 'flex'
    if (pontos <= 3) {
        nota.style.backgroundColor = 'var(--baby-brown)'
        nota.style.color = 'var(--pink-white)'
        botao__finalizar.style.backgroundColor = 'var(--pink-white)'
        botao__finalizar.style.color = 'var(--hot-brown)'
    }
    else if (pontos <= 6) {
        nota.style.backgroundColor = 'var(--baby-brown)'
        nota.style.color = 'var(--pink-white)'
        botao__finalizar.style.backgroundColor = 'var(--pink-white)'
        botao__finalizar.style.color = 'var(--hot-brown)'
    }
    else {
        nota.style.backgroundColor = 'var(--baby-brown)'
        nota.style.color = 'var(--pink-white)'
        botao__finalizar.style.backgroundColor = 'var(--pink-white)'
        botao__finalizar.style.color = 'var(--hot-brown)'
    }
    notaFinal.innerHTML = `Você acertou: ${pontos} de 7!`
}

function finalizar() {
    fetch("/usuarios/finalizar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pontosServer: pontos,
            nomeServer: nomeVar
        })
    });
    window.location = 'home.html'
}
