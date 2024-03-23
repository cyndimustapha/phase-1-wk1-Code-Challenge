function calculatePayee(basicSalary) {
  let payee;

  if (basicSalary <= 24000) {
    payee = (10 / 100) * basicSalary;
  } 
  else if (basicSalary > 24000 && basicSalary <= 32333) {
    payee = (25 / 100) * basicSalary;
  } 
  else if (basicSalary > 32333 && basicSalary <= 500000) {
    payee = (30 / 100) * basicSalary;
  } 
  else if (basicSalary > 500000 && basicSalary <= 800000) {
    payee = (32.5 / 100) * basicSalary;
  } 
  else {
    payee = (35 / 100) * basicSalary;
  }

  return payee;
}

function calculateNhifDeductions(basicSalary) {
  let nhif;

  if (basicSalary <= 5999) {
    nhif = 150;
  } 
  else if (basicSalary >= 6000 && basicSalary <= 7999) {
    nhif = 300;
  } 
  else if (basicSalary >= 8000 && basicSalary <= 11999) {
    nhif = 400;
  } 
  else if (basicSalary >= 12000 && basicSalary <= 14999) {
    nhif = 500;
  } 
  else if (basicSalary >= 15000 && basicSalary <= 19999) {
    nhif = 600;
  } 
  else if (basicSalary >= 20000 && basicSalary <= 24999) {
    nhif = 750;
  } 
  else if (basicSalary >= 25000 && basicSalary <= 29999) {
    nhif = 850;
  } 
  else if (basicSalary >= 30000 && basicSalary <= 34999) {
    nhif = 900;
  } 
  else if (basicSalary >= 35000 && basicSalary <= 39999) {
    nhif = 950;
  } 
  else if (basicSalary >= 40000 && basicSalary <= 44999) {
    nhif = 1000;
  } 
  else if (basicSalary >= 45000 && basicSalary <= 49999) {
    nhif = 1100;
  } 
  else if (basicSalary >= 50000 && basicSalary <= 59999) {
    nhif = 1200;
  } 
  else if (basicSalary >= 60000 && basicSalary <= 69999) {
    nhif = 1300;
  } 
  else if (basicSalary >= 70000 && basicSalary <= 79999) {
    nhif = 1400;
  } 
  else if (basicSalary >= 80000 && basicSalary <= 89999) {
    nhif = 1500;
  } 
  else if (basicSalary >= 90000 && basicSalary <= 99999) {
    nhif = 1600;
  } 
  else {
    nhif = 1700;
  }

  return nhif;
}

function calculateNssfDeductions(basicSalary) {
  let nssf = (6/100) * basicSalary;

  return nssf;

}

function calculateNetSalary(basicSalary, benefits){

    let grossSalary = basicSalary + benefits;

    let payee = calculatePayee(basicSalary);
    let nhif = calculateNhifDeductions(basicSalary);
    let nssf = calculateNssfDeductions(basicSalary);


    let netSalary = grossSalary - (payee + nhif + nssf);

    return {grossSalary, netSalary, payee, nhif, nssf};
    
}

console.log(calculateNetSalary(40000,20000));