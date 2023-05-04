const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./db/Database")

/* CONFIG DOTENV */
dotenv.config({
    path:"backend/config/.env"
})
/* CONNECT DATABASE */
connectDatabase()

/* CREATE SERVER */
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server trabajando en http://localhost:${process.env.PORT}`)
})