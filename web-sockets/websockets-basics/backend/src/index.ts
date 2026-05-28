import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 8080})

interface User {
    socket: WebSocket;
    room: string
}

let allSockets: User[] = []

wss.on('connection', (ws: WebSocket) => {

    ws.on('message', (data) => {
        // @ts-ignore
        const parsedData = JSON.parse(data)
        if (parsedData.type = "join") {
            allSockets.push({
                socket: ws,
                room: parsedData.payload.roomId
            })
        }

        if(parsedData.type == "chat") {
            const currentUserRoom = allSockets.find((x) => {
                x.socket == ws
            })?.room

            for (let i = 0; i < allSockets.length; i++) {
                if(allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedData.payload.message)
                }
            }
        }

    })

    ws.send("Socket connected")

})


 