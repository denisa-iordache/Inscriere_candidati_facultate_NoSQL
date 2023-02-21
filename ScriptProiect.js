show dbs
use proiect

//DROP
db.candidati.drop()

//CREATE
//Creare prima colectie
db.createCollection(
    "candidati", {
    "validator": {
        $jsonSchema: {
            required: ["nume", "prenume", "telefon", "email", "noteBacalaureat", "medieLiceu", "optiuniUniversitare"],
            properties: {
                nume: {
                    bsonType: "string",
                    description: "Numele trebuie sa fie de tip string"
                },
                prenume: {
                    bsonType: "string",
                    description: "Prenumele trebuie sa fie de tip string"
                },
                email: {
                    bsonType: "string",
                    pattern: "@gmail.com|@yahoo.com$",
                    description: "Emailul trebuie sa fie de forma 'ceva@gmail.com' sau 'ceva@yahoo.com'"
                },
                medieLiceu: {
                    minimum: 5,
                    maximum: 10,
                    description: "Media din liceu trebuie sa fie o nota intre 5 si 10."
                },
                telefon: {
                    bsonType: "string",
                    pattern: "^[0-9]{10}$",
                    description: "Numarul de telefon trebuie sa fie format din 10 cifre"
                },
                eseuMotivational: {
                    bsonType: "string",
                    enum: ["Da", "Nu"],
                    description: "Pentru eseul motivational se va preciza 'Da' daca acesta a fost depus si 'Nu' daca nu a fost depus"
                },
                optiuniUniversitare: {
                    bsonType: ["array"],
                    minItems: 3,
                    maxItems: 3,
                    items: {
                        bsonType: ["string"],
                        description: "Optiunea universitara trebuie sa fie un string",
                    },
                    description: "Numarul de optiuni tebuie sa fie intre 1 si 3"
                },
                noteBacalaureat: {
                    bsonType: ["object"],
                    required: ["discipline", "note"],
                    properties: {
                        discipline: {
                            bsonType: ["array"],
                            minItems: 3,
                            maxItems: 3,
                            items: {
                                bsonType: ["string"],
                                enum: ["Romana", "Matematica/Istorie", "Proba la alegere"],
                                description: "Optiunea universitara trebuie sa fie din cele enumerate",
                            },
                            description: "Numarul de discipline este 3"
                        },
                        note: {
                            bsonType: ["array"],
                            minItems: 3,
                            maxItems: 3,

                            items: {
                                minimum: 5,
                                maximum: 10,
                                description: "Notele trebuie sa fie un numar intre 5 si 10",
                            },
                            description: "Numarul minim de note este egal cu numarul de discipline"
                        },
                    },
                    description: "NoteBacalaureat contine discipline si note"
                },
            }
        }
    }
})

//INSERT
//Inserare documente in prima colectie
db.candidati.insertOne({
    "nume": "Iordache",
    "prenume": "Denisa",
    "email": "denisa@gmail.com",
    "telefon": "0762865153",
    "eseuMotivational": "Da",
    "noteBacalaureat": {
        "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
        "note": [9.5, 9.85, 9.75]
    },
    "medieLiceu": 9.7,
    "optiuniUniversitare": ["Finanțe și bănci", "Contabilitate și informatică de gestiune", "Informatică economică"]
})

db.candidati.insertOne({
    "nume": "Paraschiv",
    "prenume": "Marin",
    "email": "marin@gmail.com",
    "telefon": "0754645483",
    "eseuMotivational": "Da",
    "noteBacalaureat": {
        "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
        "note": [9.5, 9.85, 9.75]
    },
    "medieLiceu": 9.7,
    "optiuniUniversitare": ["Statistică și previziune economică", "Finanțe și bănci", "Contabilitate și informatică de gestiune"]
})

