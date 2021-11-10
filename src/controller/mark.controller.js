const Mark = require('../models/mark.models')

// GET------
const getMark = async (req,res,next) => {
    try{
        const mark = await Mark.find()
        return res.status(200).json(mark)
    }catch(error){
        return next(error)
    }
};
const getMarkById = async (req,res,next) => {
    try{
        const {id} = req.params
        const findMark = await Mark.findById(id)
        return res.status(200).json(findMark)
    }catch(error){
        return next(error)
    }
};
// POST------
const postMark = async (req,res,next) => {
    try{
        const newMark = new Mark(req.body)
        const newMarkInBd = await newMark.save()
        return res.status(201).json(newMarkInBd)
    }catch(error){
        return next(error)
    }
}
// PUT------
const putMark = async (req,res,next) => {
    try{
        const {id} = req.params
        const newMark = new Mark(req.body)
        newMark._id =id
        const markUpdated = await Mark.findByIdAndUpdate(id, newMark)
        return res.status(200).json(markUpdated)
    }catch(error){
        return next(error)
    }
}
// DELETE------
const deleteMark = async (req,res,next) => {
    try{
        const {id} = req.params
        const deletedMark = await Mark.findByIdAndDelete(id)
        return res.status(200).json(deletedMark)
    }catch(error){
        return next(error)
    }
}

module.exports = {
    getMark,
    getMarkById,
    postMark,
    putMark,
    deleteMark
}