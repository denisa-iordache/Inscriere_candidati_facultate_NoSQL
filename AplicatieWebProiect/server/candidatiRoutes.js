const router = require("express").Router();
const Candidat = require("./models/candidat");
router.route("/").get((req, res) => {
    Candidat.find()
        .then(candidati => res.json(candidati))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Candidat.findById(req.params.id)
        .then(candidat => res.json(candidat))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post(async (req, res) => {
    const nume = req.body.nume;
    const prenume = req.body.prenume;
    const email = req.body.email;
    const telefon = req.body.telefon;
    const eseuMotivational = req.body.eseuMotivational;
    const discipline = Array(req.body.noteBacalaureat.discipline[0], req.body.noteBacalaureat.discipline[1], req.body.noteBacalaureat.discipline[2])
    const note = Array(req.body.noteBacalaureat.note[0], req.body.noteBacalaureat.note[1], req.body.noteBacalaureat.note[2])
    const noteBacalaureat = new Object({
        discipline, note
    })
    const optiuniUniversitare = Array(req.body.optiuniUniversitare[0], req.body.optiuniUniversitare[1], req.body.optiuniUniversitare[2]);
    const medieLiceu = req.body.medieLiceu;
    const newCandidat = new Candidat({
        nume,
        prenume,
        email,
        telefon,
        eseuMotivational,
        noteBacalaureat,
        medieLiceu,
        optiuniUniversitare
    });

    newCandidat.save()
        .then(() => res.json('Candidat added!'))
        .catch(err => res.status(400).json('Error: ' + err));

    await Candidat.updateMany({}, [{ $set: { "medieBac": { $round: [{ $avg: "$noteBacalaureat.note" }, 2] } } }]);
    await Candidat.updateMany({}, [{ $set: { "medieAdmitere": { $round: [{ $add: [{ $multiply: ["$medieBac", 0.8] }, { $multiply: ["$medieLiceu", 0.2] }] }, 2] } } }]);
});

router.route('/:id').delete((req, res) => {
    Candidat.findByIdAndDelete(req.params.id)
        .then(() => res.json('Candidat deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
    const discipline = Array(req.body.noteBacalaureat.discipline[0], req.body.noteBacalaureat.discipline[1], req.body.noteBacalaureat.discipline[2])
    const note = Array(req.body.noteBacalaureat.note[0], req.body.noteBacalaureat.note[1], req.body.noteBacalaureat.note[2])
    Candidat.findByIdAndUpdate(req.params.id,
        {
            nume: req.body.nume,
            prenume: req.body.prenume,
            telefon: req.body.telefon,
            email: req.body.email,
            eseuMotivational: req.body.eseuMotivational,
            noteBacalaureat: new Object({
                discipline, note
            }),
            optiuniUniversitare: Array(req.body.optiuniUniversitare[0], req.body.optiuniUniversitare[1], req.body.optiuniUniversitare[2]),
            medieLiceu: req.body.medieLiceu,
        },
        { new: true },
        async function (err, response) {
            // Handle any possible database errors
            if (err) {
                console.log("we hit an error" + err);
                res.json({
                    message: 'Database Update Failure'
                });
            }
            res.json({
                response
            });
            console.log("This is the Response: " + response);
            await Candidat.updateMany({}, [{ $set: { "medieBac": { $round: [{ $avg: "$noteBacalaureat.note" }, 2] } } }]);
            await Candidat.updateMany({}, [{ $set: { "medieAdmitere": { $round: [{ $add: [{ $multiply: ["$medieBac", 0.8] }, { $multiply: ["$medieLiceu", 0.2] }] }, 2] } } }]);
        }
    );
});

module.exports = router;