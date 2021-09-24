import { SERVERBASEURL } from "../db.requests";

export async function getChatInfo(chatId) {
    const response = await fetch(SERVERBASEURL + "/chats");
}
