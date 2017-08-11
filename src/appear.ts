export default function appear(id: string){
  	let str:HTMLElement = document.getElementById(id);
  		if (str.classList.contains('noDisplay')) {
    		str.classList.remove('noDisplay');
  	}
}