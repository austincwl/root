window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const form = document.getElementById("calc-form");
  const formInputs = form.querySelectorAll('input');

  //console.log('form inputs: ' + formInputs);

  if(localStorage.getItem('flag')){
    //console.log('flag found');
    formInputs[0].value = localStorage.getItem('amount');
    formInputs[1].value = localStorage.getItem('years');
    formInputs[2].value = localStorage.getItem('rate');
  }
  else{
    for(let i = 0; i < formInputs.length; i++){
      //console.log('form input ('+i+') : '+formInputs[i].value);
      formInputs[i].value = 0;
      //console.log('form input ('+i+') : '+formInputs[i].value);
      //console.log(getCurrentUIValues());
    }
  }
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const payment = calculateMonthlyPayment(values);

  localStorage.setItem('flag',true);
  localStorage.setItem("amount",values.amount);
  localStorage.setItem('years',values.years);
  localStorage.setItem('rate',values.rate);

  updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //console.log('start calculateMonthlyPayment(values)')
  //console.log('values:');
  //console.dir(values);
  const amount = values.amount;
  const years = values.years;
  const rate = values.rate;
  let payment = 0;

  //onsole.log('amount: ' + amount);
  //console.log('years: ' + years);
  //console.log('rate: ' + rate);

  const i = rate / 12;
  const P = amount;
  const n = years;

  payment = (P * i)/(1-((1+i)^(-1*n)));
  //console.log('payment: ' + payment);

  payment=payment.toFixed(2);

  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let span = document.getElementById('monthly-payment')
  //console.log('span');
  //console.log(span);
  //console.log('innerText: ' + span.innerText);
  
  span.innerText = monthly;
  //console.log('innerText: ' + span.innerText);
}
