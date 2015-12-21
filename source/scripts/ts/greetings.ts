interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person : Person) {
	var a = 5;
	var b = 10;
    return `Hello, + ${person.firstname } ${person.lastname}  a+b=${a+b}`;
}

var user = {firstname: "Ray", lastname: "Lee"};

document.body.innerHTML = greeter(user);
