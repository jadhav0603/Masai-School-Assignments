function Listing(name, category, imageUrl, price) {
  this.name = name
  this.category = category
  this.imageUrl = imageUrl
  this.price = price
  this.sold = false
}

function getFormData() {
  let name =  document.getElementById("name").value
  let cat = document.getElementById("category").value
  let imageUrl = document.getElementById("image").value
  let price =  document.getElementById("price").value

  addListing(name, cat, imageUrl, price)

}

let productarr = JSON.parse(localStorage.getItem("Products")) || [];

function addListing(input, category, image, price) {
  let listobj = new Listing(input,category, image, price);
  productarr.push(listobj)

  localStorage.setItem("Products", JSON.stringify(productarr));
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  document.getElementById("form").addEventListener("submit", function(event){
      event.preventDefault()
      getFormData();
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
