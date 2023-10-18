"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const root_1 = __importDefault(require("./routes/root"));
const logger_1 = require("./logger");
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 4000;
function setUpExpress() {
    app.get("/", root_1.default);
}
function startServer() {
    app.listen(port, () => {
        logger_1.logger.info(`Server is listening on port http://localhost:${port}`);
    });
}
data_source_1.AppDataSource.initialize()
    .then(() => {
    logger_1.logger.info('Data source initialized successfully');
    setUpExpress();
    startServer();
})
    .catch((err) => {
    logger_1.logger.error(`Error during data source initialization; Error: ${err}`);
    process.exit(1);
});
