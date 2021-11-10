const mongoose = require('mongoose');

const pilotSchema = new mongoose.Schema(
    {
        nombre: {type: String, required:true, trim:true},
        apodo: {type: String, trim:true},
        nacionalidad: {type: String, required:true, trim:true},
        marca: [{type:mongoose.Types.ObjectId, ref:'mark'}],
        campeonatos: {
            number: {type: Number},
            years: [{type: Number}]
        }
    },
    {
        timestamps: true
    }
);

const Pilot = mongoose.model('pilot', pilotSchema)

module.exports = Pilot