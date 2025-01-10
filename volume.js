document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const inputType = document.getElementById("inputType");
    const result = document.getElementById("result");
    const resultType = document.getElementById("resultType");

    const conversionRates = {
        "Cubic Meter": 1,
        "Cubic Kilometer": 1e-9,
        "Cubic Centimeter": 1e6,
        "Cubic Milimeter": 1e9,
        "Liter": 1000,
        "Mililiter": 1e6,
        "US Gallon": 264.172,
        "US Quart": 1056.69,
        "US Pint": 2113.38,
        "US Cup": 4166.67,
        "US Fluid Ounce": 33814,
        "US Table Spoon": 67628.,
        "US Tea Spoon": 202884,
        "Imperial Gallon": 219.969,
        "Imperial Quart": 879.877,
        "Imperial Pint": 1759.75,
        "Imperial Fluid Ounce": 35195.1,
        "Imperial Table Spoon": 56312.1,
        "Imperial Tea Spoon": 168936,
        "Cubic Mile": 2.39913e-10,
        "Cubic Yard": 1.30795,
        "Cubic Foot": 35.3147,
        "Cubic Inch": 61023.7
    };

    function convertVolume() {
        const inputValue = parseFloat(input.value);
        const inputUnit = inputType.value;
        const resultUnit = resultType.value;
        const resultValue = inputValue * conversionRates[resultUnit] / conversionRates[inputUnit];     
        result.value = isNaN(resultValue) ? "Invalid input" : resultValue.toFixed(8);
    }

    input.addEventListener("input", convertVolume);
    inputType.addEventListener("change", convertVolume);
    resultType.addEventListener("change", convertVolume);
});
