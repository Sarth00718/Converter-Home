document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const inputType = document.getElementById("inputType");
    const result = document.getElementById("result");
    const resultType = document.getElementById("resultType");
  
    const conversionRates = {
        "Meter": 1,
        "Kilometer": 0.001,
        "Centimeter": 100,
        "Milimeter": 1000,
        "Micrometer": 1000000,
        "Nanometer": 1000000000,
        "Mile": 0.000621371,
        "Yard": 1.09361,
        "Foot": 3.28084,
        "Inch": 39.3701
    };

    function convertLength() {
        const inputValue = parseFloat(input.value);
        const inputUnit = inputType.value;
        const resultUnit = resultType.value;
        const resultValue = inputValue * conversionRates[resultUnit] / conversionRates[inputUnit];
        result.value = isNaN(resultValue) ? "Invalid input" : resultValue.toFixed(8);
    }

    input.addEventListener("input", convertLength);
    inputType.addEventListener("change", convertLength);
    resultType.addEventListener("change", convertLength);
});
