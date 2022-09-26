function EmployeeDetails() {
    var name= "Karan";
    var age = 22;
    var designation = "Developer";
    var salary = 20000;
    console.log(salary);
  
    calculateBonus = function(amount){
      return salary = salary + amount;
    };
  
    return {
      name: name,
      age: age,
      designation: designation,
      salary:salary,
      calculateBonus:calculateBonus
    }
  };
 // console.log(salary);
  var newEmployee = EmployeeDetails()
  
  var sal = newEmployee.calculateBonus(1000);
 console.log("total salary is:"+sal);