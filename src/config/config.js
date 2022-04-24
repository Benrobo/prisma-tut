import dotenv from "dotenv"
dotenv.config({ path: "../.env" })

// Database Name
const DB_NAME = process.env.DB_NAME

// Database Password
const DB_PWD = process.env.DB_PWD

// Database User
const DB_USER = process.env.DB_USER

// Database Host
const DB_HOST = process.env.DB_HOST

// DB PORT
const DB_PORT = process.env.DB_PORT

// Database URL
export const DATABASE_URL = `postgresql://${DB_USER}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public`

// Access Token Secrete
export const ACCESS_SECRET = process.env.ACCESS_SECRET

// Refresh Token Secrete
export const REFRESH_SECRET = process.env.REFRESH_SECRET
