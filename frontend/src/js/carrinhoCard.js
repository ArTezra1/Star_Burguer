import { adicionarAoCarrinho, getCarrinho, calcularTotal } from "./carrinho.js";

const carrinhoTotal = document.getElementById("carrinho-total")
const totalItens = document.getElementById("total-itens")

let pedido = {
    clienteId: null,
    enderecoId: null,
    items: [],
    total: 0
};

function mostrarDados(){
    const carrinho = getCarrinho()
    const total = calcularTotal()
    
    carrinhoTotal.innerHTML = `Total: R$${total.toFixed(2)}`
    totalItens.innerHTML = `${carrinho.length}`
}

mostrarDados()


document.addEventListener("click", (event) => {
    if(event.target.classList.contains("btn_add")){
        const card = event.target.closest(".burger-card");

        const id = event.target.dataset.id;
        const tipo = event.target.dataset.tipo;

        const nome = card.querySelector("h3").innerText;
        const imagem = card.querySelector("img").src
        const sabor = card.querySelector("p").innerText;
        const preco = parseFloat(
            card.querySelector(".price-container span").innerText.replace("R$ ", "").trim()
        );

        const produto = {
            id,
            tipo,
            nome,
            sabor,
            imagem,
            preco
        };

        pedido.items.push({
            [`${tipo}Id`]: id,
            quantidade: 1
        });

        pedido.total += preco;

        adicionarAoCarrinho(produto)
        mostrarDados()
    }
});
