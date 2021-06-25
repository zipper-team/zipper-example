import Contato from "../models/Contato";
import ContatoService from "../services/ContatoService";

export async function getContatos(query: Object): Promise<Contato[]> {
    
    const contato: Contato = {nome: "a", celular: "a", idERP: 1, cep: "12", cidade: "a", nascimento: new Date(), uf: "SC"};
    let res: Contato[];
    if (Object.keys(query).length) {
        res = await ContatoService.getContactsByQuery(query)
    }else res = await ContatoService.getFullContacts();
    
    return res;
}

export default {
    getContatos,
}