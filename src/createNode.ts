import Tag from './createTag';
import Text from './createTextNode';

export default function createNode(tag:string,text:string){
	let textN:Text = Text(text);
	let elem:HTMLElement = Tag(tag);
	elem.appendChild(textN);
	return elem;
}