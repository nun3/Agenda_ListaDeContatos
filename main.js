function adicionarContato() {
    // Obtém os valores do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Cria uma nova linha na tabela
    var tabela = document.getElementById("tabelaContatos").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    // Insere as células na nova linha
    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);

    // Preenche as células com os valores do formulário
    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}
