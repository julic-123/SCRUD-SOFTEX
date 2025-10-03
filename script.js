// LISTAR PRODUTOS
function carregarProdutos() {
    const tabela = document.getElementById("tableProdutos");
    if (tabela === null || tabela === undefined) {
     
    } else {
        const produtos = JSON.parse(localStorage.getItem("produtos") || "[]");
        tabela.innerHTML = "";

        produtos.forEach(function(p) {
            const row = document.createElement("tr");
            row.innerHTML = 
                "<td>" + p.nome + "</td>" +
                "<td>R$ " + p.preco.toFixed(2) + "</td>" +
                "<td>" + p.categoria + "</td>" +
                "<td>" + p.origem + "</td>" +
                "<td>" + p.lote + "</td>" +
                "<td>" + p.validade + "</td>" +
                "<td>" +
                    "<button onclick='editarProduto(" + p.id + ")'>Editar</button>" +
                    "<button onclick='excluirProduto(" + p.id + ")'>Excluir</button>" +
                "</td>";
            tabela.appendChild(row);
        });
    }
}

// EXCLUIR PRODUTO
function excluirProduto(id) {
    let produtos = JSON.parse(localStorage.getItem("produtos") || "[]");
    let novosProdutos = [];
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id !== id) {
            novosProdutos.push(produtos[i]);
        }
    }
    localStorage.setItem("produtos", JSON.stringify(novosProdutos));
    carregarProdutos();
}

// EDITAR PRODUTO
function editarProduto(id) {
    localStorage.setItem("produtoEditando", id);
    window.location.href = "editar.html"; // opcional se você ainda não implementou
}

// Executa ao abrir a página
carregarProdutos();