db.candidati.insertMany([
    {
        "nume": "Popescu",
        "prenume": "Mihai",
        "email": "mihai@gmail.com",
        "telefon": "0776865176",
        "eseuMotivational": "Nu",
        "noteBacalaureat": {
            "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
            "note": [8.7, 9.3, 10]
        },
        "medieLiceu": 9.1,
        "optiuniUniversitare": ["Marketing", "Management", "Finanțe și bănci"]

    },
    {
        "nume": "Ion",
        "prenume": "Elena",
        "email": "elena@gmail.com",
        "telefon": "0776598751",
        "eseuMotivational": "Nu",
        "noteBacalaureat": {
            "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
            "note": [7, 9, 9.5]
        },
        "medieLiceu": 8.9,
        "optiuniUniversitare": ["Economie agroalimentară și a mediului", "Contabilitate și informatică de gestiune (în limba engleză)", "Contabilitate și informatică de gestiune"]

    },
    {
        "nume": "Andrei",
        "prenume": "Mihaela",
        "email": "mihaela@gmail.com",
        "telefon": "0723456787",
        "eseuMotivational": "Da",
        "noteBacalaureat": {
            "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
            "note": [10, 10, 9.8]
        },
        "medieLiceu": 10,
        "optiuniUniversitare": ["Informatică economică", "Cibernetică economică", "Statistică și previziune economică"]

    },
    {
        "nume": "Popa",
        "prenume": "Vasile",
        "email": "vasile@gmail.com",
        "telefon": "0744456787",
        "eseuMotivational": "Da",
        "noteBacalaureat": {
            "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
            "note": [6, 10, 7.8]
        },
        "medieLiceu": 8.1,
        "optiuniUniversitare": ["Resurse umane", "Marketing", "Finanțe și bănci (în limba engleză)"]

    },
    {
        "nume": "Tudor",
        "prenume": "Alexandru",
        "email": "alex@gmail.com",
        "telefon": "0754768709",
        "eseuMotivational": "Da",
        "noteBacalaureat": {
            "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
            "note": [9.5, 10, 7.8]
        },
        "medieLiceu": 9.91,
        "optiuniUniversitare": ["Management (în limba engleză)", "Management", "Marketing"]

    },
    {
        "nume": "Popa",
        "prenume": "Vasile",
        "email": "vasile@yahoo.com",
        "telefon": "0748756787",
        "eseuMotivational": "Da",
        "noteBacalaureat": {
            "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
            "note": [10, 10, 10]
        },
        "medieLiceu": 9.98,
        "optiuniUniversitare": ["Administrarea afacerilor (în limba germană)", "Administrarea afacerilor (în limba engleză)", "Cibernetică economică"]

    },
    {
        "nume": "Anton",
        "prenume": "Ana",
        "email": "ana@yahoo.com",
        "telefon": "0765487321",
        "eseuMotivational": "Da",
        "noteBacalaureat": {
            "discipline": ["Romana", "Matematica/Istorie", "Proba la alegere"],
            "note": [9, 9.3, 9.5]
        },
        "medieLiceu": 10,
        "optiuniUniversitare": ["Administrație publică", "Finanțe și bănci (în limba engleză)", "Finanțe și bănci"]
    }
])

//UPDATE + ALTER
//Adaugare camp medie bac + calcularea ei
db.candidati.updateMany({}, [{ $set: { "medieBac": { $round: [{ $avg: "$noteBacalaureat.note" }, 2] } } }])
//db.candidati.updateMany({}, { $unset: { "medieBac": null } })

//Adaugare camp medie admitere + calcularea ei
db.candidati.updateMany({}, [{ $set: { "medieAdmitere": { $round: [{ $add: [{ $multiply: ["$medieBac", 0.8] }, { $multiply: ["$medieLiceu", 0.2] }] }, 2] } } }])
//db.candidati.updateMany({}, { $unset: { "medieAdmitere": null } })

