let arr = localStorage.getItem("task-list") || [""];
// Write code related to Home page here 
let form = document.querySelector("form")
form.addEventListener("submit", function(event){
    event.preventDefault();
    getFormData()
})

function getFormData(){
    let name = document.getElementById("name").value
    let desc = document.getElementById("desc").value
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    let priority = document.getElementById("priority").value
    
    
    setFormData(name,desc,start,end,priority)
}


//let array = JSON.parse(localStorage.setItem("task-list")) || [];
let array=[];
function setFormData(name,desc,start,end,priority)
{
    let data = new FormData(name,desc,start,end,priority);
    array.push(data);
    
    localStorage.setItem("task-list",JSON.stringify(array));
  
    printData(data);

    //let link = document.createAttribute("script")
    //link.innerHTML = '<script src="./Scripts/done.js">';
}

function FormData(nameValue,desc,start,end,priority)
{
    this.name = nameValue
    this.desc = desc
    this.start = start
    this.end = end
    this.priority = priority
}

//let thead = document.querySelector("thead")
function printData(data)
{
   let tr=document.createElement("tr")
    for(let key in data)
    {
    let td=document.createElement("td")
    td.innerText = data[key]
    tr.append(td);
    }

   let tbody = document.querySelector("tbody")
   //tbody.append(tr)
    
    
}