function Artist(name, skill, profession) {
    this.name = name
    this.skill = skill
    this.profession = profession
}
Artist.prototype.getProfession = function(){
    return this.profession;
}

Artist.prototype.print = function(){
    return `I am ${this.name}`
}


// Remove the empty assigned objects and  work on them..
//  create the below object from the above constructor function and pass the follwing values "Rahul Dravid","Cricket","Cricketer"
//var artists={};
let artists = new Artist("Rahul Dravid","Cricket","Cricketer")


//create the below object from the above artists objects as per the problem statement
let artistsObject = Object.create(artists);

// Do not change this
export { Artist, artistsObject };
