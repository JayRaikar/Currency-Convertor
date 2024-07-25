const currencyConverter = (amount, fromCurrency, toCurrency) => {
    const exchangeRates = {
      USD: 1,
      EUR: 0.93,
      GBP: 0.79,
      INR: 83.36,
      // Add more exchange rates as needed
    };
  
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
  
    const convertedAmount = (amount * toRate) / fromRate;
    return convertedAmount.toFixed(2); // Round to 2 decimal places
  };
  
  const amountInput = document.getElementById("amount");
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const convertBtn = document.getElementById("convertBtn");
  const resultSpan = document.querySelector("#result span");
  
  convertBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const convertedAmount = currencyConverter(amount, fromCurrency, toCurrency);
    resultSpan.innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`;
  });