document.getElementById('btn-deposit').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const depositValue = depositField.value;
    const parseDepostValue = parseFloat(depositValue);
    // console.log(depositValue);

    depositField.value = '';

    if(isNaN(parseDepostValue)){
        alert(`Please Provide A Number`);
        return;
    }

    const depositBalance = document.getElementById('deposit');
    const depositBalanceValue = depositBalance.innerText;
    const parseDepositBalanceValue = parseFloat(depositBalanceValue);
    
    const totalDeposit = parseDepostValue + parseDepositBalanceValue;
    // console.log(depositBalanceValue)
    console.log(totalDeposit);
    
    const balanceTotal = document.getElementById('balance');
    const balanceTotalValue = parseFloat(balanceTotal.innerText);
    const currentBalanceTotal = balanceTotalValue + parseDepostValue;
    balanceTotal.innerText = currentBalanceTotal;
    // console.log(currentBalanceTotal);
    
    depositBalance.innerText = totalDeposit;


});


document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = parseFloat(withdrawField.value);
    console.log(withdrawFieldValue);


    withdrawField.value = '';

    if(isNaN(withdrawFieldValue)){
        alert(`Please Provide A Number`);
        return;
    }

    const withdrawBalance = document.getElementById('withdraw');
    const withdrawBalanceValue = parseFloat(withdrawBalance.innerText);
    console.log(withdrawBalanceValue)

    


    const balanceTotalElement = document.getElementById('balance');
    const balanceTotalElementValue = parseFloat(balanceTotalElement.innerText);
    // console.log(balanceTotalElementValue);



    if(balanceTotalElementValue < withdrawFieldValue){
        alert(`Tumar Balance kom`)
        return;
    }

    const totalWithdraw = withdrawBalanceValue + withdrawFieldValue;
    withdrawBalance.innerText = totalWithdraw;
    console.log(totalWithdraw)

    const currentBalanceTotalMinus = balanceTotalElementValue - withdrawFieldValue;
    console.log(currentBalanceTotalMinus)
    balanceTotalElement.innerText = currentBalanceTotalMinus;

    
})