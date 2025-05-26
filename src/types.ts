export type Contratto = "indeterminato" | "determinato" | "freelance";

export type Dipendente = {
    nome: string;
    cognome: string;
    annoNascita: number;
    sesso: "m" | "f";
    anniDiServizio: number[];
    readonly emailAziendale: string; 
    contratto: Contratto;
};
export type LivelloEsperienza = "Junior" | "Mid" | "Senior";

export type Developer = Dipendente & {
    livelloEsperienza: LivelloEsperienza;
    linguaggi?: string[]; 
    certificazioni: string[];
};

export type ProjectManager = Dipendente & {
    teamSize: number | null; 
    budgetGestito?: number;
    stakeholderPrincipali: string[];
};


export type Team = {
    nome: string;
    progettoAttuale: string | null; 
    budget: number;
    membri: [ProjectManager, ...Developer[]]; 
};