'use strict';
function onLoad() {

	
	let symb_input = $('.symbol')[0];
	let whitespace_input = $('.whitespace')[0];
	let word_input = $('.word')[0];
	
	
	$('.button')[0].onclick = function() {
		let str = $('.text')[0].value;
		let whitespace = 0;
		let word = 0;
		let symb = 0;
		
		str = Array.from(str);
		
		if (str.length==0){
			symb = 0;
			whitespace = 0;
		    word = 0;
		}
		else if (str.length!=0){
			symb = str.length;
			word = 1;
		}
		for (let i=0; i<str.length-1; i++) {
				if (str.length!=0 && str[i]==' ') {
					word++;
					whitespace++;
				}
				
		}
		symb_input.innerHTML = symb;
		word_input.innerHTML = word;
		whitespace_input.innerHTML = whitespace;
	}
}
