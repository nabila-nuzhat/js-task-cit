let input = 5;
let remainder = input % 2;

// if-else (checking the type of input)----------------------

if(typeof input === typeof 1){
    if(remainder != 0){
        console.log(input,"is Odd");
    }
    else{
        console.log(input,"is Even");
    }
}
else{
    console.log("\"enter a number\"");
}

// ====================================================================
// previous if-else (without checking the type of input)----------------------
// if(remainder != 0){
//     console.log(input, "is Odd");
// }
// else if (remainder === 0){
//     console.log(input, "is Even");
// }



