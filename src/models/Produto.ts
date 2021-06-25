declare interface Produto {
    id: any
    referencia: any
    preco: number
    descricaoCurta: string
    descricao?: string
    categoria: string
    setor?: string
    inclusao?: Date
    atualizacao: Date
}

export default Produto;