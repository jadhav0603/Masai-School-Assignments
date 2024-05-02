window.onload= function (){
    let importData = localStorage.getItem('navbar');
    document.getElementById('importHeading').innerHTML = importData;
}