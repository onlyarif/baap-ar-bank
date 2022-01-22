document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;

    depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositAmount);

    // update balence
    const balunceTotal = document.getElementById('balunce-total');
    const balunceTotalText = balunceTotal.innerText;
    balunceTotal.innerText = parseFloat(balunceTotalText) + parseFloat(depositAmount);


    // clear deposit field 
    depositInput.value = '';

})
document.getElementById('withdrow-btn').addEventListener('click', function () {
    // get withdrow input 

    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowInputText = withdrowInput.value;
    // set withdrow value 
    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;

    withdrowTotal.innerText = parseFloat(withdrowTotalText) + parseFloat(withdrowInputText);

    // update account balunce 
    const balunceTotal = document.getElementById('balunce-total');
    const balunceTotalText = balunceTotal.innerText;
    balunceTotal.innerText = parseFloat(balunceTotalText) - parseFloat(withdrowInputText);


    // clear withdrow input 
    withdrowInput.value = '';

})