var names = ["John", "Jake", "Alice", "Michael", "Jennifer", "Bob"];

function sayHelloOrGoodbye(names) {
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase(); // Get the first letter of the name

        if (firstLetter === 'j') {
            console.log("Goodbye " + names[i]); 
        } else {
            console.log("Hello " + names[i]); 
        }
    }
}

sayHelloOrGoodbye(names);
