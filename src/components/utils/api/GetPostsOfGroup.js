import { SERVERBASEURL } from "./db.requests";

export async function GetPostsOfGroup(group_id) {
    const response = await fetch(SERVERBASEURL + `/groups/${group_id}/posts`);
    const data = await response.json();
    const allPostsOfGroup = data.posts;
    console.log(allPostsOfGroup);
    return allPostsOfGroup;
}
