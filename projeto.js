let novoTitulo = document.querySelector("#titulo")
novoTitulo.textContent = "Realize seus objetivos em 2021!"


let novoBotao = document.querySelector(".enviar-informacao")
novoBotao.addEventListener("click", function () {
    event.preventDefault()




    let formulario = document.querySelector(".form-avaliacao")

    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let tel = formulario.tel.value;

    console.log(nome);
    console.log(email);
    console.log(tel);



    let botaoGeral = document.querySelector("#developer")
    let botaoTeste = document.createElement("button")


    botaoTeste.textContent = email;

    botaoGeral.appendChild(botaoTeste)

    console.log(botaoGeral)


    let novoTitulo = document.querySelector("#titulo")
    novoTitulo.addEventListener("click", function () {
        alert("Faça, por favor, seu cadastro");

        console.log(novoTitulo)

    })

        

  

})



