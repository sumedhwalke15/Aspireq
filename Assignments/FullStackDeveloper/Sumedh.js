    //let a=30
   // let x=++a
    //console.log("x ",x)
   // console.log("a ",a)

   // let y=a++
   // console.log("y ",y)
   // console.log("a ",a)

    //let z=--a
   // console.log("z ",z)
   // console.log("a ",a)

   //control flow
//if, if else,else, switch, ternary

//to execute the conditional statements
//we use the following syntax

//condition ==> Age for the software development job is between 
//18 and 30 years

// let age = 25;

// if(age>=18 && age<=30){
//     console.log("You are eligible for the job");
// }
// else if(age>30){
//     console.log("You are not eligible for the job");
// }
// else{
//     console.log("You are in the age group < 18");
// }


//If Number is even or odd

// let number= 6;

// if (number%2==0){//7%2=1
//     console.log("Number is even");
// }
// else{
//     console.log("Number is odd");
// }

//Homework

//Categorize the grades based on the marks
//90-100 => A+
//80-89 => A
//70-79 => B+   
//60-69 => B
//50-59 => C+
//40-49 => C
//0-39 => F


//Switch case

// switch (expression) {
//     case 1:
//         // code block
//         break;
//     case 2:
//         // code block
//         break;
//     case 3:
//         // code block
//         break;
//     default:
//         // code block
//         break;
// }


// let day= "sunday";

// switch (day) {
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break;
//     default:
//         console.log("Looking forward to the Weekend");
//         break;
// }


//Homework for switch case
//Write a program to check the day of the week using switch case
//Write a program to check the month of the year using switch case

//Ternary Operator ? :
//syntax
//condition ?expressionIf True : expressionIf False

let age = 17;

let eligibility= age>18 ? "You are eligible for driving license": "You are not eligible for driving license";

console.log(eligibility);

//homework for ternary operator
//Write a program to check if a number is positive or negative using ternary operator
//write a program to check if a number is even or odd using ternary operator




let marks = 85;
let grade;


else if (marks>=90){
  console.log ("grade:A+");
}

else if (marks>= 70){

}
} else if (marks >= 60 && marks <= 69) {
  grade = "B";
} else if (marks >= 50 && marks <= 59) {
  grade = "C+";
} else if (marks >= 40 && marks <= 49) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Grade:", grade);
}


