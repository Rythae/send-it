import express from 'express';
import bodyParser from 'body-parser';
import 'babel-polyfill';
import routes from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/v1', routes);

app.get('*', (req, res) => {
    res.status(400).json({
        message: 'Not Found Route'
    });
});

const port = process.env.PORT || 5090;
const server = app.listen(port, () => {console.log(` port ${port}`);});

export default server;
