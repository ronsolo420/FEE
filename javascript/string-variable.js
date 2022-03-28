// Create variables to hold the name and note text.
var username;
var message;

// Assign values to these variables.
username = 'Luis'
message = 'See our upcoming range';

// Get the element with an id of name.
var elName = document.getElementById('name');
// Replace the content of this element.
elName.textContent = username;

// Get the element with an id of note.
var elNote = document.getElementById('note');
// Replace the content of this element.
elNote.textContent = message;
