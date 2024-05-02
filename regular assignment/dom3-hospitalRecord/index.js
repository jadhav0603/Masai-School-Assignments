// fill in javascript code here
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

addEventListener("submit", function(event){
    doctorData(event)
})
    
function doctorData(event){
    event.preventDefault();
    
    let arr=[];
    let obj={};
    let keyArr = ["name","id","specification","exp","email","mobile","role"];

    for(let i=0; i<keyArr.length; i++)
    {
        if(keyArr[i]=="role")
        {
            if(event.target[3].value > 5)
            {
                obj[keyArr[i]]="Senior";
            }
            else if(event.target[3].value <= 5 && event.target[3].value >=2)
            {
                obj[keyArr[i]] = "Junior";
            }
            else{
                obj[keyArr[i]] = "Trainee";
            }
        }
        else{
            obj[keyArr[i]]=event.target[i].value
        }
    }
    // console.log(obj);
    arr.push(obj);
    // console.log(arr);
    showdata(arr,obj);
}

function showdata(arr,obj)
{
    let tr = document.createElement("tr");
    for(let key in obj)
    {
        let td = document.createElement("td");
        td.append(obj[key]);
        tr.append(td);
    }
    
    let btn = document.createElement("button");
    // btn.style= background-color : "red" ;
    btn.innerText = "Delete";
    btn.style.backgroundColor = "red"
    btn.addEventListener("click", function(){
        deleteBtn(this);
    })

    let td = document.createElement("td")
    td.append(btn) ;
    tr.append(td);

    tbody.append(tr);
}

function deleteBtn(stud){
    let s = stud.parentNode.parentNode
    s.parentNode.removeChild(s);
}