//Adaugare camp documente incarcate + populare by default cu "Nu" pentru toate documentele pentru cei care au depus eseul motivational
db.candidati.updateMany({ "eseuMotivational": "Da" }, [{ $set: { "documenteIncarcate": Object({ "CopieBuletin": "Nu", "CopieCertificaNastere": "Nu", "DiplomaBacalaureat": "Nu", "FoaieMatricola": "Nu", "AdeverintaMedicala": "Nu" }) } }])
//db.candidati.updateMany({}, { $unset: { "documenteIncarcate": null } })
db.candidati.find({ "eseuMotivational": "Da" }, { "_id": 0 })

//Pentru candidatul al carui numar de telefon se termina in *******153 sa se noteze corespunzator atasarea copiei de buletin, copiei certificatului de nastere si adeverintei medicale.
db.candidati.updateMany(
    { telefon: { $regex: /153$/ } },
    { $set: { "documenteIncarcate.CopieBuletin": "Da", "documenteIncarcate.CopieCertificaNastere": "Da", "documenteIncarcate.AdeverintaMedicala": "Da" } }
)

//SELECT
//Regasirea tuturor canditatilor
db.candidati.find({}, { "_id": 0 })

//Sa se afiseze numele si prenumele, media de admitere si documentele incarcate (daca au atasat eseul motivational inainte)  pentru candidatii inscrisi la CSIE care au cel putin un document incarcat.
db.candidati.find(
    {
        $and: [
            {
                $or: [
                    { optiuniUniversitare: "Informatică economică" },
                    { optiuniUniversitare: "Cibernetică economică" },
                    { optiuniUniversitare: "Statistică și previziune economică" },
                    { optiuniUniversitare: "Informatică economică (în limba engleză)" }
                ]

            },
            { "eseuMotivational": "Da" },
            {
                $or: [
                    { "documenteIncarcate.CopieBuletin": "Da" },
                    { "documenteIncarcate.CopieCertificaNastere": "Da" },
                    { "documenteIncarcate.DiplomaBacalaureat": "Da" },
                    { "documenteIncarcate.FoaieMatricola": "Da" },
                    { "documenteIncarcate.AdeverintaMedicalaAdeverintaMedicala": "Da" }
                ]

            }
        ]

    }
    , { "nume": 1, "prenume": 1, "medieAdmitere": 1, "documenteIncarcate": 1, "_id": 0 })

//Afisarea numelui, prenumelui, mediei de admitere si a optiunilor universitare pentru cei care au ca si prima optiune o specializare din CSIE in ordine descrescatoare mediei
db.candidati.find(
    { "optiuniUniversitare.0": { $in: ["Cibernetică economică", "Informatică economică", "Informatică economică (în limba engleză)", "Statistică și previziune economică"] } }
    , { "nume": 1, "prenume": 1, "medieAdmitere": 1, "optiuniUniversitare": 1, "_id": 0 }).sort({ "medieAdmitere": -1 })

//Afisarea numarului de candidati cu adresa de email gmail care nu au depus eseul motivational
db.candidati.find(
    { $and: [{ "email": { $regex: /gmail/ } }, { "eseuMotivational": "Nu" }] }
    , { "nume": 1, "prenume": 1, "email": 1, "eseuMotivational": 1, "_id": 0 }).count()

//Afisarea candidatilor inscrisi la programe cu predate in limba straina in ordine descrescatoare notei din bac la romana
db.candidati.find(
    {
        $or: [
            { optiuniUniversitare: { $regex: /(în limba engleză)/ } },
            { optiuniUniversitare: { $regex: /(engleză - franceză)/ } },
            { optiuniUniversitare: { $regex: /(în limba franceză)/ } },
            { optiuniUniversitare: { $regex: /(în limba germană)/ } }
        ]
    }
    , { "nume": 1, "prenume": 1, "noteBacalaureat.note": 1, "optiuniUniversitare": 1, "_id": 0 }).sort({ "noteBacalaureat.note.0": -1 })

