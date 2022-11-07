// DARKMODE
const darkMode = () => { 
  const darkModeBtn = document.getElementById('darkmode-btn');

  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  const switches = document.querySelectorAll('.switch');

  switches.forEach(element => {
    darkModeBtn.addEventListener('click', () => {
      element.classList.toggle('active');
    });
  });
}

darkMode();


// carousel function
const carousel = () => {
  const arrows = document.querySelectorAll('.arrow');
  const carouselItem = document.querySelectorAll('.carousel-item');
  console.log(carouselItem.length);
  let index = 0;

  if (index === 0) {
    arrows[0].classList.add('hide');
  } else if (index === carouselItem.length -1) {
    arrows[1].classList.add('hide'); 
  } else if (index > 0) {
    arrows[0].classList.remove('hide'); 
  } else if (index < carouselItem.length -1) {
    arrows[1].classList.remove('hide'); 
  }
    
  arrows.forEach((arrow, i) => {

    arrow.addEventListener('click', () => {

      if (i === 0) {
        index -= 1;

        if (index === 0) {
          arrows[0].classList.add('hide');
        } else if (index === carouselItem.length -1) {
          arrows[1].classList.add('hide'); 
        } else if (index > 0) {
          arrows[0].classList.remove('hide'); 
        } else if (index < carouselItem.length -1) {
          arrows[1].classList.remove('hide'); 
        }

        console.log(index)
        arrows[1].classList.remove('hide');
        carouselItem.forEach((item, j) => {
          if (j !== index) {
            item.classList.remove('show-item');
          } else {
            item.classList.add('show-item');
          }
        });      

      } else if (i === 1) {
        console.log('right')
        index += 1;

        if (index === 0) {
          arrows[0].classList.add('hide');
        } else if (index === carouselItem.length -1) {
          arrows[1].classList.add('hide'); 
        } else if (index > 0) {
          arrows[0].classList.remove('hide'); 
        } else if (index < carouselItem.length -1) {
          arrows[1].classList.remove('hide'); 
        }

        console.log(index)
        arrows[0].classList.remove('hide');
        carouselItem.forEach((item, j) => {
          if (j !== index) {
            item.classList.remove('show-item');
          } else {
            item.classList.add('show-item');
          }
        });
      }
      return index;
    });
  });
}

carousel();


// SUMRANGE JAVASCRIPT EXERCISE.
const sumRange = () => {
  let array = [];
  function range(arr) {
    let lowNumber = Math.min(arr[0], arr[1]); 
    let highNumber = Math.max(arr[0], arr[1]);

    for (i = lowNumber; i <= highNumber; i++) {
      array.push(i);
    }
    return array;

  }

  function sum(array) {
    let total = 0;

    for (i = 0; i < array.length; i++) {
      total = total+array[i];
    }
    return total;
  }

  console.log(sum(range([1, 10])));
}

sumRange();

// 8! = 1*2*3*4*5*6*7*8
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(8));
// → 40320



// // Random color While loop
// let randomColor = Math.floor(Math.random()*16777215).toString(16);
// let blue = '00b1de';

// while (randomColor !== blue) {
//   console.log('not blue');    
//   randomColor = Math.floor(Math.random()*16777215).toString(16);
// } 



// chapter 2 exercises - looping a triangle
let hashTag = '';

for (let i = 0; i < 7; i++) {
  hashTag += '#';
  console.log(hashTag);
}

// chapter 2 exercises - FizzBuzz
let numberCount = 0;

for (let i = 0; i < 100; i++) {
  numberCount += 1;
  if (numberCount % 3 === 0 && numberCount % 5 == 0) {
    console.log('FizzBuzz');
  } else if (numberCount % 3 === 0) {
    console.log('Fizz');
  } else if (numberCount % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(numberCount);
  }
}

// chapter 2 exercises - ChessBoard
let board =   ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + '\n' 
            + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '\n' 
            + ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + '\n' 
            + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '\n'
            + ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + '\n' 
            + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '\n' 
            + ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + '\n' 
            + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '\n';

let chessBoard = '';

let size = 8;

for (let i = 1; i <= size; i++) {

  if (i % 2 === 0) {
    for (j = 1; j <= size; j++) {
      if (j % 2 === 0) {
        chessBoard += ' ';
      } else {
        chessBoard += '#';
      }
      if (j === size) {
        chessBoard += '\n';
      }
    }    
  } else {
    for (j = 1; j <= size; j++) {
      if (j % 2 === 0) {
        chessBoard += '#';
      } else {
        chessBoard += ' ';
      }
      if (j === size) {
        chessBoard += '\n';
      }
    }
  }

  if (i === size) {
    console.log(chessBoard);
  }
}

