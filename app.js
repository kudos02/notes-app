const yargs = require("yargs");
const notesUtilities = require("./notes");

yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesUtilities.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "removing an existing note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesUtilities.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list out the notes stored in the app",
  handler() {
    notesUtilities.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "search out the note",
  builder: {
    title: {
      describe: "Note title",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    notesUtilities.readNote(argv.title);
  },
});

yargs.parse();

// console.log(yargs.argv);

// const fs = require( "fs" );

// const myNotes = require("./notes");

// console.log(myNotes());

// // fs.writeFileSync( "notes.txt", "This file is created by Node.js" );

// // fs.appendFileSync("notes.txt", "\nThis file is edited by Kudos");
