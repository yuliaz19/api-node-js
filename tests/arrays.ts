//create an array of numbers
let userIDs: number[] = [18, 22, 39, 89, 7, 35, 70];

//loop over all elements
for (let i = 0; i < userIDs.length; i++) {
    console.log('element at index ' + i + ' is ' + userIDs[i]);
}

//print the first three elements
for (let i = 0; i < 3; i++) {
    console.log('element at index ' + i + ' is ' + userIDs[i]);
}

//print the elements that > 25
for (let i = 0; i < userIDs.length; i++) {
    console.log('current itteration number '+ i)
    console.log('current array value ' + userIDs[i]);
    if (userIDs[i] > 25) {
        console.log(userIDs[i]);
    }
}