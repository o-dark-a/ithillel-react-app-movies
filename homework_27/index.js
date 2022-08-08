const express = require('express')
const fs = require('fs')
const util = require('util')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')

const app = express()
const PORT = 3000

const readFileAsPromise = util.promisify(fs.readFile)
const writeFileAsPromise = util.promisify(fs.writeFile)

app.use(bodyParser.json())


app.get('/notes', async (req, res) => {
  const allNotes = await readFileAsPromise('./data/notes.json', 'utf-8')

  if (!!allNotes.length) {
    res.send(allNotes)
  }

  res.send('No notes')
})

app.post('/notes', async (req, res) => {
  let allNotes = await readFileAsPromise('./data/notes.json', 'utf-8')

  let newNotes = [{
    ...req.body,
    id: uuidv4(),
    dateCreated: new Date(),
    isShared: false,
  }];

  if (!!allNotes.length) {
    newNotes = [
      ...JSON.parse(allNotes),
      ...newNotes
    ]
  }

  await writeFileAsPromise('./data/notes.json', JSON.stringify(newNotes))

  res.status(201)
  res.send('Success')
})

app.delete('/notes/:id', async (req, res) => {
  let allNotes = await readFileAsPromise('./data/notes.json', 'utf-8')

  if (!!allNotes.length) {
    let newNotes = JSON.parse(allNotes).filter(note => note.id !== req.params.id)
    await writeFileAsPromise('./data/notes.json', JSON.stringify(newNotes))
  }

  res.send('Got a DELETE request')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
