"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashTransSaver = void 0;
const pg_1 = require("pg");
class CashTransSaver {
    constructor() {
        this.pool = new pg_1.Pool();
        this.pool = new pg_1.Pool({
            user: "postgresadmin",
            host: "localhost",
            database: "postgres",
            password: "Secret_123",
            port: 5433,
        });
    }
    saveCashTransaction(trans) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("in saveCashTransaction");
            const text = 'INSERT INTO finance.raw_transactions (trans_date, description, amount, \
            trans_type, category, account_name) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
            const values = [trans.transDate, trans.description,
                trans.amount, trans.trans_type, trans.category, trans.account_name];
            console.log("Values : " + values);
            const result = yield this.pool.query(text, values);
            console.log(result);
            return result.rowCount > 1;
        });
    }
}
exports.CashTransSaver = CashTransSaver;
