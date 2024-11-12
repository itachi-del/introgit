// //plus//*
// let a = 5, c = 3 

// //
// let z = 10
// let y = 7 

// z++;
// z--;

// console.log("z = " + z);

// z+=2 //z = z+2
// z-=5 //z = z-5
// z*=5 //z = z*5
// z/=5 //z = z/5
// z%=5 //z = z%5

// sum = 10 % 7 

// console.log("z + y = " + (z+y) );
// console.log("a - c = " + (a-c) );
// console.log("a * c = " + (a*c) );
// console.log("z % y = " + sum);


// let w = 10 
// let x = 7 

// var num = prompt("введите число")

// var num2 = prompt("введите второе число")

// var a num + num2
// var b = (num + num2) * 2
// var b = alert("ауданы"+ a +'/n'+ "перемитары:" +b)


// let san = prompt("сан енгызыныз 1 ден 3 ке дейын")

// switch(san){
//     case "1":
//         alert("сіз 1 деген санды еңгіздініз")
//         break;
//     case"2":
//      alert("сіз  2 деген санды енгіздініз")
//      break;
//      case 3:
//         alert("сіз 3 деген санды енгіздініз ")
//         break;
//      default:
//             alert("сізқате тердіңіз қайта енгізуді өтінеміз")    
// }

// let  drink = prompt("танданыз: кофе,лате,шай")
// let  addjictive = prompt("танданыз: кофе шоколадный,лате холодный,шай горячий")

// switch(drink && addjictive){
//     case "кофе"
//        alert("сіз кофе танданыдыныз")
//        break;
//      case"лате"
//        alert("сіз лате тандадыныз")
//        break;
//      case "шай"
//       alert("сіз шай тандандыныз")
//       break;
//      default:
//       alert("кайтадан танданыз")

// }

// let suy = prompt(" сіз тандауыныз: cofe/ tea/ water")
// let qospa;undefined

// switch(suy){
//     case " cofe"
//      let turi = prompt ("кандай сироп тандайсыз  карамельный/молочный")
//      switch(turi){
//         case "карамелный":
//         qospa = карамелный
//        break;
//      case "молочный":
//         qospa = молочный
//         break;
//      default
//       alert("бызде ондай коспа туры жок")  
//      }
// }
// break;
// case "шай":
//     let shai = prompt("кандай шай турын тандайсыз сут/жасыл/кок")
//  switch(shai){
//   case "сут"
//     qospa ="сут"
//     break;
//  case"жасыл"; 
//    qospa = жасыл
//    break;
//  case"кок"
//   qospa ="кок"
//   break;
//  default:  
//   alert("такого вида нет")  
//  }
//  break;

//  let susyn = prompt("сыздын тандауыныз: кофе / шай /су")
//  let qospa: //undefined

// switch(susyn){
//     case "кофе"
//     let turi = prompt("кандай сироп тандайсыз? карамельный/малочный")
//  switch (turi){
//   case"карамельный":
//      qospa = "карамельный"
//      break;
//    case "молочный"
//     qospa = "молочный"
//      break;
//   default:
//     alert("у нас нет такого вида")   
//     break;  
//  } 
//  break;
//  case"шай":

//  let shai = prompt("кандай шай турын  тандайсыз? кара/кок/жасыл")
//   switch(shai){
//      case "кара"
//        qospa = "кара"
//        break;
//      case "кок" 
//        qospa = "кок"
//        break;
//     case"жасыл"
//      qospa = "жасыл"
//      break;

//   }
// }

// for (let i = 1; i<=5; i++){
//    console.log(i);

// }

// for (let i = 1; i <=20; i+1) {
//    if (i % 2 === 1){
//       console.log(i + " - жұп");
//    } else {
      
//    }
// }

// for (let i=1; i<10; i++){
// if(i==5){
//   console.log(i);   
//    break;
// }
// console.log(i);
// }

// for (let i = 1; i <=5; i++){
//    if(i === 3) {
//       continue; // i = 3 болғанда итерацияны өткізіп кетеді
//    }
//     console.log(i); // 1,2,4,5 (3 жоқ)
// }

// for (let i =10; i>=0; i--){
//    if(i == 5 || i ==6){
//       continue;
//    }
//    console.log(i);
// }

// let sum = 0; 
// for (let i = 1; i <= 100; i++) {
//     sum += i; 
// }
// console.log(sum);

// let num = +prompt("кез келген сан жазыныз")
// let sum=0;

// for (let i = 1; i<=num; i++){
//    sum = sum + 1;
//    console.log("sum бізде қазір->" + sum);
// }
// alert(num + " дейінгі сандардын қосындысы" + sum);

let number = parseInt(prompt("Сан енгізіңіз:"));
 for (let i = 1; i <= number; i++) { console.log("3ke jane 5ke qaldyksyz bolinetin san: 15")
     if (i % 3 === 0 && i % 5 === 0) {
         console.log(i); 
         if (i % 2 === 0) {
             console.log("3-ке және 5-ке қалдықсыз бөлінетін сан: "+i);
             break; 
         }console.log("30 саны 3-ле жане 5-ле болынеды жанеде ол жуп сан => break!");
     } 
 }

// let a = +prompt("сан енгізіңіз")
//     for (let i = 1; i <= a; i++) {
//       console.log("3ke jane 5ke qaldyksyz bolinetin san: 15")
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("3-ке және 5-ке қалдықсыз бөлінетін сан: "+i);
//         }
//         if  (a % 2 == 0) {
//         break;
//         } 
//     }console.log("30 саны 3-ке және 5-ке бөленеді жәнеде ол жұп сан =>  BREAK!");