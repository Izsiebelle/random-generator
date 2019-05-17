{
  var destinations = []
  var london = new Image();
  london.src = "/assets/images/london.jpeg";
  var amsterdam = new Image();
  amsterdam.src = "/assets/images/amsterdam.jpeg";
  var barcelona= new Image();
  barcelona.src = "/assets/images/barcelona.jpeg";
  var hongkong = new Image();
  hongkong.src = "/assets/images/hong-kong.jpeg";
  var paris = new Image();
  paris.src = "/assets/images/paris.jpeg";
  var rome = new Image();
  rome.src = "/assets/images/rome.jpeg";
  var tokyo = new Image();
  tokyo.src = "/assets/images/tokyo.jpeg";

  destinations.push(london);
  destinations.push(amsterdam);
  destinations.push(barcelona);
  destinations.push(hongkong);
  destinations.push(paris);
  destinations.push(rome);
  destinations.push(tokyo); 

function randomDestination(){

var randomNumber = Math.floor(Math.random() * destinations.length);
document.getElementById("location").innerHTML= destinations(randomNumber);

  }

}
