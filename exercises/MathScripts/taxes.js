var salary, taxrate, withhold;
taxrate = .23;

salary = 200000;

withhold = Math.round(taxrate * salary);

console.log(withhold);