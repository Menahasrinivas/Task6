//4.write a class to calculate the uber price

class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log(myUber.totalPrice());