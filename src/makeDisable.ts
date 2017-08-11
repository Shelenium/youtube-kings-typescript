export default function makeDisable(id:string,func:() => boolean):boolean {
	var elemId:HTMLElement = document.getElementById(id);
	if (elemId) {
	  	if (!elemId.classList.contains('disabled')) {
	    	elemId.classList.add('disabled');
	    	elemId.removeEventListener('click', func);
	  	}
	}
	return true;
}