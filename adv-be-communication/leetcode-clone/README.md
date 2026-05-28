
- Redis
- message broker
- pubsub
- queue

client pushes the code -> 
api server of judge 0 will evaluate the code and give the response
OR
judge0 on your own server running (good at scale)

give the response of code-submission to client


client -> went to redis queue -> a worker runs the code -> 
gives response back to client