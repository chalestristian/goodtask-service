import express from "express";
import setupMiddlewares from "./config/middlewares";
import router from "./config/router";

const app = express();
app.use(express.json());

setupMiddlewares(app);

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use('/api', router);
export default app