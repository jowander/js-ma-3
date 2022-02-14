// Question 2
// Make a call to the Rawg API.

const apiKey = "3ed25c86014e4f1e8b8bada1ace4661f";
const apiUrl =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=" +
  apiKey;

const newDivs = document.querySelector(".result");

async function getGameFacts() {
  try {
    const response = await fetch(apiUrl);

    const data = await response.json();
    const facts = data.results;
    const rating = facts[0].rating;
    const tags = facts[0].tags.length;

    newDivs.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }
      newDivs.innerHTML += `<div><h2>${facts[i].name}</h2><p>${facts[i].rating}</p><p>${facts[i].tags.length}</p></div>`;
    }
  } catch (e) {
    alert(e.message);
  }
}

getGameFacts();
