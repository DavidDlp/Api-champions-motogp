const Pilot = require('../models/pilot.models');

// GET------
const getPilot = async (req,res,next) => {
    try{
        const pilot = await Pilot.find()
        return res.status(200).json(pilot)
    }catch(error){
        return next(error)
    }
};
const getPilotById = async (req,res,next) => {
    try{
        const{id} =req.params;
        const findPilot = await Pilot.findById(id);
        return res.status(200).json(findPilot)
    }catch(error){
        return next(error)
    }
};
const getPilotByName = async (req,res, next) =>{
    try{
        const {nombre} =req.params;
        const findName = await Pilot.find({nombre});
        return res.status(200).json(findName)
    }catch(error){
        return next(error)
    }
};
// POST------
const postPilot = async (req,res,next) =>{
    try{
        const newPilot = new Pilot(req.body)
        const newPilotInBd = await newPilot.save()
        return res.status(201).json(newPilotInBd)
    }catch(error){
        return next(error)
    }
};
// PUT/PATCH------
const putPilot = async (req,res,next) =>{
    try{
        const {id} = req.params;
        const newPilot = new Pilot(req.body);
        newPilot._id = id;
        const pilotUpdated = await Pilot.findByIdAndUpdate(id, newPilot);
        return res.status(200).json(pilotUpdated)
    }catch(error){
        return next(error)
    }
};
const patchPilot = async (req,res,next) =>{
    try{
        const {id} = req.params
        const idMark = req.body.idMark
        const updatePilotWithMark = await Pilot.findByIdAndUpdate(id,{$push:{marca: idMark}})
        return res.status(200).json(updatePilotWithMark)
    }catch(error){
        return next(error)
    }
}
// DELETE------
const deletePilot = async (req,res,next) =>{
    try{
        const {id} = req.params;
        const deletedPilot = await Pilot.findByIdAndDelete(id);
        return res.status(200).json(deletedPilot)
    }catch(error){
        return next(error)
    }
};

module.exports = {
    getPilot,
    getPilotById,
    getPilotByName,
    postPilot,
    putPilot,
    patchPilot,
    deletePilot
}