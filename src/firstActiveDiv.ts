export default function firstActiveDiv() {
  	let coll:HTMLCollectionOf<Element> = document.getElementsByClassName('active');
  	if (coll[0]) { 
  		let idNumber:string = coll[0].id;
  		return (+idNumber.slice(6) - 0); 
	} else { 
		return (-1); 
	}
}