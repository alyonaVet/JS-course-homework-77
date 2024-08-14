import {promises as fs} from 'fs';
import {IMessage, MessageType} from "./types";

const fileName = './db.json';
let data: IMessage[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        } catch (error) {
            data = [];
        }
    },
    async getMessages() {
        return data;
    },
    async addMessage(message: MessageType) {
        const id = crypto.randomUUID();
        const messageData = {id, ...message};

        data.push(messageData);
        await this.save();
        return messageData;
    },
    async save() {
        return fs.writeFile(fileName, JSON.stringify(data, null, 2));
    },
};

export default fileDb;