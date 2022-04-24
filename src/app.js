import dotenv from "dotenv"
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getUser, login, register } from "./routes/users";
// import { newToken } from "./routes/token";

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }))


app.use("/api", register)
// app.use("/api", login)
// app.use("/api", newToken)
// app.use("/api", getUser)

app.get("/", (req, res) => {
    res.json(process.env)
})

const port = 5000

app.listen(port, () => {
    console.log("Running on 5000...");
})
