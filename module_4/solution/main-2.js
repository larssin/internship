const listRef = document.getElementById("list");

function unwrapJson(data) {
  const listSize = data.results.length;

  for (let i = 0; i < listSize; i++) {
    const elem = document.createElement("li");
    elem.innerText = data.results[i].name;
    listRef.appendChild(elem);
  }
}

function handleResponse(response) {
  response.json().then(unwrapJson);
}

fetch("https://swapi.py4e.com/api/people/").then(handleResponse);
