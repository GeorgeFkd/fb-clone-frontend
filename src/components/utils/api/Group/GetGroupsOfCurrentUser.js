import { SERVERBASEURL } from "../db.requests";

//TODO refactor backend to get rid of this

export async function GetGroupsOfCurrentUser() {
    let data, response;
    const jwtToken = localStorage.getItem("user");
    try {
        response = await fetch(SERVERBASEURL + `/users/me/groups`, {
            method: "GET",
            headers: {
                Authorization: jwtToken,
                Accept: "application/json",
            },
        });

        data = await response.json();
        console.log(data);
        return { success: true, groups: data.groups };
    } catch (error) {
        console.error(error);
        return { success: false, groups: [] };
    }
}
