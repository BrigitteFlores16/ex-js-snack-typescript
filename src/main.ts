import type {Dipendente, Developer, ProjectManager, Team} from "./types";

//Snack 1
//Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
//Se è una stringa: stampala in maiuscolo
//Se è un numero: moltiplicalo per due e stampalo
//Se è un booleano: stampa “Sì” o “No” in base al suo valore
//In tutti gli altri casi: stampa “Tipo non supportato”
//BONUS
//Se è null: stampa “Il dato è vuoto”
//Se è un array: stampa la sua lunghezza
//Se è una Promise: attendi che si risolva e stampa il valore del resolve.

async function stampaValore(dato: unknown): Promise<void> {
    if (dato === null) {
        console.log("Il dato è vuoto");
    } else if (Array.isArray(dato)) {
        console.log(`Lunghezza dell'array: ${dato.length}`);
    } else if (dato instanceof Promise) {
        try {
            const risultato = await dato;
            console.log(`Valore della Promise risolta: ${risultato}`);
        } catch (errore) {
            console.log("Errore nella Promise:", errore);
        }
    } else if (typeof dato === "string") {
        console.log(dato.toUpperCase());
    } else if (typeof dato === "number") {
        console.log(dato * 2);
    } else if (typeof dato === "boolean") {
        console.log(dato ? "Sì" : "No");
    } else {
        console.log("Tipo non supportato");
    }
}


stampaValore("Hello World");   
stampaValore(4);        
stampaValore(true);     
stampaValore([2, 4]);   
stampaValore(null);      
stampaValore(new Promise(resolve => setTimeout(() => resolve("Dato risolto!"), 1000)));




//Snack2
//Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

//nome → stringa
//cognome → stringa
//annoNascita → numero
//sesso → Può essere solo "m" o "f".
//anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])

//BONUS
//Il type alias Dipendente, ha anche i seguenti dati:
//emailAziendale → Email assegnata al dipendente (non si può modificare)
//contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.


const dipendente: Dipendente = {
    nome: "Carla",
    cognome: "Bruno",
    annoNascita: 1992,
    sesso: "f",
    anniDiServizio: [2014, 2015, 2017, 2018],
    emailAziendale: "Carla.Bruno@azienda.com",
    contratto: "indeterminato"
};

console.log(dipendente);


//Snack 3
//Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:
//1.Developer
//livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
//linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
//certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
//2.ProjectManager
//teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
//budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
//stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
// BONUS
//Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:
//nome → Nome del team (stringa).
//progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
//budget → Importo numerico del budget assegnato al team (sempre presente).
//membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio).

const developer1: Developer = {
    nome: "Maria",
    cognome: "Ortega",
    annoNascita: 1990,
    sesso: "f",
    anniDiServizio: [2020, 2021, 2022],
    emailAziendale: "maria.ortega@azienda.com",
    contratto: "indeterminato",
    livelloEsperienza: "Mid",
    linguaggi: ["JavaScript", "TypeScript"],
    certificazioni: ["AWS Certified Developer", "Scrum Master"]
};

const projectManager1: ProjectManager = {
    nome: "Giuseppe",
    cognome: "locatelli",
    annoNascita: 1982,
    sesso: "m",
    anniDiServizio: [2010, 2011, 2015, 2020],
    emailAziendale: "Giuseppe.locatelli@azienda.com",
    contratto: "indeterminato",
    teamSize: 5,
    budgetGestito: 500000,
    stakeholderPrincipali: ["CEO", "CTO"]
};

const team1: Team = {
    nome: "Innovazione IT",
    progettoAttuale: "Sistema di gestione documentale",
    budget: 750000,
    membri: [projectManager1, developer1]
};

console.log(team1);
