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