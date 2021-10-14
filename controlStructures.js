// Q2-3  
let num1 = 4;
let num2 = 2;
let num3 = 10;
if (num1 > num2) {
  console.log(`${num1} larger than ${num2}`);
} else {
  console.log(`${num2} larger than ${num1}`);
}

// Q4 
let num1 = 4;
if (num1 % 2 == 0) {
  console.log(num1+ ` it's an even number , and the devide result ${num1 / 2}`);
} else {
  console.log(num1+ ` it's an odd number , and the devide result : ${num1 / 2}`);
}

//Q5: sort the numbers from largest to smallest 
let num1 = 4;
let num2 = 2;
let num3 = 10;
if (num1 > num2 && num1 > num3) {
  if(num2 > num3){
      console.log(`${num1} , ${num2} , ${num3}`);
  }else {
      console.log(`${num1} , ${num3} , ${num2}`);
  }
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3){
        console.log(`${num2} , ${num1} , ${num3}`);
    } else {
        console.log(`${num2} , ${num3} , ${num1}`);}
  
} else if (num3 > num1 && num3 > num2 ){
    if (num1 > num2){
        console.log(`${num3} , ${num1} , ${num2}`);
    } else {
        console.log(`${num3} , ${num2} , ${num1}`);
    }
  
}

//Q6 

let amount = 34;
if (typeof amount !== "number") {
  console.log("Please enter a number");
} else if (amount > 0) {
  console.log("your number is: " + amount);
} else if (amount < 0) {
  console.log("please enter a posative number");
}

// Q7 
let username = "Lama_alajaji";
let passowrd = "665700";

if (username.length > 6 && passowrd.length >= 8) {
  console.log("login successfully");
} else {
  console.log("login faild ! , please try again");
}

//Q8 
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

//Q9 
for (i = 20; i >= 0; i--) {
  console.log(i);
}
//Q10 

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Q11 
let numBox = "";
let startRange = 4;
let endRange = 10;
for (let i = startRange; i <= endRange; i++) {
    if (i == endRange) { // to add coma between numbers and stop at the last number
      numBox += i;
    }
  else {numBox += i+",";
}
}
 console.log(numBox);

//Q12 
let star = 5;
let string = "";
for (let i = 1; i <= star; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//Q13 the extra Q
let num1 = 12;
let num2 = 18;
let GCD;
for (i=0; i<= num1 && i<= num2; i++){
    if (num1 % i == 0 && num2 % i ==0 ){
        GCD = i;
    }
}
console.log(GCD);