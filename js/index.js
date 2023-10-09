
// Lager et array vi kan legge til personene i.
const personer = [];


// Funksjon en som legger til en person. 
function addPerson(name, adress, tlf) {
    // Definerer personen som et objekt med navn, adresse og telefonnummer
    const person = {
        navn: name,
        adresse: adress,
        telefon: tlf
    };


    //Legger til personen i personer. Kunne brukt .push, men liker dette bedre.
    personer[personer.length] = person;
}

// Eksempelperson, meg altså. Enkelt å legge til flere personer ved å bruke samme.
// Kunne også bare gjort det med personer.push også lagd objektet med navn osv rett etter.
addPerson("Jon Thallaug", "Blomsterveien 2B", "90251921");

// Lagrer diven utenfor noen funksjon så den er enkel å finne og bruke. Burde hete noe annet i større produksjoner.
let div = document.getElementById("personRegister");


// Funksjonen som kjører når vi klikker knappen.
function visPersonRegister() {
    // Lager tabellen. Bare overskriften.
    let ut = "<table id='table'><tr>" + "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" + "</tr>";
    div.innerHTML += ut;

    // Kjører funksjonen "PrintPerson" for vær person i Arrayet. :)
    personer.forEach(printPerson);

    // Fjerner knappen.
    document.getElementById("knappen").remove()

    // Avslutter tabellen.
    div.innerHTML += "</table>";
}

function printPerson(item) {

    // Skriver ut personen :)
    let ut = "<tr><th>" + item.navn + "</th><th>" + item.adresse + "</th><th>" + item.telefon + "</th></tr>"
    document.getElementById("table").innerHTML += ut;

    
}