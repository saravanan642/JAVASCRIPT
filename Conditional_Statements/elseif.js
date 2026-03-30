var mark = 90;
 if(mark>100){
    console.log (" mark is low");
 }else if(mark<10){
    console.log(" mark is high");
 }else if (mark ==90){
    console.log(" mark is not eqal")
 }

 let a = 10, b = 25, c = 15;

if(a > b && a > c){
    console.log("A is largest");
}else if(b < a && b > c){
    console.log("B is largest");
}else{
    console.log("C is largest");
}

let num = 0;

if(num > 0){
    console.log("Positive");
}else if(num < 0){
    console.log("Negative");
}else{
    console.log("Zero");
}



let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}