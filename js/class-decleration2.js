class Plane {
    
    // constructor to initializ properties
    constructor(planeNo, airline, numEngines, enginesIsActive) {
        this.planeNo = planeNo;
        this.airline = airline;
        this.numEngines = numEngines;
        this.enginesIsActive = enginesIsActive;
    }

    // function
    startEngines() {
        console.log("Starting Engines ....");
        this.enginesIsActive = true;
    }

    stopEngines() {
        console.log("Stoping Engines ...");
        this.enginesIsActive = false;
    }

    fetchPlaneInfo() {
        console.log(` The Plane - ${this.planeNo} from ${this.airline} has -
        ${this.numEngines} engine & they are active - ${this.enginesIsActive} `);
    }
}

let planeOne  = new Plane('A123AA','Indian Airlines',2, false);


console.log(planeOne);

planeOne.fetchPlaneInfo();
planeOne.startEngines();
planeOne.fetchPlaneInfo();
planeOne.stopEngines();
planeOne.fetchPlaneInfo();

console.log("--------------------------");

let planeTwo  = new Plane('F123AA','Fighter Airlines',4, false);

planeTwo.fetchPlaneInfo();
planeTwo.startEngines();
planeTwo.fetchPlaneInfo();
planeTwo.stopEngines();
planeTwo.fetchPlaneInfo();
