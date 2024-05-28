const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Server in running on port ${PORT} `)
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'))
// })
// 13131

