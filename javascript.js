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
const testScores = {
    keenam: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    elvira: 97
}
for (let person in testScores){
    console.log(`${person} scored ${testScores[person]}`);
}