declare interface Contato {
    nome: string
    sobrenome?: string
    idERP: any
    celular: string
    telefone?: string
    email?: string
    tipo?: string
    cpf?: string
    cnpj?: string
    nascimento: Date
    criacao?: Date
    cep: string
    cidade: string
    bairro?: string
    rua?: string
    complemento?: string
    uf: string
}

export default Contato;