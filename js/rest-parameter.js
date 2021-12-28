// Rest lets you represent an infinite numbers of argument as an array.
function addNumbers(...numbers) {
    // console.log(numbers);
    return numbers.reduce ((total, num)=>{
        return total = total + num;   // total+=num;
    },0);
}

// rest parameter is used to group individual argument into a single unit.
function myProfile(...info) {
    return info
}
console.log(myProfile("John","Smith","Dell","male",34534545,"John Strret",1990));

//multi parametrised function with rest param
function myInfo(firstName,lastName, ...otherInfo) {
    console.log(`${firstName} ${lastName} `, otherInfo);
}

myInfo("Marry","Johns",true,34345455,55);

// let result1 = addNumbers(10,20,30);
// console.log("Result 1: ",result1);
// console.log("--------------");

// let result2 =addNumbers(10,20,30,40,50,60,70,80,90,100);
// console.log("Result 1: ",result2);