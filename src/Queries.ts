export function getContacts(filter?: any) {
    let query = `
        SELECT 
            nome,
            sobrenome,
            idERP,
            celular,
            telefone,
            email,
            tipo,
            cpf,
            cnpj,
            nascimento,
            dataCadastro as criacao,
            cep,
            cidade,
            bairro,
            rua,
            complemento,
            uf
        FROM ZPPView_Contacts WHERE 1=1`;
    
    if (filter && filter.dataInicio) query += `AND criacao >= ${filter.dataInicio}`;
    if (filter && filter.dataFim) query += `AND criacao <= ${filter.dataFim}`;

    return query;
}

export function getOrders(filter?: any) {
    let query = `
        SELECT 
            idOrigem,
            desconto,
            data,
            canal,
            numero,
            vendedor,
            idVendedor,
            valorFrete,
            quantidadeProdutos,
            totalBruto,
            totalLiquido,
            idLoja,
            loja,
            idCliente,
            pagamento,
            parcelas,
            itens
        FROM ZPPView_Orders WHERE 1=1`;

    if (filter && filter.dataInicio) query += `AND data >= ${filter.dataInicio}`;
    if (filter && filter.dataFim) query += `AND data <= ${filter.dataFim}`;

    return query;
}

export function getProducts(filter?: any) {
    let query = `
        SELECT 
            id,
            referencia,
            preco,
            descricaoCurta,
            descricao,
            categoria,
            setor,
            inclusao,
            atualizacao
        FROM ZPPView_Products WHERE 1=1`;

    if (filter && filter.dataInicio) query += `AND atualizacao >= ${filter.dataInicio}`;
    if (filter && filter.dataFim) query += `AND atualizacao <= ${filter.dataFim}`;

    return query;
}

export function getStock(filter?: any) {
    let query = `
        SELECT 
            idLoja,
            idProduto,
            preco,
            precoAntigo,
            estoque,
            data
        FROM ZPPView_Stock WHERE 1=1`;

    if (filter && filter.dataInicio) query += `AND data >= ${filter.dataInicio}`;
    if (filter && filter.dataFim) query += `AND data <= ${filter.dataFim}`;

    return query;
}

export default {
    getContacts,
    getOrders,
    getProducts,
    getStock,
}