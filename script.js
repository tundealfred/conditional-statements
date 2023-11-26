function myFunction(p1, p2) {
  return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById("demo").innerHTML = result;

function myAdd(x1, x2) {
  return x1 + x2;
}

let Answer = myAdd(5, 3);
document.getElementById("demoAdd").innerHTML = Answer;

function mySub(s1, s2) {
  return s1 - s2;
}

let Subtract = mySub(6, 3);
document.getElementById("demoSub").innerHTML = Subtract;

let theNum = Number(prompt("Pick a number"));
if (!Number.isNaN(theNum)) {
  // alert("it is not a number");
  // console.log("The square root is " + theNum * theNum);
  sqAnswer = theNum * theNum;
}

document.getElementById("demosqAnswer").innerHTML = sqAnswer;

// let theNumber = Number(prompt("Pick a number"));

// let theNumAns = console.log(
//   "Your number is the square root of " + theNumber * theNumber
// );
