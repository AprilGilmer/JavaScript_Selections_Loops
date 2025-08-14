//Exercise 1
//for (let i = 0; i < 100; i++)
/*
{
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}
*/

// Exercise 2
/*for (let i = 1; i < 100; i++) {
  console.log(i);

  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else {
    if (i % 3 == 0) {
      console.log(i, "FIZZ");
    }

    if (i % 5 == 0) {
      console.log(i, "BUZZ");
    }
  }
}
  */

//Exercise 3 Repeat with While & Do/While
/*let i = 1;

while (i < 100){
if (i % 2 !== 0)
{
console.log(i);
}
i++;
}
*/

/*let x = 1;

do {
  if (x % 2 !== 0)
  {
    console.log(x)
  }
 x++;

} while (x < 100);
*/

/* let i = 1;

while (i < 100){
  let output = "";

  if (i % 3 == 0) {
    output += "FIZZ";
  }

  if (i % 5 == 0) {
    output += "BUZZ";
  }

  console.log(`${i} ${output}`);

  i++;
}
  */

/*let x = 1;

do {
  
  let output = "";

  if (x % 3 == 0) {
    output += "FIZZ";
  }

  if (x % 5 == 0) {
    output += "BUZZ";
  }

  console.log(`${x} ${output}`);

  x++;
} while (x <= 100);
 */

//Exercise 4:

/*let numberToFind = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i <= n; i++) {
  if (i == numberToFind) {
    console.log(`Found ${numberToFind}!`);
    break;
  }
  if (i == n) {
    console.log(`Did not find ${numberToFind} within 1-${n}..`);
  }
}
  */

//Bonus Exercise 5:

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <= end; i++) {
  let output = "";

  if (i % fizzDivisor == 0) {
    output += "FIZZ";
  }
  if (i % buzzDivisor == 0) {
    output += "BUZZ";
  }
  console.log(`${i} ${output}`);
}
console.log(fizzDivisor, buzzDivisor);
