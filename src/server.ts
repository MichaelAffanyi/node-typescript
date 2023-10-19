import dotenv from "dotenv"

dotenv.config()

import "reflect-metadata"
import express from "express";
import {Express} from "express";
import root from "./routes/root";
import {logger} from "./logger";
import {AppDataSource} from "./data-source";

const app: Express = express()

const port: Number = Number(process.env.PORT) || 4000

function setUpExpress () {
    app.get("/", root)
}

function startServer() {
    app.listen(port, () => {
        logger.info(`Server is listening on port http://localhost:${port}`)
    })
}

AppDataSource.initialize()
    .then(() => {
        logger.info('Data source initialized successfully')
        setUpExpress()
        startServer()
    })
    .catch((err) => {
        logger.error(`Error during data source initialization; Error: ${err}`)
        process.exit(1)
    })
