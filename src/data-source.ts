import {DataSource} from "typeorm";
import {Lesson} from "./models/lesson";
import {Course} from "./models/course";

export const AppDataSource = new DataSource({
    type: "postgres",
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    ssl: true,
    entities: [Course, Lesson],
    synchronize: true,
    logging: true
})