//ativar links no menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}
links.forEach(ativarLink);

//ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(paramentro) {
    const elemento = document.getElementById(paramentro);
    if(elemento){
        elemento.checked = true;
    }
}
parametros.forEach(ativarProdutos);