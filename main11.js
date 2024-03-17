let Sveta1 = 30;
let Sveta2 = 50;
let Sveta3 = 40;
let Max1 = 52;
let Max2 = 39;
let Max3 = 45;
let Dima1 = 48;
let Dima2 = 60;
let Dima3 = 55;
Sveta = (Sveta1 + Sveta2 + Sveta3) / 3;
Max = (Max1 + Max2 + Max3) / 3;
Dima = (Dima1 + Dima2 + Dima3) / 3;

if(Max > Dima && Max > Sveta){
    console.log("Макс крут")
}
else if(Sveta > Max && Sveta > Dima){
    console.log("Света крута")
}
else if(Dima > Sveta && Dima > Max){
    console.log("Дима крут")
}
else{
    console.log("хз лол ХАХАХАХА")
}
console.log(Max)
console.log(Dima)
console.log(Sveta)