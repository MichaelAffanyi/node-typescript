import {DataSource} from "typeorm";
import {Course} from "./models/course";
import {Lesson} from "./models/lesson";


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