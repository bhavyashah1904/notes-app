const yargs = require("yargs");
const note = require("./notes");

// const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Command to add a note.",
  builder: {
    title: {
      describe: "Title property",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Title property",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    //console.log("Adding notes" , argv);
    // console.log("Title:",argv.title);
    // console.log("Body:",argv.body)
    note.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Command to remove a note",
  handler: (argv) => {
    // console.log("Removing a note")
    note.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "Command to list  notes",
  handler: () => {
    // console.log("Listing notes");
    note.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Command to read notes",
  builder: {
    title: {
      describe: "Title property",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    //console.log("Reading a note");
    note.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
