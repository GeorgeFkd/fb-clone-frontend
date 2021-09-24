import { SERVERBASEURL } from "./db.requests";

export async function requestAvailableGroups() {
    // works
    const response = await fetch(SERVERBASEURL + "/groups");
    const data = await response.json();
    console.log("the available groups", data);
    //todo request in the useEffect hook
    return data.groups;
}
