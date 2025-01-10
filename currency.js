const input = document.getElementById("input");
const inputType = document.getElementById("inputType");
const result = document.getElementById("result");
const resultType = document.getElementById("resultType");
const api = "https://api.exchangerate-api.com/v4/latest/USD";


let fromCurrency;
let toCurrency;

inputType.addEventListener('change', (event) => {
    fromCurrency = event.target.value;
    convertCurrency();
});

resultType.addEventListener('change', (event) => {
    toCurrency = event.target.value;
    convertCurrency();
});

input.addEventListener('input', (event) => {
    convertCurrency();
});

// convert currency
function convertCurrency() {
    const inputValue = input.value;
    if (fromCurrency && toCurrency && inputValue) {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                const fromRate = data.rates[fromCurrency];
                const toRate = data.rates[toCurrency];
                result.value = ((inputValue / fromRate) * toRate).toFixed(6);
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
    }
};
