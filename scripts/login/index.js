/* Captura os inputs que serão manipulados */
let emailLogin = document.getElementById("inputEmail");
let passwordLogin = document.getElementById("inputPassword");
let btnLogin = document.getElementById("btnLogin");

/* Altera o botão de acesso quando está bloqueado */
btnLogin.style.backgroundColor = "#979292A1";
btnLogin.innerText = "Bloqueado";

/* Define um objeto para o usuário */
let objetoUsuario = {
    email: "",
    password: ""
}

/* Adiciona o evento de click ao botão */
btnLogin.addEventListener("click", function (evento) {

    //Verifica a validação
    if (validaLogin(emailLogin.value, passwordLogin.value)) {

        evento.preventDefault();

        /* Normalização das informações*/
        emailLogin = normalizaTextoRetiraEspaco(emailLogin.value);
        passwordLogin = normalizaTextoRetiraEspaco(passwordLogin.value);

        //Atribui as informações normalizadas ao objeto do usuário (em JS)
        objetoUsuario.email = emailLogin;
        objetoUsuario.password = passwordLogin;

        //Transforma o objeto JS em objeto JSON(textual)
        let objetoUsuarioEmJson = JSON.stringify(objetoUsuario);

        console.log(objetoUsuarioEmJson);
    }

});


/* Verificando o input de email */
emailLogin.addEventListener("keyup", () => {

    let validacaoEmail = document.getElementById("validacaoEmail");

    if ((emailLogin.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        validacaoEmail.innerText = ""
        emailLogin.style.border = "2px solid transparent "
    } else {
        validacaoEmail.innerText = "Campo obrigatório"

        emailLogin.style.border = "2px solid #E9554EBB"
    }
    validaLogin(emailLogin.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), passwordLogin.value);

});

/* Verificando o input de senha */
passwordLogin.addEventListener("keyup", () => {

    let validacaoSenha = document.getElementById("validacaoSenha");

    if (passwordLogin.value) {
        validacaoSenha.innerText = ""
        passwordLogin.style.border = "2px solid transparent"
    } else {
        validacaoSenha.innerText = "Campo obrigatório"
        passwordLogin.style.border = "2px solid #E9554EBB"
    }
    validaLogin(emailLogin.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), passwordLogin.value);
});


/* Função que valida o acesso na página de login */
function validaLogin(email, password) {

    if (email && password) {
        //True
        btnLogin.removeAttribute("disabled")
        btnLogin.style.backgroundColor = "#7898FF";
        btnLogin.innerText = "Acessar";
        return true;

    } else {
        //False
        btnLogin.setAttribute("disabled", true)
        btnLogin.style.backgroundColor = "#979292A1";
        btnLogin.innerText = "Bloqueado";
        return false;
    }
}