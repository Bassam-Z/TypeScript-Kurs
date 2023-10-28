
/*
Type Annotations || Signature
- Indicte The Date Type Of Variables
- Indicate The Data Type Of Function Input/Output
- Objectes, etc.

- Why We Use it ?
- Is it Mandatory ?
- What Happen if we Didnt Use Ir ?

*/ 

// let theName: String = "Bassam" ;
// let thAge: number = 30;
// let hire: boolean = true;
// let all: any = "Ali"

// theName = "TypeScript";
// all = 30;

// console.log(theName);

// ************************************************************

/*
    Type Annotation with Arrays
*/

// let all;
// let all: String | Number | boolean;

// all = "Bassam";
// all = 30;
// all = true;

// // let myFriends = ["Jan", "Timo", "Mousa", 10];
// let myFriends: String[] = ["Jan", "Timo", "Mousa", 10];

// for(let i = 0; i > myFriends.length; i++) {
//     console.log(myFriends[i]);
//     console.log(myFriends[i].repate(3));
// }

// ************************************************************

/*
    Type Annotation with Multidimensional Arrays
*/

// let arrayOne: Number [] = [1, 2, 3, 4, 5]
// let arrayTwo: String [] = ["A", "B","C"]
// let arrayThree:  (String | Number) [] = [1, 2, 3, 4, 5, "A", "B","C"]

// let arrayFour: (String | Number | String[] | boolean []) [] = [1, 2, 3, 4, 5, "A", "B","C", ["D","E"], [true, false]];
// let arrayFive: (String | Number | String[] | boolean) [] = [1, 2, 3, 4, 5, "A", "B","C", ["D","E"], true, false];
// let arraySix = [1, 2, 3, 4, 5, "A", "B","C", ["D","E"], true, false];

// ************************************************************

/*
    Type Annotation with Functions
    - noImplicitAny
    - noImplicitReturns
        - Will check All code path in A Function to Ensure They Return A Value

    noUnusedLocals
        - Report Errors On Unused Local Variables

    noUnusedParameters
        - Report Errprs On Unused Parameters in Functions.
*/

// let showMsg = true;

// function showDeatails(name: string, age: number, salary: number): string {
//     let test = 10;
//     if (showMsg){
//         console.log(`Hallo ${name}, Age is ${age}, Salary Is ${salary}, Test Veriable ${test}`);

//     }
//     // return 1200;
//     return `No Data to Show`
// }

// console.log(showDeatails("Bassam", 30, 5000))

// ************************************************************

/*
    Function
        - Optonal and Default Parameters

        - In JavaScript, Every Parameter is Oprional => "undefind" If You Didnt use it
        - "?" Optional Parameter

*/

// function showDeatails(name: string = "Un", age: number, country?: string ) {
//     return `${name} ${age} ${country}`;
// }

// // console.log(showDeatails("Bassam", 40, "Deutschlan"));
// // console.log(showDeatails("Bassam"));
// console.log(showDeatails("Bassam", 40));

// ************************************************************

/*
    Function
        - Rest Parameter
        -What About Float => All is Under Type Number

*/

function addAll(...nums: number[]) {
    let result = 0;
    // for(let i = 0; i < nums.length; i ++) {
    //     result+=nums[i];
    // }
    nums.forEach((num) => result += num);
    return result;
}

// console.log(addAll(10, 20, 30, 100));
// console.log(addAll(10, 20, 30, 100.5, true));
console.log(addAll(10, 20, 30, 100.5,10, + true));