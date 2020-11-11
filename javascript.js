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


const password = prompt ("please enter a new password")
//password must be 6+ characters
if(password.length >= 6){
    //password cannot include space
    if (password.indexOf(" ") === -1 ){
        console.log("Valid password")
    }
    else {
        console.log("password cannot contain spaces")
    }
}
else {
    console.log("Password too short! Must be 6+ characters")
}
