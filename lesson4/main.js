`use strict`
   // Homework
// ИМТ 
// Get height and weight
// Formula : weight / _,__ * _,__ 
// Example : 77(вес Кирилла) / 1,85 * 1,85
//  (Рост Кирилла в квадрате) (Кирилл - это 185 cм 77 кг)
//  16 – 18,5      ►  Недостаточная масса тела (дефицит);
//  18,5 – 25     ►  Норма;
//  25 – 30       ►  Избыточная масса тела (состояние, предшествующее ожирению);
//  30 – 35       ►  Ожирение 1-й степени;
//  35 – 40       ►  Ожирение 2-й степени;
//  40 и более ►  Ожирение 3-й степени.
// const vasy=13;
// console.log(`Hallo Vasy ${vasy}`)
// const height=+prompt(`Введите свой рост в формате: x,xx`);
// console.log(typeof height, height)
// const weight=+prompt('Введите свой вес:');
// console.log(typeof weight, weight)
// const result=weight/(height*height);
// console.log([`RESULT`],result);
// alert(result)
let isRunning=true;

while(isRunning){
   const contexMenu="a) Play q) Quit"

   const userChoose=prompt(contexMenu);
   const lowerUserChoose=userChoose.toLowerCase()
 switch (userChoose) 

 {
   case `a`:
 const height=+prompt(`Введите свой рост в формате: x,xx`);
 const weight=+prompt('Введите свой вес:');;
 const result=weight/(height*height);
 alert(result.toString().slice(0,4))
      
      break;

   case `q`:
      isRunning=false;
   
   break;
 
   default:
      break;
 }
}