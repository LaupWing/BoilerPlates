const express = require('express')
const router  = new express.Router()

router
    .get('/', (req, res)=>{
        res.render('index', {
            title: 'Home Pagina'
        })
    })
    .get('/detail', (req, res)=>{
        res.render('detail', {
            title: 'Detail Pagina'
        })
    })

module.exports = router