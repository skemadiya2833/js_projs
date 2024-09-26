// Create a Person module using closures that encapsulates private variables and methods.
// The module should have methods to get and set the person's name and age.

function person() {
    let name = "DEFAULT", age = 10;
    return {
        getName: () => { return name; },
        getAge: () => { return age; },
        setAge: (value) => { age = value; },
        setName: (val) => { name = val; },
        toString: () => { return "Name = " + name + " Age = " + age; }
    };
}

const personObj = person();
console.log(personObj.getName());
console.log(personObj.getAge());
console.log(personObj.toString());
personObj.setName("Sunil Kemadiya");
personObj.setAge(21);
console.log(personObj.toString());

