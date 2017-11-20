var num1 = 10;
var num2 = 12;

//anonnymous function
var biggestNum = function(a, b){
    var result;
    a > b ? result = a : result = b;
    return result;
};

//immediately invoked anonnymous function
var smallestNum = (function(a, b){
    var result;
    a > b ? result = b : result = a;
    return result;
})(num1, num2);

console.log("biggest num: " + biggestNum(num1, num2));
console.log("smallest num: " + smallestNum);