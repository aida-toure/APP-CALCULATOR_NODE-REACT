import server from "./core/routes/calculator.mjs"

const host = process.env.HOST || "localhost"
const port = process.env.PORT || 8000;

server.listen(port, host, () => {
    console.log("Back on");
})