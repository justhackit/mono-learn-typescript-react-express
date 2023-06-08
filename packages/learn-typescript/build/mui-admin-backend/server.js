"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const CashTransSaver_1 = require("./CashTransSaver");
const app = (0, express_1.default)();
const port = 3001;
//Set-up db functions
const cashTransSaver = new CashTransSaver_1.CashTransSaver();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("data", (_req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ foo: "bar" });
});
app.post("/cashtransactions", (req, res) => {
    try {
        console.log("request received :" + JSON.stringify(req.body));
        let data = req.body;
        data.account_name = "CASH";
        cashTransSaver.saveCashTransaction(data).then((status) => {
            if (status) {
                res.send('{"status":"Success","message":"Cash transaction recorded sucessfully"}');
            }
            else {
                res.status(400);
                res.send('{"status":"Error","message":"Unable to process your request"}');
            }
        }).catch(_e => {
            res.status(400);
            res.send('{"status":"Error","message":"Unable to process your request"}');
        });
    }
    catch (er) {
        console.log(er);
        res.status(400);
        res.send('{"status":"Error","message":"Unable to process your request"}');
    }
});
app.listen(port, () => {
    console.log("simple-node-server is a backend app listening at http://localhost:" + port);
});
