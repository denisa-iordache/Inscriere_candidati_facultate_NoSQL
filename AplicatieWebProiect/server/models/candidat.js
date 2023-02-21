const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidatSchema = new Schema({}, { strict: false, versionKey:false});
const Candidat = mongoose.model('Candidat', candidatSchema, 'candidati');

module.exports =  Candidat;