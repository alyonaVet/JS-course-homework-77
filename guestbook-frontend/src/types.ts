export interface Message {
  id: string;
  author: string | null;
  message: string;
  image: string | null;
}

export interface MessageType {
  author: string | null;
  message: string;
  image: File | null;
}
