//we need to have an array of elements to save the tasks
var todoItems= [1,2];

//javascript object declaration(kind of object needed)

var singleTodoItem={
taskTitle: "", //for saving the title
taskDescription: "", //saving the description
taskDeadline: "" //the deadline of the task added

};
//making an array of objects

var todoItems=[
//making an empty array on which tasks would be added
];

//referring HTML elements
var todoListElement=document.getElementById("todoList");
var taskTitleInputElement= document.getElementById("taskTitleInput");
var taskDescriptionInputElement=document.getElementById("taskDescriptionInput")
var taskDeadlineInputElement=document.getElementById("taskDeadlineInput");

//onclicking the add task button the following function would be called
function addTask(){
var taskTitle=taskTitleInputElement.value;
var taskDescription=taskDescriptionInputElement.value;
var taskDeadline=taskDeadlineInputElement.value;

var newTask={
   taskTitle: taskTitle,
   taskDescription: taskDescription,
   taskDeadline: taskDeadline
};
todoItems.push(newTask);

//now we need to manipulate the DOM again
render();

taskTitleInputElement.value="";
taskDescriptionInputElement.value="";
taskDeadlineInputElement.value="";
}

function deleteTask(index){
   var todoTemp=[];
   for(var i=0;i<todoItems.length;i++){
       if(i!=index){
           todoTemp.push(todoItems[i]);
       }
   }
   todoItems=todoTemp;
   render();
}

//this function is called during the execution of the editing of the task
function addEditedTask(){
    //fetching the elements
    var taskTitleInputElement1= document.getElementById("editTaskTitle");
 var taskDescriptionInputElement1=document.getElementById("editTaskDescription")
 var taskDeadlineInputElement1=document.getElementById("editTaskDeadline");
 //getting the values present at the respective ids
 var taskTitle=taskTitleInputElement1.value;
 var taskDescription=taskDescriptionInputElement1.value;
 var taskDeadline=taskDeadlineInputElement1.value;
 //creating a new modified object to be added to the current list
 var newTask={
    taskTitle: taskTitle,
    taskDescription: taskDescription,
    taskDeadline: taskDeadline
 };
 //pushing the newly created list into the array of objects to be rendered
 todoItems.push(newTask);
 //updating the innreHTML of the editform to make it empty as it is not required now
 document.getElementById("edit").innerHTML="";
 
 //now we need to manipulate the DOM again
 render();
 
 taskTitleInputElement1.value="";
 taskDescriptionInputElement1.value="";
 taskDeadlineInputElement1.value="";
 }

//function to edit an existing task
function editTask(index)
{
   console.log(todoItems);
   //creating a new form to edit the selected task
   var editform=`<form class="new-item-add-form">
   <h2>Edit Task?</h2>
   <input type="text" placeholder="Task Title"  id="editTaskTitle">
   <input type="text" placeholder="Task Description" id="editTaskDescription">
   <input type="date" placeholder="Task Deadline" id="editTaskDeadline">
</form>
<button class="edit-task-btn" id="done" onclick="addEditedTask()">Done</button>`
//using the already existing html element to view the form
document.getElementById("edit").innerHTML=editform;
//fetching the contents of the todo items at specified index
var title= todoItems[index].taskTitle;
var description=todoItems[index].taskDescription;
var deadline=todoItems[index].taskDeadline;

//getting the elements of the edit form
var a=document.getElementById("editTaskTitle");
var b =document.getElementById("editTaskDescription");
var c=document.getElementById("editTaskDeadline");
//setting the values of the edit form
a.value=title;
b.value=description;
c.value=deadline;
//deleting the task already present in the task list to attach the modified or edited task
deleteTask(index);

}



function render(){
var textHtml="";

//looping through the array of objects
for(var i=0;i<todoItems.length;i++)
{
   textHtml+=`<div class="todo-list-item ">
               <div class="task-title">${todoItems[i].taskTitle}</div>
               <div class="task-description">${todoItems[i].taskDescription}</div>
               <div class="task-deadline">${todoItems[i].taskDeadline}</div>
               <a href="#" class="delete-btn" onclick="deleteTask(${i})">Delete</a>
               <a href="#" class="edit-btn" onclick="editTask(${i})">Edit Task</a>
               </div>`
}
todoListElement.innerHTML=textHtml;

}

