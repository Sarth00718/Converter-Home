document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const inputType = document.getElementById("inputType");
    const result = document.getElementById("result");
    const resultType = document.getElementById("resultType");

    const conversionRates = {
        "Gram": 1,
        "Kilogram": 0.001,
        "Milligram": 1000,
        "Metric Ton": 0.000001,
        "Long Ton": 0.00000098420652761,
        "Short Ton": 0.0000011023113109,
        "Pound": 0.00220462,
        "Ounce": 0.03527396,
        "Carat": 5,
        "Atomic Mass Unit": 6.0221367e+23
    };

    function convertWeight() {
        const inputValue = parseFloat(input.value);
        const inputUnit = inputType.value;
        const resultUnit = resultType.value;

        const resultValue = inputValue * conversionRates[resultUnit] / conversionRates[inputUnit];

        result.value = isNaN(resultValue) ? "Invalid input" : resultValue.toFixed(8);
    }

    input.addEventListener("input", convertWeight);
    inputType.addEventListener("change", convertWeight);
    resultType.addEventListener("change", convertWeight);
});