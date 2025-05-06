let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  const notesContainer = document.getElementById("notes");
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      <strong>${note.title}</strong>
      <p>${note.content}</p>
      <div class="note-actions">
        <button onclick="editNote(${index})">Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
    notesContainer.appendChild(noteDiv);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) {
    alert("Both title and content are required!");
    return;
  }

  notes.push({ title, content });
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  renderNotes();
}

function editNote(index) {
  const note = notes[index];
  const newTitle = prompt("Edit Title:", note.title);
  const newContent = prompt("Edit Content:", note.content);

  if (newTitle && newContent) {
    notes[index] = { title: newTitle, content: newContent };
    renderNotes();
  }
}

function deleteNote(index) {
  if (confirm("Delete this note?")) {
    notes.splice(index, 1);
    renderNotes();
  }
}

// Initial render
renderNotes();
