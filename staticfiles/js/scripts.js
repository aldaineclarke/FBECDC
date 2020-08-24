"use strict";
// Allow the guardian to use same address as the child instead of retyping.

function checkAddress(){
    let address = document.getElementById("guardianAddress");
    let otherAddress = document.getElementById("otherAddress");
    if (address.checked){
        otherAddress.style.display = "none";
        document.getElementById("guardianAddressLine1").value = document.getElementById("inputAddress").value;
        document.getElementById("guardianAddressLine2").value = document.getElementById("inputAddress2").value;
        document.getElementById("guardianAddressParish").value = document.getElementById("inputParish").value;
        document.getElementById("guardianAddressCity").value = document.getElementById("inputCity").value;
        
    }else{
        otherAddress.style.display = "block";
    }
}
