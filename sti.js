// Solo STI Project

// Constructor
function Employee(name, empNum, anSal, rating) {
  this.firstName = name;
  this.employeeNumber = parseInt(empNum);
  this.annualSalary = parseInt(anSal);
  this.recentPerformanceRating = rating;
}

// Create employee objects
var atticus = new Employee ("Atticus", "2405", "47000", 3);
var jem = new Employee ("Jem", "62347", "63500", 4);
var boo = new Employee ("Boo", "11435", "54000", 3);
var scout = new Employee ("Scout", "6243", "74750", 5);

// Create employee list
var employees = [atticus, jem, boo, scout];

// Loop through employee list
for(var i = 0; i < employees.length; i++) {
  getBonus(employees[i]);
}

console.log(employees);

// Functions
function getBonus(employee) {
  var startSal = employee.annualSalary;
  var perBonus = 0;

  switch(employee.recentPerformanceRating) {
   case 3:
     perBonus = 0.04;
     break;

   case 4:
     perBonus = 0.06;
     break;

   case 5:
     perBonus = 0.1;
     break;

   default:
     perBonus = 0;
     break;
  }

  if(employee.employeeNumber.length == 4) {
   perBonus += .05;
  }

  if (getAdjustedSal(startSal, perBonus) > 65000) {
   perBonus -= .01;
  }

  if (perBonus > 0.13) {
   perBonus = 0.13;
  }

  employee.bonusPercentage = (perBonus * 100);
  employee.bonusAmount = getBonusAmount(startSal, perBonus);
  employee.adjustedSalary = getAdjustedSal(startSal, perBonus);

}

function getBonusAmount(salary, bonusPercentage) {
  return Math.round(bonusPercentage * salary);
}

function getAdjustedSal(salary, bonusPercentage) {
  return salary + getBonusAmount(salary, bonusPercentage);
}

function dollarDisplay(number) {
  number = "$" + number.toLocaleString();
}

function percentageDisplay(number) {
  number += '%';
}
