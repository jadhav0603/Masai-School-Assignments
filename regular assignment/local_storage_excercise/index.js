let form = document.getElementById("form")
    
    form.addEventListener("submit",function(event){
        getFormData(event);
    });
    
    let arr=[];
    function getFormData(event){
        event.preventDefault()
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        
        localStorage.setItem("username", name)
        localStorage.setItem("age",age);
        
        form.reset();
    }
    
    let tbody = document.getElementById("tbody")
    
    function setFormData(){
        let name = localStorage.getItem("username");
        let age = localStorage.getItem("age");

        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText = name;
        let td2=document.createElement("td")
        td2.innerText = age;
        tr.append(td1, td2)
        tbody.append(tr)
    }