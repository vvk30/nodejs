var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Vishal',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt('yo', 1, 2);