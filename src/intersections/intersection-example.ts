interface Car {
    label: string;
    color: string;
    engine: string

}

interface Animal  {
    type: string;
}

type VehicleXXX = {
    name: string;
}
type Plain = {
    engine: string;
}
let vehcile: VehicleXXX & Animal;


let obj: Car & Animal;


interface I{
    name: string;
}

interface I{
    age: string;
}

const iii: I = {
    age: '4',
    name: 'ob'
}
