import express from "express";
const app = express();
const port = 8801;

app.listen(port,() => {
    console.log("Listening on port:" , port);
})