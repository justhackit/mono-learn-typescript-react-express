folder_name=$1
mkdir packages
cd packages
mkdir $folder_name
cd $folder_name
yarn init
yarn add express 
yarn add -D typescript @types/express
npx tsc --init
touch server.ts

cat <<EOT > server.ts
import express from 'express'
const app = express();
const port = 3001;

app.get("/data", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.json({ foo: "bar" });
});

app.listen(port, () => {
    console.log("simple-node-server is a backend app listening at http://localhost:" + port)
});
EOT
