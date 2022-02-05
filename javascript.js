//  let random = Math.random();
//  if (random < 0.5) {
//      console.log("your number is less than 0.5")
//      console.log(random);
//  }

//  if (random >= 0.5) {
//      console.log("your number is greater than 0.5")
//      console.log(random);
//  }

//  const dayOfWeek = prompt("enter a day").toLowerCase();
//  if (dayOfWeek === "monday") {
//      console.log("UGHHH I HATE MONDAYS!!")
//  }
//  else if (dayOfWeek === "saturday") {
//      console.log("YAY I LOVE SATURDAYS!!")
//  }
//  else if (dayOfWeek === "friday") {
//      console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
//  }
//  else {
//      console.log("MEH")
//  }

//     const password = prompt ("please enter a new password")
//     //password must be 6+ characters
//     if(password.length >= 6){
//         //password cannot include space
//         if (password.indexOf(" ") === -1 ){
//             console.log("Valid password")
//         }
//         else {
//             console.log("password cannot contain spaces")
//         }
//     }
//     else {
//         console.log("Password too short! Must be 6+ characters")
//     }

//  //GUESSING GAME EXERCISE
//
//  let maximum = parseInt(prompt("Enter the maximum number!"));
//  while(!maximum) {
//      maximum = parseInt(prompt("Enter a valid number!"));
//  }
//
//  const targetNum = Math.floor(Math.random() * maximum) + 1;
//
//  let guess = parseInt(prompt("enter your first guess!"));
//  let attempts = 1;
//
//  while (parseInt(guess) !== targetNum) {
//      if (guess === "q") break;
//      attempts++;
//      if (guess > targetNum) {
//          guess = (prompt("Too high! Enter a new guess:"));
//      }   else {
//          guess = (prompt("Too low! Enter a new guess:"))
//      }
//  }
//
//  if(guess === "q"){
//      console.log("OK, YOU QUIT!")
//  } else {
//      console.log(`YOU GOT IT! It took you ${attempts} guesses`)
//  }

//  // Example of "for...of loop"
//  const seatingChart = [
//      ["Kristen","Erik","Namita"],
//      ["Geoffrey","Juanita", "Antonio","Kevin"],
//      ["Yuma","Sakura","Jack","Erika"]
//  ]
//  //instead of
//  for (let i = 0; i < seatingChart.length; i++){
//      const row = seatingChart[i];
//      for (let j = 0; j < row.length; j++) {
//          console.log(row[j])
//      }
//  }
//  // I can use
//  for(let row of seatingChart) {
//      for(let student of row) {
//          console.log(student);
//      }
//  }

// Exaxmple of "for...in loop" - to iterate objects
// const testScores = {
//     keenam: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     elvira: 97
// }
// for (let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//******************************************
// 1. Write a JavaScript program that accept two integers and display the larger.

// let num1 = prompt("please, enter the first number");
// let num2 = prompt("please, enter the second number");
// if (parseInt(num1) > parseInt(num2)) {
//   console.log(`The biggest number is ${num1}`);
// } else if (parseInt(num1) < parseInt(num2)) {
//   console.log(`The biggest number is ${num2}`);
// } else {
//   console.log(`The numbers are equal`);
// }

//******************************************
// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

// let num1 = parseInt(prompt("please, enter the first number"));
// let num2 = parseInt(prompt("please, enter the second number"));
// let num3 = parseInt(prompt("please, enter the third number"));
// const product = num1 * num2 * num3;
// if (product > 0) {
//   alert(`the sign is +`);
// } else if (product < 0) {
//   alert(`the sign is -`);
// } else {
//   alert(`number is 0`);
// }

//******************************************
// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

// let num1 = parseInt(prompt("please, enter the first number"));
// let num2 = parseInt(prompt("please, enter the second number"));
// let num3 = parseInt(prompt("please, enter the third number"));
// let abc = [num1, num2, num3];
// alert(abc.sort());

//******************************************
// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

// let num1 = parseInt(prompt("please, enter the first number"));
// let num2 = parseInt(prompt("please, enter the second number"));
// let num3 = parseInt(prompt("please, enter the third number"));
// let num4 = parseInt(prompt("please, enter the forth number"));
// let num5 = parseInt(prompt("please, enter the fifty number"));

// ***OPCAO 1
// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//   alert(`the bigger number is ${num1}`);
// } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//   alert(`the bigger number is ${num2}`);
// } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//   alert(`the bigger number is ${num3}`);
// } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//   alert(`the bigger number is ${num4}`);
// } else {
//   alert(`the bigger number is ${num5}`);
// }

// ***OPCAO MAIS SIMPLES
// alert(Math.max(num1, num2, num3, num4, num5));

//******************************************
// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 > 0) {
//     console.log(`${i} is odd`);
//   } else {
//     console.log(`${i} is even`);
//   }
// }

//******************************************
// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
// const students = [
//   { name: "David", mark: 80 },
//   { name: "Vinoth", mark: 77 },
//   { name: "Divya", mark: 88 },
//   { name: "Andreia", mark: 95 },
//   { name: "Thomas", mark: 68 },
// ];
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   sum = sum + students[i].mark;
// }
// const average = sum / students.length;
// if (average < 60) {
//   console.log("F");
// } else if (average < 70) {
//   console.log("D");
// } else if (average < 80) {
//   console.log("C");
// } else if (average < 90) {
//   console.log("B");
// } else {
//   console.log("A");
// }

//******************************************
// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

//******************************************

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

//******************************************

// let num1 = Math.floor(Math.random() * 6 + 1);
// let num2 = Math.floor(Math.random() * 6 + 1);

// function isSnakeEyes(num1, num2) {
//   if (num1 === 1 && num2 === 1) {
//     console.log("Snake Eyes!");
//   } else {
//     console.log("Not Snake Eyes!");
//   }
// }

//******************************************
// function multiply(x, y) {
//   return x * y;
// }

//******************************************
// let temperature = Math.floor(Math.random() * 100 + 1);

// function isShortsWeather(temperature) {
//   if (temperature >= 75) {
//     return true;
//   }
//   return false;
// }
//******************************************
// function lastElement(arrayArg) {
//   if (arrayArg.length === 0) {
//     return null;
//   }
//   return arrayArg[arrayArg.length - 1];
// }
//******************************************
// function capitalize(x) {
//   return x.charAt(0).toUpperCase() + x.slice(1);
// }
//******************************************

// function sumArray(x) {
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     sum = sum + x[i];
//   }
//   return sum;
// }
//******************************************
// const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// function returnDay(abc) {
//   if (!daysOfTheWeek[abc - 1]) {
//     return null;
//   } else {
//     return daysOfTheWeek[abc - 1];
//   }
// }
