const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body");

const imagemBotaoAlterarTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    body.classList.toggle("modo-escuro");

    if(body.classList.contains("modo-escuro")){
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png");
        imagemBotaoAlterarTema.setAttribute("alt", "sol");
    }
    else{
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");
        imagemBotaoAlterarTema.setAttribute("alt", "lua");    
    }
})