export default function deleteElem(id:string) {
	let mustDue:HTMLElement = document.getElementById(id);
	if (mustDue) {
		mustDue.remove();
	}
}