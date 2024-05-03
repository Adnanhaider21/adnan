//Find Repeated element
let num = ["one", "two", "one", "nine", "one", "four"];
let repeatedElements = [];

for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] === num[j] && !repeatedElements.includes(num[i])) {
            repeatedElements.push(num[i]);
            break; // Once a repeated element is found, move to the next element
        }
    }
}
console.log(repeatedElements)
 