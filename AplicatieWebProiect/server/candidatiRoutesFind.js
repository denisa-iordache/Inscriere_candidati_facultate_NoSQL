const router = require("express").Router();
const Candidat = require("./models/candidat");

router.route("/CSIE").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Informatică economică" },
            { optiuniUniversitare: "Cibernetică economică" },
            { optiuniUniversitare: "Statistică și previziune economică" },
            { optiuniUniversitare: "Informatică economică (în limba engleză)" }
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/FABIZ").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Administrarea afacerilor (în limba engleză)" },
            { optiuniUniversitare: "Administrarea afacerilor (în limba franceză)" },
            { optiuniUniversitare: "Administrarea afacerilor (în limba germană)" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/BT").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Administrarea afacerilor în comerț, turism, servicii, merceologie și managementul calității" },
            { optiuniUniversitare: "Administrarea afacerilor în comerț, turism, servicii, merceologie și managementul calității (în limba engleză)" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/FAMP").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Administrație publică" },
            { optiuniUniversitare: "Resurse umane" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/CIG").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Contabilitate și informatică de gestiune" },
            { optiuniUniversitare: "Contabilitate și informatică de gestiune (în limba engleză)" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/EAM").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Economie agroalimentară și a mediului" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/REI").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Economie și afaceri internaționale" },
            { optiuniUniversitare: "Economie și afaceri internaționale (în limba engleză)" },
            { optiuniUniversitare: "Limbi moderne aplicate (engleză - franceză)" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/ETA").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Economie și comunicare economică în afaceri" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/FABBV").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Finanțe și bănci" },
            { optiuniUniversitare: "Finanțe și bănci (în limba engleză)" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/MK").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Marketing" },
            { optiuniUniversitare: "Marketing (în limba engleză)" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/MAN").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Management" },
            { optiuniUniversitare: "Management (în limba engleză)" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/DREPT").get((req, res) => {
    Candidat.find({
        $or: [
            { optiuniUniversitare: "Drept" },
        ]
    })
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/asc").get((req, res) => {
    Candidat.find().sort({"medieAdmitere" : 1})
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/desc").get((req, res) => {
    Candidat.find().sort({"medieAdmitere" : -1})
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;