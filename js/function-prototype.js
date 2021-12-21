function Employee(id,name,dept,salary) {
    this.id= id;
    this.name = name;
    this.dept = dept;
    this.salary = salary;
}

// Add properties (property data) to prototype
Employee.prototype.nationality ="Canadian";
Employee.prototype.address ="ABC street, Xyz Zone";

// Add function within property
Employee.prototype.showId = function() {
    return this.id;
}

Employee.prototype.salIncreament = function() {
    return this.salary += 20000;
}

let empOne = new Employee(10101,"John Smith","Enginerring",345456.546);
empOne.id = 11111;
empOne.name="Tony Stark";
empOne.jobType="Full time";
console.log(empOne);
console.log("--------------");

//access prototype properties
console.log(empOne.nationality);
console.log(empOne.address);
console.log("--------------");
// access prototype function
console.log(empOne.showId());
console.log("After Increament Salary : ",empOne.salIncreament());

let empTwo = new Employee(10102,"Marry Smith","HR",675456.546);
console.log(empTwo);