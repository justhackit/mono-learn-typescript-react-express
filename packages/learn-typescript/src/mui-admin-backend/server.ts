import express, { Request, Response } from 'express'
import bodyParser from 'body-parser';
import { CashTransSaver, CashTransaction } from './CashTransSaver';
const app = express();
const port = 3000;

//Set-up db functions
const cashTransSaver = new CashTransSaver()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("data", (_req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ foo: "bar" });
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
