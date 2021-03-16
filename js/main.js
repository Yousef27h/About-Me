'use strict';
let result1=0;
let major =prompt('Is my major civil engineering?');
switch (major.toLowerCase())
{
case 'yes':
case 'y':
  result1=result1+1;
  alert('It is Correct !');
  console.log(major);
  break;
case 'no':
case 'n':
  alert('Try Again!!');
  console.log(major);
  break;
}

let age =prompt('Am I 35 years old?');
switch (age.toUpperCase())
{
case 'yes':
case 'y':
  alert('Wrong');
  console.log(age);
  break;
case 'no':
case 'n':
  result=result+1;
  alert('You guessed it ');
  console.log(age);
  break;
}

let Language= prompt('Do I speak Spanish?');
switch (Language.toLowerCase())
{
case 'yes':
case 'y':
  alert('A little bit');
  console.log(Language);
  break;
case 'no':
case 'n':
  result1=result1+1;
  alert('Unfortunately');
  console.log(Language);
  break;
}

let name1= prompt('Is my name Mohammad?');
switch (name1.toUpperCase())
{
case 'yes':
case 'y':
  result1=result1+1;
  alert('obvious');
  console.log(name1);
  break;
case 'no':
case 'n':
  alert('obvious');
  console.log(name1);
  break;
}

let met= prompt('Have we met before?');
switch (met.toLowerCase())
{
case 'yes':
case 'y':
  result1=result1+1;
  alert('Me too!');
  console.log(met);
  break;
case 'no':
case 'n':
  alert('NOOOO!');
  console.log(met);
  break;
}


alert('You have 4 guesses, guess from 1-20');

let answer = 13;
let guess = prompt('what is your guess ?');

for (let i=0;i<=4;i++){
  if (answer === guess){
    result1=result1+1;
    alert('Your guess is right');
    break;
  }else{
    guess = prompt('Try Again');
  }
}

alert('You have 6 guesses, guess one off my favorite fruit');

let fruit = ['orange ,kiwifruit,cherrirs']; 
let guess1 = prompt('guess one off my favorite fruit');

for(let i=0;i<=6; i++){
  if (guess1 ==='orange' || guess1==='kiwifruit' || guess1 ==='cherrirs'){
    result1=result1+1;
    alert('Correct !!');
    break;
  }else{
    guess1 = prompt('Wrong !');
  }
}
alert('Your result ' + result1);

