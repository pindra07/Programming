import { createClient } from "redis";
const client = createClient(); // redis client created
async function processSubmission(submission) {
    const { problemId, code, language } = JSON.parse(submission);
    console.log("Processing submission for problemId " + problemId);
    console.log(`Code ${code}`);
    console.log(`Language ${language} `);
    // here you should add actual processing logic
    // simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log(`Finished processing submission for problemId ${problemId}`);
}
async function startWorker() {
    try {
        await client.connect(); // redis client connected
        console.log("Worker connected to redis");
        // main loop
        while (true) {
            try {
                const submission = await client.brPop("problems", 0);
                await processSubmission(submission.element);
            }
            catch (error) {
                console.error("Error processing submission", error);
                // implement your error handling logic here. for exm you might want to push
                // the submission back onto the queue or log the error to a file
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}
startWorker();
//# sourceMappingURL=index.js.map