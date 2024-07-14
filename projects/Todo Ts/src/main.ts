import './style.css'
console.log("inam ")
type TodoItem ={
  title:string,
  completed:boolean,
  readonly id:number
}
// interface TodoItem {
//   title:string,
//   completed:boolean,
//   readonly id:number
// }
// const items:Array<TodoItem> = []
const todos : TodoItem[] = []
//---------------------------------------
const todoConatiner = document.querySelector(".todocontainer") as HTMLElement
// console.log(todoConatiner)
const input = document.getElementsByName("title")[0] as HTMLInputElement 
// console.log(input)
const formInput = document.getElementById("myForm") as HTMLFormElement
// console.log(formInput)
//------------------------------------------------
formInput.onsubmit = (e:SubmitEvent)=>{
  e.preventDefault()


  const todo:TodoItem={
    title: input.value,
    completed:false,
    id:Math.floor(Math.random()*100)
  }
  
  todos.push(todo);
  // todo.push(items)
  input.value = ""
  console.log(todos)
  console.log(todo.title)
  renderTodo(todos)
}
//-----------------------------------------------------
//generted function
const generatedTodotem = (title:string, completed:boolean, id:number ) => {
  //creating a div
  const paraDiv:HTMLElement = document.createElement("div")
  paraDiv.className = "todo"
  //creating checkbox
  const checkbox = document.createElement("input") as HTMLInputElement
  checkbox.setAttribute("type", "checkbox");
  checkbox.className ="completed";
  checkbox.checked = completed
  checkbox.onchange=()=>{
    todos.find((item)=>{
      if(item.id === id) item.completed =  checkbox.checked 
      // renderTodo(todos)
      para.className = checkbox.checked? "textCut" : ""
    })
    para.className = checkbox.checked? "textCut" : ""
  }
  //creating a paragrap
  const para = document.createElement("p") as HTMLParagraphElement
  para.className ="listpara"
  para.innerHTML = title
  // creating delete button
  const btnDel = document.createElement("button") as HTMLButtonElement
  btnDel.className ="btndel"
  btnDel.innerText = "Delete"
  btnDel.onclick = () => {
    deleteTodo(id)
    
  }
  ////////////////////////////////////////
  //delete function
const deleteTodo =(id:number)=>{
  let idx = todos.findIndex((item)=>{
    item.id === id
  })
  console.log(idx)
  todos.splice(idx)
  renderTodo(todos)
}

///////////////////////////////////////////////////////


  //appending all elements
  paraDiv.append(checkbox, para, btnDel)
  console.log(paraDiv)
  todoConatiner.append(paraDiv)
}



//-------------------------------------------------------
const renderTodo = (todos:TodoItem[]) => {
  todoConatiner.innerHTML = ""
 todos.forEach((item) => {
  generatedTodotem( item.title, item.completed, item.id )
 });
}