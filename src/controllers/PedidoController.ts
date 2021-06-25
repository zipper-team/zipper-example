import PedidoService from "../services/PedidoService";
import Pedido from "../models/Pedido";

export async function getPedidos(query: Object): Promise<Pedido[]> {
    let res = undefined;
    if (Object.keys(query).length) {
        res = await PedidoService.getOrdersByQuery(query)
    }else res = await PedidoService.getFullOrders();
    return res;
}

export default {
    getPedidos,
}