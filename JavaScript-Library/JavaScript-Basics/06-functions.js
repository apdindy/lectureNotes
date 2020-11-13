function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function addAnyTwoNumbers(x, y){
    console.log(x+y);
}

addAnyTwoNumbers(4,5);
addAnyTwoNumbers(6,11);
addAnyTwoNumbers(7,8);

function subtTwoNums(x,y){
    console.log(x-y);
}

subtTwoNums(4,5);
subtTwoNums(15,10);
subtTwoNums(10,6);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage
}

console.log(getMyBattingAverage(250, 91));

function add(x, y){
    let sum = x + y;
    return sum; // or return x + y;
}
console.log(add(1,1));

function fullName(first, last){
    let wholeName = first + "" + last;
    return wholeName;
}
console.log(fullName("paul", "o'conner"));

function calculatePriceIndiana(quantity, price){
    let totalPrice=1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePriceIndiana(17, 5));


