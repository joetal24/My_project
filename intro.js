
const profile = {
    name: "Joel",
    age: 23,
    favorite_programming_language: "Python"
};


function introduce(person) {
    return `Hey, my name is ${person.name}, I'm ${person.age} years old and My favorite language to code is ${person.favorite_programming_language}.`;
}

const message = introduce(profile);

console.log(message);
