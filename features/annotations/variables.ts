let apple: number = 3;
let speed: string = 'fast';
let hasName: boolean = true;
let nothinMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

let colours: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, false, true];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numbersAboveZero = numbers[i];
}
