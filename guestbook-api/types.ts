export interface IMessage {
    id: string;
    author: string | null;
    message: string;
    image: string | null;
}

export type MessageType = Omit<IMessage, 'id'>;
