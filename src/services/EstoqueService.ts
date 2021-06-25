import Estoque from "../models/Estoque";
import Queries from "../Queries";
import Database from './Database';

export async function getFullStock(): Promise<Estoque[]> {
    const db = new Database();
    await db.connect();

    const query = Queries.getStock();
    const queryResult = await db.query(query);

    return queryResult;
}

export async function getStockByQuery(filter: object): Promise<Estoque[]> {
    const db = new Database();
    await db.connect();

    const query = Queries.getStock(filter);
    const queryResult = await db.query(query);

    return queryResult;
}


export default {
    getFullStock,
    getStockByQuery,
}