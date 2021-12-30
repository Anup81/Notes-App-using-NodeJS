const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note)=>{
    //     return note.title === title
    // })

    const duplicateNote = notes.find((note)=> note.title === title)

    // debugger

    if (!duplicateNote){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('Note title Taken!'))
    }

    
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesPresent = notes.filter((note)=>{
        return note.title != title
    })

    if(notes.length > notesPresent.length){
        saveNotes(notesPresent)
        console.log(chalk.green.inverse('Note Removed'))
    }else{
        console.log(chalk.red.inverse('No Note Found'))
    }
}

const listNotes = (title) =>{
    console.log(chalk.inverse('Your Notes'))
    const notes = loadNotes()
    notes.forEach((head)=> console.log(head.title))
}

const readNote = (title) =>{
    const notes = loadNotes()
    const readNote = notes.find((note)=> note.title === title)

    if(readNote){
        console.log(chalk.green.inverse(readNote.title))
        console.log(chalk(readNote.body))
    }else{
        console.log(chalk.red.inverse('No note found'))
    }
}


const saveNotes = function(notes){
    const dataJSON =  JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}