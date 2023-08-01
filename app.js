console.log("Hello World!\n==========\n");

// Exercise 1 Section==========================================================
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    }   else {
        console.log(i);
    }
} 
      
     
    
// Exercise 2 Section==========================================================
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i, 'FizzBuzz');
    }else{
        if (i % 3 == 0) {
            console.log(i, 'Fizz');
        }else if (i % 5 == 0) {
            console.log(i, 'Buzz');
        }
    }
}
//Exercise 3 Section============================================================
console.log("EXERCISE 3:\n==========\n");

////Ignore Even 'Do-While'
console.log("Ignore Even 'Do-While':\n==========\n");
let y = 1
do {
    if (y % 2 !== 0) {
        console.log(y);
    }
    y++;
}   while(y < 100);

////Ignore Even 'While'=====================================
console.log("Ignore Even 'While':\n==========\n");
let z = 1;
while(z < 100) {
    if(z % 2 !== 0) {
        console.log(z);
    }z++;
}   

////Fizz Buzz 'Do-While'====================================
console.log("Fizz Buzz 'Do-While':\n==========\n");
let x = 1;
do {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log('FizzBuzz');
  } else if (x % 3 === 0) {
    console.log('Fizz');
  } else if (x % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(x);
  }

  x++;
} while (x <= 100);

////Fizz Buzz 'While'=======================================
console.log("Fizz Buzz 'While':\n==========\n");
let number = 1;

while (number <= 100) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
  } else if (number % 3 == 0) {
    console.log('Fizz');
  } else if (number % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(number);
  }

  number++;
}

//Exercise 4 Section============================================================
console.log("EXERCISE 4:\n==========\n");
////Find Value
let value = Math.round(Math.random() * 500);
let b = Math.round(Math.random() * (500 - 100) + 100);

let found = false;

for (let i = 0; i <= b; i++) {
  if (i == value) {
    console.log("Found value!");
    found = true;
    break;
  }
}

if (!found) {
  console.log("Did not find value");
}

//Exercise 5 Section============================================================
console.log("EXERCISE 5:\n==========\n");

////Customized 'FizzBuzz'
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % fizzDivisor == 0) {
    console.log(`${i} Fizz`);
  } else if (i % buzzDivisor == 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
}

