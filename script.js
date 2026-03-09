"use strict";

async function getCharacter() {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.json();
    return data
    // console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getCharacter();


//Post Function
async function makePost() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "A little bad taste",
        body: "is like a nice dash of paprika",
        userId: 2,
      }),
    };

    const res = await fetch(url, options);

    if (!res.ok) {
      return;
    }

    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}
// makePost();


function renderCharacter(character) {
  const container = document.getElementById("output");

  const name = document.createElement("p");
  name.textContent = "Character: " + character.name;
  container.appendChild(name);

  const height = document.createElement("p");
  height.textContent = "Height: " + character.height;
  container.appendChild(height);

  const mass = document.createElement("p");
  mass.textContent = "Mass: " + character.mass;
  container.appendChild(mass);
}



//main function
async function main() {
  try {
    const mydata = await getCharacter();
    console.log(mydata);
    
     renderCharacter(mydata);

    const post = await makePost();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
}

main();



