// function calc(x,y,z){
// 	let result = 0;
// 	if(y === '+'){
// 		result = (x+z); 
// 	}

// 	else if(y === '-'){
// 		result = (x-z); 
// 	}

// 	else if(y === 'x'){
// 		result = (x*z); 
// 	}

// 	else if(y === '/'){
// 		result = (x/z); 
// 	}


// 	alert(result);
// }
 	
// calc(4,'/',4);
let arr = [];
let prNumber = 0;
let screen = document.getElementById('sc');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two =  document.getElementById('two');
let three = document.getElementById('three'); 
let four = document.getElementById('four');
let five = document.getElementById('five'); 
let six = document.getElementById('six');
let seven = document.getElementById('seven'); 
let eight = document.getElementById('eight');
let nine = document.getElementById('nine'); 
let cleaner = document.getElementById('cleaner');
let plus = document.getElementById('plus');
let less = document.getElementById('less');
let times = document.getElementById('times');
let divide = document.getElementById('divide');
let clear = document.getElementById('clear');
let result = document.getElementById('result');


zero.addEventListener('click', input);
one.addEventListener('click', input);
two.addEventListener('click', input);
three.addEventListener('click', input);
four.addEventListener('click', input);
five.addEventListener('click', input);
six.addEventListener('click', input);
seven.addEventListener('click', input);
eight.addEventListener('click', input);
nine.addEventListener('click', input);
cleaner.addEventListener('click', cleaning);
plus.addEventListener('click', sum);
less.addEventListener('click', substract);
times.addEventListener('click', multiply);
divide.addEventListener('click', dividing);
clear.addEventListener('click', clearing);
// result.addEventListener('click', equals);


function input(){
		arr.push(this.innerHTML);
		screen.innerHTML = arr;
}

function clearing(){
	if(screen.innerHTML.length === 1){
		screen.innerHTML = 0;
	}
	else{
	arr.pop();
	screen.innerHTML = arr;
	// console.log(arr.length);
}

return screen.innerHTML;

}

function cleaning(){
	screen.innerHTML = 0;
	arr = [];
}

function sum(){
	prNumber = prNumber + screen.innerHTML;
	screen.innerHTML = screen.innerHTML + ',+';
	arr.push('+');
	console.log(prNumber);
	screen.innerHTML = 0;


}

function substract(){
	screen.innerHTML = screen.innerHTML + '-';

}

function multiply(){
	screen.innerHTML = screen.innerHTML + 'x';
}

function dividing(){
	screen.innerHTML = screen.innerHTML + '/';	
}

// function equals(){
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] === '+'){
// 		}
// 	}
// }
	











// x.addEventListener("click", function(){
// 	y.innerHTML = y.innerHTML + x.innerHTML;
// })

// p.addEventListener("click", function(){
// 	y.innerHTML = y.innerHTML + '+';
// })

// tw.addEventListener("click", function(){
// 	y.innerHTML = y.innerHTML + tw.innerHTML;
// })

// res.addEventListener("click", function(){
// 	y.innerHTML = parseInt(x.innerHTML) + parseInt(tw.innerHTML);
// })

// clean.addEventListener("click", function(){
// 	y.innerHTML = 0;
// })



// let xxxx = document.querySelectorAll('.calc-btn')
// .addEventListener("click", function(){
// 	alert("daf");
// })











