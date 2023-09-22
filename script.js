//your code here
// function get(){
// 	const list=document.getElementById("todoList");
// 	const li=document.createElement("li");
// 	li.innerHTML=document.getElementById("newTodoInput").value;
// 	list.appendChild(li);
// }
// const button=document.getElementById("addTodoBtn");
// button.addEventListener("click",get);
function get(){
    const list = document.getElementById("todoList");
    const li = document.createElement("li");
	const val=document.getElementById("newTodoInput").value;
	if(!val){
		get();
	}
	else{
		li.innerHTML = document.getElementById("newTodoInput").value;
    list.appendChild(li);
	}
    // Clear the input box
    document.getElementById("newTodoInput").value = "";
}

const button = document.getElementById("addTodoBtn");
button.addEventListener("click", get);