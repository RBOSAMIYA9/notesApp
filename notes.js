const { notStrictEqual } = require('assert')
const fs = require('fs')
const chalk = require('chalk');
const { type } = require('os');
const { title } = require('process');

const viewNotes = () => {
    const allNotes = loadNotes();
    // console.log(allNotes.length);
    console.log(chalk.bgCyan("All your notes are following"));
    allNotes.forEach(note => {
        console.log(chalk.yellowBright(note.title));
    });
}

const readNotes = (myTitle) => {
    const allNotes = loadNotes();
    // console.log(myTitle);
    const note = allNotes.find((note)=> note.title === myTitle);
    if (note) {
        console.log(chalk.bold.greenBright.inverse(note.title));
        console.log(chalk.grey(note.body));
    }
    else
    console.log(chalk.red("no such note found"));

}

const addNotes = function (title, body) {
    notes = loadNotes()
    const duplicate = notes.filter( (note) => note.title === title)
    // console.log(notes)
    if (duplicate.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added Successfully"))
    }
    else {
        console.log("alredy taken")
    }

}

const saveNotes = (note) => {

    data = JSON.stringify(note)
    fs.writeFileSync('data.json', data)
}

const delNotes =  (title) => {
    notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        if (note.title !== title) {
            // console.log("not same", note.title)
            return note.title
        }

    })
    saveNotes(notesToKeep)
    if (notesToKeep.length === notes.length)
        console.log(chalk.magentaBright.underline.inverse("No note found"))
    else
        console.log(chalk.red.inverse("Note removed"))
}

const loadNotes =  () => {
    try {
        buffer = fs.readFileSync("data.json")
        notes = buffer.toString()
        demo = JSON.parse(notes)
        // console.log(demo.title)
        return demo

    }
    catch (e) {
        return []

    }
}
module.exports = {
    getNotes: viewNotes,
    addNotes: addNotes,
    delNotes: delNotes,
    readNotes:readNotes
}
// const ab =loadNotes()
// console.log(ab.title)
// console.log(ab.body)
