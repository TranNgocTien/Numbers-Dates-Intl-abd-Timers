 console.log(Math.trunc(0.1+0.2));

//Conversion
console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px',10));
console.log(Number.parseInt('e23',10));
console.log(Number.parseFloat('2.5rem'));

//not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23/0));

//Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(23/0));


console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.max(5,18,23,11,2));
console.log(Math.max(5,18,'23',11,2));
console.log(Math.max(5,18,'23px',11,2));

console.log(Math.min(5,18,23,11,2));

console.log(Math.PI * Number.parseFloat('10px')**2);
console.log(Math.trunc (Math.random() * 6) + 1);


//0...1 -> 0...(max - min) -> min...max 
const randomInt=(min, max)=> Math.trunc(Math.random()*(max-min)+1)+min;
console.log(randomInt(10,20));

//Rouding intergers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));


//Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));

//Remainder Operator

console.log(5%2);


console.log(8%3);
console.log(8/3);

const isEven= n =>n%2===0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));



// Numeric Seperators

const diameter=287_460_000_000;
console.log(diameter);
const priceCents =345_99;
console.log(priceCents);

const transferFee1=15_00;
const transferFee2=1_500;


//Working with BigInt

console.log(2**53-1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2**53+1);

console.log(1000n+1000n);
console.log(15645678612324864651n*10000000n);

const huge=2232535123154556456n;
const num=23;
console.log(huge+BigInt(num));

console.log(20n>15);
console.log(20n === 20);
console.log(typeof 20n);

//Divisions
console.log(10n / 3n);
console.log(10/3)

