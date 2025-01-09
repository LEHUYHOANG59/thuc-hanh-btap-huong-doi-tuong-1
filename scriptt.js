class Temperature {
    constructor(celsius) {
        if (celsius < -273) {
            throw new Error("Nhiệt độ không hợp lệ. Nhiệt độ thấp nhất là -273 độ C.");
        }
        this.celsius = celsius;
    }

    convertToFahrenheit() {
        return (this.celsius * 9/5) + 32;
    }

    convertToKelvin() {
        return this.celsius + 273.15;
    }
}

const temperature = new Temperature(25);

console.log("Nhiệt độ Fahrenheit:", temperature.convertToFahrenheit());
console.log("Nhiệt độ Kelvin:", temperature.convertToKelvin());