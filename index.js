function square(num){
   return num * num;
}

console.log(square(5));

// square(5)

const sq = function(num){
    return num * num
}

console.log(sq(3));


(function displaysquare(fn){
    console.log('square is '+ fn(9));
})(square)

// displaysquare(square)

function alpha (x) {
    return (function (y) {
        console.log(1);
    })(2);
}
alpha(1)

// var let const 

{
    var a = 3
}

console.log(a);


function test(){
    var a = 'hi'
    var b = 'bye'

    if(true){
        var a = 'hello'
        var b = 'goodbye'
        console.log(a);
        console.log(b);
    }

    console.log(a);
    console.log(b);
}

test()

let n = 5
n = 7
console.log(n);


function abc(){
    console.log(a, b, c);
    let a = 10
    const b = 15
    var c = 20
}
// abc()


function functop(){
    for(let i = 0; i < 5; i++ ){
        // console.log(i);
        setTimeout(() => {
        console.log(i);
        },i * 1000)
    }
}
// functop() 


// Function Hosting

var x = 21

function fun(){
    console.log(x);
    var x = 20
}

// fun()

function recursive(parameter){
    console.log(parameter);
    // recursive('test')    
}

// recursive("test") // arugument


function FizzBuzz(number){
    for (let i = 0; i <= number; i++) {
        if(i % 3 == 0 && i % 5 == 0){
            console.log('Fizz Buzz');
        }
        else if(i % 3 == 0){
            console.log('Fizz');
        }
        else if(i % 5 == 0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }    
    }    
}

// FizzBuzz(15)

function multiply(num1, num2,...num){ 
    console.log(num1,num2 ,num);
}

var arr = [5,6,7,10,55,41,20]

multiply(...arr)

function palindrome(x){
        return x < 0 ? false : x === +x.toString().split("").reverse().join("")
}

// console.log(palindrome(121));


function fibonacci(n){
    //f(n-1) + f(n-2)
    arr = [0, 1]
    for (let i = 2; i <=n; i++) {
          arr.push(arr[i - 1] + arr[i - 2]) 
    }
    return arr[n]
    
}

console.log(fibonacci(15));

function fibrec(n){
    // if(n <= 1){ return n }
    // return fibrec(n - 1) + fibrec(n - 2)

    return n <=1 ? n : fibrec(n - 1) + fibrec(n - 2)
}

console.log(fibrec(18));


// solution 1
function isAnagram(s,t){
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")    
    return s === t
}

console.log(isAnagram("anagram","nagaram"));



function isAnnagram(s,t){
    if(s.length !== t.length) { return false }
    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1
        obj2[t[i]] = (obj2[t[i]] || 0) + 1
    }

    for (const key in obj1) {
        if(obj1[key] !== obj2[key]){ return false }
    }

    return true
}

console.log(isAnnagram("anagram","nagaram"));

// single hashmap method
function isAnnagrams(s,t){
    if(s.length !== t.length) { return false }
    let count = {}

    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1
        count[t[i]] = (count[t[i]] || 0) - 1
    }

    for (const key in count) {
        if(count[key] !== 0){ return false }
    }

    return true
}

console.log(isAnnagrams("rat","tar"));



















