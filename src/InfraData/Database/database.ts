import { DataSource } from "typeorm"
import dotenv from 'dotenv'
import { Tasks } from "../../Domain/Entities/Tasks"

dotenv.config()
require("dotenv").config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: true,
    entities: [Tasks],
})

AppDataSource.initialize()
    .then(() => {
        console.log("DATABASE STARTED!")
    })
    .catch((err) => {
        console.error("DATABASE NOT STARTED - ", err)
    })

export default AppDataSource;