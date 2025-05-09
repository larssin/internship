const listRef = document.getElementById("list");

function unwrapJson(data) {
  const listSize = data.results.length;

  listRef.innerHTML = "";

  for (let i = 0; i < listSize; i++) {
    const elem = document.createElement("li");
    elem.innerText = data.results[i].name;
    listRef.appendChild(elem);
  }
}

function handleResponse(response) {
  response.json().then(unwrapJson);
}
function load(type) {
  fetch(`https://swapi.py4e.com/api/${type}/`).then(handleResponse);
}
