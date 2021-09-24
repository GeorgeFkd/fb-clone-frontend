import { SERVERBASEURL } from "./db.requests";

export async function getCurrentUserFriends() {
    //works but i gotta filter out the user himself somehow
    const jwtToken = localStorage.getItem("user");

    const response = await fetch(SERVERBASEURL + "/users/me/friends", {
        method: "GET",
        headers: {
            Authorization: jwtToken,
        },
    });
    const data = await response.json();
    console.log("status of friends request", response.status, data);
    return { success: response.status === 200, friends: data };
}
