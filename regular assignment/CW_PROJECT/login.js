let login=document.getElementById('loginBtn')

let continues= document.getElementById('continue')
continues.addEventListener('click',()=>{
    let input = document.getElementById('inputName').value;
    localStorage.setItem('name',input)
    window.location.href= 'index.html'
})