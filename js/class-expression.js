let Employee = class {

    constructor(id,name,salary,dept) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    get Id() { return this.id; }
    set Id(id) { this.id = id; }

    get Name() { return this.name; }
    set Name(name) { this.name = name; }

    fetchEmployee() {
        console.log(`The employee - ${this.id} - ${this.name} with salary ${this.salary}`);
    }
}

let employeeOne = new Employee('E23123',"John Smith", 3434534.54, "Engineering");
employeeOne.fetchEmployee();