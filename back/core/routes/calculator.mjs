import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import {calculate} from "../mechanism/calculate.mjs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin:"*",
        methods: ["GET", "POST"]
    }
});
app.get('/', (req, res) => {

})

io.on('connection', (socket) => {
    console.log("client enter mechanism")
    socket.on('calculate', (operation) => {
        console.log("calcul")
        try {
            const result = calculate(operation);
            socket.emit('result', result)
        }catch (e) {
            console.error(e);
        }
    })
})

export default server;