// chapter 3 exercises - minimum
const min = (a, b) => {
  if (a > b) {
    return b;
  } else if (b > a) {
    return a;
  } else {
    return 'both numbers are the same';
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// chapter 3 exercises - recursion
const isEven = (a) => {
  if (a === 0) {
    return true;
  } else if (a === 1) {
    return false;
  } else if (a < 0) {
    return isEven(-a);
  } else {
    return isEven(a - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// chapter 3 exercises - bean counting
const countBs = (a) => {
  let upperCaseB = 0;
  for (let i = 0; i < a.length; i++)
    if (a[i].toUpperCase() === 'B') {
      upperCaseB += 1;
    }
  return upperCaseB;  
}

const countChar = (a, b) => {
  let charNum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 'k') {
      charNum += 1;
    }
  }
  let charString = "There are " + charNum + " " + b + " characters.";
  return charString;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → There are 4 k characters.

// chapter 4 exercises - the sum of a range
function range(start, end, step = start < end ? 1 : -1) {

  // this condition does exactly the same as the one above next to the 'step' parameter.
  // if (step !== undefined) {
  //     step === step;
  // } else if (start < end) {
  //     step = 1;
  // } else if (start > end) {
  //     step = -1;
  // }


  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// chapter 4 exercises - reversing an array
function reverseArray(array) {
  let array2 = [];

  // this method lets us create a new copy of the array without modifying the existing one
  for (let i = array.length - 1; i >= 0; i--) {
    array2.push(array[i]);  
    }

  return array2;
}

function reverseArrayInPlace(array) {

  for (let i = 0; i < Math.floor(array.length/2); i++) {

    // we are creating a copy of the value to reasign it later
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;

  }

  return array;
}

let arrayValue = [7, 2, 3, 4, 5, 6, 7];
let arrayLetters = ["A", "B", "C", "D", "E", "F"];
let arrayCopy = arrayLetters.slice(0);


reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(arrayLetters);
console.log(arrayCopy);
console.log(reverseArray(arrayLetters));

// chapter 4 exercises - a list
function arrayToList(array) {

  // we create two empty objects that represent the outer most object and the one that populates it from within
  let list = {};
  let rest = {};

  // inverse for loop to start creating objects from the end of the array
  for (let i = array.length -1; i >= 0 ; i--) {

    // create property-value pairs for the rest object dinamically with a for loop
    rest.value = array[i];
    // if the index is equal to the end of the array, set the rest property equal to null
    if (i === array.length -1) {
      rest.rest = null;
    // if the index is not at the end of the array, set the rest property to be equal to whatever the list object is equal to at that time  
    } else {
      rest.rest = list;
    }
    // insert the items within the rest object at the end of the loop into the list object
    list = {...rest};

  }

  return list;
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}


function listToArray(list) {

  // set a new list to be equal to the one given as argument and create an empty array to be populated with the values from that list
  let listTwo = list;
  const array = [];

  // create a while statement to loop through the entirety of the given list 
  while (true) {
    // push into the new array the value from the new list
    array.push(listTwo.value);
    // if the rest property within the list is equal to null we break out of the loop
    if (listTwo.rest === null) {
      break;
    }
    // at the end of the loop we set the new list to be equal to whatever is inside its rest property
    // and the loop starts over again with the new list updated so it can keep looking for new values within the list
    listTwo = listTwo.rest;
  }
  
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])))
// -> [10, 20, 30]


function prepend(e, list) {

  // We create a newList object that will contain value and rest properties, we set value equal to e and rest equal to list
  let newList = {value: e, rest: list}

  // Return the new object
  return newList;
}

// The console.log method first uses the deepest function call to crerate an object, 
// then proceeds with the next until it reaches the outer most function call.
console.log(prepend(10, prepend(20, prepend(30, null))));
// → {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}


function nth(list, number) {
  // list = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}

  // First we define a new object, new array and empty binding that will holf the final value we are trying to find
  let newList = list;
  const item = [];
  let itemFound;
  console.log(list);

  // Check if a list is given
  if (!list) {
    return undefined;
  }

  // We use the same method from the listToArray(list) function to populate the new array
  while (true) {
    item.push(newList.value)
    if (newList.rest === null) {
      break;
    }
    newList = newList.rest;
  }

  // Finally we iterate inside that array and look for the item with the same index as the number passed to the function
  for (let i = 0; i < item.length; i++) {
    if (i === number) {
      itemFound = item[i];
    }
  }

  return itemFound;
}

console.log(nth(5)); // pregunta para pipe
// → undefined
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20





