const router = require('express').Router()
const Players = require('./nba-model')

router.get("/:player_id", (req, res, next) => {
    Players.getPlayerByID(req.params.player_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.get("/", (req, res, next) => {
    Players.getAll()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.use("*", (req, res) => {
    res.json({ message: "NBA router up" })
})

router.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({
        customMessage: "An error occurred inside of NBA router",
        message: err.message,
        stack: err.stack,
    })
})


module.exports = router