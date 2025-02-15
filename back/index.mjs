import server from "./core/routes/calculator.mjs"

const host = process.env.HOST;
const port = process.env.PORT;

server.listen(port, host, () => {
    console.log("Back on");
    console.log(`Server running at http://${host}:${port}`);
})