const getCategoriesData = async () => {
  // code here
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await response.json();
    console.log(data);
    return data;
} catch (error) {
    console.error('something went wrong:', error);
    return 'something went wrong';
}
};

const getIngredientData = async () => {
  // code here
 try{
  let data = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
  let result = await data.json();
  console.log(result);
  return result;
 }catch(error){
    console.error("something went wrong", error)
    return "something went wrong";
 }

};

window.onload = function () {
  //  get the buttons here and add click event
  document.getElementById("get-category-data").addEventListener("click", function(){
    getCategoriesData();
  })
  document.getElementById("get-ingredient-data").addEventListener("click", function(){
    getIngredientData();
  })

  
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
