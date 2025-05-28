import {
    getCarrinho,
    calcularTotal,
    adicionarAoCarrinho,
    saveCarrinho,
    removerDoCarrinho,
    limparCarrinho
} from "../../js/carrinho.js"

const carrinho = getCarrinho()
const menu = document.getElementById("menu")
const totalView = document.getElementById("total")
const deletarTudo = document.getElementById("delete-all")

deletarTudo.addEventListener("click", ()=>{
    if(confirm("Deseja limpar o seu carrinho?")){
        limparCarrinho()
        gerarCards()
    } else {
        alert("Carrinho suave")
    }
})

let total = calcularTotal()

totalView.innerHTML = total.toFixed(2)

function gerarCards(){
    carrinho.forEach((item, index) => {
        createCardOrder(item, index)
    })
}

gerarCards()

function createCardOrder(item, index) {
    const { nome, imagem, preco, quantidade, id } = item

    const card = document.createElement("div")
    card.className = "flex gap-2 w-full border-2 p-5"

    card.innerHTML = `
        <img src="${imagem}" alt="${nome}"
            class="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300" />

        <div class="w-full" id="${id}">
            <p class="font-bold">${nome}</p>

            <div class="flex items-center gap-2 justify-between mt-3">
                <p class="font-bold text-lg preco">R$ ${(preco * quantidade).toFixed(2)}</p>
                <div class="flex items-center gap-2">
                    <button class="bg-red-500 px-5 rounded text-black text-lg font-bold remover-item">-</button>
                    <span class="quantidade font-bold">${quantidade}</span>
                    <button class="bg-green-500 px-5 rounded text-black text-lg font-bold adicionar-item">+</button>
                </div>
            </div>
        </div>
    `

    const btnRemover = card.querySelector(".remover-item")
    const btnAdicionar = card.querySelector(".adicionar-item")
    const quantidadeSpan = card.querySelector(".quantidade")
    const precoEl = card.querySelector(".preco")

    const atualizarValores = () => {
        quantidadeSpan.textContent = item.quantidade
        precoEl.textContent = `R$ ${(item.quantidade * preco).toFixed(2)}`
    }

    btnRemover.addEventListener("click", () => {
        if (item.quantidade > 1) {
            item.quantidade--
            atualizarValores()
            removerDoCarrinho(item.id)
            saveCarrinho(carrinho)

            total = calcularTotal()
            totalView.innerHTML = total.toFixed(2)
        }
    })

    btnAdicionar.addEventListener("click", () => {
        item.quantidade++
        atualizarValores()
        adicionarAoCarrinho(item.id)
        saveCarrinho(carrinho)

        total = calcularTotal()
        totalView.innerHTML = total.toFixed(2)
    })

    menu.appendChild(card)
}
