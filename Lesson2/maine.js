"use strict"
// !Калькулятор
// let firstNumber=prompt("Введите первое число");
// let secondNumber=prompt("Введите второе число");
// let operator=prompt("Ведите +, -, *,/");1           
// alert("Hallo")
// let result=prompt(title,["default"]);
// console.log(result)
// result = prompt(["dfskgjsddj"], "jkdjksdj");
// console.log(result)
// let age=prompt("Wie alt bist du?", 100)
// console.log(age)
// // 'alert("Du bist ${age} jare!");'
// alert(`Du bist ${age} jare!`);
// let name=prompt("Wie heißt du?")
//     alert( `Hallo ${name} !`);
// let confirmName=confirm(`Du bist Oleh?`)
// alert(confirmName)
//  let name=prompt(`Ihre name?`);
//  alert(`Hallo ${name}!`);
//  let age=prompt(`Wie alt sind Sie?`)
//  alert(`Sie sind ${age} jare alt`)
//  let spilt=confirm(`Möchtest du spielen?`)
//  alert(spilt)
//! Калькулятор
// let result=null;
// let ersteNum=parseInt(prompt(`Введите первое число`));
// let zweiteNum=parseInt(prompt(`Введите второе число`));
// let operator=prompt(`Введите опирацию: +;-;*;%;/` );
// if(operator===`+`){
//     result=ersteNum+zweiteNum   
// }else if(operator===`-`){
//     result=ersteNum-zweiteNum
// }else if(operator===`/`){
//     result=ersteNum/zweiteNum
// }
// else if(operator===`*`){
//     result=ersteNum*zweiteNum
// }else if(operator===`%`){
//     result=ersteNum/zweiteNum
// }
// console.log(result)
//! 1
// let result=null;
// let ersteZahl=parseInt(prompt(`Geben Sie die erste Zahl ein`));
// let zweiteZahl=parseInt(prompt(`Geben Sie die zweite Zahl ein`));
// let operator=prompt(`Geben Sie einen Operator ein: "+" "-" "/" "%" "*"`)
// if(operator===`+`){
//     result=ersteZahl+zweiteZahl
// }
// else if(operator===`-`){
//     result=ersteZahl-zweiteZahl
// }else if(operator===`*`){
//     result=ersteZahl*zweiteZahl
// }else if(operator===`%`){
//     result=ersteZahl%zweiteZahl
// }
// if(!isNaN(result)){
//     console.log(`[result]`, result)
// }
// else{
//     alert(`Etwas ist schief gelaufen!`)
// }
//! 2
// let result=null
// let ersreZahl=parseInt(prompt(`Введите первое число`));
// let zweiteZahl=parseInt(prompt(`Введите второе число`));
// let operator=prompt(`Введите оператор: "+" ; "-";"/"` );
// if(operator===`+`){
//     result=ersreZahl+zweiteZahl
// }
// else if(operator===`-`){
//     result=ersreZahl-zweiteZahl
// }
// if(!isNaN(result)){
//     console.log(result)
// }  
// else{
//     alert(`Etwas ist schief gelaufen!`)
// }
//! 3
// let result=null
// let ersteZahl=parseInt(prompt(`Erste zahl`))
// let zweiteZahl=parseInt(prompt(`Zweite zahl`))
// let operator=prompt(`"+" "-" "/"`)
// if(operator===`+`){
//     result=ersteZahl+zweiteZahl
// }
// else if(operator===`-`){
//     result=ersteZahl-zweiteZahl
// }
// else if(operator===`/`){
//     result=ersteZahl/zweiteZahl
// }

// if(!isNaN(result)){
//     console.log(result)
// }
// else{
//     alert(`Что то пошло не так`)
// }
// let result=null
// let ersteZahl=parseInt(prompt(`Введи первое число`))
// let zweiteZahl=parseInt(prompt(`Введи второе число`))
// let operator=prompt("+;-;/")
// if(operator==="-"){
//     result=ersteZahl-zweiteZahl
// }
// else if (operator==="+"){
//  result=ersteZahl+zweiteZahl
// }
// else if(operator==="/"){
//  result=ersteZahl/zweiteZahl
// }
//  if(!isNaN(result)){
//     console.log(result)
//     alert(result)
// }
// else{
//     alert("Etwas ist schief gelaufen")
// }
//! 3
// let result=null;
// let ersteZahl=parseInt(prompt(`Erste Zahl`))
// let zweiteZahl=parseInt(prompt(`Zweite Zahl`))
// let operator=prompt(`"*"; "-"; "/"`)
// if(operator==="*"){
//     result=ersteZahl*zweiteZahl
// } else if(operator==="+"){
//     result=ersteZahl+zweiteZahl
// } else if(operator==="/"){
//     result=ersteZahl/zweiteZahl
// }
// if(!isNaN(result)){
//     console.log(result)
//     alert(result)
//     alert(`Ura`)
// }
// else{
//     console.log("Etwas ist schief gelaufen!")
//     alert(`Etwas ist schief gelaufen!`)
// }

//cycles; functions; objects
/*//! Objects /объект это скобки{} и описание в нём переменных локальных для него
let oleh={
    //: -> = /двоеточее это абсолютный эквивалент равенству/- defenition / это и есть определение/ знак равенства писать не нужно
    //key/prperty(это наисенование "ersteName"): value
    ersteName:`Oleh`,
    nachName:`Dundiev`,
    alt:23

}
//Что бы получить доступ к значениям нам нужно обратиться след образом
//<object>.<properti>
//Access to values /Доступ к значениям
console.log(`[oleh.ersteName]`, oleh.ersteName);
console.log(`[oleh.nachName]`, oleh.nachName);
console.log(`[oleh.alt]`, oleh.alt);
//! app Clab control /мы не пускаем кому меньше 18 лет
var john={
    ersteName:`mic`,
    nachName:`007`,
    alt:18

      
}
if(john.alt===18){
    console.log(`Hallo!`)
}
// если мы хотим что бы программа отробатывала все кейсы 
//с выводом в консоль `Hallo!` и "Herzlich Willcommen!" /в зависимости какой возрост ставим в alt и в сравнении ><===/
// запись делаем серез if
//если поочереди  `Hallo!` а потом `Herzlich Willcommen!` записываем через else if
else if(john.alt>=18){
    console.log(`Herzlich Willcommen!`)
}
else {
    console.log(`Hak!`)
}
//!
//more condition 
//если Джону 18 лет и мы хотим быть уверенными что это точно Джон
// мы как то должны описать "И" - "and"
//&& - "and" "И" - это логический оператор который записываеться как два амперсанта
// ||  - "or" - "или"
//(!) - not - нет 
if (john.alt===18 && john.ersteName===`john`){
    console.log(`Hallo!`)
}else if(john.alt>=18){
    console.log(`Herzlich Willcommen!`)
}
// если это будет не Джон а другой, тогда будет выплняться только `Herzlich Willcommen!`
//т.к. сравнение в этом условии даёться только  alt*/

//!AGE - detector / детектор возроста































