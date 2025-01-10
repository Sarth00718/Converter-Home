document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const inputType = document.getElementById("inputType");
    const result = document.getElementById("result");
    const resultType = document.getElementById("resultType");

    const conversionRates = {
        "Sqaure Meter": 1,
        "Sqaure Kilometer": 1e-6,
        "Sqaure Centimeter": 1e4,
        "Sqaure Milimeter": 1e6,
        "Sqaure Micrometer": 1e12,
        "Hectare": 1e-4,
        "Sqaure Mile": 3.861e-7,
        "Sqaure Yard": 1.19599,
        "Sqaure Foot": 10.7639,
        "Sqaure Inch": 1550.0031,
        "Acre": 0.000247105, 
    };

    function convertArea() {
        const inputValue = parseFloat(input.value);
        const inputUnit = inputType.value;
        const resultUnit = resultType.value;
        const resultValue = inputValue * conversionRates[resultUnit] / conversionRates[inputUnit];
        result.value = isNaN(resultValue) ? "Invalid input" : resultValue.toFixed(8);
    }

    input.addEventListener("input", convertArea);
    inputType.addEventListener("change", convertArea);
    resultType.addEventListener("change", convertArea);
});
