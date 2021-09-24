import { SERVERBASEURL } from "../db.requests";

export async function CreateGroup(groupName) {
    const jwtToken = localStorage.getItem("user");
    const response = await fetch(SERVERBASEURL + "/groups", {
        method: "POST",
        headers: {
            Authorization: jwtToken,
            "Content-type": "application/json",
        },
        body: JSON.stringify({ name: groupName }),
    });
    const result = await response.json();
    console.log(result);
    if (result.status === 201) {
        console.log("successfull");
        return true;
    } else {
        console.log("something went wrong ");
        return false;
    }
}
