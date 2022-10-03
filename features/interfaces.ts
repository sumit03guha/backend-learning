interface Description {
  name: string;
  year: number;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  colour: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} gms of sugar`;
  },
};

const printVehicle = (vehicle: Description): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const printSummary = (summary: Reportable): void => {
  console.log(summary.summary());
};

printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(drink);
