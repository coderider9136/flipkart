const { parentPort } = require("worker_threads")

let j = 0;

for (i = 0; i <= 20000000000; i++) {
    j = j + i
    console.log(j)
}

parentPort.postMessage(j);