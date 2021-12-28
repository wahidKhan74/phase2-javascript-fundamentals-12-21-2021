class Plane {
    
    // constructor to initializ properties
    constructor(planeNo, airline, numEngines, enginesIsActive) {
        this.planeNo = planeNo;
        this.airline = airline;
        this.numEngines = numEngines;
        this.enginesIsActive = enginesIsActive;
    }

    // non static function
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

    static badWeather(planes) {
        // bad weather stop all planes
        for( let p of planes) {
            console.log(`The plance ${p.planeNo} is stoping ...`);
            p.enginesIsActive = false;
        }
    }
}

let planes = [];
planes.push(new Plane('A1231',"Indian AireLine",2,true));
planes.push(new Plane('A1232',"Indian AireLine",2,true));
planes.push(new Plane('A1233',"Indian AireLine",2,true));
planes.push(new Plane('F1230',"Fighter AireLine",4,true));
planes.push(new Plane('F1231',"Fighter AireLine",4,true));


console.log(planes);
Plane.badWeather(planes);