//Afisarea candidatilor care au avut media din liceu peste 9 si au aplicat la minim 2 facultati din CSIE
db.candidati.find(
    {
        $and: [
            { "medieLiceu": { $gt: 9 } },
            {
                $or: [
                    {
                        $and: [{
                            "optiuniUniversitare.0":
                                { $in: ["Cibernetică economică", "Informatică economică", "Informatică economică (în limba engleză)", "Statistică și previziune economică"] }
                        }, { "optiuniUniversitare.1": { $in: ["Cibernetică economică", "Informatică economică", "Informatică economică (în limba engleză)", "Statistică și previziune economică"] } }]
                    },
                    {
                        $and: [{
                            "optiuniUniversitare.0":
                                { $in: ["Cibernetică economică", "Informatică economică", "Informatică economică (în limba engleză)", "Statistică și previziune economică"] }
                        }, { "optiuniUniversitare.2": { $in: ["Cibernetică economică", "Informatică economică", "Informatică economică (în limba engleză)", "Statistică și previziune economică"] } }]
                    }
                    {
                        $and: [{
                            "optiuniUniversitare.1":
                                { $in: ["Cibernetică economică", "Informatică economică", "Informatică economică (în limba engleză)", "Statistică și previziune economică"] }
                        }, { "optiuniUniversitare.2": { $in: ["Cibernetică economică", "Informatică economică", "Informatică economică (în limba engleză)", "Statistică și previziune economică"] } }]
                    }
                ]
            }]

    }
    , { "nume": 1, "prenume": 1, "medieLiceu": 1, "optiuniUniversitare": 1, "_id": 0 })

//Plus find-urile din aplicatie!!!

//DELETE
//Stergerea candidatilor care nu au depus eseul motivational
db.candidati.deleteMany({ "eseuMotivational": "Nu" })

//Eliminarea candidatilor inscrisi la FAMP care au media de admitere mai mica de 8.5
db.candidati.deleteMany({
    $and: [{
        $or: [
            { optiuniUniversitare: "Administrație publică" },
            { optiuniUniversitare: "Resurse umane" },
        ]
    }, { "medieAdmitere": { $lt: 8.5 } }]
})

//Stergere duplicate
db.candidati.aggregate([
    {
        $group: {
            _id: { nume: "$nume", email: "$email" },
            "nr_aparitii": { $sum: 1 },
        }
    },
    { $sort: { "nr_aparitii": -1 } },
    {
        $match: {
            "nr_aparitii": { $gt: 1 }
        }
    },
    { $project: { "date": "$_id", "nr_aparitii": 1, "_id": 0 } },
])
db.candidati.deleteOne({ "nume": "Iordache" })

//AGREGARI
//Afisarea candidatilor la CSIE care au aceeasi medie de admitere in ordine descrescatoare a notei la bacalaureat (pentru departajare)
db.candidati.aggregate([
    {
        $match: {
            "optiuniUniversitare.0": { $in: ["Cibernetică economică", "Informatică economică", "Informatică economică (în limba engleză)", "Statistică și previziune economică"] }
        }
    },
    { $sort: { "medieBac": -1 } },
    {
        $group: {
            _id: "$medieAdmitere",
            "nr_aparitii": { $sum: 1 },
            "candidati": { $push: { $concat: ["$nume", " ", "$prenume"] } }
        }
    },
    { $sort: { "nr_aparitii": -1 } },
    { $project: { "medieAdmitere": "$_id", "candidati": 1, "nr_aparitii": 1, "_id": 0 } },
    { $limit: 1 }
]);

