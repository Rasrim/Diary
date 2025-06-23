document.getElementById("saveBtn").addEventListener("click", saveNote);
document.getElementById("loadBtn").addEventListener("click", loadNote);

function saveNote() {
  const date = document.getElementById("noteDate").value;
  const content = document.getElementById("noteContent").value;
  if (!date || !content) {
    alert("Please enter a date and content.");
    return;
  }
  localStorage.setItem("note_" + date, content);
  document.getElementById("message").textContent = "Note saved for " + date;
}

function loadNote() {
  const date = document.getElementById("noteDate").value;
  const content = localStorage.getItem("note_" + date);
  if (content !== null) {
    document.getElementById("noteContent").value = content;
    document.getElementById("message").textContent = "Note loaded for " + date;
  } else {
    document.getElementById("message").textContent = "No note found for this date.";
    document.getElementById("noteContent").value = "";
  }
}
