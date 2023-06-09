import { Pool } from "pg";

export type CashTransaction = {
    transDate: Date;
    description: string;
    amount: number;
    trans_type: "debit" | "credit";
    category: string;
    account_name: "CASH";
}

export class CashTransSaver {
    pool: Pool = new Pool()
    constructor() {
        this.pool = new Pool({
            user: "postgresadmin",
            host: "localhost",
            //host: "host.docker.internal",
            database: "postgres",
            password: "Secret_123",
            port: 5433,
        });
    }

    async saveCashTransaction(trans: CashTransaction): Promise<boolean> {
        console.log("in saveCashTransaction")
        const text = 'INSERT INTO finance.raw_transactions (trans_date, description, amount, \
            trans_type, category, account_name) VALUES($1,$2,$3,$4,$5,$6) RETURNING *'
        const values = [trans.transDate, trans.description,
        trans.amount, trans.trans_type, trans.category, trans.account_name]
        const result = await this.pool.query(text, values)
        if (result.rowCount == 0) {
            console.log("No rows inserted")
            return false
        }
        return true
    }
}