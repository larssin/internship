# Programmering i Javascript

## Intro

Opret en mappe ved navn `module_3` i dit projekt og opret en javascript-fil ved med navn `main.js`. Denne fil kan du bruge til at lege med de basale ting i Javascript, som bliver introduceret nedenfor.

`main.js` kan til at begynde med indeholde følgende kode:

```javascript
console.log("Hello World!");
```

I en terminal kan du køre programmet med:

```
node module_3/main.js
```

Den skulle gerne printe "Hello World!"

### Variabler

#### const

```javascript
const textVar = "This is a text"; // Kan IKKE overskrives pga. "const"
const numericVar = 132342; // Kan IKKE overskrives pga. "const"

console.log(textVar); // Logs: "This is a text"
console.log(numericVar); // Logs: 132342
```

#### let

```javascript
let text2 = "this is a text"; // Kan overskrives pga. "let"
let number2 = 3.9; // Kan overskrives pga. "let"

console.log(text2); // Logs: "this is a text"
console.log(number2); // Logs: 3.9
```

Man kan mutere (dvs. ændre eller overskrive) variabler som er erklæret med `let`.

```javascript
text2 = "A different text";
console.log(text2); // Logs: "A different text"

number2 = 3000;
console.log(number2); // Logs: 3000
```

#### Basale typer

`string`: er tekst og skrives som "dette er en tekst", 'dette er en tekst' eller \`dette er en tekst\`

`number`: F.eks. 4399 eller -5.1

### Funktioner

```javascript
// En funktion som ikke tager nogen parametre eller returnerer noget:
function sayHello() {
  console.log("Hello");
}

// En funktion som tager en parameter ("name") of returnerer ikke noget:
function sayHelloTo(name) {
  console.log("Hello " + name);
}

sayHello();
sayHelloTo("John");
```

```javascript
// Funktionen tager to parametre
function addNumbers(a, b) {
  return a + b;
}
const result = addNumbers(9, 3);
console.log(result); // Logs: 12
```

Alternativt kan man skrive funktioner som "arrow functions":

```javascript
const subtractNumbers = (a, b) => {
  return a - b;
};

const result = subtractNumbers(10, 3);
console.log(result); // Logs: 7
```

## Lommeregner

![Lommeregner](../assets/lommeregner-basic.png)

## Forslag til ekstraopgaver

- Lav et klassisk "num pad" med tallene 0 til 9 og brug dem til at indsætte værdier i inputfeltet.
- tilføj en "minus"-knap, så lommeregneren kan trække tal fra.
