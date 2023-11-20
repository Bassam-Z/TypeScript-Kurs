"use strict";
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
// function addAll(...nums: number[]) {
//     let result = 0;
//     // for(let i = 0; i < nums.length; i ++) {
//     //     result+=nums[i];
//     // }
//     nums.forEach((num) => result += num);
//     return result;
// }
// // console.log(addAll(10, 20, 30, 100));
// // console.log(addAll(10, 20, 30, 100.5, true));
// console.log(addAll(10, 20, 30, 100.5,10, + true));
// ************************************************************
/*
    Function
        - Anonymous Function
        - Arrow Function
*/
// const add = function(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(add(10, 20));
// const addWithArrow = (num1:number, num2:number) : number => num1 + num2;
// console.log(addWithArrow(10, 20));
// ************************************************************
/*
    Data Types
    - Type Alias
*/
// type st = string;
// let theName: st = "Bassam";
// theName = "Ali";
// // theName = 12;
// type standnum = string | number;
// let all: standnum = 10;
// all = 100;
// all = "Arwa";
// // all = true;
// ************************************************************
/*
    Data Types
    - Advanced Type Alias
*/
// type Buttons = {
//     up: String,
//     right: String,
//     down: String,
//     left: String
// }
// type last = Buttons & {
//     x: boolean
// }
// // function getActions(btns: Buttons) {
// //     console.log(`Action For Button Up is ${btns.up}`);
// //     console.log(`Action For Button Right is ${btns.right}`);
// //     console.log(`Action For Button Down is ${btns.down}`);
// //     console.log(`Action For Button Left is ${btns.left}`);
// // }
// // getActions({up: "Jump", right: "Go right", down:"Go back", left:"Go left"});
// function getActions(btns: last) {
//     console.log(`Action For Button Up is ${btns.up}`);
//     console.log(`Action For Button Right is ${btns.right}`);
//     console.log(`Action For Button Down is ${btns.down}`);
//     console.log(`Action For Button Left is ${btns.left}`);
//     console.log(`Action For All Buttons  ${btns.x}`);
// }
// getActions({up: "Jump", right: "Go right", down:"Go back", left:"Go left", x: true});
// ************************************************************
/*
    Data Types
    - Litral Types
*/
// type nums =  0 | 1 | -1;
// function compare(num1: number, num2: number) : nums {
//     if (num1 === num2) {
//         return 0;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return -1;
//     }
// }
// console.log(compare(20, 20));
// console.log(compare(20, 15));
// console.log(compare(20, 30));
// // let myNumber: nums = 100;
// var myNumber: nums = 0;
// var myNumber: nums = 1;
// var myNumber: nums = -1;
// // var myNumber: nums = 2;
// ************************************************************
/*
    Data Types
    - Tuple
        - Is Another Dort of Array Type
        - We knows Exactly How Many Elements it Contains
        - We knows Ehich Types it Contains at Specific Positions
*/
// let article: [number, string, boolean] = [11, "Title One", true];
// // let article: readonly [number, string, boolean] = [11, "Title One", true];
// // let article: [number, string, boolean] = [11, "Title One", true, 100];// only 3 element
// article = [12, "Title Two", false];
// article.push(100);
// console.log(article);
// const [id, title, published] = article;
// console.log(id);
// console.log(title);
// console.log(published);
// ************************************************************
/*
    Data Types
    - Void
        - Function That Will Return Nothing
        - Function on JavaScript That Not Return A Value will show undefined
        - undefined in not void
    - Never
        - Return Type never Returns
        - The function Doesn't  Have a Normal Copletion
        - It throws An Error or Never Finishes Running at all "Infinite Loop"
*/
// function login(msg: String) : void {
//     console.log(msg);
//     return;
// }
// console.log(login("Im a Message"));
// console.log("login");
// const fail = (msg: string) => {
//     throw new Error(msg);
//     // return 10;
// }
// function alwaysLog (name: String) : never {
//     while(true) {
//         console.log(name);
//     }
//     // return;
// }
// // alwaysLog("Bassam");
// // console.log("login");
// ************************************************************
/*
    Data Types
    - Enums => Enumerations
        - Allow us to Declare a Set of Named Constantes
        - Used for Lagical Frouping Collection of Constants "Collection of Related Values"
        - It Organize Your Code
        - By Default Enums are Number-Based, First Element is 0
        - Theres A Numeric Enums
        - Theres a String-Based Enums
        - Theres Heterogeneous Enums [String + Number]
*/
// const kids = 15;
// const easy = 9;
// const medium = 6;
// const hard = 3;
// enum Level {
//     kids = 15,
//     easy = 9,
//     medium = 6,
//     hard = 3
// }
// let lvl: string = "Esay";
// if(lvl === "Esay") {
//     console.log(`The Level is ${lvl} and Number of Seconds is ${Level.easy}`);
// }
// ************************************************************
/*
    Data Types
    - Enums => Enumerations
        - Enum Can Refer To Other Enum
        - Enum Can Refer To Same Enum
        - Enum Can Have Calculations
        - Enum Can Have Functions
*/
// function setHardSeconds() : number {
//     return 3;
// }
// enum Kids {
//     five = 25,
//     seven = 20,
//     ten = 15
// }
// enum Level {
//     kid = Kids.ten,
//     easy = 9,
//     medium = easy - 3,
//     hard = etHardSeconds()
// }
// let lvl: string = "Esay";
// if(lvl === "Esay") {
//     console.log(`The Level is ${lvl} and Number of Seconds is ${Level.hard}`);
// }
// ************************************************************
/*
    Data Types
    - Type Assertions
        - Sometime Compiler Doesent Know the Information we Do.
        - TypeScript is Not Performing any Check to Make Sure Type Assertion is Valid.
*/
// // let myImg = document.getElementById("my-img") as HTMLImageElement;
// // let myImg = <HTMLImageElement> document.getElementById("my-img");
// // console.log(myImg.src);
// let data: any = "1000";
// console.log((data as string).repeat(3));
// ************************************************************
/*
    Data Types
    - Union and Instersection Types
        - Union Type
            - The |  Symbol is Used To Create The Union => "Or"

        Intersection Type
            - Is a Type That Combines Several Types Into One
            - The & Symbol is Used to Create an Intersection => "And"

        If a Union is an OR, Then an Intersection Is An AND
*/
// // let all: number | string = "100";
// type A = {
//     one: String,
//     two: number,
//     three: boolean
// }
// type B = A & {
//     four: number
// }
// type C = {
//     five: boolean
// }
// type mix = A & C ;
// function getActions(btn: mix) {
//     console.log(`Hallo ${btn.one}`);
//     console.log(`Hallo ${btn.two}`);
//     console.log(`Hallo ${btn.three}`);
//     console.log(`Hallo ${btn.five}`);
// }
// getActions({one:"Strinf", two: 100, three: true, five:true});
// ************************************************************
/*
    Type Annotation With Object
*/
// let mayObjeckt: {
//     // readonly username: string,
//     username: string,
//     id: number,
//     hire?:boolean,
//     skills: {
//         one: string,
//         two: string
//     }
// } = {
//     username: "Bassam",
//     id: 100,
//     // hire: true,
//     skills: {
//         one:"HTML",
//         two:"HTML"
//     }
// };
// mayObjeckt.username = "Ali";
// mayObjeckt.id = 101;
// mayObjeckt.hire = false;
// console.log(mayObjeckt.username);
// console.log(mayObjeckt.id);
// console.log(mayObjeckt.hire);
// console.log(mayObjeckt.skills.one);
// ************************************************************
/*
    Interface
        - Interface Declaration
            - Server Like Types
            - the Interface Describes The Shape of An Object
            - It Defines The Syntax to Follow

            - Use With Object
            - Use With Function
            - Use Read Only and Optional Operator
*/
// interface User {
//     id: number,
//     username: string,
//     country: string,
//     sayHello(): string,
//     sayWelcome(): string,
//     getDouble(num: number): number
// }
// let user: User = {
//     id:100,
//     username: "Ali",
//     country: "Syria",
//     sayHello() {
//         return `Hello ${this.username}`
//     },
//     sayWelcome: () => {
//         return `You are Welcome ${user.username}`
//     },
//     getDouble(nu) {
//         return nu * 2;
//     },
// }
// // console.log(user);
// // function getData (data:User) {
// //     console.log(`ID is: ${data.id}`);
// //     console.log(`User Name is: ${data.username}`);
// //     console.log(`Country is: ${data.country}`);
// // }
// // getData({id:150, username:"Bassam", country:"Deutschland"})
// console.log(user.id);
// console.log(user.sayHello());
// console.log(user.sayWelcome());
// console.log(user.getDouble(100));
// ************************************************************
/*
    Interface
        - ReOpen The Interface and use Cases
*/
// //Homepage
// interface Settings {
//     readonly theme: boolean;
//     font: string;
// }
// // Articles Page
// interface Settings {
//     sidebar: boolean;
// }
// // Contact Page
// interface Settings {
//     external: boolean;
// }
// let userSettings: Settings = {
//     theme: true,
//     font: "open Sans",
//     sidebar: false,
//     external: true
// }
// ************************************************************
/*
    Interface
        - Extending interfaces
*/
// interface User {
//     id: number;
//     username: string;
//     country: string;
// }
// interface Moderator extends User {
//     // id: number;
//     // username: string;
//     // country: string;
//     role: string | number
// }
// interface Admin extends User, Moderator {
//     protect: boolean;
// }
// let user: Admin= {
//     id: 100,
//     username: "Basam",
//     country: "Deutschlan",
//     role: "Admin",
//     protect: true
// }
// console.log(user);
// ************************************************************
/*
    Interface
        - Interface VS Type Aliases
        - Take a Look on HTMLElement Interface
*/
// //Homepage
// type Settings {
//     readonly theme: boolean;
//     font: string;
//     sidebar: boolean;
//     external: boolean;
// }
// // //Homepage
// // interface Settings {
// //     readonly theme: boolean;
// //     font: string;
// // }
// // // Articles Page
// // interface Settings {
// //     sidebar: boolean;
// // }
// // // Contact Page
// // interface Settings {
// //     external: boolean;
// // }
// let userSettings: Settings = {
//     theme: true,
//     font: "open Sans",
//     sidebar: false,
//     external: true
// }
//# sourceMappingURL=main.js.map