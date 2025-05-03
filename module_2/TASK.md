# Hjemmeside med flere sider

Lav links i navigationen til flere andre undersider, så hvis man klikker på et link, så vises noget andet indhold i `content`.

## Opgaver

### 1: Opret en ny HTML-fil

Opret en ny HTML-fil med navnet `page-2.html`. Kopier alt indholdet fra `index.html` ind i den nye fil. Slet alt indholdet i `div`'en med ID'et `content`. Skriv noget nyt indhold i `content`, fx en ny overskrift og lidt tekst.

I `nav`-elementet i `index.html` kan der nu laves et link til den nye fil. Fx:

```html
<a href="/page-2.html">Side 2</a>
```

Prøv at køre serveren (`npx http-server module_1 -o -p 9999`) og se hvad der sker når du klikker på linket.

Herefter skal der måske laves et link fra `page-2.html` til `index.html`?

## Ekstra
- Flere undersider?
- CSS animationer
  - Fx: animér menupunkterne i hovedmenuen, når man fører musen over.
