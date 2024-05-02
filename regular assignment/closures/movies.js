 let searchBar = document.getElementById("searchBar");
    let moviesArr = [];
    document.getElementById("searchBtn").addEventListener("click", async () => {
      moviesArr = await getData();

      displayData();
    });

    async function getData() {
      try {
        let data = await fetch(
          `http://www.omdbapi.com/?apikey=764440e4&s=${searchBar.value}`
        );
        let result = await data.json();
        console.log(result);
        return result;
      } catch (error) {
        alert(error);
        main.innerHTML = "Error: 404, Not Found";
      }
    }

    function displayData() {
      const main = document.getElementById("main");
      main.innerHTML = "";
      console.log(moviesArr.Search);

      moviesArr.Search.forEach((ele) => {
        let div = document.createElement("div");
        div.innerHTML = `
                <img src=${ele.Poster}>
                <h3>${ele.Title} <h3>
                <h5>Year : ${ele.Year} </h5>
                <h5>Type : ${ele.Type} </h5>
            `;
        main.append(div);
      });
    }