import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT || 5090;
const server = app.listen(port, () => {console.log(` port ${port}`)});

export default server;