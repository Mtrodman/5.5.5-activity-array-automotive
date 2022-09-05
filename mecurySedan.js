//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
class Car extends VehicleModule {
    constrictor(make, model, year, color, mileage)
    super(make, model, year, color, mileage){

        this.maxPassengers = 5;
        this.passenger = 0; 
        this.numberOfWheels = 4; 
        this.maximumSpeed = 160; 
        this.fuel = 10;
        this.scheduleService = false;

}
loadPassenger

num

loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " not enough room for everyone.");

        }
    } else {
        console.log(this.model + " " + this.make + " full copasity ");
    }
}

        checkService() {
            if (this.mileage > 30000) {            
                this.scheduleService = true
                return this.scheduleService;                       
            }
        }
        start() {
            if (this.fuel > 0) {            
                console.log("car has started.");
                return this.started = true
            } else {
                console.log("no fuel");
                return this.started = false;
            }
        }


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "red", "10000");

VehicleModule.start ()
VehicleModule.passenger (5);
VehicleModule.stop ();
VehicleModule.checkService ();
console.log(VehicleModule)
