let a : string = "reikhan"
console.log(a);

//eksplisit
let x : number = 90;
var y : string = "plugin"
console.log(x,y);

//implisit
let k = 20
let o = "web"
console.log(k,o);

//tipe data any
let kelas: any;
kelas = true;
console.log(kelas);

//union
let mouse : number;
mouse = 20;
console.log(mouse);

//aliases
type ID = number;

let userID: ID;
userID = 69;
console.log(userID);

//void
function oke(name: string): void {
   console.log(`Hello, ${name}!`);

}
oke("Komting Raja Ibliss");


//array

let list : number[]
list = [1, 2, 3, 4]

//generic array
let list1 : Array<number>;
list1 = [1, 2, 3, 4]
console.log(list, list1);

//tuple 
let person: [string, number];
person = ["siber", 20];
console.log(person);

//object
let person1 : {
    name : string,
    age : number,
    address : string 
}
person1 = {
    name : "siber",
    age : 19,
    address : "Pengabean"
}
console.log(person1);

//for loop (pasti krn i)
for (let i = 0; i<5; i++){
    console.log(`Loop ke ${i + 1}`);
}

//while loop (belum menentu pasti)
let counter: number = 0;
while (counter <=5){
    counter++
    console.log(counter);   
}

//if else 
let nilai = 76
if (nilai > 75){
    console.log("lulus");
} else {
    console.log("tidak lulus");
}

//switch case
  let day: number = 6;
  let dayName : string;
  switch (day){
    case 1:
        dayName = "senin";
        break;
    case 2:
        dayName = "selasa";
        break;
    case 3:
        dayName = "rabu";
        break;
    case 4:
        dayName = "kamis";
        break;
    case 5:
        dayName = "jumat";
        break;
    default:
        dayName = "hari lainnya";
  }  
console.log(`Hari ini adalah ${dayName}`);




