const deslogar = document.getElementById("deslogar")

deslogar.addEventListener("click", () => {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    window.location.href = "../index.html"
})

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const estado = document.getElementById("estado")

const id = localStorage.getItem("id")
const token = localStorage.getItem("token")

const dados = async () => {
    try {
        const response = await fetch(`http://localhost:4000/clientes/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status)
        }

        const data = await response.json()
        console.log('Dados do cliente:', data)

        return data

    } catch (error) {
        console.error('Erro ao buscar dados do cliente:', error)
        return null
    }
}

async function colocarDados(){
    const cliente = await dados()
    setDados(cliente)
}

function formatarTelefone(telefone){
    const telefoneFormatado = telefone.replace(/\D/g, '')
    if (telefoneFormatado.length === 11) {
        return `(${telefoneFormatado.slice(0, 2)}) ${telefoneFormatado.slice(2, 7)}-${telefoneFormatado.slice(7)}`
    } else if (telefoneFormatado.length === 10) {
        return `(${telefoneFormatado.slice(0, 2)}) ${telefoneFormatado.slice(2, 6)}-${telefoneFormatado.slice(6)}`
    } else {
        return telefone
    }
}

function setDados(cliente){
    nome.value = cliente.nome || "Nome não informado"
    email.value = cliente.email || "Email não informado"
    phone.value =  formatarTelefone(cliente.telefone) || "Telefone não informado"
}

colocarDados()