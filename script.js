"use strict";

async function getCharacter() {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getCharacter();

//Post Function
async function createPost() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "My First Post",
        body: "Learning POST requests",
        userId: 1,
      }),
    };

    const res = await fetch(url, options);

    if (!res.ok) {
      return;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

createPost();



