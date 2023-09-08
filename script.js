//your code here
function get(){
	const input=document.getElementById("newTodoInput").value;
	const list=document.getElementById("todoList");
	const li=document.createElement("li");
	li.innerText=input;
	input.innerText="";
	list.appendChild(li);
}
const button=document.getElementById("addTodoBtn");
button.addEventListener("click",get);
