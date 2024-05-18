//If else: Needs to be solved with if, else and with ternary operator

//1. Check Age for Voting Eligibility
let age=17
let voting= age>=18 ? 'You can vote':'You can not vote';
console.log(voting);
//2. Determining Pass or Fail Based on Score 0-100 ( below 65 is a fail )
let score=85;
let test= score<=65 ? 'you have passed':'You have passed';
console.log(test)
//3. Check temperature for comfort level ( comfort is between 20 and 25 )
let temp=22;
let temperature=temp>=20 && temp<=25 ? 'warm':'cold'
console.log(temperature)
//4. Determining Shipping Cost Based on Order Amount (if the amout is above 100 shipping is free, if not it's $10)
let cost=110;
let shipping=cost>=100 ? 'Shipping is free':'Shippinc cost 10$';
console.log(shipping)