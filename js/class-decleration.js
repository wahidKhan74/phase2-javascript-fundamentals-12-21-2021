class Plane {
    // properties
    planeNo;
    airline;
    numEngines;
    enginesIsActive;
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

planeOne.fetchPlaneInfo();
planeOne.startEngines();
planeOne.fetchPlaneInfo();
planeOne.stopEngines();
planeOne.fetchPlaneInfo();
