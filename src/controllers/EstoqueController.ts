import EstoqueService from "../services/EstoqueService";
import Estoque from "../models/Estoque";

export async function getEstoques(query: Object): Promise<Estoque[]> {
    let res = undefined;
    if (Object.keys(query).length) {
        res = await EstoqueService.getStockByQuery(query)
    }else res = await EstoqueService.getFullStock();
    return res;
}

export default {
    getEstoques,
}