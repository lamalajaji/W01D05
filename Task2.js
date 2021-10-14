let num1 = 23;
let name = "Lama";
let arr = ["Python", "SQL", "JavaScript"];
let Lama = {
  Lama: "lama",
  major: "MIS",
  bYear: 1998,
};

console.log(`Hello I'm ${name}
I'm ${num1} `);
console.log(arr);
console.log(Lama);

//print the type of each variabul:

console.log(
  typeof num1 + " " + typeof name + " " + typeof arr + " " + typeof Lama
);

let numArr = ["Hala", 20, "Ghala", 18, "Nouf", 10];
// i guess it will show " opject"
console.log(typeof numArr);

//create null value
let nulVal;
//it will be undefine
console.log(typeof nulVal);


let str= "heLLo wOrld"
letcontrol= "upper";
if (control === true) {
  console.log(str.toLowerCase());
} else {
  console.log(str.toUpperCase());
}