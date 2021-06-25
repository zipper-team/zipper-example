declare interface Estoque {
    idLoja: any
    idProduto: any
    preco: number
    precoAntigo?: number
    estoque: number
    data?: Date
}

export default Estoque;