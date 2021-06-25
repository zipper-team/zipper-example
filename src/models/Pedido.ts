declare interface Pedido extends Itens{
    idOrigem: any
    desconto?: number
    data: Date
    canal?: string
    numero?: number
    vendedor: string
    idVendedor: any
    valorFrete?: number
    quantidadeProdutos?: number
    totalBruto: number 
    totalLiquido: number
    idLoja: any
    loja?: string
    idCliente: any
    pagamento?: string
    parcelas: number
    itens: Itens
}

export default Pedido;