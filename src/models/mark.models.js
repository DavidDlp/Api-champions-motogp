const mongoose = require('mongoose');

const markSchema = new mongoose.Schema(
    {
        nombre: {type: String, required:true, trim:true},
        base: {type: String, required:true, trim:true},
        fundacion: {type: String, required:true},
        neumaticos: {type: String},
        campeonatos: {
            years: [{type: Number}]
        }
    },
    {
        timestamps:true
    }
)

const Mark = mongoose.model('mark', markSchema)

module.exports = Mark