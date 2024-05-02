let count = 1

function createTask(task){
  let taskArray = JSON.parse(localStorage.getItem("todo")) || [];

  let obj ={
    id : count,
    isCompleted : false,
    title : task
  }
  count++;
  taskArray.push(obj);
  localStorage.setItem("todo", JSON.stringify(taskArray));

  showData();
}

function showData(){
  let taskArray = JSON.parse(localStorage.getItem("todo")) || [];
  document.getElementById("todo-list").innerText="";

  let div = document.createElement("div");
  taskArray.forEach(function(ele, i)
  {
    // let div=document.createElement("div");

    let id = document.createElement("h6").innerHTML = ele.id;
    let iscom = document.createElement("h6").innerHTML = ele.isCompleted;
    let title = document.createElement("h6").innerHTML = ele.title;
    
    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
  
    dltBtn.addEventListener("click", function(){
      deleteTask(ele.id)
    })
    
    let markBtn = document.createElement("button");
    markBtn.innerText = "Mark As Read";
    
    markBtn.addEventListener("click", function(){
      updateTask(ele.id)
    })
  
    let br = document.createElement("br");
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");

    div.append(id, br, iscom, br1, title, br2, dltBtn, markBtn, br3, br4)
    document.getElementById("todo-list").append(div);
  })
    

}
  

function deleteTask(id){
  let taskArray = JSON.parse(localStorage.getItem("todo")) || [];

  taskArray = taskArray.filter(function(ele, index){
    return ele.id != id
  })

  localStorage.setItem("todo", JSON.stringify(taskArray))
  
  showData();
}

function updateTask(id){
  let taskArray = JSON.parse(localStorage.getItem("todo")) || [];

  taskArray.forEach(function(ele, index){
    if(ele.id == id){
      ele.isCompleted = true;
    }
  });

  localStorage.setItem("todo", JSON.stringify(taskArray))
  
  showData();
}


window.onload = function () {
  document.getElementById("add-task").addEventListener("click",function(){
    let taskName = document.getElementById("input").value;
    createTask(taskName);  
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    createTask,
    deleteTask,
    updateTask
  };
}
