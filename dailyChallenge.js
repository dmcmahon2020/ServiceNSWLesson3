// Create a function that takes an 2 arguments, an array of objects and a
// string character (eg. "a" or "b", etc.). The function should return all
// the objects in the array where the property name of that object contains the string character.

let people = [
    {
        name: "Damon",
        age: 28
    },
    {
        name: "Brooke",
        age: 30
    },
    {
        name: "Emily",
        age: 28
    },
    {
        name: "Michael",
        age: 23
    },
    {
        name: "Courtney",
        age: 23
    }
];

function searchByChar(array, searchTerm) {
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        let found = false;
        for(let i = 0; i < element.name.length; i++){
            let letter = element.name[i];
            if(letter.toLowerCase() == searchTerm.toLowerCase()){
                found = true;
            }
        }

        if(found) {
            resultArr.push(element);
        }
    }
    return resultArr;
}

console.log(searchByChar(people, "A"));