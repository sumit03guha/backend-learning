class Vehicle {
  constructor(public colour: string) {
    this.colour = colour;
  }

  protected honk(): void {
    console.log(`beep`);
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, colour: string) {
    super(colour);
  }
  private drive(): void {
    console.log(`vroom`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle(`orange`);
console.log(vehicle.colour);

const car = new Car(4, `green`);
console.log(car.colour);
car.startDrivingProcess();
