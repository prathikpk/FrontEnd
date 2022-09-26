function Player( name, runs , wickets ) {
    this.name = name;
    this.runs = runs;
    this.wickets = wickets;
}

  Player.prototype.info = function () {
    return this.name + " has scored " + this.runs + " runs and has " +this.wickets+ " wickets";
  };
  
  // We can create new instances of the car
  var player1 = new Player( "Virat Kohli", 10000, 20 );
  var player2 = new Player( "R Ashwin", 1000, 500 );

  console.log(player1);
  console.log(player2);
  
  console.log( player1.info() );
  console.log( player2.info() );