import express from "express";

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
    console.log("Hello from message broker service🎉");
    next();
});

export default app;
