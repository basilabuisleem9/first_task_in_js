
// // data type 

// // Boolean: True, False
// // Array: ["facebook.com", "youtube.com", "google.com"]
// // Object: {firstName: "basel", lastName: "nemer"}
// // String: "JavaScript"
// // Number: 25
// // Null

// var
//     discount = true;

// if ( discount === true){
//     price = 300
// }

// else{
//     price= 450
// }

//  console.log(price);

 

// // variabe 

// // var user = "basel";
// // console.log(user);





// // Template Literals 


// // let a = "We Love";
// // let b = "JavaScript";
// // let c = "And";
// // let d = "Programming";

// // console.log(a = " \"\" " + b +
// // "\n" + c + " " + d);

// // console.log(`${a} "" '' \\ ${b}
// // ${c} ${d}`);




// // document.write("<h1>hi basel</h1>")


// // console.table(["basel","nmer","saleem"])





// // #################################### Array #####################################

// var friend_name =["basel" , "ahmad" , "noor" , ["khaled", "lujain"] ]

// console.log(friend_name)
// console.log(friend_name[1])
// console.log(friend_name[3][1])
// console.log(friend_name[3][1][0])


// console.log(`hello ${friend_name[1]}`)


// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };
// console.log(person.firstName)  



// // #################################################### logical operation ########################################

// // Not !


// console.log(true)
// console.log(!true)

// console.log(10 == "10")
// console.log( !10 == "10")

// // && And


// console.log( 10 == "10" && 10 > 5)


// // || or 


// console.log( 10 == "10" || 10 < 5)


// // Arithmetic 

// // %

// let x = 9;
// let y = 2;
// let z = x % y;


// // ############################# function ###################################### 


// function say_hello() {

//     console.log("hi basel ")

// }
// say_hello()




// function say_how_are_you(name){
//     console.log(`how are you ${name}`)

// }
// say_how_are_you("basel")





// function double(x) {

//     var y = (x * 2)
//     console.log(y)
// }
// double(15)



// // ################################ time #####################
// const d = new Date();

// console.log(d)



// var number = 2
//     number++
//     y=number

// console.log(y)


// ###################################################################################################
// ############################################# task ################################################





// function tellFortune(name , jop ,geographic ,kids){

//     y = (`You will be a ${jop} in ${geographic} and have a ${kids} kids`)
//      console.log(y)
// }

// tellFortune('Alice', 'software engineer', 'Jordan', 3)




// function calculateDogAge(age){

//     dog_age = (`Your doggie is ${age*7} years old in dog years!`)
//       console.log(dog_age)

// }
// calculateDogAge(2)



// function calculateSupply(age , arguments){

//     need=(`You will need ${((100-age)*365)*arguments} cups of tea to last you until the ripe old age of 100`)
//      console.log(need)
// }

// calculateSupply(30 , 3)


// function called_cube(cube) {
//     cal_cube = cube**3
//      console.log(cal_cube)

// }
// called_cube(3)


// function called_multiply( X , Y ){
//     cal_multiply = (X * Y )
//     console.log(cal_multiply)
// }
// called_multiply(5 , 4)




// function called_fullName(firstName ,lastName){
//     full_name = (`${firstName} ${lastName}`)
//     console.log(full_name)
// }
// called_fullName( "basel" , "nmer" )



// function called_average(z , v , b , t, r){

//     average = (`${(z + v + b + t + r)/5}`)
//     console.log(average)
// }
// called_average( 1 ,2 ,3 ,4 ,5)



// function called_randomNumber(){
//     cal_rand = Math.random(2 , 4).toFixed(4)
//     console.log(cal_rand)
// }
// called_randomNumber()




// // function calculateDogAge(age){

// //     if (age < 0){
// //         window.alert("ths number of age is negative")
// //     }

// //     else{

// //     dog_age = (`Your doggie is ${age*7} years old in dog years!`)
// //       window.alert(dog_age)}

// // }
// // calculateDogAge(52)


// function called_greet(name_x){
//     cal_greet = (`"hello ${name_x}" `)
//     console.log(cal_greet)
  
//   }
//   called_greet("adam")



// function canIGetADrivingLicense(age){
//     if (age < 20){
//     console.log(`"please come back after ${20 - age} years to get one"`)}
//     else {
//         console.log("yes you can")
//     }
// }

// canIGetADrivingLicense(30)

// function sameLength(string_1 , string_2){


//     console.log(string_1.length)
//     console.log(string_2.length)

