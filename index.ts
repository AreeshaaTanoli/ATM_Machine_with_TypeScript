import inquirer from "inquirer"

//  initialized user balacne and pin code....
let myBalance  = 6000;
let myPin = 1999;


//  print the welcome message...
console.log("Welcome to code with Areesha-ATM-Machine ");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin", 
        type: "number",
        message: "Enter your pin code:"
    }
])


if (pinAnswer.pin === myPin){
 console.log("Your pin is correct, Login successfully!");
//  console.log(`Current Account Balance is ${myBalance}`);

 let operationAns = await inquirer.prompt([
    {
          name:"operation",
          type:"list",
          message:"Select an operation",
          choices:["withdraw amount", "check balance"]
    }
 ])

 if (operationAns.operation === "withdraw amount" )
    {
    let amountAns = await inquirer.prompt([
        {
          name: "amount",
          type:"number",
          message:"Enter the amount to withdraw: ",

        }
    ])

    if (amountAns.amount > myBalance){
    console.log("Insufficient Balance");
    }
    else 
    {
        myBalance -= amountAns.amount;
        console.log(` ${amountAns.amount } Withdraw successfully`);
        console.log(`Your Remaining Balance is: ${myBalance} `);
    }}

        else if (operationAns.operation === "check balance") 
    {
     console.log(`Your Account Balance is: ${myBalance}`);
    }
}
    else 
    {
        console.log("Your Pin is incorrect, Try Again!")
    }


 


