class UberPriceCalculator {
  constructor(baseFare, costPerKilometer, bookingFee) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.bookingFee = bookingFee;
  }

  calculatePrice(distance) {
    const distanceCost = distance * this.costPerKilometer;

    const totalCost = this.baseFare + distanceCost + this.bookingFee;
    return totalCost;
  }
}

const uberCalculator = new UberPriceCalculator(5, 1.5, 2.5);

// Price for a 10-kilometer ride.
const totalPrice = uberCalculator.calculatePrice(20, 15);
console.log(`The Uber price for the ride is: $${totalPrice}`);
