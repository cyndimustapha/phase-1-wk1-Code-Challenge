// Importing 'readline' module
const readline = require("readline");

// Creating an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user to input speed
rl.question("Enter driver's speed: ", function (answer) {
  let speed = answer;

  //declaring variables for speed limit and maximum demerit points allowed
  const speedLimit = 70;
  const maxPoints = 12;

  //checking if speed is within speed limit
  if (speed <= speedLimit) {
    console.log("Ok");
  } 
  else {
    //for every 5km/s over the speed limit, one demerit point is given
    //calculating demerit points
    const demeritPoints = (speed - speedLimit) / 5;

    //check if demerit points exceed threshold
    if (demeritPoints <= maxPoints) {
      //if below threshold, print number of points accumulated
      console.log("Points: " + demeritPoints);
    } 
    else {
      //if it exceeds threshold, license gets suspended
      console.log("License suspended");
    }
  }

  //closing readline interface
  rl.close();
});
