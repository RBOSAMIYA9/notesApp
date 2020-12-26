const chalk = require('chalk');
const { argv } = require('process');
const yargs = require('yargs');
const { getNotes } = require('./notes');
const notes = require('./notes')

yargs.command({
  command: 'add',
  describe: 'adds the notes',
  builder: {
    title: {
      describe: "Title for your note",
      demandOption: true,
      type: 'string'

    },
    body: {
      describe: "Body of your note",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body)
  }
});

yargs.command({
  command: 'view',
  describe: 'view all your notes',
  
  handler() {
    // console.log("view notes");
    notes.getNotes();
  }
});

yargs.command({
  command: 'read',
  describe: 'reads note of provided title',
  builder:{
    title:{
      describe: "title of note you want to read",
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    // console.log(argv.title);
    notes.readNotes(argv.title)
  }
});

yargs.command({
  command: 'del',
  describe: 'del the notes',
  builder: {
    title: {
      describe: "Write the title of note you want to delete",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.delNotes(argv.title)
  }
});

// console.log(yargs.argv)
yargs.parse()
// console.log(chalk.red.inverse (process.argv[2]));
