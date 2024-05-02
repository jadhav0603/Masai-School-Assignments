const input = document.getElementById("query");
const DefaulttableRow = document.getElementById("DefaulttableRow");
const DebouncetableRow = document.getElementById("DebouncetableRow");
const ThrotteltableRow = document.getElementById("ThrotteltableRow");

const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

// write your js code here

let dataArray = [];
input.addEventListener("input", async ()=>{
    //defaultText.innerText = input.value;
 
    //dataArray = await getData();
    defaultData();
    debounceData();
    throttleData();

})

async function getData(){

        let data = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${input.value}`)
        let result = await data.json()
        console.log(result)

        return result;
     
}   

async function defaultData(){
    DefaulttableRow.innerText="";
    defaultText.innerText = input.value;
    dataArray = await getData()
    dataArray.forEach((ele)=>{
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td> ${ele.id} </td>
            <td> ${ele.name} </td>
            <td> ${ele.username} </td>
        `
        DefaulttableRow.append(tr);
    })
}



let qt
let debounceArray = [];
function debounceData(){
    let values=input.value
    clearInterval(qt);
    
    qt = setTimeout(async ()=>{
        debounceText.innerText = values;
        DebouncetableRow.innerText="";

        debounceArray = await getData();
        debounceArray.forEach((ele)=>{
            let tr = document.createElement("tr")
            tr.innerHTML = `
            <td> ${ele.id} </td>
            <td> ${ele.name} </td>
            <td> ${ele.username} </td>
            `
            DebouncetableRow.append(tr)
        })
    },500)
}

let flag = false;
let throttleArray=[];
function throttleData(){
    let values=input.value
    if(flag==false){
        ThrotteltableRow.innerText="";
        throttleText.innerText=values;
        flag =true;
       
        setTimeout(async ()=>{
            flag=false;
            throttleArray = await getData();
            throttleArray.forEach((ele)=>{
                let tr = document.createElement("tr")
                tr.innerHTML = `
                <td> ${ele.id} </td>
                <td> ${ele.name} </td>
                <td> ${ele.username} </td>
                `
                ThrotteltableRow.append(tr)
            })
        },500)
    }
    else{
        setTimeout(()=>{
            throttleText.innerText=values
        },500)
    }
}