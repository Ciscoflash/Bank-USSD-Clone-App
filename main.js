// Global variable
const ussd = "*966#";
let acc
// Welcome Function
WelcomeMessage();
function WelcomeMessage(){
   acc = prompt("Welcome to my USSD App \n please enter the Zenith ussd code" , "*966#")
   Recharge()
}

function Recharge(){
   let comt
   let compt1
   let send1
   let amount
   let ac_num
   let pin
   let confirm1
   let send3
   let send2
   let amount2
   let pin2
   let confirm2
   let  recharge
   let amount3
   let pin3
   let confirm3
   let PhoneNumber2
   let amount4
   let pin4
   let confirm4
if(acc === ussd){
   comt= prompt("Welcome to USSD Banking Please note that a N6.98 network \n charge will be applied to your bank account for banking services on this channel. \n 1. Proceed \n 2. Cancel")
   
   if(comt === "1"){
     compt1 = prompt("Eazybanking \n 1> Transfer \n 2> Airtime \n 3> Data \n 4> bills Payment \n 5> Check Balance \n 6> Open Account \n 7> Card Requests \n 8> Register \n 9>Next ")
   
     if(compt1 === "1"){
        send1 = prompt("1> Send to Account Number \n 2> Pay with PhoneNumber \n 3> Send to Merchant ID")
   
         if(send1 === "1"){
            amount = prompt("Easybanking \n Enter Amount")
   
            if(amount){
               ac_num =  prompt("Easybanking \n Enter Account Number")
   
               if( ac_num){
                   pin = prompt("Easybanking \n Please Enter PIN")
   
                  if(pin){
                     confirm1 = prompt("Easybanking \n Press 1 to confirm transaction \n 1> Confirm \n 2> Cancel")
   
                    if(confirm1 === "1"){
                     alert("Transaction Successful", "Success")
                     // prompt("Easybanking \n Do you want to perform another Transaction?")
                     newTransaction()
                    }
                  }
               }
            }
         }
         else if(send1 === "2"){
           send2 = prompt("Easybanking \n Enter PhoneNumber")
   
           if(send2){
             amount2 = prompt("Easybanking \n Enter Amount")
   
            if(amount2){
               pin2 = prompt("Easybanking \n Enter PIN")
   
              if(pin2){
              confirm2 = prompt("Easybanking \n Press 1 to confirm Transaction \n 1> Confirm \n 2> Cancel")
   
               if(confirm2 === "1"){
                  alert("Easybanking \n Transaction successful")
                  // prompt("Easybanking \n Do you want to perform another Transaction?")
                  newTransaction()
               }
               else{
                  // alert("Easybanking \n Thank You for Banking with us")
                  Exit()
               }
              }
            }
           }
         }
         else {
            prompt("Easybanking \n Enter Marchant ID")
            send3 = prompt("Easybanking \n Enter Amount")
         }
     }
     else if(compt1 === "2"){
        recharge = prompt("Easybanking \n Recharge For Who? \n 1> Self \n 2> Third Party")
         if(recharge === "1"){
            amount3 = prompt("Easybanking \n Enter Recharge amount")
   
            if(amount3){
              pin3 = prompt("Easybanking \n Enter PIN")
   
               if(pin3){
                  confirm3 = prompt("Easybanking \n Confirm Transaction \n 1> Confirm \n 2> Cancel")
   
                  if(confirm3 === "1"){
                     alert("Recharge Successful")
                     newTransaction()
                  }
               }
            }
         }
         else if(recharge==="2"){
            PhoneNumber2 = prompt("Easybanking \n Enter PhoneNumber")
   
            if(PhoneNumber2){
               amount4 = prompt("Easybanking \n Enter Recharge amount")
   
              if(amount4){
              pin4 = prompt("Easybanking \n Enter PIN")
   
               if(pin4){
                confirm4 = prompt("Easybanking \n Confirm Transaction \n 1> Confirm 2> cancel")
   
                  if(confirm4 === "1"){
                     alert("Easybanking \n Transaction Successful")
                     newTransaction()
                  }
               }
              } 
            }
         }
     }
   }
   else{
      Exit()
   }
   }
   else{
      acc = alert("Wrong USSD Credentials")
      newTransaction()
   }
}

function Exit(){
   if (confirm("Are you sure you want to exit the application?")){
      alert("Thank you for banking with us")
   }
   else{
      WelcomeMessage()
   }
}

function newTransaction(){
   if(confirm("Do you want to perform another Transaction?")){
         WelcomeMessage()
   }
   else{
      Exit()
   }
}
