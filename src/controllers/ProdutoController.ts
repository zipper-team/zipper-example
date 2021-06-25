import ProdutoService from "../services/ProdutoService";
import Produto from "../models/Produto";

export async function getProdutos(query: Object): Promise<Produto[]> {
    let res = undefined;
    if (Object.keys(query).length) {
        res = await ProdutoService.getProductsByQuery(query)
    }else res = await ProdutoService.getFullProducts();
    return res;
}

export default {
    getProdutos,
}