import Pedido from "../models/Pedido";
import Queries from "../Queries";
import Database from './Database';

export async function getFullOrders(): Promise<Pedido[]> {
    const db = new Database();
    await db.connect();
    
    const query = Queries.getOrders();
    const queryResult = await db.query(query);
    
    return queryResult;
}

export async function getOrdersByQuery(filter: object): Promise<Pedido[]> {
    const db = new Database();
    await db.connect();
    
    const query = Queries.getOrders(filter);
    const queryResult = await db.query(query);
    
    return queryResult;
}


export default {
    getFullOrders,
    getOrdersByQuery,
}