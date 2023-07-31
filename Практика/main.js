`use strict`
// console.log(`jdfkjdsf`)
//!!!!!!!!!!VALIDATOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //1 - Validation for : name and age
     //Валидация: имя и возраст
   //name - schould contain: . as a first character in the string
     //имя - должно содержать: . как первый символ в строке     
   //name -schould contain: ! as a last character in the string
     //имя -должно содержать: ! как последний символ в строке
   //2- age -user age should divide on 4 without part divide operation
     //2-возраст-возраст пользователя должен делиться на 4 без операции деления на части
// var validator={
//     isValidName:false,
//     isValidAge:false,
// }
// while(!validator.isValidName)
// {
//     var userName=prompt(`Введи имя`);
//     if(userName[0]===`.`&& userName[userName.length-1]===`!`){
//         validator.isValidName=true
        
//         console.log(`Hallo!`)
//         alert(`Gut arbeit`)
//         break
//     }    
// }
// var validation={
//     validName:false,
//     validAge:false,
// }
// while(!validation.validName){
//     var userName=prompt(`Ihr Name?`);
//     if(userName[0]===`.`&& userName [userName.length-1]===`!`){
//         validation.validName=true  
//         break
//     }

// }

// var validator={
//     validName:false,
//     validAge:false,
// }
// while(!validator.validName){
//     userName= prompt(`Ihe name:`)
//     if(userName[0]===`.` && userName[userName.length-1]===`!`){
//         validator.validName=true
//         console.log(`Hallo`)
//         alert(`Hallo`)
//         break
//     }
// }
// let validator={
//     validName:false,
//     validAge:false,
// }
// while(!validator.validName){
//    let userName=prompt(`Ihr Name?`)
//     if(userName[0]===`.`&&userName[userName.length-1]===`!`)
//     {
//         validator.validName=true;
//         console.log([`userName`], userName);
//         alert(`Okey`);
//         break
//     }
// }
// let validator={
//     validName:false,
//     validAge:false,
// }
// while(!validator.validName){
//     let userName=prompt(`Ihr Name?`);
//     if(userName[0]===`.`&& userName[userName.length-1]===`!`){
//         validator.validName=true
//         console.log([`userName`, userName])
//         alert(`Okey`)
//         break
//     }
// }
// let validator={
//   validName:false,
//   validAlt:false,
// }
// while(!validator.validName){
//   let userName=prompt(`Введи своё имя/" . " ; " ! " : `)
//   if (userName[0]===`.` && userName[userName.length-1]===`!`){
//     validator.validName=true
//     console.log([`userName`, userName])
//     alert([`Hallo`,userName])
  
//   }
//   let userAlt=parseInt(prompt(`Ihr alt?`))
//   if (userAlt%4===0){
//      validator.validAlt=true
//     console.log([`Alt`,userAlt ])
//     alert(`Du bist`+``+ userAlt+``+`Jahre alt`)
//     break

//   }
// }
/*let validator={
  validName:false,
  validAge:false,
}
while(!validator.validName){
  let userName=prompt(`Was ist dein Name`)
  if(userName[0]===`.`&& userName[userName.length-1]===`!`){
    validator.Name=true
    console.log([`USERNAME`], userName)
    alert(`Dein Name ist`+ userName)
    break
   
  }  
}
let userAlt=parseInt(prompt(`Wie Alt bist du?`))

if(userAlt%4===0){
  validator.validAge=true;
  console.log([`USERALT`, userAlt]);
  alert(`Du bist`+userAlt+`Jahre Alt`);
  

}*/





//!!!
// let validator={
//     validName:false,
//     validAlt:false,
//   }
//   while(!validator.validName){
//     let userName=prompt(`Введи своё имя/" . " ; " ! " : `)
//     if (userName[0]===`.` && userName[userName.length-1]===`!`){
//       validator.validName=true
//       console.log([`userName`, userName])
//       alert([`Hallo`,userName])
        
//     }    
//   }
//   while(!validator.validAlt){
//     let userAlt=parseInt(prompt(`Ihr alt?`))
//     if (userAlt%4===0){
//        validator.validAlt=true
//       console.log([`Alt`,userAlt ])
//       alert(`Du bist`+``+ userAlt+``+`Jahre alt`)
//       break
  
//     }
//   }
// let validator={
//   validName:false,
//   validAdge:false,
// }
// while(!validator.validName){
//   let userName=prompt(`Введите своё имя:`);
//   if(userName[0]===`.`&& userName[userName.length-1]===`!`){
//     validator.validName=true;
//     console.log([`userName`, userName]);
//     alert(`Здравствуйте`+ userName);
//     break
//   }
// }
// while(!validator.validAdge){
//   let userAlt=+prompt(`Ваш возрост?`)
//   if(userAlt%4===0){
//     validator.validAdge=true;
//     console.log([`Ваш возрост`, userAlt]);
//     alert(`Ваш возрост`+ userAlt)
    
//   }

// }
// let validator={
//   userName:false,
//   userAge:false,
// }
// while(!validator.userName){
//   let userName=prompt(`Введите своё имя:`)
//   if(userName[0]==="." && userName[userName.length-1]===`!`){
//     validator.userName=true;
//     console.log([`Имя`], userName);
//     alert(`Привет`+ userName)
//     break
//   }
// }
// while(!validator.userAge){
//   let userAge=prompt(`Bведите ваш возрост`)

//   if(userAge%2===0){
//     validator.userAge=true;
//     console.log([`userAge`], typeof userAge, userAge);
//     alert(`Ваш возрост`+ userAge);
//     break

//   }
  
// }
// let validator={
//   validName: false,
//   validAge:false,
// }
// while(!validator.validName){
//  var userName=prompt(`Введите своё имя`);
//   if(userName[0]===`.` && userName[userName.length-1]===`!`){
//     validator.userName=true;
//     console.log([`userName`], typeof userName, userName)
//     alert(`Привет`, userName)
//     break
//   }
// }
// while(!validator.validAge){
//   let userAge=prompt(`Введите свой возрост`)
//   if (userAge%3===0){
//     validator.validAge=true;
//     console.log([`userAge`, typeof userAge, userAge])
//     alert(`Hallo`:\n+ userName + `ваш возрост`+ userAge)
//     break
//   }
// }
// const validator={
//   validName:false,
//   validAlt:false,
// }
// while(!validator.validName){
//     const userName=prompt(`Geben Sie Ihren Namen ein :" . ";" ! ":`);
//     if(userName[0]===`.` && userName[userName.length-1]===`!`){
//       validator.validName=true;
//       console.log([`userName`, typeof userName, userName]);
//       alert(`Hallo`, userName);
//       break;
//     }
// }
// while(!validator.validAlt){
//   const userAlt=+prompt(`Geben Sie Ihren Alt ein:`);
//   if(userAlt%2===0){
//     validator.validAlt=true;
//     console.log([`USERALT`], typeof userAlt, userAlt);
//     alert(`Sie sind`+userAlt+`Jahre Alt`);
//     break
//   }


// }



// HOMEWORK 1

// U should create a programm that takes :
// name
// yearOfBirth
// surname
// Is it love money ?

// as a result : both (users name and surname ) into modal window
// how old is it , let say :
// user entred 1973 => 50

// *
// if isLove -> Welcome , pane !
// otherwise !isLove -> Sorry , here is a training business,
//  go away please!

    

    