/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(name , jop ,geographic ,kids){

  y = (`You will be a ${jop} in ${geographic} and have a ${kids} kids`)
   console.log(y)
}

tellFortune('Alice', 'software engineer', 'Jordan', 3)


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){

  dog_age = (`Your doggie is ${age*7} years old in dog years!`)
    console.log(dog_age)

}
calculateDogAge(2)



/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age , arguments){

  need=(`You will need ${((100-age)*365)*arguments} cups of tea to last you until the ripe old age of 100`)
   console.log(need)
}

calculateSupply(30 , 3)

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
 
Ex: greet("Adam")
=> "Hello Adam"
*/
function called_greet(name_x){
  cal_greet = (`"hello ${name_x}" `)
  console.log(cal_greet)

}
called_greet("adam")

/*
5
what is the error:
function double(cat) { use x , this is not attribute 
  return 2 * x;
}

function double(7) { number 7 in attribute , should use var
  return 2 * 7;
}

function double('7') { use ' ' in attribute
  return 2 * 'x';
}
*/




/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

func double1(x) {
  return 2 * x ;
}



functiondouble2 x)
return 2 * x;
}

function double2 (x){
  return 2 * x;
}

function (x) double3 {
  return 2 * x;


function double3 (x)  {
  return 2 * x;


*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function called_cube(cube) {
  cal_cube = cube**3
   console.log(cal_cube)

}
called_cube(3)

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function called_multiply( X , Y ){
  cal_multiply = (X * Y )
  console.log(cal_multiply)
}
called_multiply(5 , 4)

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
  if (age < 20){
  console.log(`"please come back after ${20 - age} years to get one"`)}
  else {
      console.log("yes you can")
  }
}

canIGetADrivingLicense(30)

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(string_1 , string_2){


  console.log(string_1.length)
  console.log(string_2.length)

  let r = string_1.length 
  let f = string_2.length 

  if (r == f){
      console.log(true)
  }

  else {
      console.log (false)
  }

}
sameLength("basel","sdsfst")



/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function larger_Nubmer( number_1 , number_2){

  
  
  if (number_1 > number_2) {
    console.log(number_1)
  }
  else{
    console.log(number_2)
  }
}

larger_Nubmer( 11 , 4 )

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(Number_1 , Number_2 , Number_3){
  if ( Number_1 < Number_2 && Number_1 < Number_3){
  console.log(Number_1)
  }
  else if (Number_2 < Number_1 && Number_2 < Number_3){
      console.log(Number_2)

  }

  else{
  console.log(Number_3)

  }
}smallerNubmer(10 , 4 ,12)

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(word_1 , word_2 , word_3 , word_4 , word_5 ){
  let w_1 = word_1.length
  let w_2 = word_2.length
  let w_3 = word_3.length
  let w_4 = word_4.length
  let w_5 = word_5.length

  if (w_1 < w_2 &&  w_1 < w_3 && w_1 < w_4 && w_1 < w_5){
      console.log(word_1)
  }

  else if (w_2 < w_1 && w_2< w_3 && w_2 < w_4 && w_2 < w_5){
      console.log(word_2)
  }
  else if (w_3 < w_1 && w_3< w_2 && w_3 < w_4 && w_3 < w_5 ){
      console.log(word_3)
  }
  else if (w_4 < w_1 && w_4< w_2 && w_4 < w_3 && w_4 < w_5 ){
      console.log(word_4)
  }
  
  else {
      console.log(word_5)
  }
  

}shorterString("air","tsad","car","github","bsady")

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/


function longerString(word_1 , word_2 , word_3 , word_4  ){
  let w_1 = word_1.length
  let w_2 = word_2.length
  let w_3 = word_3.length
  let w_4 = word_4.length


  if (w_1 > w_2 &&  w_1 > w_3 && w_1 > w_4 ){
      console.log(word_1)
  }

  else if (w_2 > w_1 && w_2 > w_3 && w_2 > w_4 ){
      console.log(word_2)
  }
  else if (w_3 > w_1 && w_3 > w_2 && w_3 > w_4  ){
      console.log(word_3)
  }
  
  else {
      console.log(word_4)
  }
  

}longerString("air","tshhhad","car","github")



/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/


function isEven(number_is_even){
  if (number_is_even % 2 == 0 ){
      console.log("true")
  }
  else{
      console.log("false")
  }

}isEven(9)

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number_is_odd){ 

  if (number_is_odd % 2 !== 0 ){
      console.log("true")
  }
  else{
      console.log("false")
  }

}isOdd(10)

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(p_number){
  if (p_number < 0){
      console.log(p_number*-1)
  }
  else{
      console.log(p_number)
  }

}positive(-3)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function called_fullName(firstName ,lastName){
  full_name = (`${firstName} ${lastName}`)
  console.log(full_name)
}
called_fullName( "basel" , "nmer" )

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function called_average(z , v , b , t, r){

  average = (`${(z + v + b + t + r)/5}`)
  console.log(average)
}
called_average( 1 ,2 ,3 ,4 ,5)

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function called_randomNumber(){
  cal_rand = Math.random().toFixed(4)
  console.log(cal_rand)
}
called_randomNumber()
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function called_randomNumber(min, max){
  cal_rand = Math.random()* (max - min + 1) + min
  console.log(cal_rand)
}
called_randomNumber(1,8)

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(degree){

  if (degree >= 95 && degree <= 100)
    console.log("A")

  else if (degree >= 85 && degree <= 94)
    console.log("B")

  else if (degree >= 70 && degree <= 84)
    console.log("C")

  else if (degree >= 50 && degree <= 69)
  console.log("D")

  else if (degree >= 0 && degree <= 49)
  console.log("F")
  } 
  scoreInUniversty(71);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

function counter(num_1, num_2){

  console.log(Math.max(num_1,num_2));


}
counter(22,20)
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/