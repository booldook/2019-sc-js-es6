// 전역변수
var txt = '가나다라';

// jQuery selector
var $wrap = $("#wrap1");
// console.log($wrap); //jQuery 객체
// console.log($wrap[0]); //jQuery 객체를 자바스크립트 객체로...
$wrap.append('<span>'+txt+'</span>');
$("#wrap1").find("span").css({"color": "red", "font-size":"2rem"});

// ES5
var wrap2 = document.getElementById("wrap2");
wrap2.innerHTML = '<span>'+txt+'</span>'; // jQuery의 html()과 같다
// console.log(wrap2); // JS 객체
// console.log($(wrap2)); // JS 객체를 jQuery 객체로...
console.log(wrap2.childNodes[0]);
document.getElementsByTagName("span")[1].style.color = "red";
document.getElementsByTagName("span")[1].style.fontSize = "2rem";
wrap2.childNodes[0].style.color = "blue";
wrap2.childNodes[0].style.fontSize = "3rem";

// ES6
var wrap3 = document.querySelector("#wrap3");
var elem = document.createElement('span'); // 화면에는 반영되지 않고 변수로 존재하는 태그 객체 생성
var txt = document.createTextNode(txt);
elem.appendChild(txt);
wrap3.appendChild(elem);
//console.log(document.querySelectorAll("span")[2]);
console.log(  wrap3.querySelectorAll("span")[0]  );
document.querySelectorAll("span")[2].setAttribute("style", "color: red; font-size: 2rem;");
wrap3.querySelectorAll("span")[0].setAttribute("style", "color: blue; font-size: 3rem;");