// complete this js code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name ${this.name}, I am ${this.age} years old.`);
	}
		
}

function Employee {	
	constructor(name,age,jobTitle)
	{
		super(name,age);
		this.jobTitle = jobTitile;
	}
	jobGreet(){console.log(`Hello, my name is  ${this.name}, I am ${this.age} years old.`)
			  }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
