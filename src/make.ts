export default function make(id:string,func:() => boolean):boolean {
	let elemId:HTMLElement = document.getElementById(id);
 	if (elemId.classList.contains('disabled')) {
		elemId.classList.remove('disabled');
    	elemId.addEventListener('click', func);
  	}
  	return true;
}