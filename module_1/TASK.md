# HTML og CSS

Opgaven går ud på at lave et hjemmesidedesign. Målet er at bygge et layout med HTML og CSS, som vil kunne bruges til de fleste typer hjemmesider.

I bestemmer rigtigt meget selv, hvordan I vil løse opgaven, men jeg har her lavet et simpelt wire-frame, som kan kan inspirere.
Stregerne, farverne og teksterne er blot for at give lidt hjælp til hvordan man kan opbygge siden.

![Layout](../assets/layout.png "Layout")

## Hvordan kommer man i gang?

Lav en mappe med navnet `module_1` og opret filerne `index.html` og `styles.css` i den mappe. Kopier følgende indhold ind i filerne.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page title</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <div id="header">[header]</div>

    <div id="main-wrapper">
      <nav>[left navigation]</nav>

      <div id="content-container">[content]</div>
    </div>
  </body>
</html>
```

```css
/* styles.css */
#header {
}
#main-wrapper {
}
nav {
}
#content-container {
}
```

Kør kommandoen:

```
npx http-server module_1 -o -p 9999
```

##

## Ekstra

- Tilføj en "footer" i bunden af layoutet
- Gem farver og andet i CSS-variabler, så de kan genbruges.
