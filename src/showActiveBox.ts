export default function showActiveBox(start:number, amount:number) {
  	for (let i:number = start; i < start + amount; i++) {
    	let active:HTMLElement = document.getElementById('boxDiv' + i);
    	if (active) {
    		active.classList.add('active');
    	}
  	}
}