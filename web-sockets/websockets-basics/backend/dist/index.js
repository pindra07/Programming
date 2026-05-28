"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        var _a;
        // @ts-ignore
        const parsedData = JSON.parse(data);
        if (parsedData.type = "join") {
            allSockets.push({
                socket: ws,
                room: parsedData.payload.roomId
            });
        }
        if (parsedData.type == "chat") {
            const currentUserRoom = (_a = allSockets.find((x) => {
                x.socket == ws;
            })) === null || _a === void 0 ? void 0 : _a.room;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedData.payload.message);
                }
            }
        }
    });
    ws.send("Socket connected");
});
