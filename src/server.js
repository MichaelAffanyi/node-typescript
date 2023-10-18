"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.end(`<h1>Welcome to this graphql express api</h1>`);
});
app.listen(9000, () => {
    console.log(`Server is listening on port ${9000}`);
});
