//Uitwerkingen opdracht 1

//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

//1. Maak een variabele aan;
//2. Gebruik de map-methode om de array te doorzoeken;
//3. Return de waarden: namen van tv's;
//4. Console log de variabele.

const typeOfTv = inventory.map((tvName) => {
    return tvName.name;
})

console.log(typeOfTv);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

//1. Maak een variabele aan;
//2. Gebruik de filter-methode om de array te doorzoeken;
//3. Geef de zoekcriteria mee: originalStock === sold;
//4. Return de objecten;
//5. Console log de variabele.

const tvOutOfStock = inventory.filter((soldOut) => {
    return soldOut.originalStock === soldOut.sold
})

console.log(tvOutOfStock);


//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

//1. Maak een variabele aan;
//2. Gebruik de filter-methode om de array te doorzoeken;
//3. Geef de zoekcriteria mee: options.ambiLight === true;
//4. Return de objecten;
//5. Console log de variabele.

const tvAmbilight = inventory.filter((typeAmbilight) => {
    return typeAmbilight.options.ambiLight === true
    })

console.log(tvAmbilight);

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

//1. Declareer een functie;
//2. Gebruik de sort methode;
//3. Log de uitkomst.

function tvSorted(tv) {
    tv.sort((a, b) => a.price - b.price);
}

tvSorted(inventory)