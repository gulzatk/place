// Busines Logic
function TravelBook() {
  this.destinations = []
}

TravelBook.prototype.addDestination = function(destination) {
  this.destinations.push(destination);
}

function Destination(location, landmarks, timeOfYear, notes){
  this.location= location,
  this.landmarks= landmarks,
  this.timeOfYear= timeOfYear,
  this.notes= notes
}
var seattle = new Destination("Seattle", ["space needle"], "summer", "good");
var paris = new Destination("Paris", ["Eiffel Tower", "Arc du Triomphe"], "fall", "great");
var tokyo = new Destination("Tokyo", ["subway"], "winter", "amazing");



// User Interface
$(document).ready(function(){

  $("#seattle").click(function(event){
  event.preventDefault();
  $("#seattleOutput").show();
  $("#seattleOutput").text(Object.values(seattle));
  $("#parisOutput").hide();
  $("#tokyoOutput").hide();
});

  $("#paris").click(function(){
  $("#parisOutput").show();
  $("#parisOutput").text(Object.values(paris));
  $("#seattleOutput").hide();
  $("#tokyoOutput").hide();
});

  $("#tokyo").click(function(){
  $("#tokyoOutput").show();
  $("#tokyoOutput").text(Object.values(tokyo));
  $("#seattleOutput").hide();
  $("#parisOutput").hide();

});
});
