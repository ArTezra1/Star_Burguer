var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

const cadastro = document.getElementById("cadastro")
const btnRegistrar = document.getElementById("btn_registrar")

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

btnRegistrar.addEventListener("click", async (event) => {
    event.preventDefault()

    const c_Nome = document.getElementById("c_nome").value
    const c_Email = document.getElementById("c_email").value
    const c_Senha = document.getElementById("c_senha").value
    const c_Telefone = document.getElementById("c_telefone").value

    if (!c_Nome || !c_Email || !c_Senha || !c_Telefone) {
        alert("Preencha todos os dados corretamente")
        return
    }

    let dados = {
        nome: c_Nome,
        email: c_Email,
        senha: c_Senha,
        telefone: c_Telefone
    }

    const deuCerto = await enviarDados(dados)

    if (deuCerto === true) {
        window.location.href = "../html/index.html" 
    }

})

const enviarDados = async (dados) => {
    try {
        const response = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })

        if (!response.ok) {
            throw new Error('Erro na requisição')
        }

        const data = await response.json()
        console.log('Resposta do servidor:', data)

        return true

    } catch (error) {
        console.error('Erro ao enviar os dados:', error)
        return false
    }
}
