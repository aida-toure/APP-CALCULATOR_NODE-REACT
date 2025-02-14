import server from "./core/routes/calculator.mjs"

const host = "localhost" // REPLACE BY "back" if you use docker
const port = 8000

server.listen(port, host, () => {
    console.log("Back on");
})