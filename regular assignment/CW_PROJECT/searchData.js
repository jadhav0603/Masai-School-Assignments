const urlParams = new URLSearchParams(window.location.search);
const optionValue = urlParams.get('option');
console.log(optionValue);

(async function resultData() {
    let data = await fetch(`http://localhost:3000/${optionValue}`)
    let result = await data.json();

    console.log(result);

    let resultDiv = document.getElementById('resultDiv')

    displayData(result, resultDiv);

})();





