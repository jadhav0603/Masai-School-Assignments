let form = document.getElementById("form");

    let tbody = document.querySelector("tbody");
  
    function recorddata(event){
    event.preventDefault();

    let objkey = ["name","ID","Dep","Exp","email","mobile","role"];
    let data = [];
    let obj={}; 
    for(let i=0; i<form.length; i++)
    {
        if(i==6)
        {
            if(event.target[3].value > 5)
            {
                obj[objkey[i]] = "Senior"
            }
            else if(event.target[3].value <= 5 && event.target[3].value >= 2)
            {
                obj[objkey[i]] = "Junior"
            }
            else{
                obj[objkey[i]] = "Fresher"
            }
        }
        else{
            obj[objkey[i]] = event.target[i].value;
        }
        
    }
    
    data.push(obj);
    
    showdata(data,obj);

    }
    

    function showdata(data,obj)
    {
        let tr = document.createElement("tr");
        
        for(let key in obj)
        {
            let td = document.createElement("td");
            td.innerHTML = obj[key];
            tr.append(td);
        }

        let dltbtn = document.createElement("button");
        dltbtn.innerText="Delete"
        let td = document.createElement("td");
        td.append(dltbtn);
        tr.append(td);
        dltbtn.addEventListener("click",function(){
            deletedata(this);
        })
        
        
        tbody.append(tr);
        
    }

    function deletedata(stud){
        let s = stud.parentNode.parentNode;
        s.parentNode.removeChild(s);
     }

    addEventListener("submit",function(event){
        recorddata(event)
    })