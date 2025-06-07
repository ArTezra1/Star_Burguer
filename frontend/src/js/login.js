var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

const cadastro = document.getElementById("cadastro");
const btnRegistrar = document.getElementById("btn_registrar");
var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

// Registro
btnRegistrar.addEventListener("click", async (event) => {
    event.preventDefault();

    const c_Nome = document.getElementById("c_nome").value;
    const c_Email = document.getElementById("c_email").value;
    const c_Senha = document.getElementById("c_senha").value;
    const c_Telefone = document.getElementById("c_telefone").value;

    if (!c_Nome || !c_Email || !c_Senha || !c_Telefone) {
        alert("Preencha todos os dados corretamente");
        return;
    }

    let dados = {
        nome: c_Nome,
        email: c_Email,
        senha: c_Senha,
        telefone: c_Telefone,
    };

    const deuCerto = await enviarDados(dados);

    if (deuCerto === true) {
        window.location.href = "../html/index.html";
    }
});

// Login
const btnLogin = document.getElementById("btn_login");

btnLogin.addEventListener("click", async (event) => {
    event.preventDefault();

    const l_email = document.getElementById("l_email").value;
    const l_senha = document.getElementById("l_senha").value;

    if (!l_email || !l_senha) {
        alert("Preencha todos os dados corretamente.");
        return;
    }

    let dados = {
        email: l_email,
        senha: l_senha,
    };

    const deuCerto = await enviarDadosLogin(dados);

    if (deuCerto === true) {
        alert("Login realizado com sucesso!");
        window.location.href = "/html/index.html";

    } else {
        alert("Falha no login. Verifique seus dados.");
    }
});

// Função de cadastro
const enviarDados = async (dados) => {
    try {
        const response = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();
        console.log('Resposta do servidor:', data);

        return true;
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        return false;
    }
};

const enviarDadosLogin = async ({ email, senha }) => {
    try {
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        if (!response.ok) {
            console.error('Erro na requisição de login');
            return false;
        }

        const data = await response.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.user.id);
            localStorage.setItem('role', data.user.role);

            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.error('Erro ao enviar os dados de login:', error);
        return false;
    }
};