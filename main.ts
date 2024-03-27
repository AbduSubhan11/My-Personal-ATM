#! /usr/bin/env node
import inquirer from  "inquirer";

let myBalance:number = 1000;                  
let myPin:number = 1234;

let firstMessage = await inquirer.prompt(
	[
		{ 
			name :"First", 
			message : "Enter Your Pin",
 			type : "number"
		}
	]
);
if (firstMessage.First === myPin){
    console.log(`Welcome to your ATM`);
    let answer = await inquirer.prompt(
        [
            {
                name :"option",
                message : "What do you want to do?",
                type : "list",
                choices : ["Withdraw", "Check Balance","Fast Cash"]
            }
        ]

    )
    if(answer.option === "Withdraw"){
               
        let amountAns = await inquirer.prompt(
        [
            {
                name :"UserAmount",
                message : "Please type the amount that you want to Withdraw",
                type:"number",
            }
        ]
        )
        myBalance -= amountAns.UserAmount
        console.log(`This is your current balance ${myBalance}`)
        
        if(answer.option <= amountAns.UserAmount){
            console.log("You have insufficient balance please recharge your account")
        }
       
    }
    if(answer.option ==="Check Balance"){
        console.log(myBalance)
    }
    if(answer.option === "Fast Cash"){
        let Fast = await inquirer.prompt(
            [
                {
                    name : "fastRs",
                    message:"Please Select a option",
                    type: "list",
                    choices:[1000,2000,3000,4000]
                }
            ]
        )
        if(Fast.fastRs === 1000 && Fast.fastRs <= myBalance){
            myBalance -= Fast.fastRs
            console.log(`Your current amount is ${myBalance}`)
            
        }
        else if(Fast.fastRs === 2000 && Fast.fastRs <= myBalance){
            myBalance -= Fast.fastRs
            console.log(`Your current amount is ${myBalance}`)
            
        }
        else if(Fast.fastRs === 3000 && Fast.fastRs <= myBalance){
            myBalance -= Fast.fastRs
            console.log(`Your current amount is ${myBalance}`)
            
        }
        else if(Fast.fastRs === 4000 && Fast.fastRs <= myBalance){
            myBalance -= Fast.fastRs
            console.log(`Your current amount is ${myBalance}`)
        }else{
            console.log(`You have insufficient balance please recharge your account `)
        }

        
    }
}else{
    console.log(`Incorrect pin`);
}