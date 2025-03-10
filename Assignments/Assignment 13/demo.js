let noteList = [];

function addNote(event){
    event.preventDefault();
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let hasError = false;
    if(title == ""){
        document.getElementById("title-error").innerHTML = "Title is required";
        hasError = true;
    }
    else{
        document.getElementById("title-error").innerHTML = "";
    }

    if(content == ""){
        document.getElementById("content-error").innerHTML = "Content is required";
        hasError = true;
    }
    else{
        document.getElementById("content-error").innerHTML = "";
    }

    if(hasError){
        return;
    }   

    let newNote = {id:Date.now(), title:title, content:content};
    noteList.push(newNote);
    console.log(noteList);
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    displayNotes();
}

function displayNotes(){
  let cont = document.getElementById("cont");
  cont.innerHTML = "";
  noteList.forEach(note=>{
    let div = document.createElement("div");
    div.classList.add("card", "col-4", "mb-3", "ml-2");
    div.innerHTML  = `<div class="card-body">
    <div class = "card-title">${note.title}</div>
    <div class = "card-text">${note.content}</div>
    <button class="btn btn-danger" onclick="deleteNote(${note.id})">Delete</button>
    </div>`
    cont.appendChild(div);
  })
}

function deleteNote(id){
    let index = noteList.findIndex(note=>note.id == id);
    if(index == -1){
        console.log("note not found");
        return;
    }
    noteList.splice(index, 1);
    displayNotes();
}