
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 1})).toEqual('83.33');
  expect(calculateMonthlyPayment({amount: 0, years: 0, rate: 0})).toEqual('NaN');
});


it("should return a result with 2 decimal places", function() {
  let numDec = 0;
  let result = calculateMonthlyPayment({amount: 10000, years: 10, rate: 1});

  expect(countDecimals(result)).toEqual(2)
});

function countDecimals(num){
  if(Number.isInteger(num)){
    return 0;
  }
  else{
    return num.toString().split('.')[1].length;
  }
}
