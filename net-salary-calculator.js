function calculateNetSalary(basicSalary, benefits) {
     
    // Fetch NHIF and NSSF rates 
    const nhifRate = 0.05;  // Assuming 5%
    const nssfRate = 0.06;  // Assuming 6% 
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate taxable income (gross salary minus personal relief)
    const personalRelief = 2400; // Assuming Ksh 2,400 personal relief
    const taxableIncome = Math.max(grossSalary - personalRelief);
  
    // Calculate PAYE based on tax brackets
    if (taxableIncome <= 18250) {
      tax = 0;
    } else if (taxableIncome <= 24000) {
      tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
      tax = taxableIncome * 0.25;
    } else if (taxableIncome <= 500000) {
        tax = taxableIncome * 0.3;
    } else if (taxableIncome <= 800000){
        tax = taxableIncome * 0.325;
    } else if (taxableIncome > 800000){
        tax = taxableIncome * 0.35;
    } else {
      return 'invalid input';
    }
  
    // Calculate NHIF deductions (capped at Kshs. 1700)
    const nhifDeduction = Math.min(grossSalary * nhifRate, 1700);
  
    // Calculate NSSF deductions (capped at Kshs. 417.60)
    const nssfDeduction = Math.min(grossSalary * nssfRate, 417.60);
  
    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  
     // Print the results
    console.log("Gross Salary: Ksh", grossSalary);
    console.log("PAYE: Ksh", tax);
    console.log("NHIF Deductions: Ksh", nhifDeduction);
    console.log("NSSF Deductions: Ksh", nssfDeduction);
    console.log("Net Salary: Ksh", netSalary);

  }
  
  // Get user input
  const prompt = require('prompt-sync')({ sigint: true });
  const basicSalary = parseFloat(prompt("Enter basic salary: "));
  const benefits = parseFloat(prompt("Enter benefits: "));
  
  // Calculate and print net salary
  calculateNetSalary(basicSalary, benefits);
 