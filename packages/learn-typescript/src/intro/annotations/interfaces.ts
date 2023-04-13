interface Vehicle {
    name: string,
    year: number,
    broken: boolean,
    summary(): string
}

const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
    summary(): string {
        return "name of the vehicle " + this.name
    }
}

const printIt = (vehicle: Vehicle): void => {
    console.log(vehicle)
}

printIt(oldCivic)