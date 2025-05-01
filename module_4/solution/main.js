(function () {
  console.log('Hello "Star Wars"');
  main();

  // mainSync();
})();

const list = document.getElementById("list");

async function main() {
  const response = await fetch("https://swapi.py4e.com/api/starships/");
  const data = await response.json();

  data.results.forEach((starship) => {
    const listItem = document.createElement("li");
    listItem.textContent = starship.name;
    list.appendChild(listItem);
  });
}

function main2() {
  fetch("https://swapi.py4e.com/api/starships/").then((response) => {
    response.json().then((data) => {
      data.results.forEach((starship) => {
        const listItem = document.createElement("li");
        listItem.textContent = starship.name;
        list.appendChild(listItem);
      });
    });
  });
}
