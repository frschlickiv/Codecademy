// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// functions that change the color 
const keyPlay = function (event) {
event.target.style.backgroundColor = 'red'
}

const keyReturn = function(event) {
  event.target.style.backgroundColor = ''
}

// function with event handler properties

const eventAssignment = function(note) {
note.onmousedown = function(){
  keyPlay(event)
}
note.onmouseup = function(){
  keyReturn(event)
}
}


// loop that runs the array elements through the function
notes.forEach(eventAssignment);

// store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// variable that stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
nextTwo.hidden = false;
nextOne.hidden = true;
document.getElementById('letter-note-five').innerHTML = 'D';
document.getElementById('letter-note-six').innerHTML = 'C'
}

// Event handler property and function for the second progress button
nextTwo.onclick = function(){
nextThree.hidden = false;
nextTwo.hidden = true;

document.getElementById('word-five').innerHTML = 'DEAR';
document.getElementById('word-six').innerHTML = 'FRI-'

lastLyric.style.display = 'inline-block'

document.getElementById('letter-note-three').innerHTML = 'G'
document.getElementById('letter-note-four').innerHTML = 'E'
document.getElementById('letter-note-five').innerHTML = 'C'
document.getElementById('letter-note-six').innerHTML = 'B'
}


// Event handler property and function for the third progress button
nextThree.onclick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;
  lastLyric.style.display = 'none';

   document.getElementById('word-one').innerHTML = 'HAP-'
   document.getElementById('word-two').innerHTML = 'PY'
   document.getElementById('word-three').innerHTML = 'BIRTH-'
   document.getElementById('word-four').innerHTML = 'DAY'
   document.getElementById('word-five').innerHTML = 'TO'
   document.getElementById('word-six').innerHTML = 'YOU!'


document.getElementById('letter-note-one').innerHTML = 'F'
document.getElementById('letter-note-two').innerHTML = 'F'
document.getElementById('letter-note-three').innerHTML = 'E'
document.getElementById('letter-note-four').innerHTML = 'C'
document.getElementById('letter-note-five').innerHTML = 'D'
document.getElementById('letter-note-six').innerHTML = 'C' 
}

// Event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}