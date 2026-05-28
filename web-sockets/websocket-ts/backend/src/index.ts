
import express from 'express'
import http from 'http'
import { WebSocketServer } from 'ws'


const app = express();
const server = http.createServer(app)
const wss = new WebSocketServer({server})

app.use(express.static(path.join(__dirname, '../public')))

