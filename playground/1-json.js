const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const change = JSON.stringify(book)
// console.log(change)

// const object = JSON.parse(change)
// console.log(object)

// fs.writeFileSync('1-json.json', change)

// const data = fs.readFileSync('1-json.json')
// const dataBuffer = data.toString()
// const objectData = JSON.parse(dataBuffer)
// console.log(objectData.title)

const buffer = fs.readFileSync('1-json.json')
const object = buffer.toString()
const objectData = JSON.parse(object)


objectData.name = 'Anup'
objectData.planet = 'On'
objectData.age = '22'

const toStringChange = JSON.stringify(objectData)
fs.writeFileSync('1-json.json', toStringChange)