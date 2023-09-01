"use strict";
const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary() {
        return "name of the vehicle " + this.name;
    }
};
const printIt = (vehicle) => {
    console.log(vehicle);
};
printIt(oldCivic);
