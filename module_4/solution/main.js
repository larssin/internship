const listRef = document.getElementById("list");

function handleFetchResponse(response) {
  response.json().then(handleData);
}

function handleData(data) {
  data.results.forEach(function (starship) {
    const listItem = document.createElement("li");
    listItem.textContent = starship.name;
    listRef.appendChild(listItem);
  });
}

fetch("https://swapi.py4e.com/api/starships/").then(handleFetchResponse);
