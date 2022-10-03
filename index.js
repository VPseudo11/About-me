const express = require('express')

const app = express()

app.get('/me', (req, res) => {
    res.status(200).json({
        name: 'Javier',
        age: 21,
        country: 'Ecuador',
        verb: req.method
    })
})

app.post('/metas', (req, res) => {
    res.status(200).json({
        hobbies: ["read", "draw", "play video games"],
        verb: req.method
    })
})

app.patch('/metas', (req, res) => {
    res.status(200).json({
        hobbies: [
            "get references for future jobs",
            "show my knowledge to solve problems"
        ],
        verb: req.method
    })
})

app.put('/business', (req, res) => {
    res.status(200).json({
        business: [
            "Adereso",
            "Transapp",
            "Magnet"
        ],
        verb: req.method
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Success 😺😺😺 ' + PORT))