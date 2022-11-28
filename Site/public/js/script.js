window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// CAMINHOS (LINK) BOTÕES

function login(){
    window.location="login.html"
  }

function criar_conta(){
    window.location="cadastro.html"
}

function entrar(){
    window.location="home.html"
}
function sair(){
    window.location="index.html"
}
function finalizar(){
    window.location = 'home.html'
}

