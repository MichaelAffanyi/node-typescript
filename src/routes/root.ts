import {Request, Response} from "express";

export default function root (req: Request, res: Response) {
    res.end(`<h1>Welcome to this graphql express api</h1>`)
}