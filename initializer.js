import { GlobalErrorHandler } from "./globalErrorHandler.js";
import { MessageQueue } from "./MessageQueue.js";

class Initializer {
    async init() {
        this.initiateGlobalErrorHandler();
        await this.initiateMessageQueue();
    }

    initiateGlobalErrorHandler() {
        return new GlobalErrorHandler();
    }

    async initiateMessageQueue() {
        if (!MessageQueue.connection) {
            return await new MessageQueue().initiateMessageQueue();
        }
    }
}

export default Initializer;
