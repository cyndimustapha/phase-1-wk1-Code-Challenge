// Importing 'readline' module
const readline = require('readline');

// Creating an interface for reading input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
// Prompt the user to input student marks
rl.question("Enter the student's marks: ", function(answer) {
    
      // Parsing the input as a floating-point number
      let studentMarks = parseFloat(answer);


let grade;

//detemining grade
if(studentMarks > 79){

    grade = 'A';

}

else if((studentMarks >= 60) && (studentMarks <= 79)){

    grade = 'B';

}

else if((studentMarks > 49) && (studentMarks <= 59)){

    grade = 'C';
    
}

else if((studentMarks >= 40) && (studentMarks <= 49)){

    grade = 'D';
    
}

else{

    grade = 'E';

}

// Output the grade
console.log("The student's grade is:", grade);

//closing readline interface
rl.close();

});