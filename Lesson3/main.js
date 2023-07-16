"use strict"
console.log(`Hallo`)
//! Циклы
  //!While -> выполняеться пока не будет False или break
 var isRunning = true
//  while(isRunning){
//     var namber=prompt(`Введите число`)
//     if (namber!=10)  continue
//     isRunning=false
//     }
    // логика While заключаеться в том что мы не знаем сколько нам нужно операций
  //!for - идея цикла заключаеться в том что но знает сколько нам нужно выполнить операций
    // это относиться например к длине строки
    //например к необходимому выводу количества элементов
    //или когда мы хотим что то сосчитать и на это отреагировать при помощи цикла

  /*  for( var i=0; i < 10; i++ )
//for у нас принемает три значения
  //1- У  нас есть иттератор var i=0 который равен 0
  //2-у наc есть колличество иттераций пока i < 10 и не равно 10
  //3- i++ - это эквивалент i++ =   -> i = i+1
{
    console.log(i)

}*/
 /*// работа со строкой
var string=`Hallo!!! Wie geht es Ihnen?`
for( var i=0; i < string.length; i++ )
 // до тех пор пока длина этой переменной string.length будет больше чем i
 //я хочу выводить в консоль строку и соответственно элемент по индексу console.log(string[i])
 //это индекс начинаеться с 0 /i=0/, и на каждой иттерации добовляеться +1 /i++/
 //и мы точно знаем что здесь -> /i < string.length/, будет выполняться определённое колличество действий

 //под i мы пдразумеваем индексы /от 0 .... и т.д./ соответствующим символам в строке 
 //
{
    console.log(string[i])

}*/
//! do ... while
  // это такой же как и While только наоборот
  //он сначала делает, а потом он думает
  //очень редкий способ, очень редко где применяеться именно потому что он сначала делает а потом думает
 /* var i=0
  do{
    i++;
    console.log(i)
  }
  while(i<10)
  var i=0
  while(i<10)  
  {
    i++
    console.log(i)
  }*/
  //пример 2 условие будет false
  /*var i=0
  {
    i++;
    console.log(i)
  }
  while(false)
  var i=0
  while(false)  
  {
    i++
    console.log(i)}*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!РАЗБОР ДЗ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//On the start we have a modal window: 1)Register 2)Exit *
     //до тех пор пока я не Exit  - > программа не заканчивает своей работы *
//1) Get user: name, email,password, age / нужно получить от пользователя .......
//2)name must has at least 7 sunbols /имя не должно иметь больше 7 символов
//3) if name is valid-> check user email / если имя валидно -> тогда мы можем проверить email
    // если оно не валидно -> тогда мы выдаём сообщение что имя не валидно тогда мы email смотреть не будем
//4) email should include into it -> "@" symbol - то есть в email должен быть символ @
//5)  но email мы идём проверять если у нас имя valid /действительное/
//6) password should (должен) be longer than 7and  *might include: namber and strings - пароль должен быть длинее чем 7 символов
    //и может включать в себя числа и строки
//7)this case migth be acceed only if all conditions above is  TRUE.... /этот случай может быть принят, только если все вышеперечисленные условия ИСТИНА/
   //.....  age must be bigger than 18
//8) if all above (выше) ist ture -> console.log-> Welcome!
//9) Ohterwise(в противном случае) -> Go out of here!/ Уходи от сюда!
//то есть каждый последующий цикл выполняеться если предидущий прошёл проверку, и оказался TRUE 
// var isInvalidName=true    // забили переменную для строки 94; эта переменная нужна только для работы while
// var isInvalidEmail=true // создаём переменную для строки 100;эта переменная нужна только для работы while
//   //!1 - нужно задать 4 вопроса
// //var userName=prompt(`Как твоё имя?`)
// var userAge=prompt(`Ваш возрост?`)

//   //!2 - разделяем на логичные части//////////////////////////////////////

// var userEmail=prompt(`Введите свой email `)
// var userPassword=prompt(`Пароль`)
//   //!3 - имя должно содержать как минимум два символа
// while(isInvalidName)  {
//     var userName=prompt(`Как твоё имя?`)
//     if(userName.length > 2 ) isInvalidName=false;//если строка больше чем 2 символа
// }
//  //!4 - email должен содержать @
// if(isInvalidName===false){

// }
// //!!!!!!!Улучшим код /запись/
// var validation={
//     isValidName:false,
//     isValidEmail:false,
//     isValidPassword:false,
//     isValidAge: false
// }



// while(!validation.isValidName){
//     var userName=prompt(`Введите своё имя:`)
//     if(userName.length>2) validation.isValidName=false
// }
// if(!validation.isValidName){
//     alert(`Имя валидное`)
//     while(!validation.userEmail){
//         var userEmail=prompt(` Какой твой email?`);
//         for(var i=0; i<userEmail.length; i++){
//             var char= userEmail[i];
//             if(char===`@`){
//                 validation.userEmail=true;
//                 break;
//             }
//         }
//     }
// }
// if(validation.isValidEmail){
//     while(validation.isValidPassword){
//         var userPassword=prompt(`Введите пароль`) 
//         var isNumberInPassword = false;
//         var isStrInPassword=false;
//         for (var i=0; i<userPassword.length; i++){
//             var char=+userPassword[i];
//             if(!isNaN(char)){
//                 isNumberInPassword=true;
//             }
//             else{
//                 isStrInPassword=true;

//             }
//             if (isNumberInPassword&&isStrInPassword){
//                 validation.isValidPassword=false
//             }


//         }
//         if(userPassword.length<7)     
//     }
    
// }




// var validation = {
//     isValidName : false,
//     isValidEmail : false,
//     isValidPassword : false,
//     isValidAge : false,
// }


// while(!validation.isValidName) {
//     var userName = prompt("What's ur name ?");

//     if(userName.length > 2){
//         validation.isValidName = true;
//         break;    
//     }
   
// }

// if (validation.isValidName) {
//     console.log("HEre");
//     while(!validation.isValidEmail) {
//         var userEmail = prompt("What's ur email adress ?");

//         for (var i = 0 ; i < userEmail.length ;i++) {
//             var char = userEmail[i];

//             if(char === "@"){
//                 validation.isValidEmail = true; 
//                 break;
//             }
//         }
//     }
// }

// if(validation.isValidEmail) {
//     while(!validation.isValidPassword) {
//         var userPassword = prompt("Enter ur password");

//         var isNumberInPassword = false;
//         var isStrInPassword = false;

//         for(var i = 0 ; i < userPassword.length ;i++) {
//             var char = parseInt(userPassword[i]);

           
//             if (!isFinite(char)) {
//                 console.log("Here");
//                 isNumberInPassword = true;
//             } else {
//                 console.log("There");
//                 isStrInPassword = true;
//             }
//         }
        
//         if(userPassword.length > 7 && isNumberInPassword && isStrInPassword) {
//             validation.isValidPassword = false

//             break;
//         }
//     }
// }



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Task!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   //1 - Validation for : name and age
     //Валидация: имя и возраст
   //name - schould contain: . as a first character in the string
     //имя - должно содержать: . как первый символ в строке     
   //name -schould contain: ! as a last character in the string
     //имя -должно содержать: ! как последний символ в строке
   //2- age -user age should divide on 4 without part divide operation
     //2-возраст-возраст пользователя должен делиться на 4 без операции деления на части
var validator ={
    isValiName:false,
    isValidAge:false,
}
while(!validator.isValiName){
    var userName=prompt(`Wie heißen Sie?`);
    if(userName[0]===`.` && userName[userName.length-1]===`!`){
        validator.isValiName=true;
        break
    }
}
   //расчитать ИМТ  




 




 