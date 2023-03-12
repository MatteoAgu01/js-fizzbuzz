let div3 = "Fizz";
let div5 = "Buzz";
let div3_5 = "FizzBuzz";

let container = document.getElementById("container");
let btn = document.querySelector("button[name='go']").addEventListener("click", (go));

const rowPre = '<div class="square"><span>';
const rowSuf = '</span></div>';

function go(){
	calc(100);
}

function calc(n){
	let content = "";

	for (let i = 1; i <= n; i++) {
		if(i%5 == 0){// Divisibile per 5
			if(i%3 == 0){// Divisibile per 3
				console.log(div3_5);
				content += rowPre + div3_5 + rowSuf;
			}
			else{
				console.log(div5);
				content += rowPre + div5 + rowSuf;
			}
		}
		else if(i%3 == 0){// Divisibile per 3
			console.log(div3);
			content += rowPre + div3 + rowSuf;
		}
		else{
			console.log(i);
			content += rowPre + i + rowSuf;
		}
	}

	container.innerHTML = content;
}

//function calcFefo(n){for(let i = 1; i <= n; i++){console.log(i%5==0 && i%3==0 ? div3_5 : (i%3==0 ? div3 : (i%5==0 ? div5 : i)));}}