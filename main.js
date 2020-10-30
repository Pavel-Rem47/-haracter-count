class WordCount extends HTMLElement {
	
	constructor() {
		super();
		this.className = 'word-count'
		this.innerHTML = `
			<textarea class = 'text-area' type = 'text' autocomplete = 'off' rows="число" placeholder = 'Введите строку...'></textarea>
				<div class= 'info'>
					<div><div>Кол-во символов:</div><div class = 'symbol-in-textarea'></div></div>
					<div><div>Кол-во пробелов:</div><div class = 'space-in-textarea'></div></div>
					<div><div>Кол-во слов:</div><div class = 'word-in-textarea'></div></div>
				</div>
			<input type = 'button' class = 'calculateBtn' value = 'Подсчитать'>
		`
		this.textArea = this.querySelector('.text-area');
		this.symbolInTextarea = this.querySelector('.symbol-in-textarea');
		this.spaceInTextarea = this.querySelector('.space-in-textarea');
		this.wordInTextarea = this.querySelector('.word-in-textarea');
		this.calculateBtn = this.querySelector('.calculateBtn');
	}
	connectedCallback() {
		this.calculate()
	}
	calculate() {
		let area = this.textArea;
		let symbolInTextarea = this.symbolInTextarea;
		let spaceInTextarea = this.spaceInTextarea;
		let wordInTextarea = this.wordInTextarea;
		this.calculateBtn.onclick = function() {
			let str = area.value;
			let space = 0;
			let word = 0;
			let symb = 0;
			
			str = Array.from(str);
			
			if (str.length==0){
				symb = 0;
				space = 0;
				word = 0;
			}
			else if (str.length!=0){
				symb = str.length;
				word = 1;
			}
			for (let i=0; i<str.length-1; i++) {
					if (str.length!=0 && str[i]==' ') {
						word++;
						space++;
					}
					
			}
			symbolInTextarea.innerHTML = symb;
			wordInTextarea.innerHTML = word;
			spaceInTextarea.innerHTML = space;
		}
	}
}

customElements.define('word-count', WordCount)

document.addEventListener("DOMContentLoaded", function(event) {
    document.body.appendChild(new WordCount())
});
