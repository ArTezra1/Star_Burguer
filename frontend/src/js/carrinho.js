const CARRINHO_KEY = "carrinho"

function getCarrinho() {
    const carrinho = localStorage.getItem(CARRINHO_KEY);
    try {
        const parsed = JSON.parse(carrinho)
        return Array.isArray(parsed) ? parsed : []
    } catch {
        localStorage.removeItem(CARRINHO_KEY)
        return []
    }
}

function saveCarrinho(carrinho) {
    localStorage.setItem(CARRINHO_KEY, JSON.stringify(carrinho))
}

function adicionarAoCarrinho(item) {
    const carrinho = getCarrinho()

    const itemExistente = carrinho.find(produto => produto.id === item.id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ ...item, quantidade: 1 })
    }

    saveCarrinho(carrinho)
}

function removerDoCarrinho(itemId) {
    let carrinho = getCarrinho()

    carrinho = carrinho.filter(produto => produto.id !== itemId)

    saveCarrinho(carrinho)
}

function atualizarQuantidade(itemId, novaQuantidade) {
    const carrinho = getCarrinho();

    const item = carrinho.find(produto => produto.id === itemId);

    if (item) {
        item.quantidade = novaQuantidade;
        if (item.quantidade <= 0) {
            removerDoCarrinho(itemId);
        } else {
            saveCarrinho(carrinho);
        }
    }
}

function calcularTotal() {
    const carrinho = getCarrinho();
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)
}

function limparCarrinho() {
    localStorage.removeItem(CARRINHO_KEY)
}

export { adicionarAoCarrinho, removerDoCarrinho, limparCarrinho, getCarrinho, calcularTotal, saveCarrinho }