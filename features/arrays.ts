const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date(), new Date()];

const carsByMake: string[][] = [['f150', 'corolla', 'camaro']];

const car = carMakers[1];
const myCar = carMakers.pop();

carMakers.push('honda');

carMakers.map((car: string) => {
  return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date(), '01/10/2020'];
importantDates.push(new Date());
importantDates.push('02/09/2020');
