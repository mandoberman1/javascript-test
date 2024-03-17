// let ves = +prompt("Введите вес в кг")
// let rost = +prompt("Введите рост в см")
// function imt(ves, rost){
//     imt = ves / (rost**2)
//     alert("Недостаточный вес: ИМТ менее 18,5. Нормальный вес: ИМТ от 18,5 до 24,9. Избыточный вес: ИМТ от 25 до 29,9. Ожирение: ИМТ от 30 и выше. Ваш ИМТ: " + imt)
// }
// imt(ves, rost)
let countries = ["Russia","Ukraine","USA","Great Britain","Kazaxstan"]
console.log(countries)

console.log("")
countries.push("Dagestan", "Serbia")
console.log(countries)

console.log("")
countries.splice(2, 2)
console.log(countries)

console.log("")
countries.unshift("Argentina")
console.log(countries)

console.log("")
countries[1.] = "France"
console.log(countries)

console.log("")
countries.forEach(function(item){
    console.log(item)
})