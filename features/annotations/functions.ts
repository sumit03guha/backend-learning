const add = (a: number, b: number): number => {
  return a + b;
};

const sub = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const mul = function (a: number, b: number): number {
  return a * b;
};

const logger: (string: string) => void = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};
