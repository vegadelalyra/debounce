let student = {
	details: function () {
		return this.name + this.class;
	}
}
let stud1 = {
	name: "Dinesh",
	class: "11th",
}
let stud2 = {
	name: "Vaibhav",
	class: "11th",
}

let x = student.details.apply(stud2);
console.log(x);
