const express = require('express');
const markRoutes = express.Router();
const {
    getMark,
    getMarkById,
    postMark,
    putMark,
    deleteMark
} = require('../controller/mark.controller')

// markRoutes.get ('/', (req,res) => {
//     res.send('Estamos en mark')
// });

markRoutes.get('/', getMark);

markRoutes.get('/:id', getMarkById);

markRoutes.post('/', postMark);

markRoutes.put('/', putMark);

markRoutes.delete('/', deleteMark);


 
module.exports = markRoutes