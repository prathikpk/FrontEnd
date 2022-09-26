// parent class
class Player { 
    constructor(name) {
        this.name = name;
    }
    
    info() {
        console.log(`Hello I am ${this.name}.`);
    }
 
}

let a=new Player("Rohit");
a.info();

// inheriting parent class
class Team extends Player {

    constructor(name,team) {
        // call the super class constructor and pass in the name parameter
        super(name);
        this.team = team;
    }
    
    // overriding Player's method
    info() {
        console.log(`Hello I am ${this.name}.`);
        console.log('I play for : ' + this.team);
    }
}

let p = new Team('Virat','India');
p.info();