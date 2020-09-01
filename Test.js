class Vehicle {
    constructor(manufacturer, model, color) {
        this.miles = 0
        this.manufacturer = manufacturer
        this.model = model
        this.color = color
    }

    drive(){
        this.miles += 10
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
    parentFunction(){
        return "This is coming from the parent!";
    }
}


// ******* INHERITANCE

class Mock5 extends Vehicle {
    constructor(color, speed) {
        super("Camero", "X5", color)
        // Add more attributes
        this.speed = speed
    }
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}

const Mock5_1 = new Mock5("lightning Black", "1000 mph")
Mock5_1.drive()
console.log(Mock5_1.speed)