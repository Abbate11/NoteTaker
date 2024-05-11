const fs = require('fs');

class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8');
    }

    write(note){
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    getNotes(){
        return this.read().then((notes) => {
            let parsedNotes; 
            try{
                parsedNotes = [].concat(JSON.parse(notes));
            }catch (err){
                console.log(err)
                parsedNotes = []
            }

            return parsedNotes;
        });
    }

    addNote(note){
        return this.write(note).then((note) => {
             
        })
    }

    removeNote(id){

    }
}

module.exports = new Store();