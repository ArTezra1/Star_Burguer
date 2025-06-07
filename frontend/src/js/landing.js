const profileLink = document.getElementById("profile-link");
const profileImage = document.getElementById("profile-image");
const descProfile = document.getElementById("desc-perfil");

const navLanches = document.getElementById("home-link-lanches");
const navCombos = document.getElementById("home-link-combos");
const navBebidas = document.getElementById("home-link-bebidas");

const cardapioTittle = document.getElementById("cardapio-tittle")

const sectionLanches = document.getElementById("section-lanches");
const sectionCombos = document.getElementById("section-combos");
const sectionBebidas = document.getElementById("section-bebidas");

const token = localStorage.getItem("token");

if (token) {
    profileLink.setAttribute("href", "../html/perfil/perfil.html");
    profileImage.setAttribute("src", "../image/profile.png");
    descProfile.innerHTML = "Logado";
    descProfile.style.color = "lightgreen";
} else {
    profileLink.setAttribute("href", "../html/login/login.html");
    profileImage.setAttribute("src", "https://img.icons8.com/ios-filled/50/user.png");
    descProfile.innerHTML = "Deslogado";
    descProfile.style.color = "red";
}

function generateCard({ _id, nome, tipo, sabor, ingredientes, estoque, preco_unitario, imageSrc }, tipoCall) {
    console.log(imageSrc)
    return `
        <div class="burger-card">
            <div class="burger-image">
                <img src="../../../backend/${imageSrc}" alt="${nome}"
                />
            </div>
            <h3>${nome}</h3>
            <p>${sabor}</p>
            <div class="price-container">
                <span>R$ ${preco_unitario.toFixed(2)}</span>
                <button 
                class="btn_add"
                data-id="${_id}" 
                data-tipo="${tipoCall}"
                >
                Add ao carrinho
                </button>
            </div>
        </div>
    `;
}

function mostrarApenas(section) {
    sectionLanches.style.display = "none";
    sectionCombos.style.display = "none";
    sectionBebidas.style.display = "none";

    section.style.display = "grid"; 
}

const getDados = async (section = "lanches") => {
    const map = {
        lanches: sectionLanches,
        combos: sectionCombos,
        bebidas: sectionBebidas
    };

    const container = map[section];
    const url = section;

    let tipoCall = section

    try {
        const response = await fetch(`http://localhost:4000/${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar os dados de ${url}`);
        }

        const data = await response.json();
        container.innerHTML = '';

        data.forEach(item => {
            const cardHTML = generateCard(item, tipoCall);
            container.insertAdjacentHTML('beforeend', cardHTML);
        });

    } catch (error) {
        console.error(error);
    }
};

navLanches.addEventListener("click", () => {
    setActive(navLanches, "Lanches")
    mostrarApenas(sectionLanches);
    getDados("lanches");
});
navCombos.addEventListener("click", () => {
    setActive(navCombos, "Combos")
    mostrarApenas(sectionCombos);
    getDados("combos");
});
navBebidas.addEventListener("click", () => {
    setActive(navBebidas, "Bebidas")
    mostrarApenas(sectionBebidas);
    getDados("bebidas");
});

function setActive(navButton, tittle) {
    const place = [navLanches, navCombos, navBebidas]

    place.forEach((element) => {
        if (element !== navButton) {
            element.removeAttribute("class", "cat-active")
        }
    })

    cardapioTittle.innerText = tittle
    navButton.setAttribute("class", "cat-active")
}

mostrarApenas(sectionLanches);
getDados("lanches");
