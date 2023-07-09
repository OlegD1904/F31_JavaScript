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
/*//У нас есть пользователь с возростом 23 года(age)
var user={
    age:45
}
//если user.age больше 0(age) , и /&&/ меньше/</ чем 20 (age)
if (user.age>0 && user.age<20){
    console.log(`Hallo, baby!`)
}
//или если 
else if(user.age>=20 && user.age<40){
    console.log(`Sup!`)
}
else if(user.age>=40 && user.age<60){
    console.log(`Greeting!`)
}*/
/*// !но мы хотим что бы пользователь сам вводил возрост
//мы можем формировать в JS все данные динамически, те по ходу дела
//мы формируем переменную var userAge=prompt(`Введите свой возрост`)
//где он должен сам ввести данные. При этом исползуем что бы преобразовать string->namber
//информацию полученную от prompt
var userAge=parseInt(prompt(`Введите свой возрост!`))

var user={
    //  age:25 -> age:userAge 
    age:userAge
}
//если user.age больше 0(age) , и /&&/ меньше/</ чем 20 (age)
if (user.age==0 && user.age<20)
{
    console.log(`Hallo, baby!`)
    alert(`Hallo, baby!`)
}
//или если 
else if(user.age>=20 && user.age<40){
    console.log(`Sup!`)
    alert(`Sup!`)
}
else if(user.age>=40 && user.age<60){
    console.log(`Greeting!`)
    alert(`Greeting!`)
}*/

/*
//! такой код читаеться не очень хорошо /else if(user.age>=20 && user.age<40){...
//самый оптимальный способ  вынести это всё в condition
//Перенёс это условие ->(user.age==0 && user.age<20) в эту переменную -> var young
var userAge=parseInt(prompt(`Ваш возрост`));

var user={
    age:userAge
};

var unExist=user.age<60;
var young =user.age>0 && user.age<20;
var abult=user.age>=20 && user.age<40;
var elberly=user.age>=40 && user.age<60;
var almostDeadman=user.age>60;
// если молодой /if (young)/ так всегда проще находить и разобрать
// и почитать, что значит молодой
if (young){
    console.log(`Hallo, baby!`);
    alert(`Hallo, baby!`)
}
else if(abult){
    console.log(`Sup?`)
    alert(`Sup?`)
}
else if(elberly){
    console.log(`Greeting!`)
    alert(`Greeting!`)
}
//или он сильно старый или не существует / это когда /-3/ или 61 и больше
else if(unExist||almostDeadman){
    console.log(`ERROR`)
    alert(`ERROR`)

}*/
//!cycles
//While - /пока , в смысле до тех пор пока что то не произойдёт./ - цикл
//While - работает пока условия true
//force quit/насильный выхоьд/ -> break /ключевое слово для выхода/;


var counter = 0;
//0->.....-> 10 - нам нужно поэтапно вывести что находиться между 0 и 10
//в максимально быстрой форме
//можно сделать так
// var counter=1
// console.log(counter)
// var counter=2
// console.log(counter)
// var counter=3
// console.log(counter)
// var counter=4
// console.log(counter)
// но вместо этой формы можно записать цикл
// пока /counter/ не  будет равен 10 /!=10/ мы что то будем делать
//когда counter должен быть равен 10/ мы должны выполнять дополнение 1 еденицы к counter

/*while (counter !=10){
    // или можно сделать так
    //если counter===8 тогда мы сделаем break и процесс остановиться
    //break - это насильный выход из цикла
    // так же мы можем использовать не только слово /break/
    //но и слово /continue/-> skip это означает пропускать

    if(counter===5){
       // break;
     //если  counter===7, скипни/skip/ его 
          continue
     // он берёт и пропускает всё что написано ниже / counter=counter+1,console.log(counter)/ - берёт и пропускает одну итерацию     
    }
    counter=counter+1 
    //counter=counter+1 - у нас этот участок кода будет выполняться пока на будет = 10
     console.log(counter)
}
//  то есть этот участок кода выполниться 10 раз. Как только  counter =10 цикл остановится
 // то есть  условие /counter !=10/ станет ложью
 */


























