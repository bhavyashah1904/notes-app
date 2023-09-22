const fs = require("fs");
const chalk = require("chalk");
const { read } = require("fs");


//function to add a new note
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  //console.log(notes)

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

//function to remove a note
const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Deleted!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note with this title found!"));
  }
};

//function to list notes
const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.green.inverse("Here are the title of your notes!"));
    notes.forEach((note) => {
        console.log(note.title);
    });
}

//function to read a note
const readNote = (title) => {
    const notes = loadNotes();
    
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(note.title);
        console.log(note.body);
    }else{
        console.log("Not Found!");
    }
}

// const readNote = (title) => {
//     const notes = loadNotes()
//     const note = notes.find((note) => note.title === title)

//     if (note) {
//         console.log(chalk.inverse(note.title))
//         console.log(note.body)
//     } else {
//         console.log(chalk.red.inverse('Note not found!'))
//     }
// }

//function to save notes.
const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

//function to load all the previous notes.
const loadNotes = () => {
  try {
    const buff = fs.readFileSync("notes.json");
    const notesJSON = buff.toString();
    return JSON.parse(notesJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes :  listNotes,
  readNote : readNote
};
