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
  $("#seattle").show();
  $("#seattleOutput").text(Object.values(seattle));
});

  $("#paris").click(function(){
  $("#seattle").show();
  $("#parisOutput").text(Object.values(paris));
});

  $("#tokyo").click(function(){
  $("#seattle").show();
  $("#tokyoOutput").text(Object.values(tokyo));
});

    // var location = $("input#location").val();
    // var landmarks = $("input#landmarks").val();
    // var timeOfYear = $("input#timeOfYear").val();
    // var notes = $("input#notes").val();
    // var newDestination = new Destination(location, landmarks, timeOfYear, notes);
    // TravelBook.prototype.addDestination(newDestination);
    //
    // $("#output").text(TravelBook(0));
  });
