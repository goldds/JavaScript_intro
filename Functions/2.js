function greet() {
    let fName = rlSync.question("What's your first name?");
    let lName = rlSync.question("What's your last name?");
    console.log(`Hello, ${fName} ${lName}`)
}
greet();