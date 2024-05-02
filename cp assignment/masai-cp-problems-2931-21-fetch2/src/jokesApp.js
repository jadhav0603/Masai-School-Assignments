function setJokes(data) {
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div

  let jokeContainer = document.getElementById('joke-container')
  jokeContainer.innerHTML = `<p class="joke-text">${data.value}</p>`
}


let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure

    try {
      let data = await fetch('https://api.chucknorris.io/jokes/random')
      let result = await data.json();
      //console.log(result.value);
      setJokes(result);
      return result;
    
    } 
    catch (error) {
      return "something went wrong"
    }
};


let getJokeByCategory = async (category) => {
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure

  try {
    console.log(category)
    let data = await fetch(`https://api.chucknorris.io/jokes/random?category=animal`)
    let result = await data.json();
    console.log(result);
    setJokes(result);
    return result;

  } 
    catch (error) {
    return "something went wrong"
  }
};



window.onload = function () {
  // add click event to button
  // add change event to select tag
  let jokeBtn = document.getElementById('get-jokes-data')
  jokeBtn.addEventListener('click', async()=>{
    getRandomJoke()
  })

  
  
  let optionValue = document.getElementById('get-category')
    optionValue.addEventListener('change',async()=>{  
      const category = optionValue.value  
      getJokeByCategory(category);
  })

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
