let Transaction = document.getElementById("Transaction");
let AcNum = document.getElementById("AcNum");
let Amount = document.getElementById("Amount");
let Pin = document.getElementById("Pin")
let btnProceed = document.getElementById("btnProceed");
let AcError = document.getElementById("AcError");
let AmountError = document.getElementById("AmountError");
let PinError = document.getElementById("PinError");
let selectError = document.getElementById("selectError")
let AcTitle = document.getElementById("AcTitle")
let AmountTitle = document.getElementById("AmountTitle")
let PinTitle = document.getElementById("PinTitle")
let Destination = document.getElementById("Destination")
let Transact
let Recharge
let AcNumber
let amount
let pin
let destination



Transaction.addEventListener("change", function(){
    AirtimeRecharge()
})
btnProceed.addEventListener("click", function () {
    validateData()
})


function AcceptValues() {
 Transact = Transaction.value
 AcNumber = AcNum.value
 amount = Amount.value
 pin = Pin.value
 destination = Destination.value
 Calc()
}

function validateData(){
    if(Transaction.value == ""){
      selectError.innerHTML = "Please Select any option above"
      selectError.style="color:red;"
    }
    else{
        selectError.innerHTML=""
    }
    if(AcNum.value ==""){
        AcError.innerHTML = "account number required"
        AcError.style = "color:red"
    }
    else{
        AcError.innerHTML = ""
    }
    if(Amount.value == ""){
        AmountError.innerHTML = "amount required"
        AmountError.style = "color:red"
    }
    else{
        AmountError.innerHTML = ""
    }
    if(Pin.value ==""){
        PinError.innerHTML="enter a valid pin"
        PinError.style = "color:red;"
    }
    else{
        PinError.innerHTML = ""
    }
    if(Transaction.value !="" && AcNum.value !="" && Amount.value !="" && Pin.value !=""){
        AcceptValues()
    }
}

// This is  to confirm the Accepted Values from the form

function Calc(){
    if(Transact == "transfer"){
       PinError.innerHTML ="Transfer Successful to " + AcNumber + " " + destination 
       PinError.style="color:green"
       clear()
    }
    // else{
    //     clear()
    // }
    if(Transact == "airtime"){
        PinError.innerHTML ="Airtime Transfer of " + amount + " to " + AcNumber + " was Succesful"
        PinError.style="color:green;"
        clear()
    }
    // else{
    //     clear();
    // }
}

// Rhis would validate for the transfer
function AirtimeRecharge(){
    if(Transaction.value =="airtime"){
        AcTitle.innerHTML = "Enter Phone Number:"
    }
    else{
        AcTitle.innerHTML = "Enter Account Number:"
    }
    if(Transaction.value =="airtime" ){
        AmountTitle.innerHTML = "Enter Recharge Amount:"
    }
    else{
        AmountTitle.innerHTML = "Enter Amount:"
    }
    if(Transaction.value =="airtime"){
        Destination.innerHTML= ""
    }
    
    // if(Transaction.value =="airtime"  && AcNum.value ==""){
    //     AcError.innerHTML = "enter phone number"
    //     this.style="color:red"
    // }
    // else{
    //     AcNumm.innerHTML = ""
    // }
}

// This is basicially to Clear after Sending 
function clear(){
    Transaction.value = ""
    AcNum.value = ""
    Amount.value = ""
    Pin.value= ""
}