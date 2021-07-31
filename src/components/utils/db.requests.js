//returns bool for success/failure
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

export async function CreateGroup() {}

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
  const response = await fetch("http://localhost:4000/posts/new", {
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
