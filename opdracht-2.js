//Uitwerkingen opdracht 2

//opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uHoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

//1. Maak een variabele aan waarin wordt opgeslagen hoeveel tv's er zijn verkocht;
//2. Declareer een for-loop;
//3. Tel de aantallen van inventory.sold bij elkaar op;
//4. Console log de variabele.

let tvSold = 0

for (let i = 0; i < inventory.length; i++) {
    tvSold = tvSold + inventory[i].sold
}

console.log(tvSold);


//opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//1. Maak een div met id in de html file
//2. Maak een variabele in javascript file
//3. Koppel div met getElementbyid aan javascript file
//4. Verwerk variabele in innerHTML
//5. Pas de tekstkleur aan in CSS stylesheet


const element = document.getElementById("tv-sales")

element.innerHTML = `
    <h3>Verkochte tv's</h3>
    <h4>${tvSold}</h4>
`

//opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//1. Maak een variabele aan waarin wordt opgeslagen hoeveel tv's er zijn ingekocht;
//2. Declareer een for-loop;
//3. Tel de aantallen van inventory.originalStock bij elkaar op;
//4. Console log de variabele.

let tvInStock = 0

for (let i = 0; i < inventory.length; i++) {
    tvInStock = tvInStock + inventory[i].originalStock
}

console.log(tvInStock);

//opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//1. Maak een div met id in de html file
//2. Maak een variabele in javascript file
//3. Koppel div met getElementbyid aan javascript file
//4. Verwerk variabele in innerHTML
//5. Pas de tekstkleur aan in CSS stylesheet

const element2 = document.getElementById("tv-instock")

element2.innerHTML = `
    <h3>Tv's op voorraad</h3>
    <h4>${tvInStock}</h4>
`
//opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
//1. Maak een variabele aan waarin wordt opgeslagen hoeveel tv's er nog moeten worden verkocht: tvInStock - tvSold
//2.
//3.

//1. Maak een div met id in de html file
//2. Maak een variabele in javascript file
//3. Koppel div met getElementbyid aan javascript file
//4. Verwerk variabele in innerHTML
//5. Pas de tekstkleur aan in CSS stylesheet

const tvToBeSold = tvInStock - tvSold

const element3 = document.getElementById("tv-tobesold")

element3.innerHTML =`
<h3>Nog te verkopen</h3>
<h4>${tvToBeSold}</h4>
`