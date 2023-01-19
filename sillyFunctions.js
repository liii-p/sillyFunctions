function goodbye(name) {
    console.log("Bye " + name + ".");
}

goodbye("Lianna");

function plusFive(num) {
  console.log(num  + 5);
}

plusFive(43);

function averageOfTwo(num1, num2) {
  console.log((num1 + num2) / 2);
}

averageOfTwo(32, 52);

function hello(str) {
  console.log("Hello " + str);
}

hello("there");

function divideByThree(num) {
    console.log(num / 3);
}

divideByThree(34);

function whisper(str) {
   console.log("..." + str.toLowerCase() + "...");
}

whisper("HEY");

function averageOfFour(num1, num2, num3, num4) {
    console.log((num1 + num2 + num3 + num4) / 4);
}

averageOfFour(3,5,645,2);

function yell(str) {
    console.log(str.toUpperCase() + "!!!");
}

yell("I'm over here");

function echo(str) {
    let echo1 = str.toUpperCase();
    let echo2 = str;
    let echo3 = str.toLowerCase();
    
    console.log(echo1 + " ... " + echo2 + " ... " + echo3);
  }

echo("What's going on?");