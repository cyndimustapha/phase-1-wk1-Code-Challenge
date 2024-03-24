// Importing 'readline' module
const readline = require("readline");

// Creating an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user to input basic salary and total benefits
rl.question("Enter basic salary: ", (answer1) => {
  rl.question("Enter total benefits: ", (answer2) => {
    const basicSalary = parseFloat(answer1);
    const benefits = parseFloat(answer2);

    // Function to calculate PAYE given basic salary
    function calculatePayee(basicSalary, benefits) {
      let grossSalary = basicSalary + benefits;

      let paye;

      if (grossSalary <= 24000) {
        paye = (10 / 100) * grossSalary;
      } else if (grossSalary > 24000 && grossSalary <= 32333) {
        paye = (25 / 100) * grossSalary;
      } else if (grossSalary > 32333 && grossSalary <= 500000) {
        paye = (30 / 100) * grossSalary;
      } else if (grossSalary > 500000 && grossSalary <= 800000) {
        paye = (32.5 / 100) * grossSalary;
      } else {
        paye = (35 / 100) * grossSalary;
      }

      return paye;
    }

    // Function to calculate NHIF deductions given basic salary
    function calculateNhifDeductions(basicSalary, benefits) {
      
      let grossSalary = basicSalary + benefits;
      let nhif;

      switch (true) {
        case grossSalary <= 5999:
          nhif = 150;
          break;
        case grossSalary >= 6000 && grossSalary <= 7999:
          nhif = 300;
          break;
        case grossSalary >= 8000 && grossSalary <= 11999:
          nhif = 400;
          break;
        case grossSalary >= 12000 && grossSalary <= 14999:
          nhif = 500;
          break;
        case grossSalary >= 15000 && grossSalary <= 19999:
          nhif = 600;
          break;
        case grossSalary >= 20000 && grossSalary <= 24999:
          nhif = 750;
          break;
        case grossSalary >= 25000 && grossSalary <= 29999:
          nhif = 850;
          break;
        case grossSalary >= 30000 && grossSalary <= 34999:
          nhif = 900;
          break;
        case grossSalary >= 35000 && grossSalary <= 39999:
          nhif = 950;
          break;
        case grossSalary >= 40000 && grossSalary <= 44999:
          nhif = 1000;
          break;
        case grossSalary >= 45000 && grossSalary <= 49999:
          nhif = 1100;
          break;
        case grossSalary >= 50000 && grossSalary <= 59999:
          nhif = 1200;
          break;
        case grossSalary >= 60000 && grossSalary <= 69999:
          nhif = 1300;
          break;
        case grossSalary >= 70000 && grossSalary <= 79999:
          nhif = 1400;
          break;
        case grossSalary >= 80000 && grossSalary <= 89999:
          nhif = 1500;
          break;
        case grossSalary >= 90000 && grossSalary <= 99999:
          nhif = 1600;
          break;
        default:
          nhif = 1700;
      }

      return nhif;
    }

    // Function to calculate NSSF deductions given basic salary
    function calculateNssfDeductions(basicSalary, benefits) {

      let grossSalary = basicSalary + benefits;
      let nssf = (6 / 100) * grossSalary;

      return nssf;
    }

    // Function to calculate net salary given basic salary and benefits
    function calculateNetSalary(basicSalary, benefits) {

      let grossSalary = basicSalary + benefits;
      let paye = calculatePayee(basicSalary, benefits);
      let nhif = calculateNhifDeductions(basicSalary, benefits);
      let nssf = calculateNssfDeductions(basicSalary, benefits);

      let netSalary = grossSalary - (paye + nhif + nssf);

      return {grossSalary, netSalary, paye, nhif, nssf};
    }
    
    //output
    console.log(calculateNetSalary(basicSalary, benefits));

    //closing readline interface
    rl.close();
  });
});


