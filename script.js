function calcVAT(){

let sales=
parseFloat(
document.getElementById("sales").value
)||0;

let expenses=
parseFloat(
document.getElementById("expenses").value
)||0;

let outputVat=sales*(15/115);

let inputVat=expenses*(15/115);

let vatDue=
outputVat-inputVat;

document.getElementById(
"results"
).innerHTML=

`
Output VAT:
R${outputVat.toFixed(2)}

<br><br>

Input VAT:
R${inputVat.toFixed(2)}

<br><br>

VAT Payable:
R${vatDue.toFixed(2)}
`;

}



function checkThreshold(){

let t=
parseFloat(
document.getElementById("turnover").value
)||0;

if(t>=1000000){

document.getElementById(
"result"
).innerHTML=
"Compulsory VAT registration may apply.";

}

else{

document.getElementById(
"result"
).innerHTML=
"Below compulsory threshold.";

}

}