// ## Objects #6

// 1. create car object
// 2. add make, model, year, colors (array),
//    hybrid (boolean) keys
// 3. add two methods (drive and stop)
// 4. in the function body setup log with random text
// 5. log make
// 6. log first color
// 7. invoke both methods

const car = {
  make: "Tesla",
  model: "Model S Plaid",
  year: 2023,
  colors: ["White", "Black", "Midnight Silver", "Red", "Blue"],
  electric: true,
  hybrid: false,
  drive() {
    console.log("Zoooom!");
  },
  stop() {
    console.log("skrrrrrrrrt!");
  },
  bothMethods() {
    this.drive();
    this.stop();
  },
};

car.bothMethods();
