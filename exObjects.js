let me = {
    name: "Damon",
    age: 28
};

console.log(me.age);
me.age++;
console.log(me.age);

me.hobbies = [

    "Travelling",
    "Netflix",
    "Chills",

];

me.pets = [
    {
        name: "Conan",
        age: 3,
        species: "Cat"
    },{
        name: "Buddy",
        age: 8,
    species: "Dog"  
  }
];

console.log(me.pets);


for (let i = 0; i < me.pets.length; i++) {
    let pets = me.pets[i];
    console.log(`My ${pets.species} is ${pets.age} years old. Their name is ${pets.name}.`);

}