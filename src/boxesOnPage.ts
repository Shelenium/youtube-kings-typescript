export default function boxesOnPage() {
  	let n: number = Math.floor(window.innerWidth / 350);
  	if (n == 0) {
    	n = 1;
  	}
  	if (n > 4) {
  		n = 4;
  	}
  	return n;
}