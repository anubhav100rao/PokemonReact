const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`SERVER started at http://localhost:${PORT}...`)
})