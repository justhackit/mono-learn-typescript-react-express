"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const dns_1 = __importDefault(require("dns"));
const body_parser_1 = __importDefault(require("body-parser"));
const CashTransSaver_1 = require("./CashTransSaver");
const app = (0, express_1.default)();
const port = 3000;
//Set-up db functions
const cashTransSaver = new CashTransSaver_1.CashTransSaver();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/ping", (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const myhostname = os_1.default.hostname();
    const localIp = dns_1.default.lookup(myhostname, (err, address, family) => {
        return address;
    });
    const userAgent = req.headers['user-agent'];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ status: "Success", callerDetails: { yourIp: ip, myIp: localIp, userAgent: userAgent } });
});
app.post("/cashtransactions", (req, res) => {
    try {
        console.log("request received :" + JSON.stringify(req.body));
        let data = {
            transDate: req.body.transDate,
            description: req.body.description,
            amount: req.body.amount,
            trans_type: req.body.transType,
            category: req.body.category,
            account_name: req.body.accountName
        };
        cashTransSaver.saveCashTransaction(data).then((status) => {
            if (status) {
                res.send('{"status":"Success","message":"Cash transaction recorded sucessfully"}');
            }
            else {
                res.status(400);
                res.send('{"status":"Error","message":"Unable to process your request"}');
            }
        }).catch(e => {
            console.log(e);
            res.status(400);
            res.send('{"status":"Error","message":"Unable to process your request"}');
        });
    }
    catch (er) {
        res.status(400);
        res.send('{"status":"Error","message":"Unable to process your request"}');
    }
});
app.listen(port, () => {
    console.log("simple-node-server is a backend app listening at http://localhost:" + port);
});
