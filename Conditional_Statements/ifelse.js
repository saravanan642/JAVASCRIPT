var a = 18;
if (a>30) {
    console.log("submit")
    
} else {
    console.log("not sumbit")
}


var num = 20;
if (num %2 === 0) {
    console.log(" even")
    
} else {
  console.log (" not even")   
}


let mark = 60;

if(mark >= 50){
    console.log("Pass");
}else{
    console.log("Fail");
}



let age = 20;

if(age >= 18){
    console.log(" eligible");
    if(age >= 21){
        console.log("Eligible for all");
    }else{
        console.log("Only eligible for voting");
    }
}else{
    console.log("Not eligible");
}


let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Success");
}else{
    console.log("Login Failed");
}