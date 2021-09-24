import { SERVERBASEURL } from "./db.requests";

export async function getUserChats() {
    const jwtToken = localStorage.getItem("user");
    // groupchats and chats under the same router probably
    const response = await fetch(SERVERBASEURL + "/users/me/chats", {
        method: "GET",
        headers: {
            Authorization: jwtToken,
        },
    });
    if (response.ok) {
        const data = await response.json();
        return { success: true, chats: data };
    }

    return { sucess: false, chats: [] };
}