//Sa se grupeze candidatii dupa prima optiune aleasa si sa se calculeze numarul de persoane care au ales-o, care este media de admitere cea mai mare, cea mai mica si media pentru fiecare grup, afisandu-se descrescator dupa media de admitere medie.
db.candidati.aggregate([
    {
        $group: {
            _id: { $arrayElemAt: ["$optiuniUniversitare", 0] },
            "maxMedieAdmitere": { $max: "$medieAdmitere" },
            "avgMedieAdmitere": { $avg: "$medieAdmitere" },
            "minMedieAdmitere": { $min: "$medieAdmitere" },
            "candidati": { $sum: 1 },
        }
    },
    { $sort: { "avgMedieAdmitere": -1 } },
    { $project: { "primaOptiune": "$_id", "maxMedieAdmitere": 1, "avgMedieAdmitere": 1, "minMedieAdmitere": 1, "candidati": 1, "_id": 0 } }
]);

//Sa se calculeze numarul candidatilor la FABBV care nu au depus inca niciun document si sa se grupeze pe fiecare specializare in parte.
db.candidati.aggregate([
    {
        $match: {
            $and: [{$or: [{ "optiuniUniversitare":{ $elemMatch: {$eq:"Finanțe și bănci"} }}, { "optiuniUniversitare":{ $elemMatch: {$eq:"Finanțe și bănci (în limba engleză)"} }}]},
            { $and: [{ "documenteIncarcate.CopieBuletin": "Nu" }, { "documenteIncarcate.CopieCertificaNastere": "Nu" }, { "documenteIncarcate.DiplomaBacalaureat": "Nu" }, { "documenteIncarcate.FoaieMatricola": "Nu" }, { "documenteIncarcate.AdeverintaMedicala": "Nu" }] }]
        }
    },
    { $project: { "optiuniUniversitare": 1 } },
    { $unwind: "$optiuniUniversitare" },
    {
        $group: {
            _id: "$optiuniUniversitare",
            "candidati": { $sum: 1 },
        }
    },
    { $sort: { "candidati": -1 } },
    { $project: { "optiune": "$_id", "candidati": 1, "_id": 0 } }
]);

//Afisarea candidatilor la CSIE folosind intervale de valori (bucket). Se va afisa numele, prenumele, media de admitere si media din bac la romana (pentru departajare)r
db.candidati.aggregate([
    {
        $match: {
            $or: [
                { optiuniUniversitare: "Informatică economică" },
                { optiuniUniversitare: "Cibernetică economică" },
                { optiuniUniversitare: "Statistică și previziune economică" },
                { optiuniUniversitare: "Informatică economică (în limba engleză)" }
            ]
        }
    },
    {
        $bucket: {
            groupBy: "$medieAdmitere",
            boundaries: [6, 7, 8, 9, 10, 11],
            default: "-",
            output: {
                "nrCandidati": { $sum: 1 },
                "candidati": {
                    $push: {
                        nume: "$nume", prenume: "$prenume",
                        medieAdmitere: "$medieAdmitere"
                        notaBacRomana: { $arrayElemAt: ["$noteBacalaureat.note", 0] }
                    }
                }
            }
        }
    }
])

//Sa se afiseze studentii benerifiari de bursa in functie de media de admitere(<8.5 - nu se incadreaza, >=8.5 && <9.5 - bursa de merit, >=9.5 - bursa de performanta)
db.candidati.aggregate([
    {
        $addFields: {
            numeComplet: { $concat: ["$nume", " ", "$prenume"] },
            medie: "$medieAdmitere",
            bursa: {
                $switch: {
                    branches: [
                        { case: { $lt: ["$medieAdmitere", 8.5] }, then: "Nu se incadreaza la bursa" },
                        { case: { $and: [{ $gte: ["$medieAdmitere", 8.5] }, { $lt: ["$medieAdmitere", 9.5] }] }, then: "Bursa de merit" },
                        { case: { $gte: ["$medieAdmitere", 9.5] }, then: "Bursa de performanta" },
                    ],
                    default: "Fara bursa"
                }
            }
        }
    },
    {
        $project: {
            numeComplet: 1, medie: 1, bursa: 1, _id: 0
        }
    },
    {
        $sort: { medie: -1 }
    }
])
