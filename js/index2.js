// ES5 - 변수선언문 var
var sample = 5;
sample = 10;
// 함수선언문
test();
function test() {
  var sample = 20;
  //console.log(sample);
}

// 함수표현식
var test2 = function() {
  //console.log("함수표현식");
}
test2();

//console.log(sample);

// ES6 - var, let, const
for(var i=0; i<10; i++) {

}
//console.log(i);

for(let i2=0; i2<10; i2++) {
  //console.log(i2);
}
//console.log(i2);

var obj = {
  a: 1,
  b: 2
}
var obj2 = obj;
var obj3 = obj;
var obj4 = obj;
console.log(obj);
console.log(obj2);
obj.a = 100;
console.log(obj);
console.log(obj2);

var Obj = (function(){
  function Obj() {
    this.a = 10;
    this.b = 20;
  }
  return Obj;
}());

var obj = new Obj();
var obj2 = new Obj();
var obj3 = new Obj();
var obj4 = new Obj();
console.log(obj);
console.log(obj2);
obj.a = 100;
obj2.a = 200;
console.log(obj);
console.log(obj2);

var arr = [1, 2, 3];
var arr2 = arr;
console.log(arr);
console.log(arr2);
arr[0] = 100;
console.log(arr);
console.log(arr2);

console.clear();
// 상수선언: 상수는 한번 선언하면 더이상 값을 바꿀수 없다.
const a = 10;
console.log(a);
// a = 20; // error

const arr3 = [1, 2, 3, 4, 5];
console.log(arr3);
arr3[2] = 200;
console.log(arr3);

console.clear();
const log = console.log;
const clear = console.clear;
log("hi");

let str = "booldook Hi!";
let search = "ok";
log(  str.startsWith(search)  );
log(  str.endsWith(search)  );
log(  str.includes(search)  );

