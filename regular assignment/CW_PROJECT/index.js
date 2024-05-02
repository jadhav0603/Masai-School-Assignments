(function (){
    let smartBasket = document.getElementById('smartBasket')
    let bestSeller = document.getElementById('bestSeller');


    fetchData("vegetables", smartBasket)
    fetchOffer("bankDetails")
    fetchData("bestSeller", bestSeller)
    fetchOffer("topOffers")
    fetchOffer("fruit&veg")
    fetchOffer("yourDailyStaples")
    fetchOffer("beverage")
    slider();
    
})()



async function fetchData(name,id){
    let data = await fetch (`http://localhost:3000/${name}?_page=${2}&_limit=4`);
    let result = await data.json();
    veggiData = result;
    //console.log(result); 
    displayData(result,id);  
};


function displayData(result,id){
    id.innerText="";
    result.forEach((ele) => {
        let div = document.createElement("div")
        div.id="smartBasketChild";
        div.innerHTML = `
            <p id="dis">${ele.discount}%OFF </p>

            <img src=${ele.image} />
            
            <div id=vegSymbol>
                <div></div>
            </div>

            <p id="fresho"> ${ele.fresho} </p>
            <p id="title"> ${ele.name} </p>
            
            <select id="kg">
                <option value="1">1 kg</option>
                <option value="3">3 kg</option>
                <option value="5">5 kg</option>
            </select>
            
            <div id="org-dis-amt">
                <h4><i class="fa-solid fa-indian-rupee-sign"></i>
                ${ele.original_price - (Math.ceil(ele.original_price * ele.discount / 100))} </h4>
                <p><del><i class="fa-solid fa-indian-rupee-sign"></i>
                ${ele.original_price}</del> </p>
            </div>

            <button id="bookmark"> <i class="fa-regular fa-bookmark"></i> </button>
            <button id="add" onclick="increaseCount()"> Add </button>

            `
        id.append(div);
    }) 
}   

let next = document.getElementById('next')
next.addEventListener('click',async ()=>{
    let page = ++pageNo; 
    fetchData(page)
})

let prev = document.getElementById('prev')
prev.addEventListener('click',async ()=>{
    let page = --veggipageNo;
    
    fetchVeggiData(page)
})



//bank offers 

async function fetchOffer(key){
    //console.log(key);
    let data = await fetch(`http://localhost:3000/${key}`)
    let result = await data.json();
    //console.log(result);
    displayOffers(result,key);
}

function displayOffers(result,key){
    let bankOffer = document.getElementById(key)
    result.forEach((ele) => {
        let div=document.createElement("result")
        div.id="bankOfferBasket";
        div.innerHTML = `
           <a href="bank.html"> <img src=${ele.image}> </a>
        `
        bankOffer.append(div);
    })
}


async function slider (){
    let data = await fetch ("http://localhost:3000/slider")
    let result = await data.json()

    //console.log(result)
    
    let slideShowContainer = document.getElementById("slideShowContainer")
    let index=0;
    
    function showSlide(index){
        slideShowContainer.innerHTML= `<img src=${result[index].image} >`
    }
    
    function nextSlide(){
        index=(index+1) % result.length;
        showSlide(index)
    }
    
    showSlide(index)
    
    setInterval(nextSlide,2000)
    
}


let storedNames = localStorage.getItem('name');
window.onload = ()=>{
    if(storedNames){
        let login=document.getElementById('loginBtn')
        let name=localStorage.getItem('name');
        login.innerHTML =`<i class="fa-regular fa-user"></i> ${name}`;
    }
} 

let basketNum=0;
let basketCount = document.getElementById('basketCount')
function increaseCount(){
    basketCount.innerText = ++basketNum;

    let exportData = document.getElementById("smartBasketChild").innerHTML
    localStorage.setItem(`addBtnData`,exportData);
}



function searchData(optionValue){
    if(optionValue){
        window.location.href = "searchData.html?option=" + optionValue;
    }
}


function offers(optionName){
    window.location.href = "searchData.html?option=" + optionName;
}


