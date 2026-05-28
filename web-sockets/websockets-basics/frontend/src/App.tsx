import { useEffect, useState, useRef } from "react";

function App() {
  const [messages, setMessages] = useState(["hi there"]);
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
  }, []);

  return (
    <>
      <div className="h-screen bg-black flex flex-col">
        <br /> <br /> <br />
        <div className="h-[95vh]">
          {messages.map((message) => (
            <div className="m-8">
              <span className="bg-white text-black rounded p-4">{message}</span>{" "}
            </div>
          ))}
        </div>
        <div className="w-max p-2">
          <input
          id="message"
            className="bg-white p-2 mr-1 rounded-md h-15 w-[90vw]"
            type="text"
          />
          <button onClick={() => {
            const message = document.getElementById("message")?.value;
            wsRef.current.send(JSON.stringify({
              type: "chat",
              payload: {
                message: message
              }
            }))
          }} className="bg-purple-600 text-white p-2 h-15 rounded-md cursor-pointer">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
