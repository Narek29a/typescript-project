type VehicleTypes = 'www' | 'xxx';
class Vehicle {
    type?: VehicleTypes;
}

class CarX extends Vehicle {
    carType?: string;
}

let car = new CarX();
car.type;
car.carType;
