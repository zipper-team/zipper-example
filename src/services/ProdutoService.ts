import Produto from "../models/Produto";
import Queries from "../Queries";
import Database from './Database';

export async function getFullProducts(): Promise<Produto[]> {
    const db = new Database();
    await db.connect();
    
    const query = Queries.getProducts();
    const queryResult = await db.query(query);
    
    return queryResult;
}

export async function getProductsByQuery(filter: object): Promise<Produto[]> {
    const db = new Database();
    await db.connect();
    
    const query = Queries.getProducts(filter);
    const queryResult = await db.query(query);
    
    return queryResult;
}


export default {
    getFullProducts,
    getProductsByQuery,
}