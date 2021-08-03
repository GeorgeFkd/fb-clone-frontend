//returns bool for success/failure
const serverBaseUrl = process.env.BACKEND_BASE_URL || "http:localhost:4000";
export async function PostNewComment(post_id, commentContent, replies_to) {
  const jwtToken = localStorage.getItem("user");
  const response = await fetch(
    `http:localhost:4000/posts/${post_id}/newcomment`,
    {
      method: "POST",
      headers: {
        Authorization: jwtToken,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        content: commentContent,
        replies_to: replies_to || null,
      }),
    }
  );
  const result = await response.json();
  console.log(result);

  if (result.status === 201) {
    console.log("all ok");
    return true;
  } else {
    console.log("shit not ok");
    return false;
  }
}

export async function GetPostsOfGroup(group_id) {
  const response = await fetch(
    `http://localhost:4000/groups/${group_id}/posts`
  );
  const data = await response.json();
  const allPostsOfGroup = data.posts;
  console.log(allPostsOfGroup);
  return allPostsOfGroup;
}

//TODO refactor backend to get rid of this
export async function GetGroupsOfCurrentUser() {
  let data, response;
  const jwtToken = localStorage.getItem("user");
  try {
    response = await fetch(`http://localhost:4000/users/me/groups`, {
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

export async function GetGroupsOfUser(userID) {
  // users/:id/groups
}

export async function LoginUser(loginUserObject) {
  let data, response;
  try {
    response = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUserObject),
    });
    data = await response.json();
  } catch (err) {
    console.error(err);
    return false;
  }

  if (response?.status === 201) {
    console.log("Successfull login");
    localStorage.setItem("user", data.token);
    return true;
  }
}

export async function CreateGroup(groupName) {
  const jwtToken = localStorage.getItem("user");
  const response = await fetch("http://localhost:4000/groups", {
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

export async function RegisterUser(credentials) {
  console.log(credentials);
  const response = await fetch("http://localhost:4000/users/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const { email, password } = credentials;
  const data = await response.json();
  //data.message to user
  //! dont forget to encrypt the id
  if (response.status === 201) {
    //successfull register
    await LoginUser({ email, password });
    console.log("you made it ");
    return true;
  } else {
    return false;
  }
}

export async function requestAvailableGroups() {
  // works
  const response = await fetch("http://localhost:4000/groups");
  const data = await response.json();
  console.log("the available groups", data);
  //todo request in the useEffect hook
  return data.groups;
}

export async function createNewPost(postData) {
  const jwtToken = localStorage.getItem("user");
  console.log("my jwt", jwtToken);
  const response = await fetch("http://localhost:4000/posts/", {
    method: "POST",
    headers: {
      Authorization: jwtToken,
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  console.log(response.status);
  if (response.status === 201) {
    console.log(response.statusText, "all ok");
    return true;
  } else {
    console.log("failed to create post ");
    return false;
  }
}

export async function getCurrentUserFriends() {
  //works but i gotta filter out the user himself somehow
  const jwtToken = localStorage.getItem("user");

  const response = await fetch("http://localhost:4000/users/me/friends", {
    method: "GET",
    headers: {
      Authorization: jwtToken,
    },
  });
  const data = await response.json();
  console.log("status of friends request", response.status, data);
  return { success: response.status === 200, friends: data };
}
