//your code here
function get(){
	const list=document.getElementById("todoList");
	const li=document.createElement("li");
	li.innerHTML=document.getElementById("newTodoInput").value;
	list.appendChild(li);
}
const button=document.getElementById("addTodoBtn");
button.addEventListener("click",get);
