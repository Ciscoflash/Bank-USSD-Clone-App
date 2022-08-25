const ussd = "*966#";
let acc = prompt("Welcome to my USSD App \n please enter the Zenith ussd code" , "*966#")
if(acc === ussd){
let comt= prompt("Welcome to USSD Banking Please note that a N6.98 network \n charge will be applied to your bank account for banking services on this channel. \n 1. Proceed \n 2. Cancel")

if(comt === "1"){
  let compt1 = prompt("Eazybanking \n 1> Transfer \n 2> Airtime \n 3> Data \n 4> bills Payment \n 5> Check Balance \n 6> Open Account \n 7> Card Requests \n 8> Register \n 9>Next ")

  if(compt1 === "1"){
     let send1 = prompt("1> Send to Account Number \n 2> Pay with PhoneNumber \n 3> Send to Merchant ID")

      if(send1 === "1"){
         let amount = prompt("Easybanking \n Enter Amount")

         if(amount){
           let ac_num =  prompt("Easybanking \n Enter Account Number")

            if( ac_num){
               let pin = prompt("Easybanking \n Please Enter PIN")

               if(pin){
                 let confirm1 = prompt("Easybanking \n Press 1 to confirm transaction \n 1> Confirm \n 2> Cancel")

                 if(confirm1 === "1"){
                  alert("Transaction Successful", "Success")
                  prompt("Easybanking \n Do you want to perform another Transaction?")
                 }
               }
            }
         }
      }
      else if(send1 === "2"){
        let send2 = prompt("Easybanking \n Enter PhoneNumber")

        if(send2){
         let amount2 = prompt("Easybanking \n Enter Amount")

         if(amount2){
           let pin2 = prompt("Easybanking \n Enter PIN")

           if(pin2){
           let confirm2 = prompt("Easybanking \n Press 1 to confirm Transaction \n 1> Confirm \n 2> Cancel")

            if(confirm2 === "1"){
               alert("Easybanking \n Transaction successful")
               prompt("Easybanking \n Do you want to perform another Transaction?")
            }
            else{
               alert("Easybanking \n Thank You for Banking with us")
            }
           }
         }
        }
      }
      else if(send1 === "3"){
         prompt("Easybanking \n Enter Marchant ID")
         let send3 = prompt("Easybanking \n Enter Amount")
      }
  }
  else if(compt1 === "2"){
    let recharge = prompt("Easybanking \n Recharge For Who? \n 1> Self \n 2> Third Party")
      if(recharge === "1"){
        let amount3 = prompt("Easybanking \n Enter Recharge amount")

         if(amount3){
          let pin3 = prompt("Easybanking \n Enter PIN")

            if(pin3){
              let confirm3 = prompt("Easybanking \n Confirm Transaction \n 1> Confirm \n 2> Cancel")

               if(confirm3 === "1"){
                  alert("Recharge Successful")
               }
            }
         }
      }
      else if(recharge==="2"){
        let PhoneNumber2 = prompt("Easybanking \n Enter PhoneNumber")

         if(PhoneNumber2){
           let amount4 = prompt("Easybanking \n Enter Recharge amount")

           if(amount4){
          let pin4 = prompt("Easybanking \n Enter PIN")

            if(pin4){
            let confirm4 = prompt("Easybanking \n Confirm Transaction \n 1> Confirm 2> cancel")

               if(confirm4 === "1"){
                  alert("Easybanking \n Transaction Successful")
               }
            }
           } 
         }
      }
  }
}
else{
   alert("Thanks You for banking with us")
}
}
else{
   acc = prompt("Enter a Valid USSD Code")
}
