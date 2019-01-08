// add solution here

var beatles = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var empty = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < beatles.length; i++) {
    
    empty.push(beatles[i] + " plays " + (instruments[i]));
    
  }
    return empty;
  
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var popo = [];

function johnLennonFacts(array){

   var i = 0;
   
  while (i < facts.length) {
   
    facts.push([i] + "!!!");
    i++;
  }
  return popo;
}
