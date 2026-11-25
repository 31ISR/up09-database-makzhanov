const express = require('express')
const db = require('../db')

router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'succesful request'})
})


module.exports = router