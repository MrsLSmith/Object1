var superheroes = [{
  Name: "Incredible Hulk",
  Color: "Green",
  Superpower: "Strength"
}, {
  Name: "Superman",
  Color: "Blue",
  Superpower: "Flying"
}, {
  Name: "Hawkeye",
  Color: "Purple",
  Superpower: "Archery"
}]; 

function List() {
  var HeroName = "";  
  for(i=0; i<superheroes.length; i+=1) {
    HeroName +="<p>" + superheroes[i].Name +"</p>";

    
    
  }

  var output = document.getElementById ("HeroList");
  
  output.innerHTML = HeroName;
  
}