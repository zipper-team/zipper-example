import Contato from "../models/Contato";
import Queries from "../Queries";
import Database from './Database';

export async function getFullContacts(): Promise<Contato[]> {
    const db = new Database();
    await db.connect();

    const query = Queries.getContacts();
    const queryResult = await db.query(query);

    return queryResult;
}

export async function getContactsByQuery(filter: object): Promise<Contato[]> {
    const db = new Database();
    await db.connect();

    const query = Queries.getContacts(filter);
    const queryResult = db.query(query);
    
    return queryResult;
}


export default {
    getFullContacts,
    getContactsByQuery,
}