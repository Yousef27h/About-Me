'use strict';
let result1=0;

function myMajor(){
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
}
myMajor();

function myAge(){
  let age =prompt('Am I 35 years old?');
  switch (age.toUpperCase())
  {
  case 'YES':
  case 'Y':
    alert('Wrong');
    console.log(age);
    break;
  case 'NO':
  case 'N':
    result1=result1+1;
    alert('You guessed it ');
    console.log(age);
    break;
  }
}
myAge();

function myLang(){
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
}
myLang();

function myName(){
  let name1= prompt('Is my name Mohammad?');
  switch (name1.toLowerCase())
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
}
myName();

function meeting(){
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
}
meeting();

function myGuess(){
  alert('You have 4 guesses, guess from 1-20');

  let answer = '13';
  let guess = prompt('what is your guess ?');

  for (let i=0;i<3;i++){
    if (answer === guess){
      result1=result1+1;
      break;
    }else if(answer < guess){
      alert('Too high');
      guess = prompt('Try another guess');
    }else if (answer > guess){
      alert('Too low');
      guess = prompt('Try another guess');
    }
  }
  if (answer === guess){
    alert('You got right!');
  } else {
    alert('The right answer was 13');
  }
}
myGuess();


alert('You have 6 guesses, guess one off my favorite fruit');

function myFruit(){
  let fruits = ['orange ,kiwifruit,cherrirs']; 
  let guess1 = prompt('guess one off my favorite fruit');

  for(let i=0;i<5; i++){
    if (guess1 ==='orange' || guess1==='kiwifruit' || guess1 ==='cherrirs'){
      result1=result1+1;
      alert('Correct !!');
      break;
    }else{
      guess1 = prompt('Wrong !');
    }
  }
}
myFruit();

alert('Your result ' + result1);

