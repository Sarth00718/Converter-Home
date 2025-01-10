document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const inputType = document.getElementById("inputType");
    const result = document.getElementById("result");
    const resultType = document.getElementById("resultType");

    const conversionRates = {
        "Second": 1,
        "Milisecond": 1000,     
        "Microsecond": 1000000,  
        "Nanosecond": 1000000000,
        "Picosecond": 1000000000000, 
        "Minute": 1/60,          
        "Hour": 1/3600,         
        "Day": 1/86400,          
        "Week": 1/604800,        
        "AMonth": 1/2628000,     
        "Year": 1/31536000      
    };
    
    function convertTime() {
        const inputValue = parseFloat(input.value);
        const inputUnit = inputType.value;
        const resultUnit = resultType.value;
        const resultValue = inputValue * conversionRates[resultUnit] / conversionRates[inputUnit];
        result.value = isNaN(resultValue) ? "Invalid input" : resultValue.toFixed(8);
    }

    input.addEventListener("input", convertTime);
    inputType.addEventListener("change", convertTime);
    resultType.addEventListener("change", convertTime);
});
