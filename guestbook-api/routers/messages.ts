import express from "express";
import fileDb from "../fileDb";
import {MessageType} from "../types";

const messagesRouter = express.Router();

messagesRouter.get("/", async (req, res) => {
    const allMessages = await fileDb.getMessages();

    return res.send(allMessages);
});

messagesRouter.post("/", async (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({error: "Message must be present in the request"});
    }
    const message: MessageType = {
        author: req.body.author,
        message: req.body.message,
        image: req.body.image,
    };

    const savedMessage = await fileDb.addMessage(message);

    return res.send(savedMessage);
});

export default messagesRouter;