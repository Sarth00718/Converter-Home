document.addEventListener("DOMContentLoaded", function() {
    const tempInput = document.getElementById("tempInput");
    const tempInputType = document.getElementById("tempInputType");
    const tempResult = document.getElementById("tempResult");
    const tempResultType = document.getElementById("tempResultType");

    function convertTemperature() {
        const inputValue = parseFloat(tempInput.value);
        const inputType = tempInputType.value;
        const resultType = tempResultType.value;

        let resultValue;

        if (inputType === "Celsius") {
            if (resultType === "Celsius") {
                resultValue = inputValue;
            } else if (resultType === "Kelvin") {
                resultValue = inputValue + 273.15;
            } else if (resultType === "Fahrenheit") {
                resultValue = (inputValue * 9/5) + 32;
            } else if (resultType === "Infrared thermometer") {
                resultValue = inputValue * 0.9;
            }
        } else if (inputType === "Kelvin") {
            if (resultType === "Celsius") {
                resultValue = inputValue - 273.15;
            } else if (resultType === "Kelvin") {
                resultValue = inputValue;
            } else if (resultType === "Fahrenheit") {
                resultValue = (inputValue - 273.15) * 9/5 + 32;
            } else if (resultType === "Infrared thermometer") {
                resultValue = (inputValue - 273.15) * 0.9;
            }
        } else if (inputType === "Fahrenheit") {
            if (resultType === "Celsius") {
                resultValue = (inputValue - 32) * 5/9;
            } else if (resultType === "Kelvin") {
                resultValue = (inputValue - 32) * 5/9 + 273.15;
            } else if (resultType === "Fahrenheit") {
                resultValue = inputValue;
            } else if (resultType === "Infrared thermometer") {
                resultValue = (inputValue - 32) * 5/9 * 0.9;
            }
        } else if (inputType === "Infrared thermometer") {
            if (resultType === "Celsius") {
                resultValue = inputValue / 0.9;
            } else if (resultType === "Kelvin") {
                resultValue = (inputValue / 0.9) + 273.15;
            } else if (resultType === "Fahrenheit") {
                resultValue = (inputValue / 0.9) * 9/5 + 32;
            } else if (resultType === "Infrared thermometer") {
                resultValue = inputValue;
            }
        }

        tempResult.value = isNaN(resultValue) ? "Invalid input" : resultValue.toFixed(5);
    }

    tempInput.addEventListener("input", convertTemperature);
    tempInputType.addEventListener("change", convertTemperature);
    tempResultType.addEventListener("change", convertTemperature);
});
