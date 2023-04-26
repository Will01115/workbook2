var intrestRate, years, finalValue, intialValue;

intialValue = 7000;
interestRate = 7;
years = 72/interestRate;
finalValue = intialValue*2;

console.log("At a " + interestRate + "% interest rate, your savings account will be worth $" + finalValue + " in " + years.toFixed(2) + " years");