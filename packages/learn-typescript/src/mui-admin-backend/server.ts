import express, { Request, Response } from 'express'
import os from 'os';
import dns from 'dns';
import bodyParser from 'body-parser';
import { CashTransSaver, CashTransaction } from './CashTransSaver';
const app = express();
const port = 3000;

//Set-up db functions
const cashTransSaver = new CashTransSaver()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/ping", (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const myhostname = os.hostname();
    const localIp = dns.lookup(myhostname, (err, address, family) => {
        return address
    })
    const userAgent = req.headers['user-agent'];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ status: "Success", callerDetails: { yourIp: ip, myIp: localIp, userAgent: userAgent } });
});

app.post("/cashtransactions", (req: Request, res: Response) => {
    try {
        console.log("request received :" + JSON.stringify(req.body as string))
        let data: CashTransaction = req.body;
        data.account_name = "CASH"
        cashTransSaver.saveCashTransaction(data).then((status: boolean) => {
            if (status) {
                res.send('{"status":"Success","message":"Cash transaction recorded sucessfully"}')
            } else {
                res.status(400)
                res.send('{"status":"Error","message":"Unable to process your request"}')
            }
        }).catch(e => {
            console.log(e)
            res.status(400)
            res.send('{"status":"Error","message":"Unable to process your request"}')
        })
    } catch (er) {
        res.status(400)
        res.send('{"status":"Error","message":"Unable to process your request"}')
    }
})


app.listen(port, () => {
    console.log("simple-node-server is a backend app listening at http://localhost:" + port)
});
