import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { MessageQueue } from "./MessageQueue.js";

MessageQueue.publish("TEST_SIGNAL", "Hello, World!");

MessageQueue.consume("TEST_SIGNAL", (message) => {
    console.log(`In Broker: ${message}`);
});

const port = process.env.PORT || 5580;
app.listen(port, (req, res) => {
    console.log(`Queue service is running on port ${port}`);
});
