const express = require('express')
const server = express()
const nbaRouter = require('./nba/nba-router')

server.use(express.json())
server.use('/api/players', nbaRouter)

server.use('*', (req, res) => {
    res.json({ api: "up" })
})

module.exports = server