//     let r = string_1.length 
//     let f = string_2.length 

//     if (r == f){
//         console.log(true)
//     }

//     else {
//         console.log (false)
//     }
  
// }
// sameLength("basel","sdsfst")



// //   basel_number = "baxczsel".length
// //   console.log(basel_number)


// function larger_Nubmer( number_1 , number_2){

//     console.log(number_1)
    
//     if (number_1 > number_2) {
//       console.log(number_1)
//     }
//     else{
//       console.log(number_2)
//     }
//   }
  
//   larger_Nubmer( 11 , 20)



// function smallerNubmer(Number_1 , Number_2 , Number_3){
//     if ( Number_1 < Number_2 && Number_1 < Number_3){
//     console.log(Number_1)
//     }
//     else if (Number_2 < Number_1 && Number_2 < Number_3){
//         console.log(Number_2)

//     }

//     else{
//     console.log(Number_3)

//     }
// }smallerNubmer(10 , 4 ,12)




// function shorterString(word_1 , word_2 , word_3 , word_4 , word_5 ){
//     let w_1 = word_1.length
//     let w_2 = word_2.length
//     let w_3 = word_3.length
//     let w_4 = word_4.length
//     let w_5 = word_5.length

//     if (w_1 < w_2 &&  w_1 < w_3 && w_1 < w_4 && w_1 < w_5){
//         console.log(word_1)
//     }

//     else if (w_2 < w_1 && w_2 < w_3 && w_2 < w_4 && w_2 < w_5){
//         console.log(word_2)
//     }
//     else if (w_3 < w_1 && w_3 < w_2 && w_3 < w_4 && w_3 < w_5 ){
//         console.log(word_3)
//     }
//     else if (w_4 < w_1 && w_4 < w_2 && w_4 < w_3 && w_4 < w_5 ){
//         console.log(word_4)
//     }
    
//     else {
//         console.log(word_5)
//     }
    

// }shorterString("air","fs","car","b","ns")



// function longerString(word_1 , word_2 , word_3 , word_4  ){
//     let w_1 = word_1.length
//     let w_2 = word_2.length
//     let w_3 = word_3.length
//     let w_4 = word_4.length
  

//     if (w_1 > w_2 &&  w_1 > w_3 && w_1 > w_4 ){
//         console.log(word_1)
//     }

//     else if (w_2 > w_1 && w_2 > w_3 && w_2 > w_4 ){
//         console.log(word_2)
//     }
//     else if (w_3 > w_1 && w_3 > w_2 && w_3 > w_4  ){
//         console.log(word_3)
//     }
    
//     else {
//         console.log(word_4)
//     }
    

// }longerString("air","tshhhad","car","github")


// function isEven(number_is_even){
//     if (number_is_even % 2 == 0 ){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
  
// }isEven(9)


// function isOdd(number_is_odd){ 

//     if (number_is_odd % 2 !== 0 ){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
  
// }isOdd(10)



// function positive(p_number){
//     if (p_number < 0){
//         console.log(p_number*-1)
//     }
//     else{
//         console.log(p_number)
//     }

// }positive(-3)



// function called_randomNumber(min, max){
//     cal_rand = Math.random()* (max - min + 1) + min
//     console.log(cal_rand)
// }
// called_randomNumber(1,8)



// function scoreInUniversty(parameters){
//     if (100 >= parameters > 95){
//       console.log("A")
//     }
//     else if  (95 > parameters >85){
//       console.log("B")
//     }
//     // if (100 >= parameters || parameters >=95){
//     //   console.log("A")
//     // }
  
//   }
//   scoreInUniversty(95)



// // function counter(num_1,num_2){

// //     console.log(Math.max(num_1, num_2));
  
  
// // }
// //   counter(20,22)



  
// function counter(num_1, num_2){

//     console.log(Math.max(num_1,num_2));


//  }
// counter(22,20)





function scoreInUniversty_2(degree){
    switch (degree){
      case 0 :
        degree >= 95 && degree <= 100 
        console.log("A")
        break
  
      case 1:
         degree >= 85 && degree <= 94 
        console.log("B")
        break
      case 2:
       degree >= 70 && degree <= 84 
        console.log("c")
        break
      case 3 :
      degree >= 50 && degree <= 69 
        console.log("d")
        break
      case 4:
      degree >= 0 && degree <= 49 
        console.log("f")
        break
  
  
    }
  }scoreInUniversty_2(90)
