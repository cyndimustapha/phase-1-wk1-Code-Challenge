// Function to calculate PAYE given basic salary
function calculatePayee(basicSalary) {
  let paye;

  if (basicSalary <= 24000) {
    paye = (10 / 100) * basicSalary;
  } 
  else if (basicSalary > 24000 && basicSalary <= 32333) {
    paye = (25 / 100) * basicSalary;
  } 
  else if (basicSalary > 32333 && basicSalary <= 500000) {
    paye = (30 / 100) * basicSalary;
  } 
  else if (basicSalary > 500000 && basicSalary <= 800000) {
    paye = (32.5 / 100) * basicSalary;
  } 
  else {
    paye = (35 / 100) * basicSalary;
  }

  return paye;
}

// Function to calculate NHIF deductions given basic salary
function calculateNhifDeductions(basicSalary) {
  let nhif;

  switch(true) {
    case (basicSalary <= 5999):
      nhif = 150;
      break;
    case (basicSalary >= 6000 && basicSalary <= 7999):
      nhif = 300;
      break;
    case (basicSalary >= 8000 && basicSalary <= 11999):
      nhif = 400;
      break;
    case (basicSalary >= 12000 && basicSalary <= 14999):
      nhif = 500;
      break;
    case (basicSalary >= 15000 && basicSalary <= 19999):
      nhif = 600;
      break;
    case (basicSalary >= 20000 && basicSalary <= 24999):
      nhif = 750;
      break;
    case (basicSalary >= 25000 && basicSalary <= 29999):
      nhif = 850;
      break;
    case (basicSalary >= 30000 && basicSalary <= 34999):
      nhif = 900;
      break;
    case (basicSalary >= 35000 && basicSalary <= 39999):
      nhif = 950;
      break;
    case (basicSalary >= 40000 && basicSalary <= 44999):
      nhif = 1000;
      break;
    case (basicSalary >= 45000 && basicSalary <= 49999):
      nhif = 1100;
      break;
    case (basicSalary >= 50000 && basicSalary <= 59999):
      nhif = 1200;
      break;
    case (basicSalary >= 60000 && basicSalary <= 69999):
      nhif = 1300;
      break;
    case (basicSalary >= 70000 && basicSalary <= 79999):
      nhif = 1400;
      break;
    case (basicSalary >= 80000 && basicSalary <= 89999):
      nhif = 1500;
      break;
    case (basicSalary >= 90000 && basicSalary <= 99999):
      nhif = 1600;
      break;
    default:
      nhif = 1700;
  }

  return nhif;
}

// Function to calculate NSSF deductions given basic salary
function calculateNssfDeductions(basicSalary) {
  let nssf = (6/100) * basicSalary;

  return nssf;

}

// Function to calculate net salary given basic salary and benefits
function calculateNetSalary(basicSalary, benefits){

    let grossSalary = basicSalary + benefits;

    let paye = calculatePayee(basicSalary);
    let nhif = calculateNhifDeductions(basicSalary);
    let nssf = calculateNssfDeductions(basicSalary);


    let netSalary = grossSalary - (paye + nhif + nssf);

    return {grossSalary, netSalary, paye, nhif, nssf};
    
}

//test my functions
console.log(calculateNetSalary(80000,20000));