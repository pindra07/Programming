const startButton = document.getElementById("startWorker")
const bgButton = document.getElementById("changeBg")
const resultElement = document.getElementById("result")


let worker 

startButton.addEventListener('click', () => {
    // check if worker is already running
    if(typeof(Worker) !== "undefined"){
        if (typeof(worker) == "undefined") {
            // create a new web worker
            worker = new Worker('worker.js')
        }
    }
})