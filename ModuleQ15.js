class Person{
    #name = "Deault Value" ;
    #age = 10 ;
    constructor(name, age){
        this.#name = name ;
        this.#age = age ;
    }

    #getName(){
        return { name: this.#name };
    }
    
    #getAge(){
        return { age: this.#age };
    }
    setName(name){
        this.#name = name ;
    }
    
    setAge(age){
        this.#age = age ;
    }

    #getObj(){
        return { name: this.#name, age: this.#age };
    }

    getAgeFromObject () {
        return this.#getAge() ;
    }

    getNameFromObject () {
        return this.#getName() ;
    }

    getObject(){
        return this.#getObj() ;
    }
}
module.exports =  Person 